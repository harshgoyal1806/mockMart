import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../features/product/ProductSlice";
import { Link } from "react-router-dom";
import { addToCart } from "../features/cart/CartSlice";
import Loading from "../Components/Loading";

const IndivisualProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigete = useNavigate();
  const { product, loading, error } = useSelector((state) => state.productList);

  // Fetch products if empty
  useEffect(() => {
    if (!product.length) {
      dispatch(fetchData());
    }
  }, [dispatch, product.length]);

  const singleProduct = product.find((p) => Number(p.id) === Number(id));

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;
  if (!singleProduct) return <p>Product not found</p>;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8  mt-20">
  <div className="mb-6">
    <Link
      to="/"
      className="inline-block bg-neutral-200 hover:bg-neutral-300 text-gray-800 font-semibold rounded-lg px-4 py-2 transition"
    >
      ← Back to Home
    </Link>
  </div>

  <div className="grid md:grid-cols-2 grid-cols-1 gap-8 items-center">
    <div className="flex justify-center px-12 py-6">
      <img
        src={singleProduct.image}
        alt={singleProduct.title}
        className="w-80 h-80 rounded-lg  object-contain"
      />
    </div>

    <div className="bg-white p-6 rounded-lg shadow-md ">
      <h2 className="text-2xl font-bold mb-8">{singleProduct.title}</h2>
      <p className="text-gray-700 mb-4">{singleProduct.description}</p>
      <p className="text-gray-500 mb-4">Category: {singleProduct.category}</p>
      <p className="text-xl font-semibold text-gray-900 mb-6">Price: ${singleProduct.price}</p>
      <button className="px-4 py-2 bg-neutral-700 rounded-lg text-white hover:bg-neutral-600" onClick={()=>{
        dispatch(addToCart(singleProduct));
        navigete("/cart");
        
      }}>Add To Cart</button>
    </div>
  </div>
</div>

  );
};

export default IndivisualProduct;
