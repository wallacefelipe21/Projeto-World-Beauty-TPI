/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";

type props = {
  tema: string;
};

export default class ListaCompra extends Component<props> {
  render() {
    return (
      <div className="main">
        <h1> Lista de Compras </h1>
        <div className="collection">
          <a className="collection-item">
            <b>Nome:</b> Maria Gabriela <br></br>
            <b>Produto:</b> Shampoo Dove 500ml <br></br>
            <b>Valor:</b> R$50,00 <br></br>
          </a>
          <a className="collection-item">
            <b>Nome:</b> Cristiano Ronaldo <br></br>
            <b>Produto:</b> Shampoo Clear CR7 Edition <br></br>
            <b>Valor:</b> R$70,00 <br></br>
          </a>
          <a className="collection-item">
            <b>Nome:</b> Neymar <br></br>
            <b>Produto:</b> Corte de Cabelo <br></br>
            <b>Valor:</b> R$20,00 <br></br>
          </a>
          <a className="collection-item">
            <b>Nome:</b> Marta <br></br>
            <b>Produto:</b> Maquiagem <br></br>
            <b>Valor:</b> R$120,00 <br></br>
          </a>
        </div>
      </div>
    );
  }
}
