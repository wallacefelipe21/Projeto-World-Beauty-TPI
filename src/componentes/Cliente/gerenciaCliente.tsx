/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";

type props = {
  tema: string;
};

export default class ListaCliente extends Component<props> {
  render() {
    return (
      <div className="main">
        <h1> Lista de Clientes </h1>
        <div className="collection">
          <a className="collection-item">Maria Gabriela</a>
          <a className="collection-item">Lebron James</a>
          <a className="collection-item">Harry Kane</a>
          <a className="collection-item">Neymar Jr</a>
        </div>
      </div>
    );
  }
}
