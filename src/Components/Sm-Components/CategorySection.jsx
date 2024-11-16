import React from "react";
import couchGray from "/assets/couch-gray.png";
import plakar from "/assets/plakar.png";
import toast from "/assets/toast.png";

const CategorySection = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Mobile Layout */}
      <div className="grid grid-cols-1 md:hidden gap-6">
        {/* First Category - Living Room */}
        <div className="bg-gray-100 p-4 h-72 flex relative">
          <div className="absolute top-4 left-4 flex flex-col space-y-2">
            <h2 className="text-xl font-semibold">Living Room</h2>
            <a href="#" className="text-blue-500 hover:underline">
              Shop Now →
            </a>
          </div>
          <img
            src={couchGray}
            alt="Couch"
            className="w-[60%] h-[60%] absolute bottom-4 right-4 object-cover"
          />
        </div>

        {/* Other Categories */}
        <div className="bg-gray-100 p-4 h-56 flex items-center justify-between">
          <div className="flex flex-col justify-center space-y-2">
            <h2 className="text-xl font-semibold">Bedroom</h2>
            <a href="#" className="text-blue-500 hover:underline">
              Shop Now →
            </a>
          </div>
          <img
            src={plakar}
            alt="Drawer"
            className="w-[60%] h-auto object-cover"
          />
        </div>
        <div className="bg-gray-100 p-4 h-56 flex items-center justify-between">
          <div className="flex flex-col justify-center space-y-2">
            <h2 className="text-xl font-semibold">Kitchen</h2>
            <a href="#" className="text-blue-500 hover:underline">
              Shop Now →
            </a>
          </div>
          <img
            src={toast}
            alt="Toaster"
            className="w-[60%] h-auto object-cover"
          />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-2 gap-6">
        {/* First Category - Living Room */}
        <div className="bg-gray-100 p-4 h-96 flex relative">
          <div className="absolute top-6 left-6 flex flex-col space-y-2">
            <h2 className="text-xl font-semibold">Living Room</h2>
            <a href="#" className="text-blue-500 hover:underline">
              Shop Now →
            </a>
          </div>
          <img
            src={couchGray}
            alt="Couch"
            className="w-[60%] h-[60%] absolute bottom-6 right-6 object-cover"
          />
        </div>

        <div className="grid grid-rows-2 gap-6">
          {/* Other Categories */}
          <div className="bg-gray-100 p-4 h-56 flex items-center justify-between">
            <div className="flex flex-col justify-center space-y-2">
              <h2 className="text-xl font-semibold">Bedroom</h2>
              <a href="#" className="text-blue-500 hover:underline">
                Shop Now →
              </a>
            </div>
            <img
              src={plakar}
              alt="Drawer"
              className="w-[60%] h-auto object-cover"
            />
          </div>
          <div className="bg-gray-100 p-4 h-56 flex items-center justify-between">
            <div className="flex flex-col justify-center space-y-2">
              <h2 className="text-xl font-semibold">Kitchen</h2>
              <a href="#" className="text-blue-500 hover:underline">
                Shop Now →
              </a>
            </div>
            <img
              src={toast}
              alt="Toaster"
              className="w-[60%] h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
