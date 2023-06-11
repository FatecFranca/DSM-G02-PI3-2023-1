import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as C from './styles';
import useAuth from '../../hooks/useAuth';

import Header from '../../components/Header';
import Input from '../../components/Input';
import InputMask from '../../components/InputMask';
import Button from '../../components/Button';

function Usuario() {

    const { user, cadastrarUserInterno } = useAuth();
    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmar, setConfirmar] = useState('');
    const [tipo, setTipo] = useState('');
    const [erro, setErro] = useState('');
    const [adm, setAdm] = useState();

    useEffect(() => {
    
        if (user?.tipo === 'administrador' || user?.tipo === 'frentista') {
          setAdm(user);
        } else {
          navigate('/');
          alert('Usuário logado não é administrador!');
        }
        
    }, [user, navigate]);

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

        if (user?.tipo === 'administrador') {
            const res = await cadastrarUserInterno(tipo, nome, numerosCpf, email, senha);

            if (!res?._id) {
                setErro(res);
                return;
            } else {
                alert('Usuario Cadastrado com sucesso!');
                setNome('');
                setEmail('');
                setCpf('');
                setSenha('');
                setConfirmar('');
            }
        }else{

            tipo = 'usuario'

            const res = await cadastrarUserInterno(tipo, nome, numerosCpf, email, senha);

            if (!res?._id) {
                setErro(res);
                return;
            } else {
                alert('Usuario Cadastrado com sucesso!');
                setNome('');
                setEmail('');
                setCpf('');
                setSenha('');
                setConfirmar('');
            }

        }


    }

    return (
        <C.RegisterContainer>
            <Header/>
                <C.Title>Cadastrar Usuário</C.Title>
    
                  <C.FormContainer>
                    
                    {user?.tipo === 'administrador' ? (
                        <C.Select
                            value={ tipo }
                            onChange={ (e) => setTipo(e.target.value) }
                            style={{ marginBottom: '20px' }}
                        >
                        <option value="">Selecione o tipo de usuário</option>
                        <option value="administrador">Administrador</option>
                        <option value="frentista">Frentista</option>
                        <option value="usuario">Cliente</option>
                    </C.Select>
                    ) : null}

                    <Input
                        type='text'
                        placeholder='Nome'
                        value={ nome }
                        onChange={ e => [setNome(e.target.value), setErro('')] }
                    />

                    <Input
                        type='email'
                        placeholder='exemplo@email.com'
                        value={ email }
                        onChange={ e => [setEmail(e.target.value), setErro('')] }
                    />

                    <InputMask
                        mask='999.999.999-99'
                        placeholder='CPF'
                        value={ cpf }
                        onChange={ e => [setCpf(e.target.value), setErro('')] }
                    />

                    <Input
                        type='password'
                        placeholder='Senha'
                        value={ senha }
                        onChange={ e => [setSenha(e.target.value), setErro('')] }
                    />

                    <Input
                        type='password'
                        placeholder='Confirmar senha'
                        value={ confirmar }
                        onChange={ e => [setConfirmar(e.target.value), setErro('')] }
                    />
                    
                    <C.ErrorLabel>{ erro }</C.ErrorLabel>
            
                    <Button
                        Text='Cadastrar'
                        onClick={ handleRegistrar }
                    />

                <C.BackButton to="/">Voltar</C.BackButton>
            </C.FormContainer>
        </C.RegisterContainer>
      );

}

export default Usuario;
