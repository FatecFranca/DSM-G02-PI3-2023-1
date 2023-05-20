import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;
  align-items: center;
`;

export const Title = styled.h2`
  margin-bottom: 6vh;
`;

export const AbasteForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 50%;
`;

export const ErrorLabel = styled.span`
  margin: 8px;

  color: red;

  font-size: large;
  font-weight: 500;
  font-style: italic;
`;

export const Select = styled.select`
  width: 80%;

  /*       top    right  bottom left */
  padding: 0.4rem 1.6rem 0.4rem 0.8rem;
  margin-bottom: 0.1rem;
  border: 0;
  border-radius: 16rem;
`;
