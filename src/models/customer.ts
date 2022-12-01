export default class Customer {
    public nome: string
    private CPF: string //Idenficador
    private genero: string
    private quantidadeComprada: number
    private quantidadeGasta: number
    private listaRG: Array<string>
    private listaTelefone: Array<number>

    constructor(nome: string, cpf: string, genero: string) {
        this.nome = nome
        this.CPF = cpf
        this.genero = genero
        this.quantidadeComprada = 0
        this.quantidadeGasta = 0
        this.listaRG = []
        this.listaTelefone = []
    }

    public get getCPF(): string {
        return this.CPF
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
    public get getRGs(): string[] {
        return this.listaRG;
    }
    public get getTelefones(): number[] {
        return this.listaTelefone;
    }

    public setCPF(cpf: string) {
        this.CPF = cpf
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
    public addRG(rg: string) {
        const rgs = this.listaRG;
        rgs.push(rg);
        this.listaRG = rgs;
    }
    public setRG(rg: string[]) {
        this.listaRG = rg;
    }
    public addTelefone(telefone: number) {
        const tel = this.listaTelefone;
        tel.push(telefone);
        this.listaTelefone = tel;
    }
    public setTelefone(telefone: number[]) {
        this.listaTelefone = telefone;
    }
}