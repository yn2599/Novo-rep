import React from "react";
import {Link} from 'react-router-dom'
function Sobre (){
    return(
        <div>
           <h1>Pagina sobre a empresa</h1>

           <Link to="/">retornar a página inicial</Link>
        </div>
    );
}

export default Sobre;