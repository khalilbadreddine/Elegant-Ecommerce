import PropTypes from "prop-types";

const ProductCard = ({ img, name, price, originalPrice, onAddToCart }) => {
  return (
    <div className="bg-white mb-4 relative w-full max-w-[262px] h-[400px] sm:h-[450px] items-start rounded-lg border flex flex-col border-gray-200 shadow-md group overflow-hidden font-poppins">
      <div className="relative w-full h-[260px] sm:h-[320px] bg-gray-200">
        <img
          className="w-full h-full object-cover object-center"
          src={img}
          alt={name}
        />
        <button
          className="absolute w-[70%] bottom-3 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm py-2 px-4 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={onAddToCart}
        >
          Add to cart
        </button>
      </div>
      <div className="p-3 sm:p-4">
        <h3 className="text-sm font-semibold text-gray-800 truncate">{name}</h3>
        <div className="flex gap-3 items-center mt-2">
          <span className="text-green-600 text-lg">${price}</span>
          <span className="line-through text-gray-400 text-sm">
            ${originalPrice}
          </span>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  originalPrice: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductCard;
