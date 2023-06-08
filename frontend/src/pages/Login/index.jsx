import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as C from './styles';

import useAuth from '../../hooks/useAuth';
import Input from '../../components/Input';
import Button from '../../components/Button';

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

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

    navigate('/');
  }

  return (
    <C.LoginContainer>
      <C.Title>Faça seu Login!</C.Title>

      <C.FormContainer>
        {/* <C.InputBox> */}
          <Input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => [setEmail(e.target.value), setErro('')]}
          />
        {/* </C.InputBox>
        <C.InputBox> */}
          <Input
            type='password'
            placeholder='Senha'
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setErro('')]}
          />
        {/* </C.InputBox> */}
        <C.ErrorLabel>{erro}</C.ErrorLabel>
        <C.ButtonContainer>
          <Button Text='Entrar' onClick={handleLogin} />
        </C.ButtonContainer>
        <C.RegisterSpan>
          Não tem conta?
          <Link to='/registrar'>&nbsp;Registrar-se</Link>
        </C.RegisterSpan>
      </C.FormContainer>
    </C.LoginContainer>
  );
}

export default Login;
