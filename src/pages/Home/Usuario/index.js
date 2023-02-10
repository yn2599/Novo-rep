import React from "react";
import {Link } from 'react-router-dom';
function Usuario (){
    return(
        <div>
           <h1> Usuario</h1>
           <span>Sujei react</span><br/>


           <Link to="/">retornar a página inicial</Link>
        </div>
    );
}

export default Usuario;