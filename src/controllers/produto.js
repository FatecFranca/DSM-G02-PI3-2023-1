const Produto = require('../models/produto')
const controller = {}

controller.create = async (req, res) => {
    try {
        const produto = await Produto.create(req.body);
        res.status(200).json(produto);
    }
    catch(error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

controller.retrieveAll = async (req, res) => {
    try {
        const produto = await Produto.find({})
        res.status(200).json(produto)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
  
controller.retrieveOne = async(req, res) => {
    try {
        const {id} = req.params
        const produto = await Produto.findById(id)
        res.status(200).json(produto)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

controller.update = async (req, res) => {
    try {
        const {id} = req.params
        const produto = await Produto.findByIdAndUpdate(id, req.body)

        // se não encontrou um id correspondente
        if(!produto){
            return res.status(404).json({message: `Produto não encontrado`})
        }

        // se encontrou
        const produtoAtualizado = await Produto.findById(id)
        res.status(200).json(produtoAtualizado)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

controller.delete = async (req, res) => {
    try {
        const {id} = req.params
        const produto = await Produto.findByIdAndDelete(id)

        // se não encontrou um id correspondente
        if(!produto){
            return res.status(404).json({message: `Produto não encontrado`})
        }
        
        // se encontrou
        res.status(200).json(produto)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

controller.deleteAll = async (req, res) => {
    try {
      await Produto.deleteMany({});
  
      res.status(200).json({ message: "Todos os produtos foram excluídos com sucesso" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

module.exports = controller
