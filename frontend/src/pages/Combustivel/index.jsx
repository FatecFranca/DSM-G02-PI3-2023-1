import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as C from './styles';

import useAuth from '../../hooks/useAuth';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Header from '../../components/Header';

function Combustivel () {

    const { user, cadastrarCombustivel } = useAuth();
    const navigate = useNavigate();
    
    const [combustivel, setCombustivel] = useState('')
    const [valor, setValor] = useState('')
    const [pontos, setPontos] = useState('')
    const [adm, setAdm] = useState('');
    const [erro, setErro] = useState('');

    useEffect(() => {
    
        if (user?.tipo === 'administrador') {
          setAdm(user);
        } else {
          navigate('/');
          alert('Usuário logado não é administrador!');
        }
        
    }, [user, navigate]);

    async function handleCombustivel () {

        if (!combustivel) {
            setErro('Informe o combustível');
            return;
        }

        if(!valor) {
            setErro('Informe o valor');
            return;
        }

        if(pontos < 0) {
            setErro('Quantidade de pontos inválida');
            return;
        }

        const res = await cadastrarCombustivel(combustivel, valor, pontos);

        if (!res?._id) {
            setErro(res);
            return;
        } else {
            alert('Combustível cadastrado com sucesso!');
            setCombustivel('');
            setValor('');
            setPontos(0);
        }

    }

    return (
        <C.RegisterContainer>
            <Header />
                <C.Title>Cadastrar Combustivel</C.Title>
                    <C.FormContainer>
                        <C.InputBox>
                        <C.Label>Combustivel:</C.Label>
                            <C.Input
                                type="text"
                                placeholder="Combustível"
                                value={ combustivel }
                                onChange={ (e) => [setCombustivel(e.target.value), setErro('')] }
                            />
                        </C.InputBox> 

                        <C.InputBox>
                        <C.Label>Valor Litro:</C.Label>
                            <C.Input
                                type="number"
                                placeholder="Valor Litro"
                                value={ valor }
                                onChange={ (e) => [setValor(e.target.value), setErro('')] }
                            />
                        </C.InputBox>

                        <C.InputBox>
                        <C.Label>Pontos por real abastecido:</C.Label>
                            <C.Input
                                type="number"
                                placeholder="Pontos por Real Abastecido"
                                value={ pontos }
                                onChange={ (e) => [setPontos(e.target.value), setErro('')] }
                            />
                        </C.InputBox>

                        <C.ErrorLabel>{ erro }</C.ErrorLabel>

                        <C.ButtonContainer>
                            <C.Button onClick={ handleCombustivel } > Cadastrar! </C.Button>
                        </C.ButtonContainer>

                    </C.FormContainer>
                <C.BackButton to="/">Voltar</C.BackButton>
        </C.RegisterContainer>
    );
}

export default Combustivel;