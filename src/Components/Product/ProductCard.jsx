/* ProductCard.js */
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
  image,
  title,
  price,
  oldPrice,
  rating,
  description,
  onSnackbar,
}) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const isInWishlist = wishlistItems.some((item) => item.id === id);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart({ id, image, title, price }));
    onSnackbar("Product added to cart", "success");
  };

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(id));
      onSnackbar("Removed from wishlist", "info");
    } else {
      dispatch(addToWishlist({ id, image, title, price }));
      onSnackbar("Added to wishlist", "success");
    }
  };

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<StarIcon key={i} filled />);
      } else if (i === fullStars && halfStar) {
        stars.push(<StarIcon key={i} half />);
      } else {
        stars.push(<StarIcon key={i} />);
      }
    }
    return stars;
  };

  return (
    <>
      <div className=" mb-8 max-w-sm mx-auto bg-[#FFFFFF] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#BEC0C0]">
        <div className="relative group">
          <img
            src={image}
            alt={title}
            className="w-full h-60 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
          />
          {oldPrice && (
            <span className="absolute top-3 left-3 bg-[#6C7275] text-white text-xs font-bold px-2 py-1 rounded-md">
              -{Math.round(((oldPrice - price) / oldPrice) * 100)}%
            </span>
          )}
          <button
            onClick={handleWishlistToggle}
            aria-label={
              isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"
            }
            className="absolute top-3 right-3 bg-[#F3F5F7] rounded-full p-2 shadow-md hover:shadow-lg transition"
          >
            <HeartIcon color={isInWishlist ? "#232627" : "#6C7275"} />
          </button>
        </div>
        <div className="p-6 flex flex-col">
          <h3 className="text-lg font-semibold text-[#141718] line-clamp-1">
            {title}
          </h3>
          <p className="text-sm text-[#6C7275] mt-1 line-clamp-2">
            {description}
          </p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-xl text-[#232627] font-bold">
              ${price.toFixed(2)}
            </span>
            {oldPrice && (
              <span className="text-sm text-[#BEC0C0] line-through">
                ${oldPrice.toFixed(2)}
              </span>
            )}
          </div>
          <div className="flex items-center space-x-1 mt-3">
            {renderStars()}
            <span className="text-sm text-[#6C7275] ml-2">
              {rating.toFixed(1)} out of 5
            </span>
          </div>
          <button
            className="mt-5 bg-[#232627] text-white py-2 rounded-lg hover:bg-[#343839] transition-colors duration-200"
            onClick={() => setIsDialogOpen(true)}
          >
            View Details
          </button>
          <button
            className="mt-3 bg-[#141718] text-white py-2 rounded-lg hover:bg-[#232627] transition-colors duration-200"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
        <ProductDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          product={{ id, image, title, price, description }}
          onAddToCart={handleAddToCart}
        />
      </div>
    </>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  oldPrice: PropTypes.number,
  rating: PropTypes.number.isRequired,
  description: PropTypes.string,
  onSnackbar: PropTypes.func.isRequired,
};

export default ProductCard;
