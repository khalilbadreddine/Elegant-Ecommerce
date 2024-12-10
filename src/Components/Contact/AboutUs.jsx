import React from "react";

export default function AboutUs() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center bg-gray-50 py-12 px-6 rounded-lg shadow-lg space-y-8 md:space-y-0 md:space-x-6">
      {/* Image Section */}
      <div className="image flex-shrink-0 w-full md:w-1/2 h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
        <img
          src="https://res.cloudinary.com/dhxdbakbl/image/upload/q_auto/v1732715471/pexels-photo-667838_w2h5g1.jpg" // Ensure the correct path to your image
          alt="Purple Wall"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="text md:w-1/2 text-center md:text-left">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          Elegant is a global decor store based in HCMC, Vietnam, since 2010.
          Our customer service team is ready to support you 24/7.
        </p>
        <button className="bg-black text-white font-medium py-2 px-4 rounded hover:bg-gray-800 transition duration-300">
          Shop Now →
        </button>
      </div>
    </div>
  );
}