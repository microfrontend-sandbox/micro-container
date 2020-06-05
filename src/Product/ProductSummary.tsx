import React, { FC, useEffect } from 'react';
import { RouteComponentProps } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectProducts } from './productSlice';

interface ProductProps {
  productId: string;
}

export const ProductSummary: FC<RouteComponentProps<ProductProps>> = ({
  match: {
    params
  }
}) => {
  const dispatch = useDispatch();
  const {
    products,
    error
  } = useSelector(selectProducts);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (error) {
    return (
      <div>
        <h1>Something went wrong...</h1>
        <div>{error}</div>
      </div>
    )
  }

  return <div>
    {products.map(product => (
      <Link key={product.id} className="Link-item" to={`/products/${product.id}`}>{product.name}</Link>
    ))}
  </div>;
};