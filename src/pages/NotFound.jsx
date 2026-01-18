import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-neutral-50">
      <h1 className="text-9xl font-extrabold text-neutral-300 mb-4">404</h1>
      <p className="text-2xl text-neutral-600 mb-6">Page Not Found</p>
      <button
        onClick={() => window.history.back()}
        className="bg-neutral-800 text-white px-6 py-2 rounded-lg hover:bg-neutral-700 transition-colors duration-300"
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
