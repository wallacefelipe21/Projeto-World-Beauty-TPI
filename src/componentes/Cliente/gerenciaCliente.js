import "../Global/style.css";

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ListaClientes(props) {
    return (
        <div className="main">
        <h1> Lista de Clientes </h1>
        <div className="collection">
          <a className="collection-item">Wallace Felipe</a>
          <a className="collection-item">Robert Lewandowski</a>
          <a className="collection-item">Luka Doncic</a>
          <a className="collection-item">Trae Young</a>
        </div>
        </div>
      );
    }
  