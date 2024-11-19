// src/Components/Sm-Components/Header.jsx
import { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Cart, Hamburger, Search, Profile } from "./Icons";
import Sidebar from "./Sidebar";
import CartSidebar from "./CartSidebar";
import { isAuthenticated } from "../utils/auth";
import { CartContext } from "../contexts/CartContext";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  // Handlers for Sidebar
  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  // Handler for Cart Sidebar
  const toggleCart = () => setIsCartOpen((prev) => !prev);

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
        <div
          className="hidden md:block w-5 h-5 rounded-full cursor-pointer"
          onClick={() => {
            if (!isAuthenticated()) {
              navigate("/signin"); // Redirect to Sign In
            } else {
              navigate("/profile"); // Redirect to Profile/Dashboard
            }
          }}
        >
          <Profile />
        </div>
        <div className="relative cursor-pointer" onClick={toggleCart}>
          <Cart />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
        wishlistCount={0} // Update with the actual wishlist count
        onCartClick={toggleCart}
      />

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={toggleCart} />
    </header>
  );
};

export default Header;
