import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
} from "../features/cart/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartStore.cartItems);
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (cartItems.length === 0) {
    return (
      <div>
        <div className="w-full mt-25 flex flex-col justify-center items-center gap-6 p-4">
          <IoCartOutline className="text-6xl text-gray-400" />
          <p className="text-2xl font-semibold text-gray-700 text-center">
            Your Cart is Empty
          </p>
          <button
            className="px-6 py-3 rounded-md border border-gray-700 font-semibold hover:bg-gray-700 hover:text-white transition"
            onClick={() => navigate("/")}
          >
            Start Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mt-25 mb-20 flex flex-col p-4 md:p-8 gap-6">
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="w-full flex flex-col md:flex-row items-center md:items-start
                     gap-4 p-4 border border-gray-200 rounded-xl shadow-sm"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-24 h-24 object-contain bg-gray-100 rounded-md"
          />
          <div className="flex-1 flex flex-col gap-2 text-center md:text-left">
            <p className="font-semibold line-clamp-2">{item.title}</p>
            <p className="text-sm text-gray-600">Price: ${item.price}</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              className="px-3 py-1 bg-gray-200 rounded-md font-bold hover:bg-gray-300"
              onClick={() => dispatch(decreaseQuantity({ id: item.id }))}
            >
              −
            </button>
            <span className="font-semibold">{item.quantity}</span>
            <button
              className="px-3 py-1 bg-gray-200 rounded-md font-bold hover:bg-gray-300"
              onClick={() => dispatch(addToCart(item))}
            >
              +
            </button>
          </div>

          <button
            className="text-sm text-red-500 hover:text-red-700 font-semibold mt-2 md:mt-0"
            onClick={() => dispatch(removeFromCart({ id: item.id }))}
          >
            Remove
          </button>
        </div>
      ))}

      {/* Cart Footer */}
      <div className="w-full mt-8 border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</p>
        <div className="flex gap-4">
          <button
            className="px-6 py-3 rounded-md border border-gray-400 font-semibold hover:bg-gray-100"
            onClick={() => navigate(-1)}
          >
            Continue Shopping
          </button>
          <button className="px-6 py-3 rounded-md bg-gray-800 text-white font-semibold hover:bg-gray-700">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
