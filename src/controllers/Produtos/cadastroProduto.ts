import Entrada from "../../utils/entrada";
import Product from "../../models/product";
import Cadastro from "../cadastro";
import Subsidiary from "../../models/subsidiary";

export default class CadastroProduto extends Cadastro {
  private entrada: Entrada;
  private filial: Subsidiary;

  constructor(filial: Subsidiary) {
    super();
    this.entrada = new Entrada();
    this.filial = filial;
  }

  public cadastrar(): void {
    console.log(`\nInício do Cadastro de Produtos`);
    let codigo = this.entrada.receberNumero(`Informe o Código do Produto: `);
    let nome = this.entrada.receberTexto(`Informe o Nome: `);
    let valor_unit = this.entrada.receberNumero(`Informe Valor Unitário: R$ `);
    let marca = this.entrada.receberTexto(`Informe a Marca: `);

    let produto = new Product(codigo, nome, valor_unit, marca);
    this.filial.addProduto(produto);
    console.log(`\nCadastro concluído!)\n`);
  }
}
