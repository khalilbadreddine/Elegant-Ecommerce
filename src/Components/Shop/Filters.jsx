import { useState } from "react";
import PropTypes from "prop-types";

function Filters({ onFilterChange, onSortChange, onViewChange, viewMode }) {
  const [category, setCategory] = useState("All Categories");
  const [sortOrder, setSortOrder] = useState("Price: Low to High");

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    onFilterChange({ category: e.target.value });
  };

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
    onSortChange(e.target.value);
  };

  return (
    <div className="p-4">
      <div className="flex space-x-4">
        <select
          className="p-2 border rounded-md"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="All Categories">All Categories</option>
          <option value="Furniture">Furniture</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Decor">Decor</option>
        </select>
        <select
          className="p-2 border rounded-md"
          value={sortOrder}
          onChange={handleSortOrderChange}
        >
          <option value="Price: Low to High">Price: Low to High</option>
          <option value="Price: High to Low">Price: High to Low</option>
          <option value="New Arrivals">New Arrivals</option>
          <option value="Bestsellers">Bestsellers</option>
        </select>
      </div>
      <div className="flex space-x-2 mt-4">
        <button
          className={`p-2 border rounded-md ${
            viewMode === "grid" ? "bg-gray-200" : ""
          }`}
          onClick={() => onViewChange("grid")}
        >
          Grid View
        </button>
        <button
          className={`p-2 border rounded-md sm:hidden ${
            viewMode === "list" ? "bg-gray-200" : ""
          }`}
          onClick={() => onViewChange("list")}
        >
          List View
        </button>
        <button
          className={`hidden sm:block p-2 border rounded-md ${
            viewMode === "desktoplist" ? "bg-gray-200" : ""
          }`}
          onClick={() => onViewChange("desktoplist")}
        >
          Desktop List
        </button>
      </div>
    </div>
  );
}

Filters.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  onSortChange: PropTypes.func.isRequired,
  onViewChange: PropTypes.func.isRequired,
  viewMode: PropTypes.oneOf(["grid", "list", "desktoplist"]).isRequired,
};

export default Filters;
