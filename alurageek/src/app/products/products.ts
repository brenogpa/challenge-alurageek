export interface Product {
  title: string;
  description: string;
  price: number;
  categoria: Array<string>;
  image: string;
}

export type Produtcs = Array<Product>;
