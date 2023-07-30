import React, { Component } from "react";
import { connect } from "react-redux";
import { AddToCart, RemoveFromCart } from "../Redux/actions";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
    };
  }

  render() {
    const { data } = this.state;
    return (
      <>
        <div className="mx-auto mt-11 flex flex-wrap justify-center">
          {data.map((item) => (
            <div
              key={item.id}
              className="mx-4 my-4 transform overflow-hidden rounded-lg bg-white dark:bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg w-80"
            >
              <img
                className="h-48 w-full object-contain object-center"
                src={item.image}
                alt="Product Image"
              />
              <div className="p-4">
                <h2 className="mb-2 text-lg font-medium dark:text-black text-gray-900">
                  {item.category}
                </h2>
                <p className="mb-2 text-base dark:text-black text-gray-700">
                  {item.title}
                </p>
                <div className="flex items-center">
                  <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-black">
                    ${item.price}
                  </p>

                  <button
                    onClick={() =>
                      this.props.alreadyInCart.find(
                        (product) => product.id === item.id
                      )
                        ? alert("Already in Cart")
                        : this.props.AddToCart(item)
                    }
                    className="ml-auto text-base bg-yellow-500 p-2 rounded-full hover:bg-yellow-600 hover:animate-pulse"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    alreadyInCart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    AddToCart: (item) => dispatch(AddToCart(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
