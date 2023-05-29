import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as C from './styles';
import useAuth from '../../hooks/useAuth';

import Header from '../../components/Header';
import Input from '../../components/Input';
import InputMask from '../../components/InputMask';
import Button from '../../components/Button';

function Produto () {

    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
    
        if (user?.tipo === 'administrador') {
          setUser(user);
        } else {
          navigate('/');
          alert('Usuário logado não é administrador!');
    }
    
    }, [user, navigate]);

    async function handleProduto () {
        console.log('Debug##')
    }
    
    return (
        <C.Container>
          <Header />
          <C.Title>Cadastrar Produto</C.Title>
          <C.AbasteForm>
    
            <Input
              placeholder='Produto'
              value={ nome }
            />
    
            <Input
              placeholder='Descrição'
              value={ descricao }
            />
    
            <Input
              type='number'
              placeholder='Quantidade'
              value={ quantidade }
            />
        
            <Input
              type='number'
              placeholder='Valor'
              value={ valor }
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