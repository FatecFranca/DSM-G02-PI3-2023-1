import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import useAuth from "../hooks/useAuth";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from '../pages/Home';
import Abastecimento from "../pages/Abastecimento";


function Logado({ Item }) {
  // Autenticação se está logado
  const { logado } = useAuth();

  return <Item />; // Apenas para testes
  return logado ? <Item /> : <Login />;
}


function RoutesApp() {

  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/login" element={ <Login /> } />
          <Route path="/registrar" element={ <Register /> } />
          <Route path="/" element={ <Logado Item={ Home } /> } />
          <Route path="/abastecimento" element={ <Logado Item={ Abastecimento } /> } />

          <Route path="*" element={ <Login /> } />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );

}


export default RoutesApp;

