import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { filterByCategory } from '../features/product/ProductSlice';
import { addToCart } from '../features/cart/CartSlice';

const Categorypage = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { filterProducts, status } = useSelector((state) => state.productList);

  useEffect(() => {
    if (category) {
      dispatch(filterByCategory(category));
    }
  }, [dispatch, category]);

  return (
    <div className="my-10 px-4 mt-20">
      <button
        className="mb-6 bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
        onClick={() => navigate('/categories')}
      >
        &larr; Back
      </button>

      <h1 className="text-4xl font-bold text-center mb-8">{category}</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {filterProducts && filterProducts.length > 0 ? (
          filterProducts.map((data) => (
            <div
              key={data.id}
              className="
                w-full sm:w-72 md:w-80 flex flex-col gap-4 p-6 rounded-lg shadow-sm hover:shadow-lg transitionbg-white
              "
            >
              <div className="h-52 flex items-center justify-center bg-gray-100 rounded-md">
                <img
                  src={data?.image}
                  alt={data?.title}
                  className="max-h-full object-contain hover:scale-105"
                  onClick={()=>navigate(`/product/${data.id}`)}
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
                className="mt-auto bg-gray-800 text-white py-2 rounded-md text-sm font-semibold hover:bg-gray-700"
                onClick={() => {
                  dispatch(addToCart(data));
                  navigate('/cart');
                }}
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <div>No product found in this category</div>
        )}
      </div>
    </div>
  );
};

export default Categorypage;
