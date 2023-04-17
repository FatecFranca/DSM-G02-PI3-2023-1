const mongoose = require('mongoose')

const tiposSchema = mongoose.Schema(
    {
        descricao: {
            type: String,
            required: [true, "Informe a descrição"]
        }
    },
    {
        timestamps: true
    }
)

const TiposUsr = mongoose.model('TiposUsr', tiposSchema);

module.exports = TiposUsr;
