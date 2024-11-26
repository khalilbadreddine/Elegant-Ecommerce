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
  onSnackbar,
  viewMode = "grid",
  useNavigation = false,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const isInWishlist = wishlistItems.some((item) => item.id === product.id);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSnackbarClose = () =>
    setSnackbar((prev) => ({ ...prev, open: false }));

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, color: "Default" }));
    const message = "Product added to cart";
    if (onSnackbar) {
      onSnackbar(message, "success");
    } else {
      setSnackbar({ open: true, message, severity: "success" });
    }
  };

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
        return "flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 bg-[#FFFFFF] shadow-md hover:shadow-lg rounded-lg transition-shadow duration-300 p-6";
      case "desktoplist":
        return "flex flex-row items-start space-x-8 bg-[#FFFFFF] shadow-md hover:shadow-lg rounded-lg transition-shadow duration-300 p-8";
      default:
        return "flex flex-col bg-[#FFFFFF] shadow-md hover:shadow-lg rounded-lg transition-shadow duration-300 p-4";
    }
  };

  const getImageClass = () => {
    switch (viewMode) {
      case "list":
        return "w-full h-32 sm:h-40 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105";
      case "desktoplist":
        return "w-full h-48 md:h-56 lg:h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105";
      default:
        return "w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105";
    }
  };

  return (
    <div className={getContainerClass()}>
      <div className="relative group">
        {product.oldPrice && (
          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-md">
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
        />
        <button
          onClick={handleWishlistToggle}
          aria-label={isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
          className="absolute top-3 right-3 bg-[#F3F5F7] rounded-full p-2 shadow-md hover:shadow-lg transition"
        >
          <HeartIcon color={isInWishlist ? "#232627" : "#6C7275"} />
        </button>
      </div>

      <div className="flex flex-col mt-4 sm:mt-0 sm:ml-6">
        <div className="flex items-center text-yellow-400 text-sm">
          {renderStars()}
          <span className="text-sm text-[#6C7275] ml-2">
            {product.rating.toFixed(1)} out of 5
          </span>
        </div>
        <h3 className="font-semibold text-[#141718] text-lg mt-2 line-clamp-1">
          {product.title}
        </h3>
        <p className="text-sm text-[#6C7275] mt-2 line-clamp-2">
          {getTruncatedDescription(product.description)}
        </p>
        <div className="flex items-center gap-2 mt-4">
          <span className="text-[#141718] font-bold text-xl">
            ${product.price.toFixed(2)}
          </span>
          {product.oldPrice && (
            <span className="text-[#BEC0C0] line-through text-sm">
              ${product.oldPrice.toFixed(2)}
            </span>
          )}
        </div>

        <div className="mt-auto flex items-center space-x-2">
          <button
            className="flex-1 bg-[#232627] text-white py-2 rounded-lg hover:bg-[#343839] transition-colors duration-200 text-sm sm:text-base"
            onClick={handleViewProduct}
          >
            {useNavigation ? "View Product" : "View Details"}
          </button>
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-[#141718] text-white py-2 rounded-lg hover:bg-[#232627] transition-colors duration-200 text-sm sm:text-base"
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
