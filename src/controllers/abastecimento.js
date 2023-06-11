const Abastecimento = require('../models/abastecimento')
const controller = {}

controller.create = async (req, res) => {
    try {
      const abastecimento = await Abastecimento.create(req.body);
      res.status(200).json(abastecimento);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  };
  
  controller.retrieveAll = async (req, res) => {
    try {
      const abastecimentos = await Abastecimento.find({});
      //const abastecimentoList = abastecimentos.map((abastecimento) => abastecimento.abastecimento);
      res.status(200).json(abastecimentos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  controller.retrieveOne = async (req, res) => {
    try {
      const { id } = req.params;
      const abastecimento = await Abastecimento.findById(id);
      res.status(200).json(abastecimento.abastecimento);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  controller.retrieveByCliente = async (req, res) => {
    try {
      const { clienteId } = req.params;
      const abastecimentos = await Abastecimento.find({ clienteId });
      res.status(200).json(abastecimentos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  controller.deleteAll = async (req, res) => {
    try {
      await Abastecimento.deleteMany({});
  
      res.status(200).json({ message: "Todos os abastecimentos foram excluídos com sucesso" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

module.exports = controller
