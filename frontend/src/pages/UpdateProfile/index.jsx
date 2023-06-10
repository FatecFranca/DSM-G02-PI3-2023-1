import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as C from './styles';

import useAuth from '../../hooks/useAuth';
import Input from '../../components/Input';
import Header from '../../components/Header';

function UpdateProfile() {
  const { updateProfile, user } = useAuth();
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmar, setConfirmar] = useState('');
  const [erro, setErro] = useState('');

  useEffect(() => {
    if (!user) {
      alert('Não foi possível entrar na tela de perfil sem estar logado!');
      navigate('/login');
    }
    const fetchUserData = async () => {
      try {
        setNome(user.nome);
        setEmail(user.email);
        setCpf(user.cpf);
      } catch (error) {
        // Tratar erro caso não seja possível obter os dados do usuário
      }
    };

    fetchUserData();
  }, [user, navigate]);

  async function handleUpdateProfile() {
    if (!nome || !email || !cpf) {
      setErro('Preencha todos os campos obrigatórios!');
      return;
    }

    if (senha !== confirmar) {
      setErro('Digite as senhas corretamente!');
      return;
    } else {
      if (senha !== user.senha) {
        setErro('Senha do usuário incorreta!');
        return;
      }
    }

    try {
      await updateProfile(user.id, nome, email, cpf, senha);

      navigate('/dashboard');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <C.RegisterContainer>
      <Header />
      <C.Title>Atualizar Perfil</C.Title>

      <C.FormContainer>
        {/* <C.InputBox> */}
          <C.Label>Nome:</C.Label>
          <Input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => [setNome(e.target.value), setErro('')]}
          />
        {/* </C.InputBox>
        <C.InputBox> */}
          <C.Label>Email:</C.Label>
          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setErro('')]}
          />
        {/* </C.InputBox>
        <C.InputBox> */}
          <C.Label>CPF:</C.Label>
          <Input
            type="text"
            placeholder="CPF"
            value={cpf}
            onChange={(e) => [setCpf(e.target.value), setErro('')]}
          />
        {/* </C.InputBox>
        <C.InputBox> */}
          <C.Label>Senha:</C.Label>
          <Input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setErro('')]}
          />
        {/* </C.InputBox>
        <C.InputBox> */}
          <C.Label>Confirmar Senha:</C.Label>
          <Input
            type="password"
            placeholder="Confirmar senha"
            value={confirmar}
            onChange={(e) => [setConfirmar(e.target.value), setErro('')]}
          />
        {/* </C.InputBox> */}
        <C.ErrorLabel>{erro}</C.ErrorLabel>
        
        <C.Button onClick={handleUpdateProfile}>Atualizar</C.Button>
        
        <C.BackButton to="/">Voltar</C.BackButton>
      </C.FormContainer>

    </C.RegisterContainer>
  );
}

export default UpdateProfile;
