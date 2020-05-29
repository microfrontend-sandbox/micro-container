import React, { FC } from 'react';
import { RouteComponentProps } from "react-router";

interface ProductProps {
  productId: string;
}

export const ProductDetails: FC<RouteComponentProps<ProductProps>> = ({
  match: {
    params
  }
}) => {
  return <h2>Product ID: {params.productId}</h2>;
};