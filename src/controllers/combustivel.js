const Combustivel = require('../models/combustivel')
const controller = {}

controller.create = async (req, res) => {
    try {
        const combustivel = await Combustivel.create(req.body);
        res.status(200).json(combustivel);
    }
    catch(error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

controller.retrieveAll = async (req, res) => {
    try {
        const combustivel = await Combustivel.find({})
        res.status(200).json(combustivel)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

controller.retrieveOne = async(req, res) => {
    try {
        const {id} = req.params
        const combustivel = await Combustivel.findById(id)
        res.status(200).json(combustivel)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

controller.update = async (req, res) => {
    try {
        const {id} = req.params
        const combustivel = await Combustivel.findByIdAndUpdate(id, req.body)

        // se não encontrou um id correspondente
        if(!combustivel){
            return res.status(404).json({message: `Combustível não encontrado`})
        }

        // se encontrou
        const combustivelAtualizado = await Combustivel.findById(id)
        res.status(200).json(combustivelAtualizado)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

controller.delete = async (req, res) => {
    try {
        const {id} = req.params
        const combustivel = await Combustivel.findByIdAndDelete(id)

        // se não encontrou um id correspondente
        if(!combustivel){
            return res.status(404).json({message: `Combustível não encontrado`})
        }
        
        // se encontrou
        res.status(200).json(combustivel)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const calcularAbastecimento = async (tipoCombustivel, qtdLitros) => {
    const combustivel = await Combustivel.findOne({ tipo_combustivel: tipoCombustivel });
  
    const valorTotal = combustivel.vlr_litro * qtdLitros;
    const pontosGerados = valorTotal * combustivel.pts_real_abastecido;
  
    return { valorTotal, pontosGerados };
  }
  

module.exports = controller
