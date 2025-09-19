import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold">NewsRadar</div>
      <div className="space-x-4">
        <a href="/" className="hover:text-gray-200">Home</a>
        <a href="/login" className="hover:text-gray-200">Login</a>
        <a href="/signup" className="hover:text-gray-200">Signup</a>
      </div>
    </nav>
  );
};

export default Navbar;
