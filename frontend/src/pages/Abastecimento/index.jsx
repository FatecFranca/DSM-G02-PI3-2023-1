import React, { useEffect, useState } from 'react';
import * as C from './styles';
import useAuth from '../../hooks/useAuth';

import Input from '../../components/Input';
import InputMask from '../../components/InputMask';
import Button from '../../components/Button';

function Abastecimento() {

  const { user, getCombustiveis, abastecer } = useAuth();

  const [frentista, setFrentista] = useState('');
  const [litros, setLitros] = useState('');
  const [clientCpf, setClienteCpf] = useState('');
  const [listaCom, setListaCom] = useState('');

  const [erro, setErro] = useState('');

  useEffect(() => {
    async function fetchCombustivel() {
      const res = await getCombustiveis();
      setListaCom(res);
    }
    fetchCombustivel();
  }, [getCombustiveis]);

  async function handleAbastecimento() {
    if (!litros && !clientCpf) {
      setErro('Preencha todos os campos!');
      return;
    }
    const numerosCpf = clientCpf.replace(/[.-]/g, '');  // replace com expressão regular para remover os '.' e o '-' do CPF
    if (isNaN(+numerosCpf)) {  // Verifica se o CPF foi preenchido completamente
      setErro('Preencha o CPF corretamente!');
      return;
    }
  }


  return (
    <C.Container>
      <C.Title>Abastecimento</C.Title>

      <C.AbasteForm>
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
        <C.ErrorLabel>{ erro }</C.ErrorLabel>
        <Button
          Text='Abastecer!'
          type='button'
          onClick={ handleAbastecimento }
        />
      </C.AbasteForm>
    </C.Container>
  );

}


export default Abastecimento;
