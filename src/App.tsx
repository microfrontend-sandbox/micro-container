import React, { FC } from 'react';
import './App.scss';
import { Route, RouteComponentProps, Switch } from "react-router";
import { Browse } from "./Browse/Browse";
import { BrowserRouter } from "react-router-dom";
import { Product } from "./Product/Product";
import { Header } from "./Header/Header";
import { MicroFrontend } from "./MicroFrontend/MicroFrontend";

const Orders: FC<RouteComponentProps> = ({ history }) => {
  return <MicroFrontend name="Orders" host="http://localhost:5000" history={history}/>;
};

function App() {
  return (
    <BrowserRouter>
      <>
        <Header>Micro Frontend</Header>
        <div className="Page-container">
          <Switch>
            <Route exact path="/" component={Browse}/>
            <Route path="/products" component={Product}/>
            <Route path="/orders" component={Orders}/>
          </Switch>
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;
