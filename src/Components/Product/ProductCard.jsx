import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addToCart } from "../../redux/actions/cartActions";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/actions/wishlistActions";
import { HeartIcon, StarIcon } from "../Common/Icons";
import ProductDialog from "../Common/ProductDialog";

const ProductCard = ({
  id,
  img,
  name,
  price,
  originalPrice,
  rating,
  description,
  onSnackbar, // Receive snackbar handler from parent
}) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const isInWishlist = wishlistItems.some((item) => item.id === id);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart({ id, image: img, title: name, price }));
    onSnackbar("Product added to cart", "success");
  };

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(id));
      onSnackbar("Removed from wishlist", "info");
    } else {
      dispatch(addToWishlist({ id, image: img, title: name, price }));
      onSnackbar("Added to wishlist", "success");
    }
  };

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasPartialStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<StarIcon key={i} style={{ fill: "#FFD700" }} />);
      } else if (i === fullStars && hasPartialStar) {
        stars.push(
          <StarIcon
            key={i}
            style={{
              fill: "url(#half-star-gradient)",
              clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)",
            }}
          />
        );
      } else {
        stars.push(<StarIcon key={i} style={{ fill: "#d3d3d3" }} />);
      }
    }
    return stars;
  };

  return (
    <>
      <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden md:max-w-full flex flex-col hover:shadow-lg transition-shadow duration-300">
        {/* Product Image */}
        <div className="relative">
          <img
            src={img}
            alt={name}
            className="w-full h-56 object-cover md:h-64"
          />
          {/* Badge */}
          {originalPrice && (
            <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-md">
              -{Math.round(((originalPrice - price) / originalPrice) * 100)}%
            </span>
          )}
          {/* Wishlist Button */}
          <button
            onClick={handleWishlistToggle}
            aria-label={
              isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"
            }
            className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition"
          >
            <HeartIcon color={isInWishlist ? "red" : "gray"} />
          </button>
        </div>

        {/* Product Details */}
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
            {name}
          </h3>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
            {description}
          </p>
          <div className="flex justify-between items-center mt-3">
            <span className="text-xl text-green-600 font-bold">${price}</span>
            {originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                ${originalPrice}
              </span>
            )}
          </div>
          <div className="flex items-center space-x-1 mt-2">
            {renderStars()}
          </div>
        </div>

        {/* View Details Button */}
        <div className="mt-auto p-4">
          <button
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
            onClick={() => setIsDialogOpen(true)}
          >
            View Details
          </button>
        </div>
      </div>

      {/* Dialog */}
      <ProductDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        product={{ id, image: img, title: name, price, description }}
        onAddToCart={handleAddToCart}
      />
    </>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  originalPrice: PropTypes.number,
  rating: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string,
  onSnackbar: PropTypes.func.isRequired, // Add snackbar handler prop
};

export default ProductCard;
