import React from "react";
import couchGray from "/assets/couch-gray.png";
import plakar from "/assets/plakar.png";
import toast from "/assets/toast.png";

const CategorySection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {/* Living Room Section */}
      <div className="bg-gray-200 rounded-md flex flex-col items-start p-4">
        {/* Text Content */}
        <div className="flex flex-col space-y-2 w-full text-left">
          <h2 className="text-gray-800 font-bold text-2xl sm:text-3xl lg:text-4xl">
            Living Room
          </h2>
          <button className="text-blue-500 font-medium text-lg sm:text-xl lg:text-2xl self-start">
            Shop Now →
          </button>
        </div>
        {/* Responsive Image */}
        <img
          src={couchGray}
          alt="Living Room Couch"
          className="w-full h-auto max-w-md object-contain"
        />
      </div>

      {/* Bedroom and Kitchen Sections */}
      <div className="flex flex-col gap-4">
        {/* Bedroom Section */}
        <div className="bg-gray-200 rounded-md flex items-center justify-between p-4">
          {/* Text Content */}
          <div className="flex flex-col space-y-2 self-end">
            <h2 className="text-gray-800 font-bold text-2xl sm:text-3xl lg:text-4xl">
              Bedroom
            </h2>
            <button className="text-blue-500 font-medium text-lg sm:text-xl lg:text-2xl">
              Shop Now →
            </button>
          </div>
          {/* Image */}
          <div className="flex-shrink-0 w-1/2">
            <img
              src={plakar}
              alt="Bedroom Wardrobe"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Kitchen Section */}
        <div className="bg-gray-200 rounded-md flex items-center justify-between p-4">
          {/* Text Content */}
          <div className="flex flex-col space-y-2 self-end">
            <h2 className="text-gray-800 font-bold text-2xl sm:text-3xl lg:text-4xl">
              Kitchen
            </h2>
            <button className="text-blue-500 font-medium text-lg sm:text-xl lg:text-2xl">
              Shop Now →
            </button>
          </div>
          {/* Image */}
          <div className="flex-shrink-0 w-1/2">
            <img
              src={toast}
              alt="Kitchen Toaster"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
