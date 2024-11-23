import { useState } from "react";
import PropTypes from "prop-types";
import { Snackbar, Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/actions/wishlistActions";
import { HeartIcon, FiveStars } from "../Common/Icons";

function ProductCard({ product, viewMode }) {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const isInWishlist = wishlistItems.some((item) => item.id === product.id);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleSnackbarClose = () => setSnackbarOpen(false);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, color: "Default" }));
    setSnackbarMessage("Product added to cart");
    setSnackbarSeverity("success");
    setSnackbarOpen(true);
  };

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
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
    <div
      className={`border rounded-lg shadow-lg bg-white relative ${
        viewMode === "list"
          ? "flex flex-col sm:flex-row items-center sm:items-start p-4 space-y-4 sm:space-y-0 sm:space-x-4"
          : viewMode === "desktoplist"
          ? "flex flex-col md:flex-row items-center p-6"
          : "p-4 w-full"
      }`}
    >
      {/* Image Section */}
      <div
        className={`relative ${
          viewMode === "desktoplist"
            ? "w-full md:w-1/2 pr-0 md:pr-4"
            : viewMode === "list"
            ? "w-full sm:w-1/3"
            : "w-full"
        }`}
      >
        {product.oldPrice && (
          <span className="absolute top-0 left-0 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-tr-lg rounded-bl-lg">
            -
            {Math.round(
              ((product.oldPrice - product.price) / product.oldPrice) * 100
            )}
            %
          </span>
        )}
        {product.isNew && (
          <span className="absolute top-6 left-0 bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded-tr-lg rounded-bl-lg">
            NEW
          </span>
        )}
        <img
          src={product.image}
          alt={product.title}
          className={`rounded-lg object-cover ${
            viewMode === "list"
              ? "w-full h-32 sm:h-40"
              : viewMode === "desktoplist"
              ? "w-full h-auto md:h-40 lg:h-48"
              : "w-full h-60"
          }`}
        />
      </div>

      {/* Product Details Section */}
      <div
        className={`${
          viewMode === "desktoplist"
            ? "w-full md:w-1/2 pl-0 md:pl-4"
            : viewMode === "list"
            ? "w-full sm:w-2/3"
            : "w-full mt-4"
        }`}
      >
        {/* Rating */}
        <div className="flex items-center text-yellow-400 text-sm">
          <FiveStars rating={product.rating} />
        </div>

        {/* Title */}
        <h2
          className={`font-semibold text-gray-800 ${
            viewMode === "desktoplist" || viewMode === "list"
              ? "text-md md:text-lg"
              : "text-lg"
          } mt-2 truncate`}
        >
          {product.title}
        </h2>

        {/* Pricing */}
        <div className="flex items-center gap-2 mt-1">
          <span
            className={`text-gray-800 font-bold ${
              viewMode === "desktoplist" || viewMode === "list"
                ? "text-lg md:text-xl"
                : "text-xl"
            }`}
          >
            ${product.price.toFixed(2)}
          </span>
          {product.oldPrice && (
            <span
              className={`text-gray-400 line-through ${
                viewMode === "desktoplist" || viewMode === "list"
                  ? "text-sm md:text-base"
                  : "text-sm"
              }`}
            >
              ${product.oldPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Description */}
        <p
          className={`text-sm text-gray-600 mt-2 ${
            viewMode === "desktoplist" || viewMode === "list"
              ? "hidden md:block"
              : ""
          }`}
        >
          {product.description}
        </p>

        {/* Actions */}
        <div
          className={`flex items-center space-x-2 mt-4 ${
            viewMode === "grid" ? "justify-center" : ""
          }`}
        >
          <button
            className="flex-1 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 text-sm md:text-base"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
          <button
            onClick={handleWishlistToggle}
            className="p-2 border rounded-full hover:bg-gray-100"
          >
            <HeartIcon color={isInWishlist ? "red" : "#6C7275"} />
          </button>
        </div>
      </div>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    oldPrice: PropTypes.number,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string,
    isNew: PropTypes.bool,
  }).isRequired,
  viewMode: PropTypes.oneOf(["grid", "list", "desktoplist"]).isRequired,
};

export default ProductCard;
