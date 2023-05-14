const mongoose = require('mongoose')

const combustivelSchema = mongoose.Schema(
    {
        tipo_combustivel: {
            type: String,
            default: 'usuario',
            required: true
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
