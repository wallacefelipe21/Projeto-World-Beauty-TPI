import "../Global/style.css";

export default function CadastroProdutos(props){
    const estiloBotao = `btn waves-effect waves-light ${props.tema}`
    return (
      <div className="row">
      <h1> Cadastro de Produtos e Serviços </h1>
      <form className="formulario">
        <div className="row">
          <div className="input-field col s12">
            <input id="id" type="number" className="validate" />
            <label htmlFor="id">Codigo do Produto</label>
          </div>
          <div className="input-field col s12">
            <input id="nome" type="text" className="validate" />
            <label htmlFor="nome">Nome</label>
          </div>
          <div className="input-field col s12">
            <input id="valor" type="number" className="validate" />
            <label htmlFor="valor">Valor Unitário</label>
          </div>
          <div className="input-field col s12">
            <input id="marca" type="number" className="validate" />
            <label htmlFor="marca">Marca</label>
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


    