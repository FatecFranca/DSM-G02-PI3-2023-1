import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';

import useAuth from '../../hooks/useAuth';
import Input from '../../components/Input';
import Button from '../../components/Button';

const UpdateProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3em;
`;

const Title = styled.h2`
  margin-top: 2vh;
  margin-bottom: 6vh;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

const ErrorLabel = styled.span`
  margin: 8px;
  color: red;
  font-size: large;
  font-weight: 500;
  font-style: italic;
`;

const BackButton = styled(Link)`
  margin-top: 2em;
  text-decoration: none;
  color: #333;
`;

function UpdateProfile() {
  const { getUserData, updateProfile } = useAuth();
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmar, setConfirmar] = useState('');
  const [erro, setErro] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getUserData();
        setNome(userData.nome);
        setEmail(userData.email);
        setCpf(userData.cpf);
      } catch (error) {
        // Tratar erro caso não seja possível obter os dados do usuário
      }
    };

    fetchUserData();
  }, []);

  async function handleUpdateProfile() {
    if (!nome || !email || !cpf) {
      setErro('Preencha todos os campos obrigatórios!');
      return;
    }

    if (senha !== confirmar) {
      setErro('Digite as senhas corretamente!');
      return;
    }

    try {
      await updateProfile({ nome, email, cpf, senha });
      await fetch('/usuarios', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, email, cpf, senha }),
      });
      navigate('/dashboard');
    } catch (error) {
      // Tratar erro caso não seja possível atualizar os dados do usuário
    }
  }

  return (
    <UpdateProfileContainer>
      <Title>Atualizar Perfil</Title>
      <FormContainer>
        <Input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => [setNome(e.target.value), setErro('')]}
        />
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setErro('')]}
        />
        <Input
          type="text"
          placeholder="CPF"
          value={cpf}
          onChange={(e) => [setCpf(e.target.value), setErro('')]}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setErro('')]}
        />
        <Input
          type="password"
          placeholder="Confirmar senha"
          value={confirmar}
          onChange={(e) => [setConfirmar(e.target.value), setErro('')]}
        />
        <ErrorLabel>{erro}</ErrorLabel>
        <Button Text="Atualizar" onClick={handleUpdateProfile} />
      </FormContainer>
      <BackButton to="/">Voltar</BackButton>
    </UpdateProfileContainer>
  );
}

export default UpdateProfile;
