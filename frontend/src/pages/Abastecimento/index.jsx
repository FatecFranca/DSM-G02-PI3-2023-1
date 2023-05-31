import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as C from './styles';
import useAuth from '../../hooks/useAuth';

import Header from '../../components/Header';
import Input from '../../components/Input';
import InputMask from '../../components/InputMask';
import Button from '../../components/Button';

function Abastecimento() {

  const { user, getCombustiveis, abastecer, calcularPontos } = useAuth();
  const navigate = useNavigate();

  const [frentista, setFrentista] = useState('');
  const [litros, setLitros] = useState('');
  const [clientCpf, setClienteCpf] = useState('');
  const [listaCom, setListaCom] = useState([]);
  const [combustivel, setCombustivel] = useState('');
  const [pontosGerados, setPontosGerados] = useState(0);

  const [erro, setErro] = useState('');

  useEffect(() => {

    async function fetchCombustivel() {
      const res = await getCombustiveis();
      setListaCom(res);
    }

    fetchCombustivel();

  }, [getCombustiveis]);

  useEffect(() => {
    
    if (user?.tipo === 'frentista' || user?.tipo === 'administrador') {
      setFrentista(user);
    } else {
      navigate('/');
      alert('Usuário logado não tem autoridade para realizar abastecimentos!');
    }

  }, [user, navigate]);

  async function handleAbastecimento() {

    if (!litros || !clientCpf) {
      setErro('Preencha todos os campos!');
      return;
    }

    if (litros < 0) {
      setErro('Coloque quantidade de litros positivo!');
      return;
    }

    if (!combustivel.length) {
      setErro('Selecione o combustivel corretamente!');
      return;
    }

    const numerosCpf = clientCpf.replace(/[.-]/g, '');  // replace com expressão regular para remover os '.' e o '-' do CPF
    if (isNaN(+numerosCpf)) {  // Verifica se o CPF foi preenchido completamente
      setErro('Preencha o CPF corretamente!');
      return;
    }

    const res = await abastecer(numerosCpf, litros, combustivel, frentista._id);

    if (!res?._id) {
      setErro(res);
      return;
    } else {
      alert('Abastecimento realizado com sucesso');
      setLitros('');
      setClienteCpf('');
    }

  }

  async function handleCalcularPontos() {

    const res = await calcularPontos(litros, combustivel)
    setPontosGerados(res);

  }

  return (
    <C.Container>
      <Header />
      <C.Title>Novo Abastecimento</C.Title>
      <C.AbasteForm>

        <C.Select onChange={ e => [setCombustivel(e.target.value), setErro(''), setPontosGerados('')] }>
          <option value=''>Selecione um combustivel!</option>
          {listaCom.map((combu) => (
            <option
              key={ combu._id }
              value={ combu._id }
            >
              { combu.tipo_combustivel.toUpperCase() }
            </option>
          ))}
        </C.Select>

        <Input
          type='number'
          placeholder='Litros abastecidos'
          value={ litros }
          onChange={ e => [setLitros(e.target.value), setErro('')] }
        />

        <InputMask
          mask='999.999.999-99'
          placeholder='CPF'
          value={ clientCpf }
          onChange={ e => [setClienteCpf(e.target.value), setErro('')] }
        />

        <Input
          type='number'
          placeholder='Pontos Gerados'
          value={ pontosGerados }
          readOnly
        />

        <C.ErrorLabel>{ erro }</C.ErrorLabel>

        <Button
          Text='Abastecer!'
          type='button'
          onClick={ handleAbastecimento }
        />

        <Button
          Text='Calcular pontos!'
          type='button'
          onClick={ handleCalcularPontos }
        />
      </C.AbasteForm>
      <C.BackButton to="/">Voltar</C.BackButton>
    </C.Container>
  );

}


export default Abastecimento;
