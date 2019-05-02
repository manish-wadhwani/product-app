import React from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ProductsList from './containers/ProductsList/ProductsList'
import EditProduct from './containers/EditProduct/EditProduct'


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ProductsList} />
          <Route path="/edit-product" exact component={EditProduct} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
