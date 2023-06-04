import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as C from './styles';

import useAuth from '../../hooks/useAuth';
import Input from '../../components/Input';
import InputMask from '../../components/InputMask';
import Button from '../../components/Button';

function Register() {
  const { registrar } = useAuth();
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmar, setConfirmar] = useState('');
  const [erro, setErro] = useState('');

  async function handleRegistrar() {
    if (!nome || !email || !cpf || !senha || !confirmar) {
      setErro('Preencha todos os campos!');
      return;
    }

    const numerosCpf = cpf.replace(/[.-]/g, '');
    if (isNaN(+numerosCpf)) {
      setErro('Preencha o CPF corretamente!');
      return;
    }

    if (senha !== confirmar) {
      setErro('Digite as senhas corretamente!');
      return;
    }

    const res = await registrar(nome, numerosCpf, email, senha);

    if (res) {
      setErro(res);
      return;
    }

    navigate('/login');
  }

  return (
    <C.RegisterContainer>
      <C.Title>Vamos começar?</C.Title>

      <C.FormContainer>
        <C.InputBox>
          <C.Label>Nome:</C.Label>
          <C.Input
            type='text'
            placeholder='Nome'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </C.InputBox>
        <C.InputBox>
          <C.Label>Email:</C.Label>
          <C.Input
            type='email'
            placeholder='exemplo@email.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </C.InputBox>
        <C.InputBox>
          <C.Label>CPF:</C.Label>
          <C.Input
            type='text'
            placeholder='CPF'
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </C.InputBox>
        <C.InputBox>
          <C.Label>Senha:</C.Label>
          <C.Input
            type='password'
            placeholder='Senha'
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </C.InputBox>
        <C.InputBox>
          <C.Label>Confirmar Senha:</C.Label>
          <C.Input
            type='password'
            placeholder='Confirmar senha'
            value={confirmar}
            onChange={(e) => setConfirmar(e.target.value)}
          />
        </C.InputBox>
        <C.ErrorLabel>{erro}</C.ErrorLabel>
        <C.ButtonContainer>
          <Button Text='Cadastrar' onClick={handleRegistrar} />
        </C.ButtonContainer>
        <C.LoginSpan>
          Já possui conta?
          <Link to='/login'>&nbsp;Entrar</Link>
        </C.LoginSpan>
      </C.FormContainer>
    </C.RegisterContainer>
  );
}

export default Register;
