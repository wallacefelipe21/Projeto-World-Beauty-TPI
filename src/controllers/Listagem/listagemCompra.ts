import Subsidiary from "../../models/subsidiary";
import Listagem from "../listagem";

export default class ListagemCompras extends Listagem {
  private filial: Subsidiary;
  constructor(filial: Subsidiary) {
    super();
    this.filial = filial;
  }
  public listar(): void {
    console.log(`\nLista de Todos as Compras: \n`);
    this.filial.getCompras.forEach((compras) => {
        this.filial.getClientes.forEach((cliente) => {
            if (cliente.getCPF === compras.getCPF) {
                console.log(`Cliente: ` + cliente.nome);
            }
        })
        this.filial.getProdutos.forEach((produto) => {
            if (produto.getCodigo === compras.getCodigo) {
                console.log(`Produto: ` + produto.nome);
            }
        })
        console.log(`Quantidade: ` + compras.getQuantidade);
        console.log(`--------------------------------------`);
    });
    console.log(`\n`);
  }
}
