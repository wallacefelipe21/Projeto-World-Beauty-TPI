export default class Compras {
    private codigoProduto: number
    private quantidade: number
    private cpfCliente: string
    private codigo: number

    constructor(codigo: number, codigoProduto: number, quantidade: number, cpfCliente: string){
        this.codigoProduto = codigoProduto
        this.quantidade = quantidade
        this.cpfCliente = cpfCliente
        this.codigo = codigo
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
    public get getCodCompra(): number {
        return this.codigo
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
    public setCodCompra(codCompra: number) {
        this.codigo = codCompra
    }
}