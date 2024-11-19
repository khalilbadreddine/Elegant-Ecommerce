// src/Components/Sm-Components/Sidebar.jsx
import { useContext } from "react";
import PropTypes from "prop-types";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Cart,
  Close,
  Search,
  Dropdown,
  Wishlist,
  Instagram,
  Facebook,
  YouTube,
} from "./Icons";
import { isAuthenticated, signOut } from "../utils/auth";
import { CartContext } from "../contexts/CartContext";

const Sidebar = ({ isOpen, onClose, wishlistCount, onCartClick }) => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  const cartCount = cartItems.length;

  // Handle Sign-In or Sign-Out action
  const handleSignInOrOut = () => {
    if (isAuthenticated()) {
      signOut(); // Remove the token to sign out
      alert("You have been logged out.");
      navigate("/signin");
    } else {
      navigate("/signin"); // Redirect to Sign In page
    }
    onClose(); // Close sidebar after action
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full w-[60%] bg-white shadow-lg z-50 flex flex-col ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300`}
    >
      {/* Header with Logo and Close Button */}
      <div className="p-4 flex justify-between items-center border-b border-gray-200">
        <div className="text-lg font-bold">3legant.</div>
        <button onClick={onClose}>
          <Close className="w-3 h-3" />
        </button>
      </div>

      {/* Search Input */}
      <div className="p-4">
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
          <Search className="w-5 h-5 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="w-full outline-none text-sm"
          />
        </div>
      </div>

      {/* Navigation Links with Lines Between */}
      <nav className="px-4 py-4 text-gray-700 text-sm flex-grow">
        <NavLink
          to="/"
          className="block py-3 border-b border-gray-200"
          onClick={onClose}
        >
          Home
        </NavLink>
        <div
          className="flex justify-between items-center py-3 border-b border-gray-200"
          onClick={onClose}
        >
          <NavLink to="/shop" className="block">
            Shop
          </NavLink>
          <Dropdown className="w-3 h-3" />
        </div>
        <div
          className="flex justify-between items-center py-3 border-b border-gray-200"
          onClick={onClose}
        >
          <NavLink to="/product" className="block">
            Product
          </NavLink>
          <Dropdown className="w-3 h-3" />
        </div>
        <NavLink
          to="/contact"
          className="block py-3 border-b border-gray-200"
          onClick={onClose}
        >
          Contact Us
        </NavLink>
      </nav>

      {/* Bottom Section with Cart, Wishlist, Sign In, and Social Media Icons */}
      <div className="p-4 border-t border-gray-200 space-y-4 text-sm">
        {/* Cart Button */}
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => {
            onCartClick(); // Open Cart Sidebar
            onClose(); // Close Sidebar
          }}
        >
          <span>Cart</span>
          <div className="flex items-center space-x-2">
            <Cart className="w-5 h-5" />
            <span>{cartCount}</span> {/* Dynamic Cart Count */}
          </div>
        </div>

        {/* Wishlist */}
        <div className="flex justify-between items-center">
          <span>Wishlist</span>
          <div className="flex items-center space-x-2">
            <Wishlist className="w-5 h-5" />
            <span>{wishlistCount}</span>
          </div>
        </div>

        {/* Sign In/Sign Out Button */}
        <button
          onClick={handleSignInOrOut}
          className="w-full bg-black text-white py-2 rounded-lg"
        >
          {isAuthenticated() ? "Sign Out" : "Sign In"}
        </button>

        {/* Social Media Icons */}
        <div className="flex justify-around border-t border-gray-200 pt-4">
          <Instagram className="w-5 h-5" />
          <Facebook className="w-5 h-5" />
          <YouTube className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

// Prop validation
Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired, // Determines if the sidebar is open
  onClose: PropTypes.func.isRequired, // Callback to close the sidebar
  wishlistCount: PropTypes.number.isRequired, // Number of items in the wishlist
  onCartClick: PropTypes.func.isRequired, // Callback to open the cart sidebar
};

export default Sidebar;
