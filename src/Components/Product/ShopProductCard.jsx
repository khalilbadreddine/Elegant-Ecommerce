import { useState } from "react";
import PropTypes from "prop-types";
import { Snackbar, Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/actions/wishlistActions";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { HeartIcon, FiveStars } from "../Common/Icons";

function ProductCard({ product, viewMode }) {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const isInWishlist = wishlistItems.some((item) => item.id === product.id);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const [isDialogOpen, setIsDialogOpen] = useState(false);

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

  const toggleDialog = () => setIsDialogOpen(!isDialogOpen);

  const getTruncatedDescription = (text) => {
    const maxLength = 80; // Max characters to display on the card
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  const getContainerClass = () => {
    switch (viewMode) {
      case "list":
        return "flex flex-col sm:flex-row items-center sm:items-start p-4 space-y-4 sm:space-y-0 sm:space-x-4";
      case "desktoplist":
        return "flex flex-row items-start p-6 space-x-6 bg-white rounded-lg shadow-md";
      default: // grid
        return "p-4 w-full";
    }
  };

  const getImageContainerClass = () => {
    switch (viewMode) {
      case "list":
        return "w-full sm:w-1/3";
      case "desktoplist":
        return "w-1/2 rounded-lg overflow-hidden";
      default: // grid
        return "w-full";
    }
  };

  const getImageClass = () => {
    switch (viewMode) {
      case "list":
        return "w-full h-32 sm:h-40 object-cover";
      case "desktoplist":
        return "w-full h-48 md:h-56 lg:h-64 object-cover";
      default: // grid
        return "w-full h-48";
    }
  };

  const getDetailsClass = () => {
    switch (viewMode) {
      case "list":
        return "w-full sm:w-2/3 flex flex-col justify-between";
      case "desktoplist":
        return "w-1/2 flex flex-col justify-between space-y-4";
      default: // grid
        return "w-full mt-4";
    }
  };

  return (
    <div
      className={`border rounded-lg shadow-lg bg-white relative ${getContainerClass()}`}
    >
      {/* Image Section */}
      <div className={`relative ${getImageContainerClass()}`}>
        {product.oldPrice && (
          <span className="absolute top-0 left-0 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-tr-lg rounded-bl-lg">
            -
            {Math.round(
              ((product.oldPrice - product.price) / product.oldPrice) * 100
            )}
            %
          </span>
        )}
        <img
          src={product.image}
          alt={product.title}
          className={`rounded-lg object-cover ${getImageClass()}`}
        />
      </div>

      {/* Product Details Section */}
      <div className={getDetailsClass()}>
        <div className="flex items-center text-yellow-400 text-sm">
          <FiveStars rating={product.rating} />
        </div>
        <h2 className="font-semibold text-gray-800 text-lg mt-2 truncate">
          {product.title}
        </h2>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-gray-800 font-bold text-xl">
            ${product.price.toFixed(2)}
          </span>
          {product.oldPrice && (
            <span className="text-gray-400 line-through text-sm">
              ${product.oldPrice.toFixed(2)}
            </span>
          )}
        </div>
        <p className="text-sm text-gray-600 mt-2">
          {getTruncatedDescription(product.description)}
        </p>
        <a
          onClick={toggleDialog}
          className="text-blue-500 text-sm mt-1 hover:underline cursor-pointer"
        >
          See More
        </a>

        <div className="mt-auto flex items-center">
          <button
            className="flex-1 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 text-sm sm:text-base"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
          <button
            onClick={handleWishlistToggle}
            className="p-2 border rounded-full hover:bg-gray-100 ml-2"
          >
            <HeartIcon color={isInWishlist ? "red" : "#6C7275"} />
          </button>
        </div>
      </div>

      {/* Dialog */}
      <Dialog
        open={isDialogOpen}
        handler={toggleDialog}
        className="max-w-screen sm:max-w-md mx-auto p-2"
      >
        {/* Close Icon */}
        <button
          onClick={toggleDialog}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          aria-label="Close"
        >
          ✕
        </button>

        <DialogHeader className="text-lg font-semibold text-gray-800 px-4 py-2">
          {product.title}
        </DialogHeader>
        <DialogBody className="overflow-y-auto max-h-[70vh] px-4 py-2">
          {/* Responsive Image */}
          <div className="w-full max-h-64 md:max-h-80 overflow-hidden rounded-lg">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Product Description */}
          <p className="text-sm text-gray-600 mt-2">{product.description}</p>
          <div className="flex items-center gap-2 mt-4">
            <span className="text-gray-800 font-bold text-xl">
              ${product.price.toFixed(2)}
            </span>
            {product.oldPrice && (
              <span className="text-gray-400 line-through text-sm">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
          </div>
        </DialogBody>
        <DialogFooter className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 px-4 py-2">
          {/* Secondary Button */}
          <button
            className="border-2 border-black text-black py-2 px-4 rounded-full w-full sm:w-auto hover:bg-gray-100"
            onClick={() => {
              window.location.href =
                "#"; /* product.url || `/product/${product.id}`; */
            }}
          >
            View Product Page
          </button>

          {/* Primary Button */}
          <button
            className="bg-black text-white py-2 px-4 rounded-full w-full sm:w-auto hover:bg-gray-800"
            onClick={() => {
              handleAddToCart();
              toggleDialog();
            }}
          >
            Add to Cart
          </button>
        </DialogFooter>
      </Dialog>

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
