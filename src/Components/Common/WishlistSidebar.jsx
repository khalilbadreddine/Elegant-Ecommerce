import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { useState } from "react";
import { Snackbar, Alert, useMediaQuery } from "@mui/material";
import WishlistProductCard from "../Product/WishlistProductCard";
import { removeFromWishlist } from "../../redux/actions/wishlistActions";
import { addToCart } from "../../redux/actions/cartActions";

const WishlistSidebar = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  // Snackbar state
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  // Responsive breakpoint
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  // Function to add all wishlist items to the cart
  const addAllToCart = () => {
    wishlistItems.forEach((item) => dispatch(addToCart(item)));
    setSnackbarMessage("All wishlist items added to cart");
    setSnackbarSeverity("success");
    setSnackbarOpen(true);
    onClose();
  };

  // Function to add individual item to cart
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    setSnackbarMessage(`${item.title} added to cart`);
    setSnackbarSeverity("success");
    setSnackbarOpen(true);
  };

  // Function to remove item from wishlist
  const handleRemoveFromWishlist = (itemId) => {
    dispatch(removeFromWishlist(itemId));
    setSnackbarMessage("Item removed from wishlist");
    setSnackbarSeverity("info");
    setSnackbarOpen(true);
  };

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
        className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-50 flex flex-col`}
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
          {wishlistItems.map((item) => (
            <WishlistProductCard
              key={item.id}
              productId={item.id}
              image={item.image}
              title={item.title}
              color={item.color || "Default"}
              price={item.price}
              onRemove={() => handleRemoveFromWishlist(item.id)}
              onAddToCart={() => handleAddToCart(item)}
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
