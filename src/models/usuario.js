const mongoose = require('mongoose')

const usuarioSchema = mongoose.Schema(
    {
        nome: {
            type: String,
            required: [true, "Informe um nome"]
        },
        senha: {
            type: String,
            required: [true, "Informe uma senha"]
        },
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
