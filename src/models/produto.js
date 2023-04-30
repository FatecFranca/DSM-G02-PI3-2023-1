const mongoose = require('mongoose')

const produtoSchema = mongoose.Schema(
    {
        nome: {
            type: String,
            required: [true, "Informe um nome"]
        },
        descricao: {
            type: String,
            required: [true, "Informe a descrição"]
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
        imagem: {
            data: Buffer,
            contentType: String
        }
    },
    {
        timestamps: true
    }
)

const Produto = mongoose.model('Produto', produtoSchema);

module.exports = Produto;
