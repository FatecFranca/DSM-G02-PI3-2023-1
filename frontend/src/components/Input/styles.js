import styled from 'styled-components';


export const LabelInput = styled.label`
  display: flex;
  flex-direction: row;

  text-align: right;
  align-items: center;

  width: 100%;

  margin: 1rem 0;
`;

export const TextSpan = styled.span`
  font-size: 1.2rem;
  font-weight: 300;

  display: flex;
  justify-content: right;

  margin: 0;
  padding: 10px 16px;

  width: 15%;

  color: #fff;
`;

export const Input = styled.input`
  font-size: 16px;

  justify-content: left;

  background-color: transparent;
  color: #fff;

  width: 85%;

  outline: none;
  border: none;
  border-radius: 6px;
  border-bottom: 2px #fff solid;
  padding: 10px 16px;
  margin-right: 1vw;
`;

