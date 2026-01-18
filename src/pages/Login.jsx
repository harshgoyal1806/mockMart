import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col gap-6 py-8 justify-center items-center mt-10 max-w-md bg-white shadow-lg rounded-xl  mx-auto">
      <h1 className="text-4xl font-semibold text-neutral-800">Login</h1>
      <form className="flex flex-col gap-4 w-full px-6 ">
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
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-blue-900 hover:underline cursor-pointer"
            >
              Sign up
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
