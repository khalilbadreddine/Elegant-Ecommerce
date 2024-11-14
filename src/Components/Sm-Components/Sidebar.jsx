// src/components/Sidebar.jsx
import {
  Cart,
  Close,
  Search,
  Dropdown,
  Wishlist,
  Instagram,
  Facebook,
  YouTube,
} from "./Icons"; // Import all icons

const Sidebar = ({ isOpen, onClose }) => {
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
        <a href="#home" className="block py-3 border-b border-gray-200">
          Home
        </a>
        <div className="flex justify-between items-center py-3 border-b border-gray-200">
          <a href="#shop" className="block">
            Shop
          </a>
          <Dropdown className="w-3 h-3" />
        </div>
        <div className="flex justify-between items-center py-3 border-b border-gray-200">
          <a href="#product" className="block">
            Product
          </a>
          <Dropdown className="w-3 h-3" />
        </div>
        <a href="#contact" className="block py-3 border-b border-gray-200">
          Contact Us
        </a>
      </nav>

      {/* Bottom Section with Cart, Wishlist, Sign In, and Social Media Icons */}
      <div className="p-4 border-t border-gray-200 space-y-4 text-sm">
        <div className="flex justify-between items-center">
          <span>Cart</span>
          <div className="flex items-center space-x-2">
            <Cart className="w-5 h-5" />
            <span>2</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span>Wishlist</span>
          <div className="flex items-center space-x-2">
            <Wishlist className="w-5 h-5" />
            <span>2</span>
          </div>
        </div>

        {/* Sign In Button */}
        <button className="w-full bg-black text-white py-2 rounded-lg">
          Sign In
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

export default Sidebar;
