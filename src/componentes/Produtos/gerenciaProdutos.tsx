/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "../Global/style.css";

type props = {
  tema: string;
};

export default class ListaProdutos extends Component<props> {
  render() {
    return (
      <div className="main">
        <h1> Lista de Produtos e Serviços </h1>
        <div className="collection">
          <a className="collection-item">Shampoo Dove 500ml</a>
          <a className="collection-item">Shampoo Clear CR7 Edition </a>
          <a className="collection-item">Corte de Cabelo</a>
          <a className="collection-item">Maquiagem</a>
        </div>
      </div>
    );
  }
}
