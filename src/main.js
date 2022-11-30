import { useState } from "react";
import BarraNavegacao from "./componentes/Global/navbar";
import CadastroCliente from "./componentes/Cliente/cadastroCliente";
import ListaClientes from "./componentes/Cliente/gerenciaCliente";
import CadastroProdutos from "./componentes/Produtos/cadastroProdutos";
import ListaProdutos from "./componentes/Produtos/gerenciaProdutos";

export default function Main() {
  const [tela, setTela] = useState(
    "Gerenciar Produtos",
    "Cadastrar Produtos",
    "Gerenciar Clientes",
    "Cadastrar Clientes"
  );

  const seletorView = (valor, e) => {
    e.preventDefault();
    setTela(valor);
  };

  const construirView = () => {
    if (tela === "Gerenciar Produtos") {
      return (
        <>
          <BarraNavegacao
            seletorView={seletorView}
            tema="pink darken-3"
            botoes={[
              "Gerenciar Produtos",
              "Cadastrar Produtos",
              "Gerenciar Clientes",
              "Cadastrar Clientes",
            ]}
          />
          <ListaProdutos tema="pink darken-3" />
        </>
      );
    }

    if (tela === "Cadastrar Produtos") {
      return (
        <>
          <BarraNavegacao
            seletorView={seletorView}
            tema="pink darken-3"
            botoes={[
              "Gerenciar Produtos",
              "Cadastrar Produtos",
              "Gerenciar Clientes",
              "Cadastrar Clientes",
            ]}
          />
          <CadastroProdutos tema="pink darken-3" />
        </>
      );
    }

    if (tela === "Gerenciar Clientes") {
      return (
        <>
          <BarraNavegacao
            seletorView={seletorView}
            tema="pink darken-3"
            botoes={[
              "Gerenciar Produtos",
              "Cadastrar Produtos",
              "Gerenciar Clientes",
              "Cadastrar Clientes",
            ]}
          />
          <ListaClientes tema="pink darken-3" />
        </>
      );
    }
    if (tela === "Cadastrar Clientes") {
      return (
        <>
          <BarraNavegacao
            seletorView={seletorView}
            tema="pink darken-3"
            botoes={[
              "Gerenciar Produtos",
              "Cadastrar Produtos",
              "Gerenciar Clientes",
              "Cadastrar Clientes",
            ]}
          />
          <CadastroCliente tema="pink darken-3" />
        </>
      );
    }
  };

  return construirView();
}
