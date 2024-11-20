import PropTypes from "prop-types";

const WishlistProductCard = ({
  productId,
  image,
  title,
  color,
  price,
  onRemove,
  onAddToCart,
}) => {
  return (
    <div
      key={productId}
      className="flex items-center space-x-4 mb-4 border-b pb-4"
    >
      {/* Product Image */}
      <img
        src={image}
        alt={title}
        className="w-16 h-16 rounded-md object-cover"
      />

      {/* Product Details */}
      <div className="flex-1">
        <p className="font-semibold">{title}</p>
        <p className="text-gray-600 text-sm">Color: {color}</p>
        <p className="font-semibold text-green-600">${price.toFixed(2)}</p>
        {/* Add to Cart Button */}
        <button
          onClick={onAddToCart}
          className="bg-black text-white px-3 py-1 mt-2 text-sm rounded"
        >
          Add to Cart
        </button>
      </div>

      {/* Remove Button */}
      <button
        onClick={onRemove}
        className="text-sm text-red-500 hover:underline mt-2"
      >
        ✕
      </button>
    </div>
  );
};

WishlistProductCard.propTypes = {
  productId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default WishlistProductCard;
