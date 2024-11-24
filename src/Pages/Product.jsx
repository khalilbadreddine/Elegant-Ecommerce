import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../redux/actions/productActions"; // Import the action
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper components
import "swiper/css"; // Swiper styles

const Product = () => {
  const { productId } = useParams(); // Get the product ID from the URL
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.filteredProducts);
  const product = products.length > 0 ? products[0] : null;

  // Fetch product data on mount
  useEffect(() => {
    dispatch(fetchProductById(parseInt(productId, 10)));
  }, [dispatch, productId]);

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculate the time remaining for the offer expiry
  useEffect(() => {
    if (!product?.offerExpiry) return;

    const calculateTimeLeft = () => {
      const now = new Date();
      const expiry = new Date(product.offerExpiry);
      const difference = expiry - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [product?.offerExpiry]);

  // Render a loading state if the product isn't yet available
  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold text-gray-700">Loading product...</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Product Page Container */}
      <div className="max-w-6xl mx-auto bg-white p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="relative">
            {/* Mobile Carousel */}
            <div className="block md:hidden">
              <Swiper spaceBetween={10} slidesPerView={1} loop={true}>
                {product.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-full h-64 bg-gray-300 flex items-center justify-center text-gray-700 text-xl font-semibold rounded-lg">
                      <img
                        src={image}
                        alt={product.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-3 gap-4 md:h-[500px]">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-700 text-lg font-semibold rounded-lg"
                >
                  <img
                    src={image}
                    alt={product.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            {/* Title */}
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>

            {/* Small Description */}
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>

            {/* Reviews */}
            <p className="text-gray-500 text-sm mb-4">
              ★★★★★ ({product.sales} Sales)
            </p>

            {/* Price */}
            <div className="mb-4">
              <span className="text-3xl font-bold text-gray-800">
                ${product.price.toFixed(2)}
              </span>
              {product.oldPrice && (
                <span className="text-gray-400 line-through ml-2">
                  ${product.oldPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* Offer Expiration */}
            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-700 mb-2">
                Offer expires in:
              </p>
              <div className="flex items-center gap-4 text-center">
                <div>
                  <div className="text-lg font-bold text-gray-800">
                    {timeLeft.days}
                  </div>
                  <p className="text-xs text-gray-500">Days</p>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-800">
                    {timeLeft.hours}
                  </div>
                  <p className="text-xs text-gray-500">Hours</p>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-800">
                    {timeLeft.minutes}
                  </div>
                  <p className="text-xs text-gray-500">Minutes</p>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-800">
                    {timeLeft.seconds}
                  </div>
                  <p className="text-xs text-gray-500">Seconds</p>
                </div>
              </div>
            </div>

            {/* Measurements */}
            {product.measurements && (
              <p className="text-sm text-gray-700 mb-4">
                <span className="font-semibold">Measurements:</span>{" "}
                {product.measurements}
              </p>
            )}

            {/* Color Options */}
            <div className="mb-4">
              <p className="text-sm font-semibold mb-2">Choose Color</p>
              <div className="flex gap-3">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className="h-8 w-8 rounded-full"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Add to Cart and Wishlist Buttons */}
            <div className="mb-4">
              <button className="w-full bg-black text-white py-3 rounded-md text-lg font-semibold mb-2">
                Add to Cart
              </button>
              <button className="w-full border border-gray-300 py-2 rounded-md text-gray-700 text-lg">
                Wishlist
              </button>
            </div>

            {/* Additional Information */}
            <div>
              <h2 className="text-lg font-bold mb-2">Additional Info</h2>
              <ul className="list-disc pl-5">
                {product.additionalInfo.map((info, index) => (
                  <li key={index} className="text-sm text-gray-700 mb-2">
                    {info}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
