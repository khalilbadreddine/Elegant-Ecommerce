import React from "react";
import { MailIcon } from "./Icons"; // Import the icon

const NewsletterSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-0 overflow-hidden  bg-gray-100">
      {/* Left image for desktop only */}
      <div className="hidden md:block flex-1">
        <img
          src="/assets/plakar.png"
          alt="Left side"
          className="w-auto h-[350px] object-cover transform scale-125 -translate-x-16"
          loading="lazy"
        />
      </div>

      {/* Newsletter Form */}
      <div className="flex flex-col items-center justify-center flex-1 px-10 py-10">
        <section>
          <h2 className="text-2xl font-bold text-center mb-2">
            Join Our Newsletter
          </h2>
          <p className="text-gray-600 text-center mb-4">
            Sign up for deals, new products, and promotions.
          </p>
        </section>
        <form
          onSubmit={handleSubmit}
          className="flex items-center w-full mt-4 space-x-2"
        >
          {/* Input with bottom border */}
          <div className="flex items-center w-full">
            <span className="p-2">
              <MailIcon />
            </span>
            <input
              type="email"
              placeholder="Email address"
              aria-label="Email address"
              className="flex-grow p-2 bg-transparent border-b border-gray-300 focus:border-gray-500 focus:outline-none"
            />
          </div>

          {/* Button with bottom border */}
          <button
            type="submit"
            className="px-4 py-2 text-black bg-transparent border-b border-black hover:bg-gray-200"
          >
            Signup
          </button>
        </form>
      </div>

      {/* Right image for desktop only */}
      <div className="hidden md:block">
        <img
          src="/assets/couch2.png"
          alt="Right side"
          className="w-auto h-[400px] object-cover transform scale-125 translate-x-16"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default NewsletterSection;
