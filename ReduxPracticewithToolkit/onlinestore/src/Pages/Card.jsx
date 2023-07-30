import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/CartSlice";

function Card({ products }) {
  const dispatch = useDispatch();
  const alreadyInCart = useSelector((state) => state.cart.items);

  const handleAddToCart = (product) => {
    const isAlreadyInCart = alreadyInCart.find(
      (item) => item.id === product.id
    );
    if (isAlreadyInCart) {
      alert("Item already in cart");
    } else {
      dispatch(addToCart(product));
    }
  };

  return (
    <div className="mx-auto mt-11 flex flex-wrap justify-center">
      {products?.map((items) => (
        <div
          key={items.id}
          className="mx-4 my-4 transform overflow-hidden rounded-lg bg-white dark:bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg w-80"
        >
          <img
            className="h-48 w-full object-contain object-center"
            src={items.image}
            alt="Product Image"
          />
          <div className="p-4">
            <h2 className="mb-2 text-lg font-medium dark:text-black text-gray-900">
              {items.category}
            </h2>
            <p className="mb-2 text-base dark:text-black text-gray-700">
              {items.description.substring(0, 25)}
            </p>
            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-black">
                ${items.price}
              </p>

              <button
                onClick={() => handleAddToCart(items)}
                className="ml-auto text-base bg-yellow-500 p-2 rounded-full hover:bg-yellow-600 hover:animate-pulse"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
