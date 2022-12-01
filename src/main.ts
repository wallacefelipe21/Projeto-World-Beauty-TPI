import Entrada from "./utils/entrada";
import Subsidiary from "./models/subsidiary";

import CadastroCliente from "./controllers/Clientes/cadastroCliente";
import EdicaoClientes from "./controllers/Clientes/edicaoClientes";
import ExclusaoClientes from "./controllers/Clientes/exclusaoCliente";

import ListagemClientes from "./controllers/Listagem/listagemClientes";
import ListagemCompra from "./controllers/Listagem/listagemCompra";
import ListagemProdutos from "./controllers/Listagem/listagemProdutos";

import CadastroProduto from "./controllers/Produtos/cadastroProduto";
import CompraProduto from "./controllers/Produtos/compraProduto";
import EdicaoProdutos from "./controllers/Produtos/edicaoProduto";
import ExclusaoProdutos from "./controllers/Produtos/exclusaoProdutos";
import OutrasListagens from "./controllers/Listagem/outrasListagens";


console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty\n`);
let empresa = new Subsidiary(
  1,
  "World Beauty Center",
  "São José dos Campos - SP - Rua das Araras - Nº 321"
);
let execucao = true;

while (execucao) {
  console.log(`Opções:`);
  console.log("\n-------- CLIENTES --------");
  console.log(`1 - Cadastrar cliente`);
  console.log(`2 - Editar Cliente`);
  console.log(`3 - Excluir Cliente`);

  console.log("\n-------- PRODUTOS --------");
  console.log(`4 - Cadastrar Produtos`);
  console.log(`5 - Editar Produtos`);
  console.log(`6 - Excluir Produtos`);

  console.log("\n-------- Outros --------");
  console.log(`7 - Comprar Produtos`);
  console.log(`8 - Listagens`);
  console.log(`0 - Sair\n`);

  let entrada = new Entrada();
  let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);

  switch (opcao) {
    case 1:
      let cadastrarCli = new CadastroCliente(empresa);
      cadastrarCli.cadastrar();
      break;
    case 2:
      let editarCli = new EdicaoClientes(empresa);
      editarCli.editar();
      break;
    case 3:
      let excluirCli = new ExclusaoClientes(empresa);
      excluirCli.excluir();
      break;
    case 4:
      let cadastrarProd = new CadastroProduto(empresa);
      cadastrarProd.cadastrar();
      break;
    case 5:
      let editarProd = new EdicaoProdutos(empresa);
      editarProd.editar();
      break;
    case 6:
      let excluirProd = new ExclusaoProdutos(empresa);
      excluirProd.excluir();
      break;
    case 7:
      let CompraProd = new CompraProduto(empresa);
      CompraProd.comprar();
      break;
    case 8:
      console.log(`Opções de Listagem:`);
      console.log("\n-------- LISTAGEM --------");
      console.log(`1 - Listar Todos os Clientes`);
      console.log(`2 - Listar Todos os Produtos`);
      console.log(`3 - Listar Todas as compras`);
      console.log(`4 - Listar os 10 Clientes com Mais Compra`);
      console.log(`5 - Listar Todos os Clientes por Gênero`);
      console.log(`6 - Listar os Produtos Pelo Mais Consumidos`);
      console.log(`7 - Listar os Produtos Pelo Mais Consumidos por Gênero`);
      console.log(`8 - Listar os 10 Clientes com Menos Compra`);
      console.log(`9 - Listar os 5 Clientes que Gastaram Mais`);

      console.log("\n-------- SAIR --------");
      console.log(`0 - Sair\n`);

      let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);
      
      switch (opcao) {
        case 1:
          let listarCli = new ListagemClientes(empresa);
          listarCli.listar();
          break;
        case 2:
          let listarProd = new ListagemProdutos(empresa);
          listarProd.listar();
          break;
        case 3:
          let listarComp = new ListagemCompra(empresa);
          listarComp.listar();
          break;
        case 4:
          let listar10Cli = new OutrasListagens(empresa);
          listar10Cli.listarCliQuant();
          break;
        case 5:
          let listarGen = new OutrasListagens(empresa);
          listarGen.listarGenero();
          break;
        case 6:
          let listarConsProd = new OutrasListagens(empresa);
          listarConsProd.listarProdConsum();
          break;
        case 7:
          let listarConsProdG = new OutrasListagens(empresa);
          listarConsProdG.listarProdConsumGen();
          break;
        case 8:
          let listar10CliM = new OutrasListagens(empresa);
          listar10CliM.listarCliQuantM();
          break;
        case 9:
          let listar5Cli = new OutrasListagens(empresa);
          listar5Cli.listarCliGast();
          break;
        case 0:
      }
      break;

    case 0:
      execucao = false;
      console.log(`Até mais`);
      break;
    default:
      console.log(`Operação não entendida :(`);
  }
}