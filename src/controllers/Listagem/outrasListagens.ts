import Subsidiary from "../../models/subsidiary";

export default class OutrasListagens {
  private filial: Subsidiary;
  constructor(filial: Subsidiary) {
    this.filial = filial;
  }
  public listarCliQuant(): void {
    let list : string[] = []
    let num = 0
    let escolhido : [string,number] = ['0',-1]
    console.log(`\nLista dos 10 Clientes que Mais Consumiram: \n`);
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
              escolhido = ['0',-1]
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
  public listarProdConsum(): void {
    let prod : number[] = []
    let num = 0
    let escolhido : [number,number] = [0,-1]
    console.log(`\nLista dos Produtos Mais Consumidos: \n`);
    this.filial.getProdutos.forEach((produto) => {
      prod[produto.getCodigo] = 0
      num += 1
    })
    this.filial.getCompras.forEach((compras) => {
      prod[compras.getCodigo] += compras.getQuantidade
    })
    for(let i = 0; i < num; i++) {
      console.log('-------- ' + (i + 1) + ' --------');
      this.filial.getProdutos.forEach((produto) => {
        if(prod[produto.getCodigo] > escolhido[1]) {
          escolhido = [produto.getCodigo,prod[produto.getCodigo]]
        }
      })
      this.filial.getProdutos.forEach((produto) => {
        if(escolhido[0] === produto.getCodigo) {
          console.log(`Codigo: ` + produto.codigo);
          console.log(`Nome: ` + produto.nome);
          console.log(`Valor Unitário: R$` + produto.getValorUnit);
          console.log(`Marca: ` + produto.getMarca);
          console.log(`Quantidade Comprada: ` + escolhido[1]);
          console.log(`--------------------------------------`);
          prod[escolhido[0]] = -1
          escolhido = [0,-1]
        }
      })
      console.log('\n');
    }
  }
}