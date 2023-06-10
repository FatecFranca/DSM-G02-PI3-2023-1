import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;
  align-items: center;
`;

export const Title = styled.h2`
  margin-top: 3vh;
  margin-bottom: 3vh;
`;

export const AbasteForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 60vw;
  padding: 3rem 5rem;
  border-radius: 18px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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

export const BackButton = styled(Link)`
  margin-top: 2rem;
  text-decoration: none;
  color: #7C9885;
`;

