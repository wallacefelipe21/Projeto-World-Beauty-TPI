import Subsidiary from "../../models/subsidiary";

export default class OutrasListagens {
  private filial: Subsidiary;
  constructor(filial: Subsidiary) {
    this.filial = filial;
  }
  public listarCliQuant(): void {
    let list : string[] = []
    let num = 0
    let escolhido : [string,number] = ['0',0]
    console.log(`\nLista de Todos os Clientes: \n`);
    this.filial.getClientes.map((cliente) => {
      list[num] = cliente.getCPF
      num += 1
    });
    for(let l = 0; l < 10; l++) {
      console.log('-------- ' + (l + 1) + ' --------');
      for(let i = 0; i < num;i++) {
        this.filial.getClientes.map((cliente) => {
          if(list[i] === cliente.getCPF && escolhido[1] < Number(cliente.getQuantComp)) {
            escolhido = [cliente.getCPF,cliente.getQuantComp]
          }
        })
      }
      this.filial.getClientes.map((cliente) => {
        if(cliente.getCPF === escolhido[0]) {
          console.log(`Nome: ` + cliente.nome);
          console.log(`CPF: ` + cliente.getCPF);
          console.log(`RG: ` + cliente.getRG);
          console.log(`Telefone: ` + cliente.getTelefone);
          console.log(`Gênero: ` + cliente.getGenero);
          console.log(`Quantidade de Compras: ` + cliente.getQuantComp);
          for(let i = 0; i < num;i++) {
            if(list[i] === escolhido[0]) {
              list[i] = ''
              escolhido = ['0',0]
            }
          }
        }
      })
    }
    console.log(`\n`);
  }
  public listarGenero(): void {
    console.log(`\nLista de Todos os Clientes por Gênero: \n`);
    console.log(`---------- Masculino ----------`);
    this.filial.getClientes.forEach((cliente) => {
        if(cliente.getGenero === 'M'){
            console.log(`Nome: ` + cliente.nome);
            console.log(`CPF: ` + cliente.getCPF);
            console.log(`RG: ` + cliente.getRG);
            console.log(`Telefone: ` + cliente.getTelefone);
            console.log(`--------------------------------------`);
        }
    });
    console.log('\n');
    console.log(`---------- Feminino ----------`);
    this.filial.getClientes.forEach((cliente) => {
        if(cliente.getGenero === 'F'){
            console.log(`Nome: ` + cliente.nome);
            console.log(`CPF: ` + cliente.getCPF);
            console.log(`RG: ` + cliente.getRG);
            console.log(`Telefone: ` + cliente.getTelefone);
            console.log(`--------------------------------------`);
        }
    });
    console.log(`\n`);
  }
}