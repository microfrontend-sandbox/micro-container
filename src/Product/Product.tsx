import React, { FC } from 'react';
import { Route, RouteComponentProps, Switch } from "react-router-dom";
import { ProductDetails } from "./ProductDetails";
import { ProductSummary } from "./ProductSummary";

interface ProductProps {
  productId: string;
}

export const Product: FC<RouteComponentProps<ProductProps>> = ({
  match: {
    path
  }
}) => (
    <Switch>
      <Route exact path={path} component={ProductSummary}/>
      <Route path={`${path}/:productId`} component={ProductDetails}/>
    </Switch>
);