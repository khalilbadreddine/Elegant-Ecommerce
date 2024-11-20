import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Cart, Hamburger, Search, Profile, Wishlist } from "./Icons";
import Sidebar from "./Sidebar";
import CartSidebar from "./CartSidebar";
import WishlistSidebar from "./WishlistSidebar";
import { isAuthenticated } from "../../utils/auth";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart.cartItems);
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  const navigate = useNavigate();

  // Handlers for Sidebars
  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);
  const toggleCart = () => setIsCartOpen((prev) => !prev);
  const toggleWishlist = () => setIsWishlistOpen((prev) => !prev);

  return (
    <header className="w-full bg-white p-4 flex items-center justify-between shadow-md">
      {/* Left Section */}
      <div className="flex items-center">
        <button onClick={openSidebar} className="md:hidden mr-2">
          <Hamburger className="w-6 h-6 text-gray-700" />
        </button>
        <div className="text-lg font-bold text-gray-900">3legant.</div>
      </div>

      {/* Center Section */}
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

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <div className="hidden md:block w-5 h-5 rounded-full">
          <Search />
        </div>
        <div
          className="hidden md:block w-5 h-5 rounded-full cursor-pointer"
          onClick={() => {
            if (!isAuthenticated()) {
              navigate("/signin");
            } else {
              navigate("/profile");
            }
          }}
        >
          <Profile />
        </div>
        {/* Wishlist Icon */}
        <div className="relative cursor-pointer" onClick={toggleWishlist}>
          <Wishlist />
          {wishlistItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {wishlistItems.length}
            </span>
          )}
        </div>
        {/* Cart Icon */}
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
        onCartClick={toggleCart}
        onWishlistClick={toggleWishlist}
      />

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={toggleCart} />

      {/* Wishlist Sidebar */}
      <WishlistSidebar isOpen={isWishlistOpen} onClose={toggleWishlist} />
    </header>
  );
};

export default Header;
