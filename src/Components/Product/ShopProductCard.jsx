import React from "react";

function ProductCard({ product, viewMode }) {
  return (
    <div
      className={`border rounded-md overflow-hidden shadow-lg bg-white ${
        viewMode === "list" ? "flex" : "block"
      }`}
    >
      {/* Image Section */}
      <div
        className={`relative ${
          viewMode === "list" ? "w-1/3" : "w-full"
        } h-48 bg-gray-100`}
      >
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />

        {/* "New" Badge */}
        <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
          NEW
        </div>
        {/* Discount Badge */}
        {product.oldPrice && (
          <div className="absolute top-2 right-2 bg-teal-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
            -
            {Math.round(
              ((product.oldPrice - product.price) / product.oldPrice) * 100
            )}
            %
          </div>
        )}
      </div>

      {/* Product Details Section */}
      <div className={`p-4 ${viewMode === "list" ? "w-2/3" : "w-full"}`}>
        {/* Rating */}
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className={`h-4 w-4 ${
                index < Math.floor(product.rating)
                  ? "text-yellow-400"
                  : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09L5.564 12 0 7.64l6.059-.88L10 2l3.941 4.76L20 7.64 14.436 12l1.442 6.09z" />
            </svg>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>

        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          {product.oldPrice && (
            <span className="text-sm line-through text-gray-500">
              ${product.oldPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-2">{product.description}</p>

        {/* Buttons */}
        <div className="flex space-x-2 mt-4">
          <button className="px-4 py-2 bg-black text-white text-sm rounded-md hover:bg-gray-800">
            Add to cart
          </button>
          {viewMode === "list" && (
            <button className="px-4 py-2 border text-black text-sm rounded-md hover:bg-gray-100">
              Wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
