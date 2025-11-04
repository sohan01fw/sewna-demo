import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-sm bg-white border-b border-gray-100">
      <h1 className="text-2xl font-extrabold tracking-tight text-black">
        sewna<span className="text-lime-500">.</span>
      </h1>

      <ul className="hidden md:flex gap-8 text-black font-medium">
        <li className="hover:text-lime-500 transition-colors">Home</li>
        <li className="hover:text-lime-500 transition-colors">Discover</li>
        <li className="hover:text-lime-500 transition-colors">Designers</li>
        <li className="hover:text-lime-500 transition-colors">About</li>
      </ul>

      <button className="md:hidden text-2xl text-black" aria-label="Open menu">
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
