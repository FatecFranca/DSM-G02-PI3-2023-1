import styled from 'styled-components';


export const ResgateContainer = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;
  align-items: center;
`;

export const GridContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;

export const Row = styled.div`
  display: flex;
  justify-content: row;
  margin: 2rem;
`;


export const ProdutoContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  padding: 1rem 2rem;
  min-width: 10rem;
  min-height: 4rem;
  margin: 0 1rem;
  border-radius: 18px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ProdImagem = styled.img`
  width: 7rem;
  height: 7rem;
`;

export const ImagemContainer = styled.div`
  margin-right: 8px;
`;

export const ProdInfos = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
`;


export const ProdNome = styled.div`
  margin-bottom: 4px;
  font-size: large;
  font-weight: bold;
`;

export const ProdDesc = styled.div`
  font-style: italic;
  margin-bottom: 6px;
`;

export const ResgateButton = styled.button`
  border: 0;
  border-radius: 14px;
  padding: 1rem 1.4rem;
  font-size: medium;

  color: #fff;
  background-color: #0e7511;

  cursor: pointer;
`;
