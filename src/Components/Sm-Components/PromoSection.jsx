import React from "react";

const PromoSection = () => {
  return (
    <div className="bg-gray-100 mb-20">
      {/* Container for alignment */}
      <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src="/assets/promo.jpeg"
            alt="Promotional Content"
            className="w-full h-auto object-cover max-w-md sm:max-w-lg lg:max-w-full mx-auto"
          />
        </div>

        {/* Text Content Section */}
        <div className="w-full lg:w-1/2 px-6 lg:px-12 flex flex-col justify-center mt-10 lg:mt-0">
          <p className="text-blue-600 font-semibold text-sm lg:text-base">
            SALE UP TO 35% OFF
          </p>
          <h1 className="text-gray-800 font-bold text-2xl lg:text-4xl mt-2 leading-tight">
            HUNDREDS of New Lower Prices!
          </h1>
          <p className="text-gray-600 mt-4 text-sm lg:text-base leading-relaxed">
            It’s more affordable than ever to give every room in your home a
            stylish makeover.
          </p>
          <a
            href="#"
            className="mt-6 mb-6 inline-block text-blue-600 text-sm lg:text-base underline hover:text-blue-800 transition duration-300"
          >
            Shop Now →
          </a>
        </div>
      </div>
    </div>
  );
};

export default PromoSection;
