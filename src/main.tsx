import { Component } from "react";
import BarraNavegacao from "./componentes/Global/Navbar";
import CadastroCliente from "./componentes/Cliente/cadastroCliente";
import ListaCliente from "./componentes/Cliente/gerenciaCliente";
import CadastroProduto from "./componentes/Produtos/cadastroProdutos";
import ListaProdutos from "./componentes/Produtos/gerenciaProdutos";

type state = {
  cadastroCli: string;
  gerenciaCli: string;
  cadastroProd: string;
  gerenciaProd: string;
};

export default class Main extends Component<{}, state> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      cadastroCli: "Cadastrar Clientes",
      gerenciaCli: "Gerenciar Clientes",
      cadastroProd: "Cadastrar Produtos",
      gerenciaProd: "Gerenciar Produtos",
    };
    this.selecionarView = this.selecionarView.bind(this);
  }

  selecionarView(novaTela: string, evento: Event) {
    evento.preventDefault();
    console.log(novaTela);
    this.setState({
      cadastroCli: novaTela,
      gerenciaCli: novaTela,
      cadastroProd: novaTela,
      gerenciaProd: novaTela,
    });
  }

  render() {
    let barraNavegacao = (
      <BarraNavegacao
        seletorView={this.selecionarView}
        tema="pink darken-3"
        botoes={[
          "Gerenciar Produtos",
          "Cadastro Produtos",
          "Gerenciar Clientes",
          "Cadastro Cliente",
        ]}
      />
    );

    if (this.state.gerenciaProd === "Gerenciar Produtos") {
      return (
        <>
          {barraNavegacao}
          <ListaProdutos tema="pink darken-3" />
        </>
      );
    }

    if (this.state.cadastroProd === "Cadastro Produtos") {
      return (
        <>
          {barraNavegacao}
          <CadastroProduto tema="pink darken-3" />
        </>
      );
    }

    if (this.state.gerenciaCli === "Gerenciar Clientes") {
      return (
        <>
          {barraNavegacao}
          <ListaCliente tema="pink darken-3" />
        </>
      );
    }

    if (this.state.cadastroCli === "Cadastro Cliente") {
      {
        return (
          <>
            {barraNavegacao}
            <CadastroCliente tema="pink darken-3" />
          </>
        );
      }
    }
  }
}
