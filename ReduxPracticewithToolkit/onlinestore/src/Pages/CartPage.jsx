import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increasesQuantity,
  decreasesQuantity,
  emptyCart,
} from "../Redux/CartSlice";
import { Link, useNavigate } from "react-router-dom";

function CartPage() {
  const cart = useSelector((state) => state.cart.items);
  const shippingCharges = 10.0;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // functions---------------------------------
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleIncreasesQty = (product) => {
    dispatch(increasesQuantity(product));
  };

  const handleDecreasesQty = (product) => {
    dispatch(decreasesQuantity(product));
  };

  const handleCheckout = () => {
    alert("order placed Successfully");
    navigate("/");
    dispatch(emptyCart());
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="flex shadow-md my-10">
        <div className="w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{cart.length} Items</h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Product Details
            </h3>
            <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
              Quantity
            </h3>
            <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
              Price
            </h3>
            <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
              Total
            </h3>
          </div>
          {/* this will be wrap */}
          {cart.map(
            (product) => (
              console.log(product),
              (
                <div
                  key={product.id}
                  className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                >
                  <div className="flex w-2/5">
                    {" "}
                    {/* product */}
                    <div className="w-20">
                      <img
                        className="h-24"
                        src={product.image}
                        alt="product image"
                      />
                    </div>
                    <div className="flex flex-col justify-between ml-4 flex-grow">
                      <span className="font-bold text-sm">
                        {product.title && product.title.slice(0, 20)}...
                      </span>
                      <span className="text-red-500 text-xs">
                        {product.category}
                      </span>
                      <button
                        onClick={() => handleRemoveFromCart(product)}
                        className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-center w-1/5">
                    <button
                      type="button"
                      onClick={() => handleDecreasesQty(product)}
                    >
                      <svg
                        className="fill-current text-gray-600 w-3"
                        viewBox="0 0 448 512"
                      >
                        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>
                    </button>
                    <input
                      className="mx-2 border text-center w-8"
                      type="text"
                      value={product.quantity || 1}
                      readOnly
                    />
                    <button
                      type="button"
                      onClick={() => handleIncreasesQty(product)}
                    >
                      <svg
                        className="fill-current text-gray-600 w-3"
                        viewBox="0 0 448 512"
                      >
                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>
                    </button>
                  </div>
                  <span className="text-center w-1/5 font-semibold text-sm">
                    ${product.price}
                  </span>
                  <span className="text-center w-1/5 font-semibold text-sm">
                    ${(product.quantity * product.price).toFixed(2)}
                  </span>
                </div>
              )
            )
          )}
          <Link
            to="/"
            className="flex font-semibold text-indigo-600 text-sm mt-10"
          >
            <svg
              className="fill-current mr-2 text-indigo-600 w-4"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </Link>
        </div>
        <div id="summary" className="w-1/4 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8">
            Order Summary
          </h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">
              Items {cart.length}
            </span>

            <span className="font-semibold text-sm">
              $
              {cart
                .map((product) => product.quantity * product.price)
                .reduce((a, b) => a + b, 0)
                .toFixed(2)}
            </span>
          </div>
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">
              Shipping
            </label>
            <select className="block p-2 text-gray-600 w-full text-sm">
              <option>Standard shipping - ${shippingCharges}</option>
            </select>
          </div>
          <div className="py-10">
            <label
              htmlFor="promo"
              className="font-semibold inline-block mb-3 text-sm uppercase"
            >
              Promo Code
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              className="p-2 text-sm w-full"
            />
          </div>
          <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
            Apply
          </button>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>
                ${/* total price with shipping charges */}
                {cart
                  .map((product) => product.quantity * product.price)
                  .reduce((a, b) => a + b, shippingCharges)
                  .toFixed(2)}
              </span>
            </div>
            <button
              type="button"
              onClick={handleCheckout}
              className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
