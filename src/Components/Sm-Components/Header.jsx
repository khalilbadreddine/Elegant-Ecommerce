import { useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import { Cart, Hamburger, Search, Profile } from "./Icons";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <header className="w-full bg-white p-4 flex items-center justify-between shadow-md">
      {/* Left Section: Logo and Menu Icon for Mobile */}
      <div className="flex items-center">
        <button onClick={openSidebar} className="md:hidden mr-2">
          <Hamburger className="w-6 h-6 text-gray-700" />
        </button>
        <div className="text-lg font-bold text-gray-900">3legant.</div>
      </div>

      {/* Center Section: Navigation Links for Desktop */}
      <nav className="hidden md:flex space-x-8 text-gray-700 text-sm font-medium">
        <NavLink to="/" className="hover:text-gray-900">
          Home
        </NavLink>
        <NavLink to="/shop" className="hover:text-gray-900">
          Shop
        </NavLink>
        <NavLink to="/product" className="hover:text-gray-900">
          Product
        </NavLink>
        <NavLink to="/contact" className="hover:text-gray-900">
          Contact Us
        </NavLink>
      </nav>

      {/* Right Section: Icons */}
      <div className="flex items-center space-x-4">
        <div className="hidden md:block w-5 h-5 rounded-full">
          <Search />
        </div>
        <div className="hidden md:block w-5 h-5 rounded-full">
          <Profile />
        </div>
        <div className="relative">
          <Cart />
          <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            2
          </span>
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </header>
  );
};

export default Header;
