import React, { FC } from 'react';
import { Route, RouteComponentProps, Switch } from "react-router";
import { Browse } from "./Browse/Browse";
import { Product } from "./Product/Product";
import { Header } from "./Header/Header";
import { MicroFrontend } from "./MicroFrontend/MicroFrontend";
import { ConnectedRouter } from 'connected-react-router';
import { history } from './utils/historyUtils';
import { config } from './config';
import './App.scss';

const Orders: FC<RouteComponentProps> = ({ history }) => {
  return <MicroFrontend name="Orders" host={config.order.host} history={history}/>;
};

function App() {
  return (
    <ConnectedRouter history={history}>
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
    </ConnectedRouter>
  );
}

export default App;
