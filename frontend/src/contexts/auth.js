import React, { createContext, useEffect, useState } from 'react';
import api from '../api';


export const AuthContext = createContext({});


export function AuthProvider({ children }) {

  const [user, setUser] = useState('');


  useEffect(() => {
    // Toda vez que inicializar, verificar se há usuário logado
    const userToken = localStorage.getItem('user_token');

    if (userToken) {
      api.get('/usuario')
        .then(res => res.data.find(u => u.email === userToken.email))
        .then(u => setUser(u))
        .catch(err => console.log(err));
    }
  }, []);


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


  async function signout() {
    // deslogar
    setUser(null);
    localStorage.removeItem('user_token');
  }


  return (
    <AuthContext.Provider
      value={{ user, logado: !!user, registrar, login, signout }}
    >
      { children }
    </AuthContext.Provider>
  );

}

