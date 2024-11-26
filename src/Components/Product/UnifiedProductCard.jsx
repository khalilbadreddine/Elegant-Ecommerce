/* UnifiedProductCard.js */
import PropTypes from "prop-types";
import { useState } from "react";
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
  onSnackbar, // Optional function for external snackbar handling
  viewMode = "grid", // 'grid', 'list', 'desktoplist'
  useNavigation = false, // Whether to navigate to product page or open a modal
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const isInWishlist = wishlistItems.some((item) => item.id === product.id);

  // State for snackbar notifications
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleSnackbarClose = () =>
    setSnackbar((prev) => ({ ...prev, open: false }));

  // State for product dialog
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Handle adding product to cart
  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, color: "Default" }));
    const message = "Product added to cart";
    if (onSnackbar) {
      onSnackbar(message, "success");
    } else {
      setSnackbar({ open: true, message, severity: "success" });
    }
  };

  // Handle adding/removing product from wishlist
  const handleWishlistToggle = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
      const message = "Removed from wishlist";
      if (onSnackbar) {
        onSnackbar(message, "info");
      } else {
        setSnackbar({ open: true, message, severity: "info" });
      }
    } else {
      dispatch(addToWishlist(product));
      const message = "Added to wishlist";
      if (onSnackbar) {
        onSnackbar(message, "success");
      } else {
        setSnackbar({ open: true, message, severity: "success" });
      }
    }
  };

  // Handle viewing product details
  const handleViewProduct = () => {
    if (useNavigation) {
      navigate(`/product/${product.id}`);
    } else {
      setIsDialogOpen(true);
    }
  };

  // Truncate product description
  const getTruncatedDescription = (text, maxLength = 80) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  // Dynamic classes based on view mode
  const getContainerClass = () => {
    switch (viewMode) {
      case "list":
        return "flex flex-col sm:flex-row items-center sm:items-start p-4 space-y-4 sm:space-y-0 sm:space-x-4";
      case "desktoplist":
        return "flex flex-row items-start p-6 space-x-6 bg-white rounded-lg shadow-md";
      default: // 'grid'
        return "p-4 w-full";
    }
  };

  const getImageContainerClass = () => {
    switch (viewMode) {
      case "list":
        return "w-full sm:w-1/3";
      case "desktoplist":
        return "w-1/2 rounded-lg overflow-hidden";
      default:
        return "w-full";
    }
  };

  const getImageClass = () => {
    switch (viewMode) {
      case "list":
        return "w-full h-32 sm:h-40 object-cover";
      case "desktoplist":
        return "w-full h-48 md:h-56 lg:h-64 object-cover";
      default:
        return "w-full h-48";
    }
  };

  const getDetailsClass = () => {
    switch (viewMode) {
      case "list":
        return "w-full sm:w-2/3 flex flex-col justify-between";
      case "desktoplist":
        return "w-1/2 flex flex-col justify-between space-y-4";
      default:
        return "w-full mt-4";
    }
  };

  // Render rating stars ****
  const renderStars = () => {
    return <FiveStars rating={product.rating} />;
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
        <button
          onClick={handleWishlistToggle}
          aria-label={isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
          className="absolute top-3 right-3 bg-[#F3F5F7] rounded-full p-2 shadow-md hover:shadow-lg transition"
        >
          <HeartIcon color={isInWishlist ? "red" : "#6C7275"} />
        </button>
      </div>

      {/* Product Details Section */}
      <div className={getDetailsClass()}>
        <div className="flex items-center text-yellow-400 text-sm">
          {renderStars()}
          <span className="text-sm text-[#6C7275] ml-2">
            {product.rating.toFixed(1)} out of 5
          </span>
        </div>
        <h3 className="font-semibold text-gray-800 text-lg mt-2 line-clamp-1">
          {product.title}
        </h3>
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {getTruncatedDescription(product.description)}
        </p>
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

        <div className="mt-auto flex items-center space-x-2">
          <button
            className="flex-1 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 text-sm sm:text-base"
            onClick={handleViewProduct}
          >
            {useNavigation ? "View Product" : "View Details"}
          </button>
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-[#232627] text-white py-2 rounded-lg hover:bg-[#343839] transition-colors duration-200 text-sm sm:text-base"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Dialog */}
      {!useNavigation && (
        <ProductDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          product={product}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* Snackbar Notification */}
      {!onSnackbar && (
        <SnackbarNotification
          open={snackbar.open}
          onClose={handleSnackbarClose}
          message={snackbar.message}
          severity={snackbar.severity}
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
