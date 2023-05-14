const mongoose = require('mongoose')

const usuarioSchema = mongoose.Schema(
    {
        nome: {
            type: String,
            required: [true, "Informe um nome"]
        },
        cpf: {
            type: String,
            required: [true]
        },
        email: {
            type: String, 
            required: [true, "Informe um email"],
            unique: true
        },
        senha: {
            type: String,
            required: [true, "Informe uma senha"]
        },
        pontos: {
            type: Number,
            default: 0,
        },
        produtos_resgatados:[{
            produto: {
                type: mongoose.ObjectId,
                ref: 'produto'
            }
        }]
    },
    {
        timestamps: true,
    }
)

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
