import { useState } from "react";
import BarraNavegacao from "./componentes/Global/navbar";
import CadastroCliente from "./componentes/Cliente/cadastroCliente";
import ListaClientes from "./componentes/Cliente/gerenciaCliente";
import CadastroProdutos from "./componentes/Produtos/cadastroProdutos";
import ListaProdutos from "./componentes/Produtos/gerenciaProdutos";
import CadastroCompra from "./componentes/Compra/cadastroCompra";
import ListaCompra from "./componentes/Compra/gerenciaCompra";

export default function Main() {
  const [tela, setTela] = useState(
    "Gerenciar Produtos",
    "Cadastrar Produtos",
    "Gerenciar Clientes",
    "Cadastrar Clientes",
    "Gerenciar Compras",
    "Cadastrar Compras"
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
              "Gerenciar Compras",
              "Cadastrar Compras",
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
              "Gerenciar Compras",
              "Cadastrar Compras",
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
              "Gerenciar Compras",
              "Cadastrar Compras",
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
              "Gerenciar Compras",
              "Cadastrar Compras",
            ]}
          />
          <CadastroCliente tema="pink darken-3" />
        </>
      );
    }

    if (tela === "Gerenciar Compras") {
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
              "Gerenciar Compras",
              "Cadastrar Compras",
            ]}
          />
          <ListaCompra tema="pink darken-3" />
        </>
      );
    }

    if (tela === "Cadastrar Compras") {
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
              "Gerenciar Compras",
              "Cadastrar Compras",
            ]}
          />
          <CadastroCompra tema="pink darken-3" />
        </>
      );
    }
  };

  return construirView();
}
