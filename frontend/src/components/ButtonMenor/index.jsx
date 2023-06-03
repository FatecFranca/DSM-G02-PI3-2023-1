import React from 'react';
import * as C from './styles';


function ButtonMenor({ Text, type='button', fColor='#fff', bgColor='#0e7511', value, onClick }) {

  return (
    <C.Button
      type={ type }
      value={ value }
      onClick={ onClick }
      fColor={ fColor }
      bgColor={ bgColor }
    >
      { Text }
    </C.Button>
  );
}


export default ButtonMenor;
