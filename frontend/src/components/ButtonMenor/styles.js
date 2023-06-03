import styled from "styled-components";


export const Button = styled.button`
  width: 70%;
  max-width: 180px;
    
  background-color: ${ props => props.bgColor };
  color: ${ props => props.fColor };

  font-weight: 300;
  font-size: medium;
  
  cursor: pointer;

  border: none;
  border-radius: 6px;
  margin: 0.4rem;
  padding: 6px 8px;

  &:hover {
    background-color: ${ props => props.fColor };
    color: ${ props => props.bgColor };
  }
`;