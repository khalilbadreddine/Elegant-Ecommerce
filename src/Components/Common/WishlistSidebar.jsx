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
  const [loading, setLoading] = useState(false); // Add loading state
  const wishlist = useSelector((state) => state.wishlist.wishlistItems || { items: [] });
  const wishlistItems = wishlist.items || [];

  const sidebarRef = useRef(null);
  const itemsRef = useRef([]);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const isMobile = useMediaQuery("(max-width:600px)");

  const handleSnackbarClose = () => setSnackbarOpen(false);

  const addAllToCart = () => {
    setLoading(true); // Set loading state
    wishlistItems.forEach((item) => {
      if (item.productId?._id) {
        dispatch(addToCart(item.productId._id));
      }
    });
    setLoading(false); // End loading
    setSnackbarMessage("All wishlist items added to cart");
    setSnackbarSeverity("success");
    setSnackbarOpen(true);
    onClose();
  };

  const handleAddToCart = (item) => {
    setLoading(true); // Start loading
    if (item.productId?._id) {
      dispatch(addToCart(item.productId._id)).finally(() => setLoading(false)); // End loading after dispatch
      setSnackbarMessage(`${item.productId.title} added to cart`);
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
    }
  };

  const handleRemoveFromWishlist = (itemId) => {
    setLoading(true); // Start loading
    dispatch(removeFromWishlist(itemId)).finally(() => setLoading(false)); // End loading after dispatch
    setSnackbarMessage("Item removed from wishlist");
    setSnackbarSeverity("info");
    setSnackbarOpen(true);
  };

  useEffect(() => {
    const sidebar = sidebarRef.current;
  
    if (isOpen) {
      gsap.to(sidebar, { x: 0, duration: 0.3, ease: "power1.out" });
  
      if (itemsRef.current.some((el) => el)) {
        gsap.to(itemsRef.current.filter((el) => el), {
          opacity: 1,
          stagger: 0.05,
          duration: 0.3,
          ease: "power1.out",
        });
      }
    } else {
      gsap.to(sidebar, { x: "100%", duration: 0.3, ease: "power1.in" });
  
      if (itemsRef.current.some((el) => el)) {
        gsap.to(itemsRef.current.filter((el) => el), {
          opacity: 0,
          stagger: 0.05,
          duration: 0.2,
          ease: "power1.in",
        });
      }
    }
  }, [isOpen]);
  
  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose} />}
      <div
        ref={sidebarRef}
        className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg transform translate-x-full z-50 flex flex-col"
      >
        {/* Header */}
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-bold">Wishlist</h2>
          <button onClick={onClose} className="text-gray-600">✕</button>
        </div>

        {/* Wishlist Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {loading ? ( // Show loading indicator
            <p className="text-gray-500">Loading wishlist...</p>
          ) : wishlistItems.length > 0 ? (
            wishlistItems.map((item, index) => (
              <WishlistProductCard
                key={item._id}
                productId={item.productId?._id || ""}
                image={item.productId?.images?.[0] || ""}
                title={item.productId?.title || "No Title Available"}
                price={item.productId?.price || 0}
                onRemove={() => handleRemoveFromWishlist(item._id)}
                onAddToCart={() => handleAddToCart(item)}
                ref={(el) => (itemsRef.current[index] = el)}
              />
            ))
          ) : (
            <p className="text-gray-600">Your wishlist is empty.</p>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t bg-white">
          <button
            onClick={addAllToCart}
            className="w-full bg-black text-white py-2 mt-4"
            disabled={wishlistItems.length === 0 || loading}
          >
            Add All to Cart
          </button>
          <button onClick={onClose} className="w-full bg-gray-200 text-black py-2 mt-2">
            Close Wishlist
          </button>
        </div>
      </div>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: isMobile ? "top" : "bottom", horizontal: "center" }}
        ContentProps={{ sx: { backgroundColor: "transparent", boxShadow: "none" } }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%", backgroundColor: "#fff", color: "#000", boxShadow: 3 }}
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
