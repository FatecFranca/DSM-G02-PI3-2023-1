import React, { createContext, useEffect, useState } from 'react';
import api from '../api';


export const AuthContext = createContext({});


export function AuthProvider({ children }) {

  const [user, setUser] = useState('');

  useEffect(() => {
    // Toda vez que inicializar, verificar se há usuário logado
    const userToken = JSON.parse(localStorage.getItem('user_token'));

    if (userToken) {
      api.get('/usuario')
        .then(res => res.data.find(u => u.email === userToken.email))
        .then(u => setUser(u))
        .catch(err => console.log(err));
    }
  }, []);

  /*          USUÁRIO           */

  async function registrar(nome, cpf, email, senha, tipo='usuario') {
    // Verifica se já há esse email cadastrado
    const hasUser = await api.get('/usuario')
      .then(res => res.data.some(u => u.email === email))
      .catch(err => console.log(err));

    if (hasUser) return 'Já há usuário com esse Email cadastrado';

    // Cadastra o novo usuário
    await api.post('/usuario', {
      nome: nome,
      cpf: cpf,
      email: email,
      senha: senha,
      pontos: 0,
      tipo: tipo
    }).then(res => {
      // Gera um token e coloca no localstorage
      const token = Math.random().toString(36).substring(2);
      const Email = res.data.email;
      localStorage.setItem('user_token', JSON.stringify({ Email, token }));
      // Cadastro do usuário completo
      setUser(res.data);
    }).catch(err => console.log(err));

    return;
  }

  async function login(email, senha) {
    // Pega todos os usuário
    const hasUser = await api.get('/usuario')
      .then(res => res.data.find(u => u.email === email && u.senha === senha))
      .catch(err => console.log(err));

    if (hasUser) {
      // Verifica se exite usuário e coloca no localstorage  
      const token = Math.random().toString(36).substring(2);
      localStorage.setItem('user_token', JSON.stringify({ email, token }))
      setUser(hasUser);
    } else {
      return 'Email ou senha incorreto!';
    }
  }

  async function updateProfile(id, nome, email, cpf, senha) {
    await api.put(`/usuario/${id}`, {
      nome: nome,
      cpf: cpf,
      email: email,
      senha: senha
    }).then(async res => {
      alert('Cadastro atualizado com sucesso!');
      const token = Math.random().toString(36).substring(2);
      const Email = res.data.email;
      localStorage.setItem('user_token', JSON.stringify({ email: Email, token }))
      setUser(await res.data);
    }).catch(err => {
      alert('Algo de errado ao atualizar o cadastro aconteceu!');
      console.log(err);
    });
  }

  async function signout() {
    // deslogar
    setUser(null);
    localStorage.removeItem('user_token');
  }


  /*          COMBUSTIVEL           */

  async function getCombustiveis() {
    const hasCombustiveis = await api.get('/combustivel')
      .then(res => res.data)
      .catch(err => console.log(err));

    return hasCombustiveis;
  }


  /*          ABASTECIMENTO            */

  async function abastecer(clienteCpf, litros, combustivelId, frentistaId) {
    if (!combustivelId) return 'Selecione o combutivel corretamente!';

    const cliente = await api.get('/usuario', { params: { cpf: clienteCpf}})
      .then(res => res.data[0])
      .catch(err => console.log(err));

    if (!cliente) return 'Não há cliente cadastrado com esse CPF!';

    const combustivel = await api.get(`/combustivel/${combustivelId}`)
      .then(res => res.data)
      .catch(err => console.log(err));

    const valorTotal = +(+litros * +combustivel.vlr_litro).toFixed(2);
    const pontosTotal = +(+litros * +combustivel.pts_real_abastecido).toFixed(2);

    cliente.pontos += pontosTotal

    await api.put(`usuario/${cliente._id}`, cliente)
      .catch(err => console.log(err))

    return await api.post('/abastecimento', {
      id_combustivel: combustivelId,
      qtd_litros: litros,
      vlr_total: valorTotal,
      id_frentista: frentistaId,
      id_cliente: cliente._id,
      qtd_pontos_gerados: pontosTotal
    }).then((res) => res.data).catch(err => console.log(err));

  }

  async function calcularPontos (litros, combustivelId) {

    const combustivel = await api.get(`/combustivel/${combustivelId}`)
      .then(res => res.data)
      .catch(err => console.log(err));

    const pontosTotal = +(+litros * +combustivel.pts_real_abastecido).toFixed(2);  

    return pontosTotal

  }

  async function getAbastecimentos(clienteId) {
    const hasAbastecimento = await api.get('/abastecimento')
      .then(res => res.data.filter(a => a.id_cliente === clienteId))
      .catch(err => console.log(err));
    
    return hasAbastecimento;
  }

  /*      PRODUTOS      */ 

  async function cadastrarProduto(nome, descricao, quantidade, valor, imagem) {

    return await api.post('/produto', {
      nome: nome,
      descricao: descricao,
      quantidade: quantidade,
      valor: valor,
      imagem: imagem
    }).then((res) => res.data).catch(err => console.log(err))

  }

  return (
    <AuthContext.Provider
      value={{
        user, logado: !!user, registrar, login, signout, updateProfile,
        getCombustiveis, abastecer, getAbastecimentos, calcularPontos, cadastrarProduto
      }}
    >
      { children }
    </AuthContext.Provider>
  );

}

