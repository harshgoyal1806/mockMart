import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/CartSlice";
import { useNavigate } from "react-router-dom";

const Product = ({ data }) => {
  const dispatch = useDispatch();
  const cartitems = useSelector((state)=>state.cartStore.cartItems);
  const navigate = useNavigate();
  
  return (
    <div
      className="
        w-full sm:w-72 md:w-80 flex flex-col gap-4 p-6 rounded-lg shadow-sm hover:shadow-lg transitionbg-white
      "
    >
      <div className="h-52 flex items-center justify-center bg-gray-100 rounded-md">
        <img
          src={data?.image}
          alt={data?.title}
          className="max-h-full object-contain transition-all duration-300 hover:scale-105" onClick={()=>navigate(`/product/${data.id}`)}
        />
      </div>

      <p className="text-base font-semibold text-gray-800 line-clamp-2">
        {data?.title}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-gray-900">
          ${data?.price}
        </span>

        <span className="text-xs font-medium text-gray-600 bg-gray-200 px-2 py-1 rounded-full">
          {data?.category}
        </span>
      </div>

      <button
        className="mt-auto bg-gray-800 text-white py-2 rounded-md text-sm font-semibold hover:bg-gray-700 "
        onClick={()=>{
          console.log(data);
          dispatch(addToCart(data));
          navigate("/cart");
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
