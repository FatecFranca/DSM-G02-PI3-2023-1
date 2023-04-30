const Abastecimento = require('../models/abastecimento')
const controller = {}

controller.create = async (req, res) => {
    try {
        const abastecimento = await Abastecimento.create(req.body);
        res.status(200).json(abastecimento);
    }
    catch(error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

controller.retrieveAll = async (req, res) => {
    try {
        const abastecimento = await Abastecimento.find({})
        res.status(200).json(abastecimento)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

controller.retrieveOne = async(req, res) => {
    try {
        const {id} = req.params
        const abastecimento = await Abastecimento.findById(id)
        res.status(200).json(abastecimento)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = controller
