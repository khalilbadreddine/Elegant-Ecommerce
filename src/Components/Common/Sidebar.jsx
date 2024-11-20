import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Cart,
  Close,
  Search,
  Wishlist,
  Instagram,
  Facebook,
  YouTube,
} from "./Icons";
import { isAuthenticated, signOut } from "../../utils/auth";

const Sidebar = ({ isOpen, onClose, onCartClick, onWishlistClick }) => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const cartCount = cartItems.length;
  const wishlistCount = wishlistItems.length;

  // Handle Sign-In or Sign-Out action
  const handleSignInOrOut = () => {
    if (isAuthenticated()) {
      signOut();
      alert("You have been logged out.");
      navigate("/signin");
    } else {
      navigate("/signin");
    }
    onClose();
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full w-[60%] bg-white shadow-lg z-50 flex flex-col ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300`}
    >
      {/* Header */}
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

      {/* Navigation Links */}
      <nav className="px-4 py-4 text-gray-700 text-sm flex-grow">
        <NavLink
          to="/"
          className="block py-3 border-b border-gray-200"
          onClick={onClose}
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className="block py-3 border-b border-gray-200"
          onClick={onClose}
        >
          Shop
        </NavLink>
        <NavLink
          to="/product"
          className="block py-3 border-b border-gray-200"
          onClick={onClose}
        >
          Product
        </NavLink>
        <NavLink
          to="/contact"
          className="block py-3 border-b border-gray-200"
          onClick={onClose}
        >
          Contact Us
        </NavLink>
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-gray-200 space-y-4 text-sm">
        {/* Cart */}
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => {
            onCartClick();
            onClose();
          }}
        >
          <span>Cart</span>
          <div className="flex items-center space-x-2">
            <Cart className="w-5 h-5" />
            <span>{cartCount}</span>
          </div>
        </div>

        {/* Wishlist */}
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => {
            onWishlistClick();
            onClose();
          }}
        >
          <span>Wishlist</span>
          <div className="flex items-center space-x-2">
            <Wishlist className="w-5 h-5" />
            <span>{wishlistCount}</span>
          </div>
        </div>

        {/* Sign In/Out */}
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

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onCartClick: PropTypes.func.isRequired,
  onWishlistClick: PropTypes.func.isRequired,
};

export default Sidebar;
