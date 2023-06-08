import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;

  width: 6rem;
`;

export const iconAcesso = styled.div`
  padding: 1rem;

  border-radius: 1rem;

  background-color: ${ props => props.bgColor };
`;

export const labelAcesso = styled.label`
  font-weight: bold;
  margin: 0;
  padding: 0;

  color: ${ props => props.color };

  margin-top: 0.6rem;
`;