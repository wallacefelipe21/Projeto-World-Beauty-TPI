import "../Global/style.css";

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ListaProdutos(props) {
  return (
    <div className="main">
      <h1> Lista de Produtos e Serviços </h1>
      <div className="collection">
        <a className="collection-item">Condicionador Elseve</a>
        <a className="collection-item">Shampoo Clear Messi Edition </a>
        <a className="collection-item">Manicure</a>
        <a className="collection-item">Pedicure</a>
      </div>
    </div>
  );
}
