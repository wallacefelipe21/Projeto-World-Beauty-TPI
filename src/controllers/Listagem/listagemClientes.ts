import Subsidiary from "../../models/subsidiary";
import Listagem from "../listagem";

export default class ListagemClientes extends Listagem {
  private filial: Subsidiary;
  constructor(filial: Subsidiary) {
    super();
    this.filial = filial;
  }
  public listar(): void {
    let num = 0
    console.log(`\nLista de Todos os Clientes: \n`);
    this.filial.getClientes.forEach((cliente) => {
      console.log(`Nome: ` + cliente.nome);
      console.log(`CPF: ` + cliente.getCPF);
      console.log(`RGs: `);
      num = 0
      cliente.getRGs.forEach((RG) => {
        num += 1
        console.log(num + `: ` + RG);
      })
      num = 0
      console.log(`Telefone: `);
      cliente.getTelefones.forEach((telefone) => {
        num += 1
        console.log(num + `: ` + telefone);
      })
      console.log(`Gênero: ` + cliente.getGenero);
      console.log(`--------------------------------------`);
    });
    console.log(`\n`);
  }
}
