import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as C from './styles';

import useAuth from '../../hooks/useAuth';
import Input from '../../components/Input';
import Button from '../../components/Button';


function Login() {

  const { login } = useAuth();

  // States para o login
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  async function handleLogin() {
    if (!email || !senha) {
      setErro('Preencha todos os campos');
      return;
    }

    const res = await login(email, senha);

    if (res) {
      setErro(res);
      return;
    }
  }

  return (
    <C.LoginContainer>
      <C.Title>Faça seu Login!</C.Title>

      <C.FormContainer>
      <Input
          type='email'
          placeholder='Email'
          value={email}
          onChange={e => [setEmail(e.target.value), setErro('')]}
        />
        <Input
          type='password'
          placeholder='*****'
          value={senha}
          onChange={e => [setSenha(e.target.value), setErro('')]}
        />
        <C.ErrorLabel>{erro}</C.ErrorLabel>
        <C.RegisterSpan>Não tem conta?
          <Link to='/registrar'>
            &nbsp;Registar-se
          </Link>
        </C.RegisterSpan>
        <Button
          Text='Entrar'
          onClick={handleLogin}
        />
      </C.FormContainer>
    </C.LoginContainer>
  );

}


export default Login;
