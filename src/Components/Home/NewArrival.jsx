import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import UnifiedProductCard from "../Product/UnifiedProductCard";
import SnackbarNotification from "../Common/SnackbarNotification";
import mockProducts from "../../utils/mockProducts";
import { generateCloudinaryUrl } from "../../utils/cloudinaryUtils";
import "swiper/css";
import "swiper/css/navigation";

gsap.registerPlugin(ScrollTrigger);

const NewArrival = () => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const slidesRef = useRef([]);

  const handleSnackbar = (message, severity) => {
    setSnackbar({ open: true, message, severity });
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  useEffect(() => {
    ScrollTrigger.batch(slidesRef.current, {
      start: "top 80%",
      end: "top 60%",
      toggleActions: "play none none none",
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.5,
        });
      },
    });
  }, []);

  return (
    <div className="slider-container w-full py-10 max-w-6xl mx-auto p-4">
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
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          navigation={true}
          loop={true}
          centeredSlides={true}
          slidesPerView="auto"
          freeMode={true}
          lazy={true}
          className="swiper-container"
        >
          {mockProducts.map((item, index) => {
            const transformedImage = generateCloudinaryUrl(
              item.image,
              "w_500,h_500,c_fill,q_auto,f_auto"
            );

            return (
              <SwiperSlide
                key={item.id}
                ref={(el) => (slidesRef.current[index] = el)}
                style={{ width: "300px", height: "auto" }}
              >
                <UnifiedProductCard
                  product={{ ...item, image: transformedImage }}
                  onSnackbar={handleSnackbar}
                  viewMode="grid"
                  useNavigation={false}
                />
              </SwiperSlide>
            );
          })}
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
