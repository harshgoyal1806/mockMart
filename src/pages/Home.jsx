import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../Components/Loading";
import { fetchData } from "../features/product/ProductSlice";
import Product from "../Components/Product";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { product, loading, error,category} = useSelector(
    (state) => state.productList
  );
  const navigate = useNavigate();
  console.log(product);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="h-screen flex items-center justify-center text-red-500 text-lg ">
        {error}
      </div>
    );
  }

  return (
    <div className="p-6 pt-16 mt-20">
      <div className="flex  flex-col md:flex-row gap-8 justify-around mb-20  mb:items-center ">
        <div>
          <h1 className="text-3xl mb:text-5xl font-bold leading-12">Welcome to MockMart</h1>
          <p className="text-neutral-400 mt-3 text-lg ">Shop the latest products from our collection. We offer a wide range of items <br /> at a cheap and affordable prices.</p>
        </div>
       <div> 
         <button onClick={()=>navigate("/")} className="bg-neutral-900 rounded-lg text-white px-4 py-2 hover:bg-neutral-700">Shop Now</button>  
        </div>      
      </div>
      <h1 className="mx-20 text-3xl font-bold text-neutral-900">Our Products</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {product?.map((data) => (
          <Product key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Home;
