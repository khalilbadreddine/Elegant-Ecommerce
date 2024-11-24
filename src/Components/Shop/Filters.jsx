import { useState } from "react";
import PropTypes from "prop-types";
import { List, Grid, GridList } from "../Common/Icons";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

function Filters({ onFilterChange, onSortChange, onViewChange, viewMode }) {
  const [category, setCategory] = useState("All Categories");
  const [sortOrder, setSortOrder] = useState("Price: Low to High");

  const handleCategoryChange = (value) => {
    setCategory(value);
    onFilterChange({ category: value });
  };

  const handleSortOrderChange = (value) => {
    setSortOrder(value);
    onSortChange(value);
  };

  return (
    <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between">
      {/* Left Side: Filters */}
      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
        {/* Category Dropdown */}
        <Menu>
          <MenuHandler>
            <Button
              variant="outlined"
              color="blue-gray"
              className="w-full sm:w-auto"
            >
              {category}
            </Button>
          </MenuHandler>
          <MenuList>
            {["All Categories", "Furniture", "Kitchen", "Decor"].map((item) => (
              <MenuItem
                key={item}
                onClick={() => handleCategoryChange(item)}
                className={category === item ? "bg-gray-100 font-bold" : ""}
              >
                {item}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>

        {/* Sort Order Dropdown */}
        <Menu>
          <MenuHandler>
            <Button
              variant="outlined"
              color="blue-gray"
              className="w-full sm:w-auto"
            >
              {sortOrder}
            </Button>
          </MenuHandler>
          <MenuList>
            {[
              "Price: Low to High",
              "Price: High to Low",
              "New Arrivals",
              "Bestsellers",
            ].map((item) => (
              <MenuItem
                key={item}
                onClick={() => handleSortOrderChange(item)}
                className={sortOrder === item ? "bg-gray-100 font-bold" : ""}
              >
                {item}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </div>

      {/* Right Side: View Buttons */}
      <div className="flex space-x-2 mt-4 sm:mt-0">
        <button
          className={`p-2 border rounded-md transition ${
            viewMode === "grid"
              ? "bg-gray-200 dark:bg-gray-700"
              : "hover:bg-gray-100 dark:hover:bg-gray-600"
          }`}
          onClick={() => onViewChange("grid")}
        >
          <Grid />
        </button>
        <button
          className={`p-2 border rounded-md sm:hidden transition ${
            viewMode === "list"
              ? "bg-gray-200 dark:bg-gray-700"
              : "hover:bg-gray-100 dark:hover:bg-gray-600"
          }`}
          onClick={() => onViewChange("list")}
        >
          <List />
        </button>
        <button
          className={`hidden sm:block p-2 border rounded-md transition ${
            viewMode === "desktoplist"
              ? "bg-gray-200 dark:bg-gray-700"
              : "hover:bg-gray-100 dark:hover:bg-gray-600"
          }`}
          onClick={() => onViewChange("desktoplist")}
        >
          <GridList />
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
