import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../Redux/Actions";

function Counter() {
  const counter = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());

    // dispatch the increment action
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-9xl font-black">{counter}</h1>
        <div className="flex flex-row space-x-3 mt-10">
          <button
            onClick={handleIncrement}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Increment
          </button>
          <button
            onClick={handleDecrement}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch(reset())}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
