import styled from "styled-components";
import { Link } from 'react-router-dom';


export const Container = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;
  align-items: center;
`;


export const Title = styled.h2`
  margin-bottom: 1.4rem;
  margin-top: 1.2rem;
`;


export const AbastecimentoList = styled.div`
  display: flex;
  flex-direction: column;
  
  align-items: center;

  width: 75%;
`;


export const Table = styled.table`
  border: 2px solid #fff;
  padding: 0;
  margin: 0;
`;


export const TR = styled.tr`
  & th {
    padding: 0.4rem 1rem;
    border-bottom: 1px solid #ddd;
  }

  & td {
    padding: 0.4rem 0;
  }
`;


export const BackButton = styled(Link)`
  margin-top: 2em;
  text-decoration: none;
  color: #7C9885;
`;

