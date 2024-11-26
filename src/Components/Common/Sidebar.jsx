import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
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
  const sidebarRef = useRef(null);
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const cartCount = cartItems.length;
  const wishlistCount = wishlistItems.length;

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

  // GSAP Animation
  useEffect(() => {
    const sidebar = sidebarRef.current;
    const items = sidebar.querySelectorAll(".menu-item");

    if (isOpen) {
      // Sidebar entrance
      gsap.fromTo(
        sidebar,
        { x: "-100%", opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        }
      );

      // Menu items cascade
      gsap.fromTo(
        items,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.4,
          ease: "power2.out",
        }
      );
    } else {
      // Sidebar exit
      gsap.to(sidebar, {
        x: "-100%",
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
      });

      // Menu items cascade out
      gsap.to(items, {
        opacity: 0,
        y: 10,
        stagger: 0.05,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={sidebarRef}
      className="fixed top-0 left-0 h-full w-[60%] bg-white shadow-lg z-50 flex flex-col"
      style={{
        transform: "translateX(-100%)",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div className="p-4 flex justify-between items-center border-b border-gray-200">
        <div className="text-lg font-bold">Menu</div>
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
        {["Home", "Shop", "Product", "Contact Us"].map((item, index) => (
          <NavLink
            key={index}
            to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
            className="menu-item block py-3 border-b border-gray-200"
            onClick={onClose}
          >
            {item}
          </NavLink>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-gray-200 space-y-4 text-sm">
        <div
          className="menu-item flex justify-between items-center cursor-pointer"
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

        <div
          className="menu-item flex justify-between items-center cursor-pointer"
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

        <button
          onClick={handleSignInOrOut}
          className="menu-item w-full bg-black text-white py-2 rounded-lg"
        >
          {isAuthenticated() ? "Sign Out" : "Sign In"}
        </button>

        <div className="menu-item flex justify-around border-t border-gray-200 pt-4">
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
