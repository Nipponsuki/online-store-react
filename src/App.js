import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Hero from "./components/Hero";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Home from "./components/Home";
import Modal from "./components/Modal";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/store" component={Cart} />
          <Route component={Default} />
        </Switch>
      </>
    );
  }
}

export default App;
