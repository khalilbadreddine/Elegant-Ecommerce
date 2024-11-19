import PropTypes from "prop-types";

const CartProductCard = ({
  image,
  title,
  color,
  price,
  quantity,
  onRemove,
  onQuantityChange,
}) => {
  return (
    <div className="flex items-center space-x-4 mb-4 border-b pb-4">
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

// PropTypes for validation
CartProductCard.propTypes = {
  image: PropTypes.string.isRequired, // URL for the product image
  title: PropTypes.string.isRequired, // Product title
  color: PropTypes.string.isRequired, // Product color
  price: PropTypes.number.isRequired, // Product price
  quantity: PropTypes.number.isRequired, // Quantity of the product
  onRemove: PropTypes.func.isRequired, // Function to remove the product
  onQuantityChange: PropTypes.func.isRequired, // Function to change product quantity
};

export default CartProductCard;
