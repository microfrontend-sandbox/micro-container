import { Product, ProductResult, ProductsResult } from '../types/Product';
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../types/Store';
import { getProduct, getProducts } from '../api/productApi';
import store  from '../store';

interface State {
  products: ProductState;
}

interface ProductState {
  products: Product[];
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  error: null
};

const products = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProductsSuccess (state, { payload }: PayloadAction<ProductsResult>) {
      state.products = payload.products;
      state.error = null;
    },
    getProductsFailure (state, { payload }: PayloadAction<string>) {
      state.error = payload;
    },
    getProductSuccess (state, { payload }: PayloadAction<ProductResult>) {
      const products = state.products.filter(product => product.id !== payload.product.id);
      state.products = [...products, payload.product];

      state.error = null;
    }
  }
});

store.injectReducer(products.name, products.reducer);

export const {
  getProductsSuccess,
  getProductsFailure,
  getProductSuccess
} = products.actions;

export const selectProducts = (state: State) => state.products;
export const selectProductById = (id: number) => createSelector(
  [selectProducts],
  ({ products }) => products.find(product => product.id === id)
);

export const fetchProducts = (): AppThunk => async dispatch => {
  try {
    const products = await getProducts();
    dispatch(getProductsSuccess({ products }));
  } catch (error) {
    dispatch(getProductsFailure(error.toString()));
  }
};

export const fetchProductById = (id: number): AppThunk => async dispatch => {
  try {
    const product = await getProduct(id);
    dispatch(getProductSuccess({ product }));
  } catch (error) {
    dispatch(getProductsFailure(error.toString()));
  }
}