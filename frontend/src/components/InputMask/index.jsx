import InputMask from 'react-input-mask';
import styled from 'styled-components';


/**
 *  Criado um component com a Lib Input Mask
 */
export const MaskInput = styled(InputMask)`
  font-size: 1rem;
  margin: 1rem 0;

  background-color: transparent;
  color: #fff;

  width: 80%;

  outline: none;
  border: none;
  border-radius: 6px;
  border-bottom: 2px #fff solid;
  padding: 10px 16px;
`;

