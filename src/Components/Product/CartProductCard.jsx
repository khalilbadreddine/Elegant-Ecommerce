import PropTypes from "prop-types";

const CartProductCard = ({
  productId,
  image,
  title,
  color,
  price,
  quantity,
  onRemove,
  onQuantityChange,
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
        <div className="flex items-center space-x-2 mt-2">
          {/* Quantity Controls */}
          <button
            onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
            className="border border-gray-300 px-2 py-1 text-sm text-gray-700 rounded"
          >
            -
          </button>
          <span className="text-gray-700 font-medium">{quantity}</span>
          <button
            onClick={() => onQuantityChange(quantity + 1)}
            className="border border-gray-300 px-2 py-1 text-sm text-gray-700 rounded"
          >
            +
          </button>
        </div>
      </div>

      {/* Price and Remove */}
      <div className="flex flex-col items-end">
        <p className="font-semibold">${price.toFixed(2)}</p>
        <button
          onClick={onRemove}
          className="text-sm text-red-500 hover:underline mt-2"
        >
          ×
        </button>
      </div>
    </div>
  );
};

CartProductCard.propTypes = {
  productId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
};

export default CartProductCard;
