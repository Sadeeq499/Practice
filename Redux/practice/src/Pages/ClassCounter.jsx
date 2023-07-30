import React, { Component } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { increment, decrement, reset } from "../Redux/Actions";

class ClassCounter extends Component {
  handleIncrement = () => {
    this.props.increment();
  };

  handleDecrement = () => {
    this.props.decrement();
  };

  handleReset = () => {
    this.props.reset();
  };

  render() {
    return (
      <div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-9xl font-black">{this.props.counter}</h1>
          <div className="flex flex-row space-x-3 mt-10">
            <button
              onClick={this.handleIncrement}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Increment
            </button>
            <button
              onClick={this.handleDecrement}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Decrement
            </button>
            <button
              onClick={this.handleReset}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.count,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  reset: () => dispatch(reset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClassCounter);
