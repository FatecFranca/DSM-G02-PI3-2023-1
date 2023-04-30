const mongoose = require('mongoose')

const combustivelSchema = mongoose.Schema(
    {
        descricao: {
            type: String,
            required: [true, "Informe o combustível"]
        },
        vlr_litro: {
            type: Number,
            required: [true, "Informe o valor"]
        },
        pts_real_abastecido: {
            type: Number,
            required: [true, "Informe quantos pontos serão gerados por REAIS abastecidos"]
        }
    },
    {
        timestamps: true
    }
)

const Combustivel = mongoose.model('Combustivel', combustivelSchema);

module.exports = Combustivel;
