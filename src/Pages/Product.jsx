import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";
import { addToWishlist, removeFromWishlist } from "../redux/actions/wishlistActions";
import SnackbarNotification from "../Components/Common/SnackbarNotification";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Product = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  // Redux state
  const product = useSelector((state) => state.products.product);
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  // Snackbar state
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  // Check if the product is in the wishlist
  const isInWishlist = wishlistItems.some((item) => item.id === parseInt(productId, 10));

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
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [product?.offerExpiry]);

  // Snackbar handler
  const handleSnackbarClose = () => setSnackbar({ ...snackbar, open: false });

  // Add to cart handler
  const handleAddToCart = () => {
    dispatch(addToCart(product.id));
    setSnackbar({
      open: true,
      message: "Product added to cart!",
      severity: "success",
    });
  };

  // Wishlist toggle handler
  const handleWishlistToggle = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
      setSnackbar({
        open: true,
        message: "Product removed from wishlist!",
        severity: "info",
      });
    } else {
      dispatch(addToWishlist(product.id));
      setSnackbar({
        open: true,
        message: "Product added to wishlist!",
        severity: "success",
      });
    }
  };

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
            <Swiper spaceBetween={10} slidesPerView={1} loop={true}>
              {product.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-64 bg-gray-300 flex items-center justify-center rounded-lg">
                    <img src={image} alt={product.title} className="w-full h-64 object-cover rounded-lg" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
            <div className="mb-4">
              <span className="text-3xl font-bold text-gray-800">${product.price.toFixed(2)}</span>
              {product.oldPrice && (
                <span className="text-gray-400 line-through ml-2">${product.oldPrice.toFixed(2)}</span>
              )}
            </div>

            {product.offerExpiry && (
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-700 mb-2">Offer expires in:</p>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="text-lg font-bold">{timeLeft.days}</div>
                    <p className="text-xs text-gray-500">Days</p>
                  </div>
                  <div>
                    <div className="text-lg font-bold">{timeLeft.hours}</div>
                    <p className="text-xs text-gray-500">Hours</p>
                  </div>
                  <div>
                    <div className="text-lg font-bold">{timeLeft.minutes}</div>
                    <p className="text-xs text-gray-500">Minutes</p>
                  </div>
                  <div>
                    <div className="text-lg font-bold">{timeLeft.seconds}</div>
                    <p className="text-xs text-gray-500">Seconds</p>
                  </div>
                </div>
              </div>
            )}

            <div className="mb-4">
              <button
                onClick={handleAddToCart}
                className="w-full bg-black text-white py-3 rounded-md text-lg font-semibold mb-2"
              >
                Add to Cart
              </button>
              <button
                onClick={handleWishlistToggle}
                className="w-full border border-gray-300 py-2 rounded-md text-gray-700 text-lg"
              >
                {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Snackbar Notification */}
      <SnackbarNotification
        open={snackbar.open}
        onClose={handleSnackbarClose}
        message={snackbar.message}
        severity={snackbar.severity}
      />
    </div>
  );
};

export default Product;
