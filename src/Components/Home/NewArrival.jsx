/* NewArrival.js */
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import UnifiedProductCard from "../Product/UnifiedProductCard";
import SnackbarNotification from "../Common/SnackbarNotification";
import mockProducts from "../../utils/mockProducts";
import "swiper/css";

const NewArrival = () => {
  const [slidesPerView, setSlidesPerView] = useState(1.5);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleSnackbar = (message, severity) => {
    setSnackbar({ open: true, message, severity });
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const updateSlidesPerView = () => {
    const width = window.innerWidth;
    const cardWidth = 280; // Adjust to match your card width
    let slides = width / cardWidth;
    slides = Math.floor(slides) + (slides % 1 >= 0.5 ? 0.5 : 0);
    setSlidesPerView(slides > 0 ? slides : 1);
  };

  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  return (
    <div className="slider-container transition-all w-full mb-4 max-w-6xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl md:text-5xl font-bold">
          New <br />
          Arrivals:
        </h2>
        <a
          href="#"
          className="hidden sm:inline-block text-md text-black hover:underline"
        >
          More Products →
        </a>
      </div>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={16}
        onSlideChange={() => {}}
        onSwiper={() => {}}
      >
        {mockProducts.map((item) => (
          <SwiperSlide key={item.id}>
            <UnifiedProductCard
              product={item}
              onSnackbar={handleSnackbar}
              viewMode="grid"
              useNavigation={false}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="sm:hidden mt-4">
        <a href="#" className="text-md text-gray-700 hover:underline">
          More Products →
        </a>
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

export default NewArrival;
