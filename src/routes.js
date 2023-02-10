import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/Home/Sobre';
import Usuario from './pages/Home/Usuario';

function RoutesApp (){
    return(
        <BrowserRouter>

             <Route component = { Home }  path="/" exact />
             <Route component = { Sobre }  path="/sobre" />
             <Route component = { Usuario }  path="/usuario" />
         
        </BrowserRouter>
    );
}

export default RoutesApp;