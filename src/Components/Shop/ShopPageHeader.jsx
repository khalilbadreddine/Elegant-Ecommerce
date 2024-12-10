import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const ShopPageHeader = ({ products }) => {
  console.log("filtered products:", products);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const navigate = useNavigate();

  if (!products || products.length === 0) {
    return (
      <div className="mt-6 text-center">
        <p className="text-lg text-gray-300">No trending products available.</p>
      </div>
    );
  }

  const handleCardClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="mt-12 px-4 sm:px-8 lg:px-16 bg-gray-900 py-12 rounded-lg shadow-lg relative overflow-hidden">
      {/* Title */}
      <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-8 text-white tracking-wide">
        Trending Products
      </h1>

      {/* Navigation Buttons */}
      <button
        ref={prevRef}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white w-10 h-10 rounded-full flex justify-center items-center z-10 shadow-md"
      >
        &#8592;
      </button>
      <button
        ref={nextRef}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white w-10 h-10 rounded-full flex justify-center items-center z-10 shadow-md"
      >
        &#8594;
      </button>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          1024: { slidesPerView: 3.5 },
          1440: { slidesPerView: 4.5 },
        }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="w-full"
      >
        {products.map((product) => (
          <SwiperSlide
            key={product.id}
            className="flex justify-center items-center"
          >
            <div
              onClick={() => handleCardClick(product._id)}
              className="relative w-[280px] h-[380px] md:w-[320px] md:h-[420px] overflow-hidden rounded-lg shadow-lg bg-gray-800 mb-10 cursor-pointer "
            >
              {/* Background Image */}
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-4 flex flex-col justify-end">
                <h2 className="text-lg sm:text-xl font-bold text-white">
                  {product.title}
                </h2>
                <p className="text-sm text-gray-300 line-clamp-2">
                  {product.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ShopPageHeader;
