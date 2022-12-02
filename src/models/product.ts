export default class Product {
  public codigo: number;
  public nome: string;
  private valor_unit: number;
  private marca: string;
  private tipo: string;

  constructor(codigo: number, nome: string, valor_unit: number, marca: string, tipo: string) {
    this.codigo = codigo;
    this.nome = nome;
    this.valor_unit = valor_unit;
    this.marca = marca;
    this.tipo = tipo
  }

  public get getCodigo(): number{
    return this.codigo
  }
  public get getValorUnit(): number {
    return this.valor_unit;
  }
  public get getMarca(): string {
    return this.marca;
  }
  public get getTipo(): string {
    return this.tipo;
  }

  public setValorUnit(valor_unit: number) {
    this.valor_unit = valor_unit;
  }
  public setMarca(marca: string) {
    this.marca = marca;
  }
  public setTipo(tipo: string) {
    this.tipo = tipo;
  }
}
