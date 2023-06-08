import InputMask from 'react-input-mask';
import styled from 'styled-components';


/**
 *  Criado um component com a Lib Input Mask
 */
export const MaskInput = styled(InputMask)`
  padding: 0.6rem;
  border: 1px solid #000;
  border-radius: 14px;
  
  background-color: #fff;
  color: #000;

  width: 100%;
  text-align: center;
  outline: none;
`;

export const InputBox = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  text-align: center;
`;
