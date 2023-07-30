import React, { Component } from "react";
import CartDetail from "./Pages/CartPage";
import { Route, Routes } from "react-router-dom";
import MainPage from "./Pages/Main";
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cart" element={<CartDetail />} />
        </Routes>
      </div>
    );
  }
}
