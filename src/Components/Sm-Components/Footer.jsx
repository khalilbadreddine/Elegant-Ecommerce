import React from "react";
import { Instagram, Facebook, YouTube } from "./Icons";

const Footer = () => {
  return (
    <footer className="bg-[#232627] text-white p-8">
      {/* Mobile Layout */}
      <div className="container mx-auto px-4 flex flex-col items-center space-y-6 sm:hidden">
        <h1 className="text-xl font-semibold">3legant</h1>
        <p className="text-sm">Gift & Decoration Store</p>

        {/* Divider Line */}
        <div className="w-full border-t border-gray-500"></div>

        <nav className="flex flex-col items-center space-y-2 text-sm">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#shop" className="hover:text-gray-400">
            Shop
          </a>
          <a href="#product" className="hover:text-gray-400">
            Product
          </a>
          <a href="#blog" className="hover:text-gray-400">
            Blog
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact Us
          </a>
        </nav>

        {/* Divider Line */}
        <div className="w-full border-t border-gray-500"></div>

        <div className="flex space-x-4">
          <a href="#instagram" aria-label="Instagram">
            <Instagram className="w-6 h-6 hover:text-gray-400" />
          </a>
          <a href="#facebook" aria-label="Facebook">
            <Facebook className="w-6 h-6 hover:text-gray-400" />
          </a>
          <a href="#youtube" aria-label="YouTube">
            <YouTube className="w-6 h-6 hover:text-gray-400" />
          </a>
        </div>

        {/* Divider Line */}
        <div className="w-full border-t border-gray-500"></div>

        <div className="text-xs text-center space-y-1">
          <div className="flex justify-center space-x-2">
            <a href="#privacy" className="hover:text-gray-400">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#terms" className="hover:text-gray-400">
              Terms of Use
            </a>
          </div>
          <p>Copyright © 2023 3legant. All rights reserved</p>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden sm:block container mx-auto px-4">
        <div className="flex justify-between items-center py-4 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-semibold">3legant</h1>
            <span className="text-sm">Gift & Decoration Store</span>
          </div>
          <nav className="flex space-x-6 text-sm">
            <a href="#home" className="hover:text-gray-400">
              Home
            </a>
            <a href="#shop" className="hover:text-gray-400">
              Shop
            </a>
            <a href="#product" className="hover:text-gray-400">
              Product
            </a>
            <a href="#blog" className="hover:text-gray-400">
              Blog
            </a>
            <a href="#contact" className="hover:text-gray-400">
              Contact Us
            </a>
          </nav>
        </div>
        <div className="flex justify-between items-center py-4">
          <div className="text-xs">
            <p>Copyright © 2023 3legant. All rights reserved</p>
            <div className="flex space-x-2 mt-2">
              <a href="#privacy" className="hover:text-gray-400">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="#terms" className="hover:text-gray-400">
                Terms of Use
              </a>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="#instagram" aria-label="Instagram">
              <Instagram className="w-6 h-6 hover:text-gray-400" />
            </a>
            <a href="#facebook" aria-label="Facebook">
              <Facebook className="w-6 h-6 hover:text-gray-400" />
            </a>
            <a href="#youtube" aria-label="YouTube">
              <YouTube className="w-6 h-6 hover:text-gray-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
