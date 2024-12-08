import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Cart, Hamburger, Search, Profile, Wishlist } from "./Icons";

const Header = ({ openSidebar, toggleCart, toggleWishlist }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const cartItems = useSelector((state) => state.cart.cartItems) || { items: [] };
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems) || { items: [] };
  const { userInfo } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const handleProfileClick = () => {
    if (!userInfo) {
      navigate("/signin");
    } else {
      navigate("/profile");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 p-4 flex items-center justify-between transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg rounded-lg w-[80%] top-4 left-1/2 transform -translate-x-1/2"
          : "bg-white shadow-md w-full top-0 left-0"
      }`}
    >
      {/* Left Section */}
      <div className="flex items-center">
        <button onClick={openSidebar} className="md:hidden mr-2">
          <Hamburger className="w-6 h-6 text-gray-700" />
        </button>
        <div className="text-lg font-bold text-gray-900">3legant.</div>
      </div>

      {/* Center Section */}
      <nav className="hidden md:flex space-x-8 text-gray-700 text-sm font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-black font-bold" : "hover:text-gray-900"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive ? "text-black font-bold" : "hover:text-gray-900"
          }
        >
          Shop
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-black font-bold" : "hover:text-gray-900"
          }
        >
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
          onClick={handleProfileClick}
        >
          <Profile />
        </div>
        {/* Wishlist Icon */}
        <div className="relative cursor-pointer" onClick={toggleWishlist}>
          <Wishlist />
          {wishlistItems.items?.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {wishlistItems.items.length}
            </span>
          )}
        </div>
        {/* Cart Icon */}
        <div className="relative cursor-pointer" onClick={toggleCart}>
          <Cart />
          {cartItems.items?.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartItems.items.length}
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
