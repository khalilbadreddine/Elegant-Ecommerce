import React from "react";

export default function MapContact() {
  return (
    <div className="container mx-auto  flex flex-col md:flex-row items-start py-12 px-6 rounded-lg  space-y-8 md:space-y-0 md:space-x-6 m-9 ">
      {/* Form Section */}
      <div className="w-full md:w-1/2  bg-gray-50 p-3 rounded-lg shadow-md">
        <form>
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="w-full md:w-1/2 h-auto rounded-lg overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126917.37192830624!2d-112.074037!3d33.448376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b12b6c1bbbd1d%3A0x98f4579e7c5d7a51!2sArizona!5e0!3m2!1sen!2sus!4v1639176500104!5m2!1sen!2sus"
          width="100%"
          height="360px"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
}