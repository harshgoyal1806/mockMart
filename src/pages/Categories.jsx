import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const { categories } = useSelector((state) => state.productList);
  const navigate = useNavigate();
  return (
    <div className="my-10 text-center flex flex-col gap-10 relative mt-30">
      <button
        className="absolute  top-0 left-2 bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
        onClick={() => navigate("/")}
      >
        &larr;back 
      </button>
      <h1 className="text-4xl text-neutral-900 font-semibold">Categories</h1>
      <div className=" flex flex-col gap-6 justify-center items-center">
        {categories.map((category, index) => (
          <h1
            key={index}
            className="bg-white rounded-lg border border-neutral-300 shadow-lg cursor-pointer hover:scale-105 w-full md:max-w-3xl py-4 text-2xl transition-all duration-300 mx-10"
            onClick={() => navigate(`/categorypage/${category}`)}
          >
            {category}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Categories;
