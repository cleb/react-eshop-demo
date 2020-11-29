import React from 'react';
import { TopBar } from '@react-eshop-demo/ui';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Shop } from '@react-eshop-demo/shop';

import './app.scss';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';

export function App() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.scss file.
   */
  return (
    <Router>
      <TopBar></TopBar>
      <Switch>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
