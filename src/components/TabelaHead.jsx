import React from 'react';
import { FaArrowAltCircleUp, FaArrowCircleDown } from "react-icons/fa";

const TabelaHead = (props) =>(
  <thead>
    <tr>
      <th colSpan="4">Tabela de Livros</th>
    </tr>
    <tr>
      <th>ISBN</th>
      <th>Título
        <div className="container-setinhas">
          <div onClick={ () => props.ordenarTituloCrescente() } ><FaArrowAltCircleUp/></div>
          <div onClick={ () => props.ordenarTituloDecrescente() } ><FaArrowCircleDown/></div>
        </div>
      </th>
      <th>Autor</th>
      <th></th>
    </tr>
  </thead>
);

export default TabelaHead;
