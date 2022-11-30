export default class Compras {
    private codigoProduto: number
    private quantidade: number
    private cpfCliente: string

    constructor(codigoProduto: number, quantidade: number, cpfCliente: string){
        this.codigoProduto = codigoProduto
        this.quantidade = quantidade
        this.cpfCliente = cpfCliente
    }

    public get getCodigo(): number{
        return this.codigoProduto
    }
    public get getQuantidade(): number{
        return this.quantidade
    }
    public get getCPF(): string{
        return this.cpfCliente
    }

    public setCodigo(codigoProduto: number){
        this.codigoProduto = codigoProduto
    }
    public setQuantidade(quantidade: number){
        this.quantidade = quantidade
    }
    public setCPF(cpfCliente: string){
        this.cpfCliente = cpfCliente
    }
}