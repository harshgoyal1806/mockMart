import React, { useState } from "react";
import { MdOutlineStorefront } from "react-icons/md";
import { IoPersonOutline, IoCartOutline } from "react-icons/io5";
import Search from "./Search";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed  border-b bg-white w-full z-10">
     
      <div className="flex items-center justify-between px-6 py-4 md:px-10">
    
        <div className="flex items-center gap-2 text-3xl font-bold cursor-pointer">
          <MdOutlineStorefront />
          <span>MockMart</span>
        </div>


        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-semibold text-gray-700 hover:text-gray-500 transition cursor-pointer">
            Home
          </Link>
          <Link to="/categories" className="font-semibold text-gray-700 hover:text-gray-500 transition cursor-pointer">
            Categories
          </Link>
          <Search />
          <Link to="/login" className="p-2 text-xl hover:text-gray-500 transition cursor-pointer">
            <IoPersonOutline />
          </Link>
          <Link  to ="/cart" className="p-2 text-xl hover:text-gray-500 transition cursor-pointer">
            <IoCartOutline />
          </Link>
        </nav>
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all bg-white duration-300 ease-in-out ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-6 px-6 py-6 border-t bg-white">
          <Link to="/" className="font-semibold text-gray-700 hover:text-gray-500 transition cursor-pointer" onClick={()=>setOpen(false)}>
            Home
          </Link>
          <Link to="/categories" className="font-semibold text-gray-700 hover:text-gray-500 transition cursor-pointer" onClick={()=>setOpen(false)}>
            Categories
          </Link>

          <Search />

          <div className="flex gap-4">
            <button className="p-2 text-xl hover:text-gray-500 transition cursor-pointer" 
            onClick={()=>{
              navigate("/login");
              setOpen(false);

            }}>
              <IoPersonOutline />
            </button>
            <button to ="/cart"  className="p-2 text-xl hover:text-gray-500 transition cursor-pointer" 
            onClick={()=>{
              navigate("/cart");
              setOpen(false);
            }}>
              <IoCartOutline />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
