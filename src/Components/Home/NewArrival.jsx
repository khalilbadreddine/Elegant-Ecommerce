import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../Product/ProductCard";
import SnackbarNotification from "../Common/SnackbarNotification";
import mockProducts from "../../utils/mockProducts"; // Import the mock data

const NewArrival = () => {
  const [slidesToShow, setSlidesToShow] = useState(1); // Default number of slides
  const [progress, setProgress] = useState(0); // Progress bar value
  const sliderContainerRef = useRef(null);

  // Snackbar State
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleSnackbar = (message, severity) => {
    setSnackbar({ open: true, message, severity });
  };

  const handleSnackbarClose = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const calculateSlidesToShow = () => {
    if (sliderContainerRef.current) {
      const containerWidth = sliderContainerRef.current.offsetWidth;
      const cardWidth = 262; // Adjust to your card's actual width
      const slides = Math.max(1, containerWidth / cardWidth); // Ensure at least 1 slide is shown
      setSlidesToShow(slides);

      // Update progress based on the initial visible slides
      setProgress((slides / mockProducts.length) * 100);
    }
  };

  useEffect(() => {
    calculateSlidesToShow(); // Calculate on initial render
    window.addEventListener("resize", calculateSlidesToShow); // Recalculate on resize

    return () => {
      window.removeEventListener("resize", calculateSlidesToShow); // Cleanup on unmount
    };
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1.5,
    afterChange: (currentSlide) => {
      const visibleSlides = Math.min(
        slidesToShow,
        mockProducts.length - currentSlide
      );
      const progressPercentage =
        ((currentSlide + visibleSlides) / mockProducts.length) * 100;
      setProgress(progressPercentage);
    },
  };

  return (
    <div ref={sliderContainerRef} className="w-full mb-4 max-w-6xl mx-auto p-4">
      {/* Header with New Arrivals */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl md:text-5xl font-bold">
          New <br />
          Arrivals:
        </h2>
        <a
          href="#"
          className="hidden sm:inline-block text-md text-black hover:underline hover:text-gray transition-all"
        >
          More Products →
        </a>
      </div>

      <div className="relative">
        {/* Slider */}
        <Slider {...settings}>
          {mockProducts.map((item) => (
            <div key={item.id} className="px-2">
              <ProductCard
                id={item.id}
                img={item.image}
                name={item.title}
                price={item.price}
                originalPrice={item.oldPrice}
                rating={item.rating}
                category={item.category}
                description={item.description}
                onSnackbar={handleSnackbar} // Pass snackbar handler
              />
            </div>
          ))}
        </Slider>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-300">
          <div
            className="h-1 bg-black transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* More Products Link (Mobile) */}
      <div className="sm:hidden mt-4">
        <a
          href="#"
          className="text-md text-gray-700 hover:underline hover:text-black transition-all"
        >
          More Products →
        </a>
      </div>

      {/* Snackbar */}
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
