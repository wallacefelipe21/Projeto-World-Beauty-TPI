import Entrada from "../../utils/entrada";
import Customer from "../../models/customer";
import Cadastro from "../cadastro";
import Subsidiary from "../../models/subsidiary";

export default class CadastroCliente extends Cadastro {
  private entrada: Entrada;
  private filial: Subsidiary;

  constructor(filial: Subsidiary) {
    super();
    this.entrada = new Entrada();
    this.filial = filial;
  }

  public cadastrar(): void {
    let x = true
    console.log(`\nInício do Cadastro do Cliente`);
    let nome = this.entrada.receberTexto(`Informe o Nome do Cliente: `);
    let CPF = this.entrada.receberTexto(`Informe o CPF: `);
    let genero = this.entrada.receberTexto(`Informe o Gênero(M/F): `);

    let cliente = new Customer(nome, CPF, genero);

    let RG = this.entrada.receberTexto(`Informe o RG: `);
    cliente.addRG(RG)
    while(x) {
    let resposta = this.entrada.receberTexto(`Possui mais algum RG para inserir?(S/N) `);
      if(resposta === 'S') {  
        RG = this.entrada.receberTexto(`Informe o RG: `);
        cliente.addRG(RG)  
      } else if (resposta === 'N') {
        x = false
      } else {
        console.log(`Resposta não aceita. Reentre.`);
      }
    }
    x = true
    let telefone = this.entrada.receberNumero(`Informe o Telefone: `);
    cliente.addTelefone(telefone)
    while(x) {
    let resposta = this.entrada.receberTexto(`Possui mais algum Telefone para inserir?(S/N) `);
      if(resposta === 'S') { 
        telefone = this.entrada.receberNumero(`Informe o Telefone: `);
        cliente.addTelefone(telefone)  
      } else if (resposta === 'N') {
        x = false
      } else {
        console.log(`Resposta não aceita. Reentre.`);
      }
    }

    this.filial.addCliente(cliente);
    console.log(`\nCadastro concluído!)\n`);
  }
}
