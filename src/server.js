// Nota: Para iniciar o servidor: abrir a pasta src no terminal e rodar o comando npm run dev
const express  = require('express')  // O express permite que não seja necessário reiniciar a aplicação à cada alteração feita
const app      = express();
const cors     = require('cors');    // O cors serve para que seja feita a vinculação com o front
const mongoose = require('mongoose') // O mongoose é usado para fazer a conexão no banco de dados
const Usuario  = require('./models/usuario')
const jwt = require('jsonwebtoken')

const path = require('path')
const hbs  = require('hbs')
const { collection } = require('./models/usuario')
const { calcularAbastecimento } = require('./controllers/combustivel');


const templatePath   = path.join(__dirname, '../templates')

// Conectando ao banco
mongoose.connect('mongodb+srv://admin:Pi12345678@postodb.ydykkyz.mongodb.net/Postodb?retryWrites=true&w=majority').then(() => {
    console.log(`Conectado ao MongoDB`)
    // Iniciando o Node
    app.listen(3001, () => {    // Trocado pois o react também roda na porta 3000
        console.log(`Rodando na porta 3001`)
    })
}).catch((error) => { // Se o mongoose não conseguir fazer o login no banco, dispara o erro
    console.log(error)
})

app.use(express.json())
app.set('view engine', 'hbs')
app.set("views", templatePath)
app.use(express.urlencoded({extended:false}))
app.use(cors({
    credentials: true,          //access-control-allow-credentials:true
    optionSuccessStatus: 200
}));

/* ********
    ROTAS
   ******** 
*/ 

// pagina login
app.get('/', (req, res) => {
    res.render('login')
})

app.get('/cadastro', (req, res) => {
        res.render('cadastro')
    })

app.get('/adicionar-pontos', (req, res) => {
        res.render('pontos')
    })


function generateToken(userId) {
  const token = jwt.sign({ userId }, 'segredo', { expiresIn: '1d' })
  return token
}

// login
app.post("/login", async (req, res) => {
    try {
        const check = await collection.findOne({ email: req.body.email })

        if (check.senha === req.body.senha) {
            // Gera um token de autenticação
            const token = generateToken(check._id)

            // Armazena o token em um cookie
            res.cookie("authToken", token, { httpOnly: true })

            // Armazena o token no banco de dados do usuário
            await collection.updateOne(
                { _id: check._id },
                { $set: { authToken: token } }
            )

            res.render('home')
        } else {
            res.send('Senha Incorreta')
        }
    } catch (error) {
        res.send('Login inválido')
    }
})

app.post('/cadastro', async(req, res) => {
    try{
        const usuario = {
            nome: req.body.nome,
            senha: req.body.senha
        }
        await Usuario.create(req.body)
        res.render("home")
    } catch (error){
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

//CRUDs
// Usuarios
const usuarioRouter = require('./routes/usuario')
app.use('/usuario', usuarioRouter)

// Produtos
const produtoRouter = require('./routes/produto')
app.use('/produto', produtoRouter)

// Combustíveis
const combustivelRouter = require('./routes/combustivel')
app.use('/combustivel', combustivelRouter)

// Abastecimentos
const abastecimentoRouter = require('./routes/abastecimento')
app.use('/abastecimento', abastecimentoRouter)



// rota para adicionar pontos
app.post('/adicionar-pontos', async (req, res) => {
  const { cpf, pontos } = req.body;

  try {

    const usuario = await Usuario.findOne({ cpf });
    console.log(pontos)
    usuario.pontos += parseInt(pontos);
    await usuario.save();

    return res.status(200).json({ message: 'Pontos adicionados com sucesso.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao adicionar pontos.' });
  }
});

app.post('/adicionar-abastecimento', async (req, res) => {
    const { tipoCombustivel, qtdLitros } = req.body;
  
    try {
      const { valorTotal, pontosGerados } = await calcularAbastecimento(tipoCombustivel, qtdLitros);
  
      const abastecimento = new Abastecimento({
        id_combustivel: tipoCombustivel,
        qtd_litros: qtdLitros,
        vlr_total: valorTotal,
        id_frentista: req.usuario._id,
        id_cliente: req.body.id_cliente,
        qtd_pontos_gerados: pontosGerados
      });
  
      await abastecimento.save();
  
      return res.status(200).json({ message: 'Abastecimento registrado com sucesso.' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erro ao registrar abastecimento.' });
    }
  });
  
  
  