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

  min-height: 53vh;
  padding: 1rem;

  color: #222;
  background-color: #E0F2F1; /* Turquesa claro */
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

  padding: 1rem;

  color: #fff;
  background-color: #7C9885; /* Verde claro */
`;
