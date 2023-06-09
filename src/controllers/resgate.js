const Produto = require('../models/produto');
const Usuario = require('../models/usuario');

async function create(req, res) {
  try {
    const { usuarioId, produtoId } = req.body;

    const usuario = await Usuario.findById(usuarioId);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    const produto = await Produto.findById(produtoId);
    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    if (usuario.pontos < produto.valor) {
      return res.status(400).json({ message: 'Pontos insuficientes para resgatar o produto' });
    }

    usuario.pontos -= produto.valor;
    produto.quantidade--;

    usuario.produtos_resgatados.push({ produto: produtoId });

    await usuario.save();
    await produto.save();

    res.json({ message: 'Produto resgatado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao resgatar o produto' });
  }
}

module.exports = {create};
