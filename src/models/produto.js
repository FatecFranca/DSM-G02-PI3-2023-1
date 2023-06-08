const mongoose = require('mongoose')

const produtoSchema = mongoose.Schema(
    {
        nome: {
            type: String,
            required: [true, "Informe um nome"]
        },
        descricao: {
            type: String
        },
        valor: {
            type: Number,
            required: [true, "Informe o valor"]
        },
        quantidade: {
            type: Number,
            required: [true, "Informe a quantidade"],
            default: 0
        },
        imagem:{
            type: String
        }
    },
    {
        timestamps: true
    }
)

const Produto = mongoose.model('Produto', produtoSchema);

module.exports = Produto;
