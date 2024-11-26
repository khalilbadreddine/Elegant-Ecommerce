import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import { Snackbar, Alert, useMediaQuery } from "@mui/material";
import WishlistProductCard from "../Product/WishlistProductCard";
import { removeFromWishlist } from "../../redux/actions/wishlistActions";
import { addToCart } from "../../redux/actions/cartActions";
import { gsap } from "gsap";

const WishlistSidebar = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  const sidebarRef = useRef(null);
  const itemsRef = useRef([]);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const isMobile = useMediaQuery("(max-width:600px)");

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const addAllToCart = () => {
    wishlistItems.forEach((item) => dispatch(addToCart(item)));
    setSnackbarMessage("All wishlist items added to cart");
    setSnackbarSeverity("success");
    setSnackbarOpen(true);
    onClose();
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    setSnackbarMessage(`${item.title} added to cart`);
    setSnackbarSeverity("success");
    setSnackbarOpen(true);
  };

  const handleRemoveFromWishlist = (itemId) => {
    dispatch(removeFromWishlist(itemId));
    setSnackbarMessage("Item removed from wishlist");
    setSnackbarSeverity("info");
    setSnackbarOpen(true);
  };

  useEffect(() => {
    const sidebar = sidebarRef.current;

    if (isOpen) {
      // Sidebar slide-in
      gsap.to(sidebar, {
        x: 0,
        duration: 0.3,
        ease: "power1.out",
      });

      // Items fade-in
      gsap.to(itemsRef.current, {
        opacity: 1,
        stagger: 0.05,
        duration: 0.3,
        ease: "power1.out",
      });
    } else {
      // Sidebar slide-out
      gsap.to(sidebar, {
        x: "100%",
        duration: 0.3,
        ease: "power1.in",
      });

      // Items fade-out
      gsap.to(itemsRef.current, {
        opacity: 0,
        stagger: 0.05,
        duration: 0.2,
        ease: "power1.in",
      });
    }
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg transform translate-x-full z-50 flex flex-col"
      >
        {/* Header */}
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-bold">Wishlist</h2>
          <button onClick={onClose} className="text-gray-600">
            ✕
          </button>
        </div>

        {/* Wishlist Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {wishlistItems.map((item, index) => (
            <WishlistProductCard
              key={item.id}
              productId={item.id}
              image={item.image}
              title={item.title}
              color={item.color || "Default"}
              price={item.price}
              onRemove={() => handleRemoveFromWishlist(item.id)}
              onAddToCart={() => handleAddToCart(item)}
              ref={(el) => (itemsRef.current[index] = el)} // Store item references
            />
          ))}
          {wishlistItems.length === 0 && (
            <p className="text-gray-600">Your wishlist is empty.</p>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t bg-white">
          <button
            onClick={addAllToCart}
            className="w-full bg-black text-white py-2 mt-4"
            disabled={wishlistItems.length === 0}
          >
            Add All to Cart
          </button>
          <button
            onClick={onClose}
            className="w-full bg-gray-200 text-black py-2 mt-2"
          >
            Close Wishlist
          </button>
        </div>
      </div>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{
          vertical: isMobile ? "top" : "bottom",
          horizontal: "center",
        }}
        ContentProps={{
          sx: {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{
            width: "100%",
            backgroundColor: "#fff",
            color: "#000",
            boxShadow: 3,
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

WishlistSidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default WishlistSidebar;
