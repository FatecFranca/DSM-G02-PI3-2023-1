import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import * as C from './styles';

import Input from '../../components/Input';
import InputMask from '../../components/InputMask';
import Button from '../../components/Button';


function Register() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmar, setConfirmar] = useState('');
  const [erro, setErro] = useState('');

  function handleRegistrar() {
    if (!nome || !email || !cpf || !senha || !confirmar) {
      setErro('Preencha todos os campos!');
      return;
    }

    setErro('Não funciona por enquanto');
  }

  return (
    <C.RegisterContainer>
      <C.Title>Vamos começar?</C.Title>

      <C.FormContainer>
      <Input
          type='text'
          placeholder='Nome'
          value={nome}
          onChange={e => [setNome(e.target.value), setErro('')]}
        />
        <Input
          type='email'
          placeholder='exemplo@email.com'
          value={email}
          onChange={e => [setEmail(e.target.value), setErro('')]}
        />
        <InputMask
          mask='999.999.999-99'
          placeholder='CPF'
          value={cpf}
          onChange={e => [setCpf(e.target.value), setErro('')]}
        />
        <Input
          type='password'
          placeholder='Senha'
          value={senha}
          onChange={e => [setSenha(e.target.value), setErro('')]}
        />
        <Input
          type='password'
          placeholder='Confirmar senha'
          value={confirmar}
          onChange={e => [setConfirmar(e.target.value), setErro('')]}
        />
        <C.ErrorLabel>{erro}</C.ErrorLabel>
        <C.LoginSpan>Já possui conta?
          <Link to='/login'>
            &nbsp;Entrar
          </Link>
        </C.LoginSpan>
        <Button
          Text='Cadastrar'
          onClick={handleRegistrar}
        />
      </C.FormContainer>
    </C.RegisterContainer>
  );

}


export default Register;
