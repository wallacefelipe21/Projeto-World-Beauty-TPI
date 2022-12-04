import "../Global/style.css";

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ListaClientes(props) {
  return (
    <div className="main">
      <h1> Lista de Clientes </h1>
      <div className="collection">
        <a className="collection-item">
          <b>Nome:</b> Maria Gabriela <br></br>
          <b>CPF:</b> 999.999.999-9 <br></br>
        </a>
        <a className="collection-item">
          <b>Nome:</b> Cristiano Ronaldo <br></br>
          <b>CPF:</b> 999.999.999-9 <br></br>
        </a>
        <a className="collection-item">
          <b>Nome:</b> Neymar <br></br>
          <b>CPF:</b> 999.999.999-9 <br></br>
        </a>
        <a className="collection-item">
          <b>Nome:</b> Marta <br></br>
          <b>CPF:</b> 999.999.999-9 <br></br>
        </a>
      </div>
    </div>
  );
}
