import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;
`;

export const HomeBody = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  min-height: 45vh;
  padding: 2rem 0;

  color: #222;
  background-color: #F7EDE2; /* Tom de bege suave */
`;

export const Acessos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  width: 100%;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-around;

  padding: 2rem;

  color: #fff;
  background-color: #7C9885; /* Verde claro */
`;
