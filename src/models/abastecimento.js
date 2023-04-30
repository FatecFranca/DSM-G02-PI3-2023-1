const mongoose = require('mongoose')

const abastecimentoSchema = mongoose.Schema(
    {
        id_combustivel: {
            type: String,
            required: [true, "Informe o combustível"]
        },
        qtd_litros: {
            type: Number,
            required: [true, "Informe os litros abastecidos"]
        },
        vlr_total: {
            type: Number,
            required: [true, "Informe o valor total do abastecimento"]
        },
        id_frentista: {
            type: Number,
            required: [true, "Informe o frentista responsável"]
        },
        id_cliente: {
            type: Number,
            required: [true, "Informe o cliente"]
        },
        qtd_pontos_gerados: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
)

const Abastecimento = mongoose.model('Abastecimento', abastecimentoSchema);

module.exports = Abastecimento;
