const express = require('express');
const router = express.Router();
const Produto = require('../models/produto');
const Usuario = require('../models/usuario');

router.post('/',async (req, res) => {
  try {
    const { usuarioId, produtoId } = req.body;

    // Verificar se o usuário existe
    const usuario = await Usuario.findById(usuarioId);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    // Verificar se o produto existe
    const produto = await Produto.findById(produtoId);
    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    // Verificar se o usuário tem pontos suficientes
    if (usuario.pontos < produto.valor) {
      return res.status(400).json({ message: 'Pontos insuficientes para resgatar o produto' });
    }

    // Atualizar os pontos do usuário e a quantidade do produto
    usuario.pontos -= produto.valor;
    produto.quantidade--;

    // Adicionar o produto aos produtos_resgatados do usuário
    usuario.produtos_resgatados.push({ produto: produtoId });

    // Salvar as alterações no banco de dados
    await usuario.save();
    await produto.save();

    res.json({ message: 'Produto resgatado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao resgatar o produto' });
  }
});

module.exports = router;