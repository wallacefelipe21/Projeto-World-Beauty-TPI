import Customer from "./customer";
import Product from "./product";
import Compras from "./compras";

export default class Subsidiary {
  public codigo: number;
  public nome: string;
  public endereco: string;
  private listaClientes: Customer[];
  private listaProdutos: Product[];
  private listaCompras: Compras[];

  constructor(codigo: number, nome: string, endereco: string) {
    this.codigo = codigo;
    this.nome = nome;
    this.endereco = endereco;
    this.listaClientes = [];
    this.listaProdutos = [];
    this.listaCompras = [];
  }

  public get getClientes(): Customer[] {
    return this.listaClientes;
  }
  public get getProdutos(): Product[] {
    return this.listaProdutos;
  }
  public get getCompras(): Compras[] {
    return this.listaCompras;
  }

  public addCliente(cliente: Customer) {
    const clientes = this.listaClientes;
    clientes.push(cliente);
    this.listaClientes = clientes;
  }

  public setClientes(clientes: Customer[]) {
    this.listaClientes = clientes;
  }

  public addProduto(produto: Product) {
    const produtos = this.listaProdutos;
    produtos.push(produto);
    this.listaProdutos = produtos;
  }

  public setProdutos(produto: Product[]) {
    this.listaProdutos = produto;
  }

  public addCompra(compra: Compras) {
    const compraFeita = this.listaCompras;
    compraFeita.push(compra);
    this.listaCompras = compraFeita;
  }

  public setCompra(compra: Compras[]) {
    this.listaCompras = compra;
  }
}
