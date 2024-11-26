import { useState, useRef } from "react";
import Slider from "react-slick";
import UnifiedProductCard from "../Product/UnifiedProductCard";
import SnackbarNotification from "../Common/SnackbarNotification";
import mockProducts from "../../utils/mockProducts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewArrival = () => {
  const [progress, setProgress] = useState(0);
  const sliderRef = useRef(null);
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 4, // Default number of slides to show
    slidesToScroll: 1,
    swipeToSlide: true,
    afterChange: (currentSlide) => {
      const totalSlides = mockProducts.length;
      const slidesToShow =
        sliderRef.current?.innerSlider?.props?.slidesToShow || 1;
      const progressPercentage =
        ((currentSlide + slidesToShow) / totalSlides) * 100;
      setProgress(progressPercentage > 100 ? 100 : progressPercentage);
    },
    responsive: [
      {
        breakpoint: 1024, // Adjusts slides for tablets
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Adjusts slides for small tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Adjusts slides for mobile devices
        settings: {
          slidesToShow: 1.2,
        },
      },
    ],
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
      <div className="relative">
        <Slider ref={sliderRef} {...settings}>
          {mockProducts.map((item) => (
            <div key={item.id} className="px-2 mb-8">
              <UnifiedProductCard
                product={item}
                onSnackbar={handleSnackbar}
                viewMode="grid"
                useNavigation={false}
              />
            </div>
          ))}
        </Slider>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-300">
          <div
            className="h-1 bg-black transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
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
