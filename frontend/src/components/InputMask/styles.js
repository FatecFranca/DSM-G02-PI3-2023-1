import React from 'react';
import * as C from './styles';

/**
 * Essa mask é para adicionar uma mascara no campo
 * de input para quen aparece em um formato desejado
 * Ex:
 *    999.999.999-99 -> Para CPF
 *    (99) 999999-9999 -> Para telefone
 * - Lembrando que irá sair com a mascara, logo é preciso
 *   fazer uma formatação do valor caso não queria sair com
 *   a mascara
 */
function InputMask({ mask, value, placeholder, onChange }) {

  return (
    <C.MaskInput
      type='text'
      mask={mask}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    /> 
  );

}

export default InputMask;
