// Nota: Para iniciar o servidor: abrir a pasta src no terminal e rodar o comando npm run dev

const express = require('express') // O express permite que não seja necessário reiniciar a aplicação à cada alteração feita
const app = express();
const cors = require('cors');   // O cors serve para que seja feita a vinculação com o front
const mongoose = require('mongoose') // O mongoose é usado para fazer a conexão no banco de dados
const Usuario = require('./models/usuario')

const path = require('path')
const hbs = require('hbs')
const { collection } = require('./models/usuario')
const templatePath = path.join(__dirname, '../templates')

// Conectando ao banco
mongoose.connect('mongodb+srv://admin:Pi12345678@postodb.ydykkyz.mongodb.net/Postodb?retryWrites=true&w=majority').then(() => {
    console.log(`Conectado ao MongoDB`)
    // Iniciando o Node
    app.listen(3000, () => {
        console.log(`Rodando na porta 3000`)
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

//rotas
app.get('/', (req, res) => {
//    res.send('Rota Inicial')
    res.render('login')
})

app.get('/cadastro', (req, res) => {
        res.render('cadastro')
    })

// login
app.post("/login", async(req,res) => {
    try{
        const check = await collection.findOne({nome:req.body.nome})

        if(check.senha===req.body.senha){
            res.render('home')
        }else{
            res.send('Senha Incorreta')
        }
    } catch(error){
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

// crud usuário
// salva
app.post('/usuario', async(req, res) => {
    try {
        const usuario = await Usuario.create(req.body)
        res.status(200).json(usuario)
    } catch (error){
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

// busca todos
app.get('/usuario', async(req, res) => {
    try {
        const usuario = await Usuario.find({})
        res.status(200).json(usuario)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// busca apenas um
app.get('/usuario/:id', async(req, res) => {
    try {
        const {id} = req.params
        const usuario = await Usuario.findById(id)
        res.status(200).json(usuario)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// update
app.put('/usuario/:id', async(req, res) => {
    try {
        const {id} = req.params
        const usuario = await Usuario.findByIdAndUpdate(id, req.body)

        // se não encontrou um id correspondente
        if(!usuario){
            return res.status(404).json({message: `Usuário não encontrado`})
        }

        // se encontrou
        const usuarioAtualizado = await Usuario.findById(id)
        res.status(200).json(usuarioAtualizado)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// delete
app.delete('/usuario/:id', async(req, res) => {
    try {
        const {id} = req.params
        const usuario = await Usuario.findByIdAndDelete(id)

        // se não encontrou um id correspondente
        if(!usuario){
            return res.status(404).json({message: `Usuário não encontrado`})
        }
        
        // se encontrou
        res.status(200).json(usuario)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
