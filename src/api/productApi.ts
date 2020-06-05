import { config } from '../config';
import { Product } from '../types/Product';

export const getProducts = async (): Promise<Product[]> => {
  const { apiBase } = config;
  const url = `${apiBase}/products`;

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getProduct = async (id: number): Promise<Product> => {
  const { apiBase } = config;
  const url = `${apiBase}/products/${id}`;

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    throw error;
  }
};