import "../Global/style.css";

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ListaProdutos(props) {
  return (
    <div className="main">
        <h1> Lista de Produtos e Serviços </h1>
        <div className="collection">
          <a className="collection-item">
            <b>Produto:</b> Shampoo Dove 500ml <br></br>
            <b>Tipo:</b> Produto <br></br>
            <b>Valor:</b> R$50,00 <br></br>
          </a>
          <a className="collection-item">
            <b>Produto:</b> Shampoo Clear CR7 Edition<br></br>
            <b>Tipo:</b> Produto <br></br>
            <b>Valor:</b> R$70,00 <br></br>
          </a>
          <a className="collection-item">
            <b>Produto:</b> Corte de Cabelo <br></br>
            <b>Tipo:</b> Serviço <br></br>
            <b>Valor:</b> R$20,00 <br></br>
          </a>
          <a className="collection-item">
            <b>Produto:</b> Maquiagem <br></br>
            <b>Tipo:</b> Serviço <br></br>
            <b>Valor:</b> R$120,00 <br></br>
          </a>
        </div>
      </div>
  );
}
