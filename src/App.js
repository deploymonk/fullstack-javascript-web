import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Home from './Home'
import ProductList from './ProductList'
import ProductAdd from './ProductAdd'

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/product/list">Products</Link>
            </li>

            <li>
              <Link to="/product/add">Product Add</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <main>
          <Switch>
            <Route path="/product/list">
              <ProductList />
            </Route>

            <Route path="/product/add">
              <ProductAdd />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}
