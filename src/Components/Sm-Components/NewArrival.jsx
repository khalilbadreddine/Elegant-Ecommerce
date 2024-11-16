import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ProductCard";

const NewArrival = () => {
  const [slidesToShow, setSlidesToShow] = useState(1); // Default number of slides
  const [progress, setProgress] = useState(0); // Progress bar value
  const sliderContainerRef = useRef(null);
  const sliderItems = [
    {
      img: "/assets/Couch.png",
      name: "Modern Loveseat Sofa",
      price: "$199.00",
      originalPrice: "$400.00",
    },
    {
      img: "/assets/red-table.png",
      name: "Elegant Red Table",
      price: "$89.99",
      originalPrice: "$129.99",
    },
    {
      img: "/assets/lamp.png",
      name: "Vintage Table Lamp",
      price: "$49.99",
      originalPrice: "$79.99",
    },
    {
      img: "/assets/tall-lamp.png",
      name: "Tall Standing Lamp",
      price: "$79.99",
      originalPrice: "$109.99",
    },
    {
      img: "/assets/pillow.png",
      name: "Comfortable Pillow",
      price: "$19.99",
      originalPrice: "$29.99",
    },
    {
      img: "/assets/backet.png",
      name: "Decorative Basket",
      price: "$24.99",
      originalPrice: "$34.99",
    },
    {
      img: "/assets/couch-gray.png",
      name: "Luxurious Gray Sofa",
      price: "$599.99",
      originalPrice: "$899.99",
    },
    {
      img: "/assets/plakar.png",
      name: "Plakar LED Lamp",
      price: "$249.00",
      originalPrice: "$300.00",
    },
    {
      img: "/assets/toast.png",
      name: "Premium Toaster",
      price: "$224.99",
      originalPrice: "$299.00",
    },
    {
      img: "/assets/black-table.png",
      name: "Black Coffee Table",
      price: "$149.99",
      originalPrice: "$199.99",
    },
  ];

  const calculateSlidesToShow = () => {
    if (sliderContainerRef.current) {
      const containerWidth = sliderContainerRef.current.offsetWidth;
      const cardWidth = 262; // Adjust to your card's actual width
      const slides = Math.max(1, containerWidth / cardWidth); // Ensure at least 1 slide is shown
      setSlidesToShow(slides);

      // Update progress based on the initial visible slides
      setProgress((slides / sliderItems.length) * 100);
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
    slidesToScroll: 1,
    afterChange: (currentSlide) => {
      // Update progress when the slide changes
      const visibleSlides = Math.min(
        slidesToShow,
        sliderItems.length - currentSlide
      );
      const progressPercentage =
        ((currentSlide + visibleSlides) / sliderItems.length) * 100;
      setProgress(progressPercentage);
    },
  };

  return (
    <div
      ref={sliderContainerRef}
      className="w-full mb-20 max-w-6xl mx-auto p-4"
    >
      <h2 className="text-2xl font-bold mb-4">
        New <br />
        Arrivals:
      </h2>
      <div className="relative">
        {/* Slider */}
        <Slider {...settings}>
          {sliderItems.map((item, index) => (
            <div key={index} className="px-2">
              <ProductCard
                img={item.img}
                name={item.name}
                price={item.price}
                originalPrice={item.originalPrice}
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
    </div>
  );
};

export default NewArrival;
