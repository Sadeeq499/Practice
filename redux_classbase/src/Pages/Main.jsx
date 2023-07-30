import React, { Component } from "react";
import Header from "../components/Header";
import Card from "./Card";
import { allProducts } from "../APis/fakeStore";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      error: null,
    };
  }

  async componentDidMount() {
    try {
      const data = await allProducts();
      this.setState({ data, isLoading: false });
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  }

  render() {
    const { data, isLoading, error } = this.state;
    return (
      <div>
        <Header />
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>There was an error</div>
        ) : (
          <Card data={data} />
        )}

        <footer>Alright reserved &copy; 2021 ❤️</footer>
      </div>
    );
  }
}
