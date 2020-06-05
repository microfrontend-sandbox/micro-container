import React, { FC, useEffect } from 'react';
import { RouteComponentProps } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById, selectProductById } from './productSlice';

interface ProductProps {
  productId: string;
}

export const ProductDetails: FC<RouteComponentProps<ProductProps>> = ({
  match: {
    params
  }
}) => {
  const dispatch = useDispatch();
  const product: any = useSelector(selectProductById(Number(params.productId)));

  useEffect(() => {
    dispatch(fetchProductById(Number(params.productId)));
  }, [dispatch]);

  return <>
    {product && <>
        <h2>{product.name}</h2>
        <h3>Description: {product.description}</h3>
        <h4>Price: ${product.price.toFixed(2)}</h4>
    </>
    }
  </>;
};