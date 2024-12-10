import { useState, useEffect, useMemo } from "react";
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
  const cartItems = useSelector((state) => state.cart.cartItems) || { items: [] };
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems) || { items: [] };

  // Snackbar state
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  // Memoized cart and wishlist checks
  const isInCart = useMemo(
    () =>
      Array.isArray(cartItems.items) &&
      cartItems.items.some((item) => item.productId === productId),
    [cartItems, productId]
  );

  const isInWishlist = useMemo(
    () =>
      Array.isArray(wishlistItems.items) &&
      wishlistItems.items.some((item) => item.productId === productId),
    [wishlistItems, productId]
  );

  // Fetch product data on mount
  useEffect(() => {
    if (!product || product._id !== productId) {
      dispatch(fetchProductById(productId));
    }
  }, [dispatch, productId, product]);

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (!product?.offerExpiry) return;

    const expiryTime = new Date(product.offerExpiry).getTime();

    const calculateTimeLeft = () => {
      const now = Date.now();
      const difference = expiryTime - now;

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

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [product?.offerExpiry]);

  // Snackbar handler
  const handleSnackbarClose = () => setSnackbar({ ...snackbar, open: false });

  // Add to cart handler
  const handleAddToCart = () => {
    if (!isInCart) {
      dispatch(addToCart(product._id));
      setSnackbar({
        open: true,
        message: "Product added to cart!",
        severity: "success",
      });
    }
  };

  // Wishlist toggle handler
  const handleWishlistToggle = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product._id));
      setSnackbar({
        open: true,
        message: "Product removed from wishlist!",
        severity: "info",
      });
    } else {
      dispatch(addToWishlist(product._id));
      setSnackbar({
        open: true,
        message: "Product added to wishlist!",
        severity: "success",
      });
    }
  };

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold text-gray-700">Loading product...</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative">
            <div className="block md:hidden">
              <Swiper spaceBetween={10} slidesPerView={1} loop={true}>
                {product.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={product.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="hidden md:grid grid-cols-3 gap-4 md:h-[500px]">
              {product.images.map((image, index) => (
                <div key={index} className="w-full h-full bg-gray-300">
                  <img
                    src={image}
                    alt={product.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
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

            {product.offerExpiry && (
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  Offer expires in:
                </p>
                <div className="flex items-center gap-4">
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
            )}

            <div className="mb-4">
              <button
                onClick={handleAddToCart}
                className={`w-full py-3 rounded-md text-lg font-semibold mb-2 ${
                  isInCart
                    ? "bg-green-500 text-white cursor-not-allowed"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
                disabled={isInCart}
              >
                {isInCart ? "In Cart" : "Add to Cart"}
              </button>
              <button
                onClick={handleWishlistToggle}
                className={`w-full border py-2 rounded-md text-lg ${
                  isInWishlist
                    ? "border-red-500 text-red-500 hover:bg-red-100"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
              </button>
            </div>
          </div>
        </div>
      </div>

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
