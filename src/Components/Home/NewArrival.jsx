import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import UnifiedProductCard from "../Product/UnifiedProductCard";
import SnackbarNotification from "../Common/SnackbarNotification";
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

  const { products, loading, error } = useSelector((state) => state.products);

  const slidesRef = useRef([]);

  const handleSnackbar = (message, severity) => {
    setSnackbar({ open: true, message, severity });
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  useEffect(() => {
    if (slidesRef.current && slidesRef.current.length > 0) {
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
    }
  }, [products]); // Trigger effect after products are loaded

  if (loading) {
    return (
      <div className="w-full py-10 max-w-6xl mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4">New Arrivals:</h2>
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full py-10 max-w-6xl mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4">New Arrivals:</h2>
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="w-full py-10 max-w-6xl mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4">New Arrivals:</h2>
        <p>No products found.</p>
      </div>
    );
  }

  return (
    <div className="slider-container w-full py-10 max-w-6xl mx-auto p-4 ">
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
      <div className="relative bg-[#F3F5F7] p-8 rounded-lg">
        <Swiper
          modules={[Navigation]}
          navigation={true}
          loop={true}
          centeredSlides={true}
          slidesPerView="auto"
          freeMode={true}
          lazy="false" // Pass as a string or set to false to avoid warnings
          className="swiper-container"
        >
          {products.map((item, index) => {
            console.log(item)
            const id = item._id; // Map _id to id for compatibility
            if (!id) {
              console.warn(`Product at index ${index} is missing an id.`);
              return null;
            }

            const transformedImage = generateCloudinaryUrl(
              item.image || "https://via.placeholder.com/500", // Use a placeholder for missing images
              "w_500,h_500,c_fill,q_auto,f_auto"
            );

            return (
              <SwiperSlide
                key={id} // Use the id for the key
                ref={(el) => (slidesRef.current[index] = el)}
                style={{ width: "300px", height: "auto" ,padding:"10px"}}
              >
                <UnifiedProductCard
                  product={{ ...item, id, image: transformedImage }} // Pass id and transformed image
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
