import Entrada from "../../utils/entrada";
import Compra from "../compra";
import Subsidiary from "../../models/subsidiary";
import Compras from "../../models/compras";
import Product from "../../models/product";

export default class CompraProduto extends Compra {
    private entrada: Entrada;
    private filial: Subsidiary;
    private compraFeita: Boolean
  
    constructor(filial: Subsidiary) {
      super();
      this.entrada = new Entrada();
      this.filial = filial;
      this.compraFeita = false
    }

    public comprar(): void {
        console.log(`\nInício de uma Compra`);
        let cpf = this.entrada.receberTexto(`Por favor, escolha um CPF: `);
        let codigo = this.entrada.receberNumero(`Por favor, escolha um código de produto: `);
        this.filial.getClientes.map((customer) => {
            this.filial.getProdutos.forEach((product) => {
                if (customer.getCPF === cpf && product.getCodigo === codigo) {
                    let quantidade = this.entrada.receberNumero(`Por favor, escolha a quantidade: `);

                    let compraRealizada = new Compras(codigo,quantidade,cpf);
                    customer.setQuantComp(customer.getQuantComp + quantidade)
                    customer.setQuantGast(customer.getQuantGast + (product.getValorUnit * quantidade))
                    this.filial.addCompra(compraRealizada);
                    console.log(`\nCompra concluída!)\n`);
                    this.compraFeita = true
                }
            })
        })
        if (this.compraFeita === false){
            console.log(`\nCPF ou código não cadastrado`);
            
        }
    }
}