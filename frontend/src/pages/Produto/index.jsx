import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as C from './styles';
import useAuth from '../../hooks/useAuth';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

function Produto () {

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [valor, setValor] = useState('');
    const [adm, setAdm] = useState('');
   
    const { user } = useAuth();
    const [erro, setErro] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
    
        if (user?.tipo === 'administrador') {
          setAdm(user);
        } else {
          navigate('/');
          alert('Usuário logado não é administrador!');
    }
    
    }, [user, navigate]);

    async function handleProduto () {
        
    }
   
    return (
        <C.Container>
          <Header />
          <C.Title>Cadastrar Produto</C.Title>
          <C.AbasteForm>
    
            <Input
              placeholder='Produto'
              value={ nome }
              onChange={ e => [setNome(e.target.value), setErro('')] }
            />
    
            <Input
              placeholder='Descrição'
              value={ descricao }
              onChange={ e => [setDescricao(e.target.value), setErro('')] }
            />
    
            <Input
              type='number'
              placeholder='Quantidade'
              value={ quantidade }
              onChange={ e => [setQuantidade(e.target.value), setErro('')] }
            />
        
            <Input
              type='number'
              placeholder='Valor'
              value={ valor }
              onChange={ e => [setValor(e.target.value), setErro('')] }
            />
    
            <C.ErrorLabel>{ erro }</C.ErrorLabel>
    
            <Button
              Text='Salvar'
              type='button'
              onClick={ handleProduto }
            />
    
          </C.AbasteForm>
          <C.BackButton to="/">Voltar</C.BackButton>
        </C.Container>
      );    
}

export default Produto;