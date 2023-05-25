const Usuario = require('../models/usuario')
const controller = {}

controller.create = async (req, res) => {
    try {
        const usuarioExistente = await Usuario.findOne({ email: req.body.email });
        if (usuarioExistente) {
            return res.status(400).json({ message: 'Já existe um usuário com esse email' });
        }
        const usuario = await Usuario.create(req.body);
        res.status(200).json(usuario);
    }
    catch(error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

controller.retrieveAll = async (req, res) => {
    try {
        const usuario = await Usuario.find({})
        res.status(200).json(usuario)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
  
controller.retrieveOne = async(req, res) => {
    try {
        const {id} = req.params
        const usuario = await Usuario.findById(id)
        res.status(200).json(usuario)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

controller.update = async (req, res) => {
    try {
        const {id} = req.params
        const usuario = await Usuario.findByIdAndUpdate(id, req.body)

        // se não encontrou um id correspondente
        if(!usuario){
            return res.status(404).json({message: `Usuário não encontrado`})
        }

        // se encontrou
        const usuarioAtualizado = await Usuario.findById(id)
        res.status(200).json(usuarioAtualizado)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

controller.delete = async (req, res) => {
    try {
        const {id} = req.params
        const usuario = await Usuario.findByIdAndDelete(id)

        // se não encontrou um id correspondente
        if(!usuario){
            return res.status(404).json({message: `Usuário não encontrado`})
        }
        
        // se encontrou
        res.status(200).json(usuario)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

controller.deleteAll = async (req, res) => {
    try {
        await Usuario.deleteMany({}) // Exclui todos os documentos da coleção "Usuario"

        res.status(200).json({ message: "Todos os usuários foram excluídos com sucesso" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


module.exports = controller
