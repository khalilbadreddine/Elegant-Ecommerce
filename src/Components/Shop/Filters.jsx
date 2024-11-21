// src/components/Filters.js
import React, { useState } from "react";

function Filters({ onFilterChange, onViewChange, viewMode }) {
  const [category, setCategory] = useState("All Categories");
  const [sortOrder, setSortOrder] = useState("Price: Low to High");

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    onFilterChange({ category: e.target.value, sortOrder });
  };

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
    onFilterChange({ category, sortOrder: e.target.value });
  };

  return (
    <div className="p-4">
      {/* Mobile Filters */}
      <div className="md:hidden space-y-2">
        <select
          className="w-full p-2 border rounded-md"
          value={category}
          onChange={handleCategoryChange}
        >
          <option>All Categories</option>
          <option>Electronics</option>
          <option>Clothing</option>
          <option>Accessories</option>
          {/* Add more categories as needed */}
        </select>
        <select
          className="w-full p-2 border rounded-md"
          value={sortOrder}
          onChange={handleSortOrderChange}
        >
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>New Arrivals</option>
          <option>Bestsellers</option>
        </select>
        <div className="flex justify-end">
          <button
            className={`p-2 border rounded-md ${
              viewMode === "grid" ? "bg-gray-200" : ""
            }`}
            onClick={() => onViewChange("grid")}
            aria-label="Switch to grid view"
          >
            {/* Grid View Icon */}
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4h4v4H4V4zM4 12h4v4H4v-4zM12 4h4v4h-4V4zM12 12h4v4h-4v-4z" />
            </svg>
          </button>
          <button
            className={`p-2 border rounded-md ${
              viewMode === "list" ? "bg-gray-200" : ""
            } ml-2`}
            onClick={() => onViewChange("list")}
            aria-label="Switch to list view"
          >
            {/* List View Icon */}
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 6h12v2H4V6zM4 10h12v2H4v-2zM4 14h12v2H4v-2z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop Filters */}
      <div className="hidden md:flex items-center justify-between">
        <div className="flex space-x-4">
          <select
            className="p-2 border rounded-md"
            value={category}
            onChange={handleCategoryChange}
          >
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Clothing</option>
            <option>Accessories</option>
            {/* Add more categories as needed */}
          </select>
          <select
            className="p-2 border rounded-md"
            value={sortOrder}
            onChange={handleSortOrderChange}
          >
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>New Arrivals</option>
            <option>Bestsellers</option>
          </select>
        </div>
        <div className="flex space-x-2">
          <button
            className={`p-2 border rounded-md ${
              viewMode === "grid" ? "bg-gray-200" : ""
            }`}
            onClick={() => onViewChange("grid")}
            aria-label="Switch to grid view"
          >
            {/* Grid View Icon */}
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4h4v4H4V4zM4 12h4v4H4v-4zM12 4h4v4h-4V4zM12 12h4v4h-4v-4z" />
            </svg>
          </button>
          <button
            className={`p-2 border rounded-md ${
              viewMode === "list" ? "bg-gray-200" : ""
            }`}
            onClick={() => onViewChange("list")}
            aria-label="Switch to list view"
          >
            {/* List View Icon */}
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 6h12v2H4V6zM4 10h12v2H4v-2zM4 14h12v2H4v-2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filters;
