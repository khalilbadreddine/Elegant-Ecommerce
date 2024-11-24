import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Product = () => {
  const images = [
    { text: "Image 1" },
    { text: "Image 2" },
    { text: "Image 3" },
    { text: "Image 4" },
    { text: "Image 5" },
    { text: "Image 6" },
  ];

  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 12,
    minutes: 43,
    seconds: 24,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = { ...prevTime };
        if (newTime.seconds > 0) {
          newTime.seconds -= 1;
        } else if (newTime.minutes > 0) {
          newTime.seconds = 59;
          newTime.minutes -= 1;
        } else if (newTime.hours > 0) {
          newTime.minutes = 59;
          newTime.seconds = 59;
          newTime.hours -= 1;
        } else if (newTime.days > 0) {
          newTime.hours = 23;
          newTime.minutes = 59;
          newTime.seconds = 59;
          newTime.days -= 1;
        } else {
          clearInterval(interval);
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto bg-white p-6 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div>
            {/* Mobile Carousel */}
            <div className="block md:hidden">
              <Swiper spaceBetween={10} slidesPerView={1} loop={true}>
                {images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-full h-64 bg-gray-300 flex items-center justify-center text-gray-700 text-xl font-semibold rounded-lg shadow-md">
                      {img.text}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Responsive Grid */}
            <div className="hidden md:grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="w-full bg-gray-300 flex items-center justify-center text-gray-700 text-lg font-semibold rounded-lg shadow-md"
                  style={{
                    aspectRatio: "1 / 1", // Ensures square images
                  }}
                >
                  {img.text}
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            {/* Title */}
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              Tray Table
            </h1>

            {/* Small Description */}
            <p className="text-gray-600 text-base mb-6 leading-relaxed">
              Buy one or buy a few and make every space where you sit more
              convenient. Light and easy to move around with a removable tray
              top, handy for serving snacks.
            </p>

            {/* Reviews */}
            <p className="text-gray-500 text-sm mb-6">★★★★★ (11 Reviews)</p>

            {/* Price */}
            <div className="flex items-center mb-6">
              <span className="text-3xl font-bold text-gray-800">$199.00</span>
              <span className="text-gray-400 line-through ml-4">$400.00</span>
            </div>

            {/* Offer Expiration */}
            <div className="bg-gray-100 p-4 rounded-lg mb-6 shadow-sm">
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
            <p className="text-sm text-gray-700 mb-6">
              <span className="font-semibold">Measurements:</span> 17 1/2×20
              5/8&quot;
            </p>

            {/* Color Options */}
            <div className="mb-6">
              <p className="text-sm font-semibold mb-4">Choose Color</p>
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-black border-2 border-gray-300"></div>
                <div className="h-10 w-10 rounded-full bg-red-500 border-2 border-gray-300"></div>
                <div className="h-10 w-10 rounded-full bg-gray-400 border-2 border-gray-300"></div>
              </div>
            </div>

            {/* Add to Cart and Wishlist Buttons */}
            <div className="flex flex-col gap-4">
              <button className="w-full bg-black text-white py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition">
                Add to Cart
              </button>
              <button className="w-full border border-gray-300 py-3 rounded-lg text-gray-700 text-lg hover:bg-gray-100 transition">
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
