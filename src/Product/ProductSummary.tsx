import React, { FC } from 'react';
import { RouteComponentProps } from "react-router-dom";
import { Link } from "react-router-dom";

interface ProductProps {
  productId: string;
}

export const ProductSummary: FC<RouteComponentProps<ProductProps>> = ({
  match: {
    params
  }
}) => {
  return <div>
    <Link className="Link-item" to="/products/First">One</Link>
    <Link className="Link-item" to="/products/Second">Two</Link>
    <Link className="Link-item" to="/products/Third">Three</Link>
  </div>;
};