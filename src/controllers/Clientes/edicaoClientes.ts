import Customer from "../../models/customer";
import Subsidiary from "../../models/subsidiary";
import Entrada from "../../utils/entrada";
import Edicao from "../edicao";

export default class EdicaoClientes extends Edicao {
  private entrada: Entrada;
  private filial: Subsidiary;

  constructor(filial: Subsidiary) {
    super();
    this.entrada = new Entrada();
    this.filial = filial;
  }

  public editar(): void {
    let x = true
    let y = true
    let num = 0
    let cpf = this.entrada.receberTexto(`Por favor, escolha um CPF: `);
    const updatedCustomers: Customer[] = [];
    this.filial.getClientes.map((customer) => {
      if (customer.getCPF === cpf) {
        customer.nome = this.entrada.receberTexto(`Novo Nome: `);
        customer.setGenero(this.entrada.receberTexto(`Gênero: `));
        while(x) {
          customer.getRGs.forEach((RG) => {
            num += 1
            console.log(num + `: ` + RG);
          })
          num += 1
          console.log(num + ` - Adicionar um novo`);
          let resposta = this.entrada.receberNumero(`Qual RG quer mudar: `);
          if(resposta <= num && resposta > 0) {
            customer.getRGs[resposta-1] = this.entrada.receberTexto(`Insira novo RG: `);
            y = true
            while(y) {
              let resposta2 = this.entrada.receberTexto(`Possui mais algum RG para mudar?(S/N) `)
              if(resposta2 === 'S') { 
                y = false 
                num = 0
              } else if (resposta2 === 'N') {
                x = false
                y = false
              } else {
                console.log(`Resposta não aceita. Reentre.`);
                num = 0
              }
            }
          } else {
            console.log('Resposta não aceita. Reentre');
            num = 0
          }
        }
        num = 0
        x = true
        while(x) {
          customer.getTelefones.forEach((tel) => {
            num += 1
            console.log(num + `: ` + tel);
          })
          num += 1
          console.log(num + ` - Adicionar um novo`);
          let resposta = this.entrada.receberNumero(`Qual telefone quer mudar: `);
          if(resposta <= num && resposta > 0) {
            customer.getTelefones[resposta - 1] = this.entrada.receberNumero(`Insira novo telefone: `);
            y = true
            while(y) {
              let resposta2 = this.entrada.receberTexto(`Possui mais algum telefone para mudar?(S/N) `)
              if(resposta2 === 'S') { 
                y = false
                num = 0
              } else if (resposta2 === 'N') {
                x = false
                y = false
              } else {
                console.log(`Resposta não aceita. Reentre.`);
                num = 0
              }
            }
          } else {
            console.log('Resposta não aceita. Reentre');
            num = 0
          }
        }
        console.log("\nAs informações foram atualizadas com sucesso!\n");
      }
      updatedCustomers.push(customer);
    });

    this.filial.setClientes(updatedCustomers);
  }
}
