// src/Components/Sm-Components/ProductCard.jsx
import { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../contexts/CartContext";
import { HeartIcon, FiveStars } from "./Icons";

const ProductCard = ({ id, img, name, price, originalPrice }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const product = {
      id,
      image: img,
      title: name,
      price: parseFloat(price),
      color: "Default", // Update this as necessary
    };
    addToCart(product);
  };

  return (
    <div className="bg-white mb-4 relative w-full max-w-[262px] h-[400px] sm:h-[450px] items-start rounded-lg border flex flex-col border-gray-200 shadow-md group overflow-hidden font-poppins">
      {/* Badge Section */}
      <div className="absolute top-3 left-3 z-10 flex flex-col space-y-1">
        <span className="text-[15px] sm:text-sm font-bold uppercase bg-black text-white py-1 px-2 rounded-md">
          New
        </span>
        <span className="text-[15px] sm:text-sm font-bold text-green-600 bg-green-100 py-1 px-2 rounded-md">
          -50%
        </span>
      </div>

      {/* Heart Icon */}
      <button className="absolute top-3 right-3 z-10 bg-white p-2 sm:p-2.5 rounded-full shadow-md text-gray-400 hover:text-red-500 hover:shadow-lg transition-all ">
        <HeartIcon className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <div className="relative w-full h-[260px] sm:h-[320px] bg-gray-200">
        <img
          className="w-full h-full object-cover object-center"
          src={img}
          alt={name}
        />
        <button
          className="absolute w-[70%] bottom-3 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm py-2 px-4 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      </div>
      <div className="p-3 sm:p-4">
        <div className="flex flex-col items-start">
          <FiveStars />
          <h3 className="text-sm sm:text-base mb-1 font-semibold text-gray-800 truncate">
            {name}
          </h3>
        </div>
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
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  originalPrice: PropTypes.string.isRequired,
};

export default ProductCard;
