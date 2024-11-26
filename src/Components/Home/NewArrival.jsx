import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import UnifiedProductCard from "../Product/UnifiedProductCard";
import SnackbarNotification from "../Common/SnackbarNotification";
import mockProducts from "../../utils/mockProducts";
import "swiper/css";
import "swiper/css/effect-coverflow";

const NewArrival = () => {
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

  return (
    <div className="slider-container w-full mb-8 max-w-6xl mx-auto p-4">
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
      <div className="relativ">
        <Swiper
          modules={[EffectCoverflow]}
          effect="coverflow"
          loop={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          className="swiper-container"
        >
          {mockProducts.map((item) => (
            <SwiperSlide
              key={item.id}
              style={{ width: "300px", height: "auto" }}
            >
              <UnifiedProductCard
                product={item}
                onSnackbar={handleSnackbar}
                viewMode="grid"
                useNavigation={false}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
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
