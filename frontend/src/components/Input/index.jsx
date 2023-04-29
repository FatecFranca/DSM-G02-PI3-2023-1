import React from 'react';
import * as C from './styles';


function Input({ type='text', placeholder, value, onChange }) {

  return (
    <C.Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}


export default Input;
