import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col gap-6 py-8 justify-center items-center  max-w-md bg-white shadow-lg rounded-xl  mx-auto my-25">
      <h1 className="text-4xl font-semibold text-neutral-800">Signup</h1>
      <form className="flex flex-col gap-6 w-full px-6 ">
        <input
          type="text"
          placeholder="Enter your name"
          className="outline-none border-b border-neutral-300  focus:border-neutral-400 transition-colors duration-300 text-neutral-700"
        />
        <input
          type="email"
          placeholder="Enter your email"
          className="outline-none border-b border-neutral-300 py-2 px-1 focus:border-neutral-400 transition-colors duration-300 text-neutral-700"
        />
        
         <input
          type="password"
          placeholder="Enter your Password"
          className="outline-none border-b border-neutral-300  focus:border-neutral-400 transition-colors duration-300 text-neutral-700"
        />
        <div>
          <button
            type="submit"
            className="w-full bg-neutral-800 text-white py-2 rounded-lg mt-4 hover:bg-neutral-700 transition-colors duration-300 px-8"
          >
            {" "}
            Submit
          </button>

          <p className="mt-4 text-sm text-neutral-600 text-center">
            Already have an account{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-blue-900 hover:underline cursor-pointer"
            >
               login
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
