import "../Global/style.css";

export default function CadastroCompra(props){
    const estiloBotao = `btn waves-effect waves-light ${props.tema}`
    return (
      <div className="row">
        <h1> Cadastro de Compra </h1>
        <form className="formulario">
          <div className="row">
            <div className="input-field col s12">
              <input id="cpf" type="number" className="validate" />
              <label htmlFor="cpf">CPF</label>
            </div>
            <div className="input-field col s12">
              <input id="codigo" type="text" className="validate" />
              <label htmlFor="codigo">Código do Produto/Serviço</label>
            </div>
            <div className="input-field col s12">
              <input id="quantidade" type="number" className="validate" />
              <label htmlFor="quantidade">Quantidade</label>
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
    )
}


    