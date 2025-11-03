const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center py-6 px-8 bg-white fixed top-0 left-0 z-50 shadow-sm">
      <div className="text-2xl font-bold text-black">SEWNA</div>
      <ul className="hidden md:flex space-x-8 text-black font-medium">
        <li className="hover:text-lime-500 cursor-pointer transition">Home</li>
        <li className="hover:text-lime-500 cursor-pointer transition">
          Discover
        </li>
        <li className="hover:text-lime-500 cursor-pointer transition">
          Designers
        </li>
        <li className="hover:text-lime-500 cursor-pointer transition">About</li>
        <li className="hover:text-lime-500 cursor-pointer transition">
          Contact
        </li>
      </ul>
      <button className="md:hidden text-black text-2xl">☰</button>
    </nav>
  );
};

export default Navbar;
