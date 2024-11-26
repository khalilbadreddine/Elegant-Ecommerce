import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/actions/cartActions";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/actions/wishlistActions";
import ProductDialog from "../Common/ProductDialog";
import SnackbarNotification from "../Common/SnackbarNotification";
import { HeartIcon, FiveStars } from "../Common/Icons";

const UnifiedProductCard = ({
  product,
  onSnackbar,
  viewMode = "grid",
  useNavigation = false,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const isInWishlist = wishlistItems.some((item) => item.id === product.id);

  const [snackbarQueue, setSnackbarQueue] = useState([]); // Queue for Snackbar messages
  const [currentSnackbar, setCurrentSnackbar] = useState(null); // Currently displayed Snackbar
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Function to add a message to the Snackbar queue
  const enqueueSnackbar = (message, severity) => {
    setSnackbarQueue((prevQueue) => [...prevQueue, { message, severity }]);
  };

  // Effect to handle displaying Snackbar messages sequentially
  useEffect(() => {
    if (!currentSnackbar && snackbarQueue.length > 0) {
      setCurrentSnackbar(snackbarQueue[0]); // Show the first message in the queue
      setSnackbarQueue((prevQueue) => prevQueue.slice(1)); // Remove it from the queue
    }
  }, [currentSnackbar, snackbarQueue]);

  const handleSnackbarClose = () => setCurrentSnackbar(null); // Clear current Snackbar

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, color: "Default" }));
    const message = "Product added to cart";
    if (onSnackbar) {
      onSnackbar(message, "success");
    } else {
      enqueueSnackbar(message, "success");
    }
  };

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
      const message = "Removed from wishlist";
      if (onSnackbar) {
        onSnackbar(message, "info");
      } else {
        enqueueSnackbar(message, "info");
      }
    } else {
      dispatch(addToWishlist(product));
      const message = "Added to wishlist";
      if (onSnackbar) {
        onSnackbar(message, "success");
      } else {
        enqueueSnackbar(message, "success");
      }
    }
  };

  const handleViewProduct = () => {
    if (useNavigation) {
      navigate(`/product/${product.id}`);
    } else {
      setIsDialogOpen(true);
    }
  };

  const getTruncatedDescription = (text, maxLength = 80) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  const renderStars = () => {
    return <FiveStars rating={product.rating} />;
  };

  const getContainerClass = () => {
    switch (viewMode) {
      case "list":
        return "grid grid-cols-[auto_1fr] gap-6 items-stretch bg-white shadow-md hover:shadow-xl rounded-lg transition-shadow duration-300 p-6";
      case "desktoplist":
        return "grid grid-cols-[auto_2fr] gap-8 items-stretch bg-white shadow-md hover:shadow-xl rounded-lg transition-shadow duration-300 p-8";
      default:
        return "flex flex-col border bg-white shadow-md hover:shadow-xl rounded-lg transition-shadow duration-300 p-4";
    }
  };

  const getImageClass = () => {
    switch (viewMode) {
      case "list":
        return "h-full w-32 sm:w-40 md:w-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105";
      case "desktoplist":
        return "h-full w-48 md:w-56 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105";
      default:
        return "w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105";
    }
  };

  const getTextClass = () => {
    switch (viewMode) {
      case "list":
        return "text-xs sm:text-sm"; // Smaller text for mobile in list view
      case "desktoplist":
        return "text-sm md:text-base"; // Standard text for desktop list
      default:
        return "text-sm"; // Default size for grid view
    }
  };

  return (
    <div className={getContainerClass()}>
      <div className="relative h-full">
        {product.oldPrice && (
          <span className="absolute top-3 left-3 bg-gradient-to-r from-green-400 to-green-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
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
          className={getImageClass()}
          loading="lazy"
        />
        <button
          onClick={handleWishlistToggle}
          aria-label={isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
          className="absolute top-3 right-3 bg-gray-100 p-2 rounded-full shadow-md hover:bg-gray-200 transition"
        >
          <HeartIcon color={isInWishlist ? "#FF0000" : "#6C7275"} />
        </button>
      </div>

      <div>
        <div className={`flex items-center text-gray-500 ${getTextClass()}`}>
          {renderStars()}
          <span className={`ml-2 ${getTextClass()}`}>
            {product.rating.toFixed(1)} out of 5
          </span>
        </div>
        <h3
          className={`font-medium text-gray-900 mt-2 line-clamp-1 ${getTextClass()}`}
        >
          {product.title}
        </h3>
        <p className={`mt-2 line-clamp-2 text-gray-600 ${getTextClass()}`}>
          {getTruncatedDescription(product.description)}
        </p>
        <div className="flex items-center gap-2 mt-4">
          <span
            className={`text-gray-900 font-bold ${
              viewMode === "list" ? "text-lg" : "text-xl"
            }`}
          >
            ${product.price.toFixed(2)}
          </span>
          {product.oldPrice && (
            <span className={`text-gray-400 line-through ${getTextClass()}`}>
              ${product.oldPrice.toFixed(2)}
            </span>
          )}
        </div>

        <div className="flex items-center mt-4 space-x-2">
          <button
            className={`flex-1 border border-gray-400 py-2 rounded-lg hover:border-gray-700 hover:text-gray-800 transition duration-200 ${getTextClass()}`}
            onClick={handleViewProduct}
          >
            {useNavigation ? "View Product" : "View Details"}
          </button>
          <button
            onClick={handleAddToCart}
            className={`flex-1 bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition duration-200 ${getTextClass()}`}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {!useNavigation && (
        <ProductDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          product={product}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* Render current Snackbar */}
      {currentSnackbar && (
        <SnackbarNotification
          open={Boolean(currentSnackbar)}
          onClose={handleSnackbarClose}
          message={currentSnackbar.message}
          severity={currentSnackbar.severity}
        />
      )}
    </div>
  );
};

UnifiedProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    oldPrice: PropTypes.number,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string,
  }).isRequired,
  onSnackbar: PropTypes.func,
  viewMode: PropTypes.oneOf(["grid", "list", "desktoplist"]),
  useNavigation: PropTypes.bool,
};

export default UnifiedProductCard;
