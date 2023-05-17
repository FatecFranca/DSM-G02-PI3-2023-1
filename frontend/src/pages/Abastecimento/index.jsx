import React, { useEffect, useState } from 'react';
import * as C from './styles';
import useAuth from '../../hooks/useAuth';

import Input from '../../components/Input';
import Button from '../../components/Button';

function Abastecimento() {

  const { combustiveis } = useAuth();

  const [litros, setLitros] = useState('');

  useEffect(() => {
    console.log(combustiveis);
  }, [combustiveis]);

  return (
    <C.Container>
      <C.Title>Abastecimento</C.Title>

      <C.AbasteForm>
        <Input
          type='number'
          placeholder='Litros abastecidos'
          value={ litros }
          onChange={ e => setLitros(e.target.value) }
        />
        <Button
          Text='Abastecer!'
          type='button'
          onClick={console.log('Não funciona por enquanto')}
        />
      </C.AbasteForm>
    </C.Container>
  );

}


export default Abastecimento;
