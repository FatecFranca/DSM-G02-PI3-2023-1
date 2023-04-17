const mongoose = require('mongoose')

const usuarioSchema = mongoose.Schema(
    {
        nome: {
            type: String,
            required: [true, "Informe um nome"]
        },
        sobrenome: {
            type: String,
            required: [false]
        },
        email: {
            type: String, 
            required: [true, "Informe um email"]
        },
        senha: {
            type: String,
            required: [true, "Informe uma senha"]
        },
        /*tipos_usuarios: [
            {
                descricao: type: String,
                required: [true],
            }
        ]*/
        tipo: {
            type: String,
            required: [true],
            default: "P"
        }
    },
    {
        timestamps: true
    }
)

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
