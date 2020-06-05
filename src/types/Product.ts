export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

export interface ProductsResult {
  products: Product[];
}

export interface ProductResult {
  product: Product;
}