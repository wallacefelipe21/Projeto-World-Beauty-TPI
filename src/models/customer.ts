export default class Customer {
    public nome: string
    private CPF: string //Idenficador
    private RG: string
    private telefone: number
    private genero: string
    private quantidadeComprada: number
    private quantidadeGasta: number

    constructor(nome: string, cpf: string, rg: string, telefone: number, genero: string) {
        this.nome = nome
        this.CPF = cpf
        this.RG = rg
        this.telefone = telefone
        this.genero = genero
        this.quantidadeComprada = 0
        this.quantidadeGasta = 0
    }

    public get getCPF(): string {
        return this.CPF
    }
    public get getRG(): string {
        return this.RG
    }
    public get getTelefone(): number{
        return this.telefone
    }
    public get getGenero(): string{
        return this.genero
    }
    public get getQuantComp(): number{
        return this.quantidadeComprada
    }
    public get getQuantGast(): number{
        return this.quantidadeGasta
    }

    public setCPF(cpf: string) {
        this.CPF = cpf
    }
    public setRG(rg: string) {
        this.RG = rg
    }
    public setTelefone(telefone: number) {
        this.telefone = telefone
    }
    public setGenero(genero: string) {
        this.genero = genero
    }
    public setQuantComp(quantidadeComprada: number) {
        this.quantidadeComprada = quantidadeComprada
    }
    public setQuantGast(quantidadeGasta: number) {
        this.quantidadeGasta = quantidadeGasta
    }
}