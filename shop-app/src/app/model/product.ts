export class Product {
  public name: string;
  public description: string;
  public price: number;
  public stock: number;

  constructor(
    name: string,
    description: string,
    price: number,
    stock: number
  ) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.stock = stock;
  }
}
