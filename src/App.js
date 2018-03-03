import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Products from "./components/Products";

class App extends Component {
  constructor() {
    super();

    this.state = {
      toDisplay: "products"
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar onNavClick={toDisplay => this.setState({ toDisplay })} />
        {this.state.toDisplay === "products" && <Products />}
        {this.state.toDisplay === "cart" && <Cart />}
      </div>
    );
  }
}

export default App;
