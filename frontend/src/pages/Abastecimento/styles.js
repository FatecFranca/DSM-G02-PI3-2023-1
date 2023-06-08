import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;
  align-items: center;

  justify-content: center;
  background-color: #f3f3f3;
`;

export const Title = styled.h2`
  margin-top: 1.2rem;
  margin-bottom: 1.8rem;
`;

export const AbasteForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60vw;
  background-color: #fff;
  padding: 4rem 10rem;
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
  width: 100%;

  /*       top    right  bottom left */
  padding: 0.4rem 1.6rem 0.4rem 0.8rem;
  margin-bottom: 1.5rem;
  border: 1px solid #000;
  border-radius: 16rem;
`;

export const BackButton = styled(Link)`
  margin-top: 2em;
  text-decoration: none;
  color: #7C9885;
`;
