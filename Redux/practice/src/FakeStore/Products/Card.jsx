import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddProduct } from "../../ProductRedux/action";
function Card({ Data }) {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.products);
  const handleAddToCart = (product) => {
    dispatch(AddProduct(product));
    // save it to local storage
    localStorage.setItem("cart", JSON.stringify(product));
  };
  console.log(value);

  return (
    <>
      {/* component */}
      {/* This is an example component */}
      {Data.map((item) => (
        <div key={item.id} className="max-w-2xl mx-auto my-10">
          <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="w-full h-[50vh] object-cover"
                src={item.image}
                alt="product image"
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
                  {item.title.substring(0, 20) + "..."}
                </h3>
              </a>

              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${item.price}
                </span>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
