import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as C from './styles';

import ImgProd1 from '../../image/Produto1.jpg';
import ImgProd2 from '../../image/Produto2.jpg';
import ImgProd3 from '../../image/Produto3.jpg';
import ImgProd4 from '../../image/Produto4.jpg';
import ImgProd5 from '../../image/Produto5.jpg';
import ImgProd6 from '../../image/Produto6.jpg';

import Header from "../../components/Header";
import useAuth from '../../hooks/useAuth';


function ResgateProdutos() {

  const { user, getProdutos, resgate } = useAuth();
  const navigate = useNavigate();

  const [listaProdutos, setListaProdutos] = useState([]);

  useEffect(() => {
    if (!user) {
      navigate('/');
      alert('Usuário não logado!');
      return
    }
    async function fetchProdutos() {
      const res = await getProdutos();
      setListaProdutos(res);
    }
    fetchProdutos();
  }, [user, getProdutos, navigate]);

  async function handleResgate(produtoId) {
    await resgate(user?._id, produtoId);
  }

  function hookResgate1() {
    handleResgate(listaProdutos[0]._id);
  }
  function hookResgate2() {
    handleResgate(listaProdutos[1]._id);
  }
  function hookResgate3() {
    handleResgate(listaProdutos[2]._id);
  }
  function hookResgate4() {
    handleResgate(listaProdutos[3]._id);
  }
  function hookResgate5() {
    handleResgate(listaProdutos[4]._id);
  }
  function hookResgate6() {
    handleResgate(listaProdutos[5]._id);
  }

  return (
    <C.ResgateContainer>
      <Header />
      <C.GridContainer>
        <C.Row>
          <C.ProdutoContainer>
            <C.ImagemContainer>
              <C.ProdImagem
                src={ ImgProd1 }
                alt="Produto1"
              />
            </C.ImagemContainer>
            <C.ProdInfos>
              <C.ProdNome>{ listaProdutos[0]?.nome }</C.ProdNome>
              <C.ProdDesc>
                { listaProdutos[0]?.descricao }.<br />
                Quantidade: <strong>{ listaProdutos[0]?.quantidade }</strong>
              </C.ProdDesc>
              <C.ResgateButton
                type='button'
                onClick={ hookResgate1 }
              >
                Resgatar por <strong>{ listaProdutos[0]?.valor }</strong>
              </C.ResgateButton>
            </C.ProdInfos>
          </C.ProdutoContainer>
          <C.ProdutoContainer>
            <C.ImagemContainer>
              <C.ProdImagem
                src={ ImgProd2 }
                alt="Produto1"
              />
            </C.ImagemContainer>
            <C.ProdInfos>
              <C.ProdNome>{ listaProdutos[1]?.nome }</C.ProdNome>
              <C.ProdDesc>
                { listaProdutos[1]?.descricao }.<br />
                Quantidade: <strong>{ listaProdutos[1]?.quantidade }</strong>
              </C.ProdDesc>
              <C.ResgateButton
                type='button'
                onClick={ hookResgate2 }
              >
                Resgatar por <strong>{ listaProdutos[1]?.valor }</strong>
              </C.ResgateButton>
            </C.ProdInfos>
          </C.ProdutoContainer>
        </C.Row>
        <C.Row>
          <C.ProdutoContainer>
            <C.ImagemContainer>
              <C.ProdImagem
                src={ ImgProd3 }
                alt="Produto1"
              />
            </C.ImagemContainer>
            <C.ProdInfos>
              <C.ProdNome>{ listaProdutos[2]?.nome }</C.ProdNome>
              <C.ProdDesc>
                { listaProdutos[2]?.descricao }.<br />
                Quantidade: <strong>{ listaProdutos[2]?.quantidade }</strong>
              </C.ProdDesc>
              <C.ResgateButton
                type='button'
                onClick={ hookResgate3 }
              >
                Resgatar por <strong>{ listaProdutos[2]?.valor }</strong>
              </C.ResgateButton> 
            </C.ProdInfos>
          </C.ProdutoContainer>
          <C.ProdutoContainer>
            <C.ImagemContainer>
              <C.ProdImagem
                src={ ImgProd4 }
                alt="Produto1"
              />
            </C.ImagemContainer>
            <C.ProdInfos>
              <C.ProdNome>{ listaProdutos[3]?.nome }</C.ProdNome>
              <C.ProdDesc>
                { listaProdutos[3]?.descricao }.<br />
                Quantidade: <strong>{ listaProdutos[3]?.quantidade }</strong>
              </C.ProdDesc>
              <C.ResgateButton
                type='button'
                onClick={ hookResgate4 }
              >
                Resgatar por <strong>{ listaProdutos[3]?.valor }</strong>
              </C.ResgateButton> 
            </C.ProdInfos>
          </C.ProdutoContainer>
        </C.Row>
        <C.Row>
          <C.ProdutoContainer>
            <C.ImagemContainer>
              <C.ProdImagem
                src={ ImgProd5 }
                alt="Produto1"
              />
            </C.ImagemContainer>
            <C.ProdInfos>
              <C.ProdNome>{ listaProdutos[4]?.nome }</C.ProdNome>
              <C.ProdDesc>
                { listaProdutos[4]?.descricao }.<br />
                Quantidade: <strong>{ listaProdutos[4]?.quantidade }</strong>
              </C.ProdDesc>
              <C.ResgateButton
                type='button'
                onClick={ hookResgate5 }
              >
                Resgatar por <strong>{ listaProdutos[4]?.valor }</strong>
              </C.ResgateButton> 
            </C.ProdInfos>
          </C.ProdutoContainer>
          <C.ProdutoContainer>
            <C.ImagemContainer>
              <C.ProdImagem
                src={ ImgProd6 }
                alt="Produto1"
              />
            </C.ImagemContainer>
            <C.ProdInfos>
              <C.ProdNome>{ listaProdutos[5]?.nome }</C.ProdNome>
              <C.ProdDesc>
                { listaProdutos[5]?.descricao }.<br />
                Quantidade: <strong>{ listaProdutos[5]?.quantidade }</strong>
              </C.ProdDesc>
              <C.ResgateButton
                type='button'
                onClick={ hookResgate6 }
              >
                Resgatar por <strong>{ listaProdutos[5]?.valor }</strong>
              </C.ResgateButton> 
            </C.ProdInfos>
          </C.ProdutoContainer>
        </C.Row>
      </C.GridContainer>
    </C.ResgateContainer>
  );

}


export default ResgateProdutos;
