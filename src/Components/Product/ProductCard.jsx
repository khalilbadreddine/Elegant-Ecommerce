import { useState } from "react";
import PropTypes from "prop-types";
import { Snackbar, Alert, useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/actions/wishlistActions";
import { HeartIcon } from "../Common/Icons";

const ProductCard = ({ id, img, name, price, originalPrice }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const isInWishlist = wishlistItems.some((item) => item.id === id);

  // Snackbar state
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  // Responsive breakpoint
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  // Add to Cart
  const handleAddToCart = () => {
    const product = {
      id,
      image: img,
      title: name,
      price: parseFloat(price),
      color: "Default",
    };
    dispatch(addToCart(product));
    setSnackbarMessage("Product added to cart");
    setSnackbarSeverity("success");
    setSnackbarOpen(true);
  };

  // Toggle Wishlist
  const handleWishlistToggle = () => {
    const product = {
      id,
      image: img,
      title: name,
      price: parseFloat(price),
    };
    if (isInWishlist) {
      dispatch(removeFromWishlist(id));
      setSnackbarMessage("Removed from wishlist");
      setSnackbarSeverity("info");
    } else {
      dispatch(addToWishlist(product));
      setSnackbarMessage("Added to wishlist");
      setSnackbarSeverity("success");
    }
    setSnackbarOpen(true);
  };

  return (
    <div className="bg-white mb-4 relative w-full max-w-[262px] h-[400px] sm:h-[450px] rounded-lg border flex flex-col border-gray-200 shadow-md group overflow-hidden font-poppins">
      {/* Heart Icon */}
      <button
        className="absolute top-3 right-3 z-10 bg-white p-2 sm:p-2.5 rounded-full shadow-md hover:shadow-lg transition-all"
        onClick={handleWishlistToggle}
      >
        <HeartIcon color={isInWishlist ? "red" : "#6C7275"} />
      </button>

      <div className="relative w-full h-[260px] sm:h-[320px] bg-gray-200">
        <img
          className="w-full h-full object-cover object-center"
          src={img}
          alt={name}
        />
        <button
          className="absolute w-[70%] bottom-3 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm py-2 px-4 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      </div>
      <div className="p-3 sm:p-4">
        <h3 className="text-sm sm:text-base mb-1 font-semibold text-gray-800 truncate">
          {name}
        </h3>
        <div className="flex gap-3 items-center mt-2">
          <span className="text-green-600 text-lg">${price}</span>
          <span className="line-through text-gray-400 text-sm">
            ${originalPrice}
          </span>
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
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  originalPrice: PropTypes.string.isRequired,
};

export default ProductCard;
