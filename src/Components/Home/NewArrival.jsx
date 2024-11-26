/* NewArrival.js */
import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import UnifiedProductCard from "../Product/UnifiedProductCard";
import SnackbarNotification from "../Common/SnackbarNotification";
import mockProducts from "../../utils/mockProducts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewArrival = () => {
  const [slidesToShow, setSlidesToShow] = useState(1.5);
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

  const updateSlidesToShow = () => {
    if (sliderRef.current) {
      const width = sliderRef.current.offsetWidth;
      const cardWidth = 280; // Adjust this to match your card width including margins
      let slides = width / cardWidth;

      // Round slidesToShow to the nearest half to allow for 0.5 increments
      slides = Math.floor(slides) + (slides % 1 >= 0.5 ? 0.5 : 0);

      setSlidesToShow(slides > 0 ? slides : 1);
      setProgress((slides / mockProducts.length) * 100);
    }
  };

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    swipeToSlide: true,
    afterChange: (currentSlide) => {
      const totalSlides = mockProducts.length;
      const visibleSlides = Math.min(slidesToShow, totalSlides - currentSlide);
      const progressPercentage =
        ((currentSlide + visibleSlides) / totalSlides) * 100;
      setProgress(progressPercentage > 100 ? 100 : progressPercentage);
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      ref={sliderRef}
      className="slider-container transition-all w-full mb-4 max-w-6xl mx-auto p-4"
    >
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
        <Slider {...settings}>
          {mockProducts.map((item) => (
            <div key={item.id} className="px-2">
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
