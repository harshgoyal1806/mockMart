import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchProduct } from '../features/product/ProductSlice';
const Search = () => {
  const [value,setValue] = useState("");
  const dispatch =useDispatch();
  console.log(value);
  const handleOnChange=(e)=>{
    const text = e.target.value;
       setValue(text);
       dispatch(searchProduct(value));
  }

  return (
    <div>
        <input type="text" placeholder='Search item' className='text-gray-600 px-4 py-2 outline-gray-400 rounded-xl border border-gray-200' onChange={handleOnChange} value={value}/>
    </div>
  )
}

export default Search