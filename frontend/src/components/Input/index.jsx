import React from 'react';
import * as C from './styles';


function Input({ Text, type='text', placeholder, value, onChange }) {

  return (
    <C.LabelInput>
      <C.TextSpan>{ Text }:</C.TextSpan>

      <C.Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />  
    </C.LabelInput>
  );
}


export default Input;
