import React, { useEffect, useState } from 'react';
import * as C from './styles';
import useAuth from '../../hooks/useAuth';


import Header from '../../components/Header';


function Abastecimentos() {

  const { user, getCombustiveis, getAbastecimentos } = useAuth();

  const [listaCom, setListaCom] = useState([]);
  const [listaAbast, setListaAbast] = useState([]);

  useEffect(() => {
    async function fetchCombustivel() {
      const res = await getCombustiveis();
      setListaCom(res);
    }
    fetchCombustivel();
  }, [getCombustiveis]);
  useEffect(() => {
    async function fetchAbastecimentos() {
      const res = await getAbastecimentos(user._id);
      setListaAbast(res);
    }
    fetchAbastecimentos();
  }, [user, getAbastecimentos]);

  function mostrarCombustivel(id) {
    return listaCom.find(c => c._id === id).tipo_combustivel.toUpperCase();
  }

  return (
    <C.Container>
      <Header />
      <C.Title>Abastecimentos</C.Title>
      <C.AbastecimentoList>
        <C.Table>
          <thead>
            <C.TR>
              <th>Combustivel</th>
              <th>Litros</th>
              <th>Valor total</th>
              <th>Pontos gerados</th>
            </C.TR>
          </thead>
          <tbody>
            {listaAbast ? listaAbast.map((abastecimento) => (
              <C.TR key={ abastecimento._id }>
                <td>{ mostrarCombustivel(abastecimento.id_combustivel) }</td>
                <td>{ abastecimento.qtd_litros } L.</td>
                <td>R${ abastecimento.vlr_total }</td>
                <td>{ abastecimento.qtd_pontos_gerados }</td>
              </C.TR>
            )) : null}
          </tbody>
        </C.Table>
      </C.AbastecimentoList>
      <C.BackButton to="/">Voltar</C.BackButton>
    </C.Container>
  );

}


export default Abastecimentos;
