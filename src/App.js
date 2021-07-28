import React from 'react'
import Home from './Home'
import About from './About'
import Product from './Product'
import Cart from './Cart'
import Checkout from './Checkout'
import { BrowserRouter as Router } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import './App.css';
import { createBrowserHistory } from "history";


function App() {
  const history = createBrowserHistory();
  return (
    <div className="App">
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/product">Product</Link></li>
          <li><Link to="/car">Cart</Link></li>
          <li><Link to="/checkout">Checkout</Link></li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/product" component={Product} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
      </Router>
    </div>
  );
}

export default App;
