import { Component } from "react";

type props = {
  tema: string;
};

export default class CadastroCliente extends Component<props> {
  render() {
    let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`;
    return (
      <div className="row">
        <h1> Cadastro de Clientes </h1>
        <form className="formulario">
          <div className="row">
            <div className="input-field col s12">
              <input id="first_name" type="text" className="validate" />
              <label htmlFor="first_name">Nome</label>
            </div>
            <div className="input-field col s12">
              <input id="cpf" type="number" className="validate" />
              <label htmlFor="cpf">CPF</label>
            </div>
            <div className="input-field col s12">
              <input id="rg" type="number" className="validate" />
              <label htmlFor="rg">RG</label>
            </div>
            <div className="input-field col s12">
              <input id="telefone" type="number" className="validate" />
              <label htmlFor="telefone">Telefone</label>
            </div>
            <div className="input-field col s12">
              <input id="genero" type="text" className="validate" />
              <label htmlFor="genero">Genero</label>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <button className={estiloBotao} type="submit" name="action">
                Cadastrar
                <i className="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
