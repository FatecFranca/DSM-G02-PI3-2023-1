import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from "../pages/Login";
import Register from "../pages/Register";


function RoutesApp() {

  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/login" element={ <Login /> } />
          <Route path="/registrar" element={ <Register /> } />

          <Route path="*" element={ <Login /> } />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );

}


export default RoutesApp;

