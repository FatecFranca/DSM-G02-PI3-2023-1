import React from 'react';
import * as C from './styles';


function Button({ Text, type='button', fColor='#fff', bgColor='#087724', value, onClick }) {

  return (
    <C.Button
      type={type}
      value={value}
      onClick={onClick}
      fColor={fColor}
      bgColor={bgColor}
    >
      {Text}
    </C.Button>
  );
}


export default Button;
