import Entrada from "../../utils/entrada";
import Compra from "../compra";
import Subsidiary from "../../models/subsidiary";
import Compras from "../../models/compras";
import Product from "../../models/product";

export default class CompraProduto extends Compra {
    private entrada: Entrada;
    private filial: Subsidiary;
  
    constructor(filial: Subsidiary) {
      super();
      this.entrada = new Entrada();
      this.filial = filial;
    }

    public comprar(): void {
        let compraFeita = false
        console.log(`\nInício de uma Compra`);
        let cpf = this.entrada.receberTexto(`Por favor, escolha um CPF: `);
        let codigo = this.entrada.receberNumero(`Por favor, escolha um código de produto: `);
        this.filial.getClientes.map((customer) => {
            this.filial.getProdutos.forEach((product) => {
                if (customer.getCPF === cpf && product.getCodigo === codigo) {
                    let quantidade = this.entrada.receberNumero(`Por favor, escolha a quantidade: `);

                    this.filial.setComprasRealizadas(this.filial.getComprasRealizadas + 1)
                    let compraRealizada = new Compras(this.filial.getComprasRealizadas,codigo,quantidade,cpf);
                    customer.setQuantComp(customer.getQuantComp + quantidade)
                    customer.setQuantGast(customer.getQuantGast + (product.getValorUnit * quantidade))
                    this.filial.addCompra(compraRealizada);
                    console.log(`\nCompra concluída!)\n`);
                    compraFeita = true
                }
            })
        })
        if (compraFeita === false){
            console.log(`\nCPF ou código não cadastrado`);
            
        }
    }
}