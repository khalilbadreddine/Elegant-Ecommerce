import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Cart, Hamburger, Search, Profile } from "./Icons";
import Sidebar from "./Sidebar";
import CartSidebar from "./CartSidebar"; // Import the CartSidebar component
import { isAuthenticated } from "../utils/auth";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // State for the cart sidebar

  const [cartItems, setCartItems] = useState([
    {
      image: "https://via.placeholder.com/50",
      title: "Tray Table",
      color: "Black",
      price: 19.19,
      quantity: 2,
    },
    {
      image: "https://via.placeholder.com/50",
      title: "Table Lamp",
      color: "Gold",
      price: 39.0,
      quantity: 1,
    },
  ]);

  const navigate = useNavigate();

  // Handlers for Sidebar
  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  // Handler for Cart Sidebar
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  // Handler to Remove an Item
  const handleRemoveItem = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  // Handler to Change Item Quantity
  const handleQuantityChange = (index, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, quantity: newQuantity } : item
      )
    );
  };

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
          <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {cartItems.length}
          </span>
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
        cartCount={cartItems.length}
        wishlistCount={0} // Update with the actual wishlist count
        onCartClick={toggleCart} // Pass the toggleCart function
      />

      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={toggleCart}
        cartItems={cartItems}
        onRemoveItem={handleRemoveItem}
        onQuantityChange={handleQuantityChange}
      />
    </header>
  );
};

export default Header;
