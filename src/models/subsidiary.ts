import Customer from "./customer";
import Product from "./product";
import Compras from "./compras";

export default class Subsidiary {
  public codigo: number;
  public nome: string;
  public endereco: string;
  private totalCompras: number
  private listaClientes: Customer[];
  private listaProdutos: Product[];
  private listaCompras: Compras[];

  constructor(codigo: number, nome: string, endereco: string) {
    this.codigo = codigo;
    this.nome = nome;
    this.endereco = endereco;
    this.totalCompras = 0
    this.listaClientes = [];
    this.listaProdutos = [];
    this.listaCompras = [];
  }

  public get getComprasRealizadas(): number {
    return this.totalCompras;
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

  public setComprasRealizadas(ComprasRealizadas: number) {
    this.totalCompras = ComprasRealizadas
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
