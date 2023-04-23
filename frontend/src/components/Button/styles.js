import styled from "styled-components";


export const Button = styled.button`
  width: 100%;
  max-width: 360px;
    
  background-color: ${ props => props.bgColor };
  color: ${ props => props.fColor };

  font-weight: 600;
  font-weight: 600;
  font-size: larger;
  
  cursor: pointer;

  border: none;
  border-radius: 6px;
  margin: 2rem;
  padding: 16px 18px;

  &:hover {
    background-color: ${ props => props.fColor };
    color: ${ props => props.bgColor };
  }
`;