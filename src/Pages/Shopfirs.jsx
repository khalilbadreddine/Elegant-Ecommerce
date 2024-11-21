import { useState } from "react";
import ShopFilters from "../components/product/ShopFilters";
import ProductGrid from "../components/product/ProductGrid";
import { GridIcon, SquaresIcon, ColumnsIcon } from "../components/Common/Icons";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All Price");
  const [sortOption, setSortOption] = useState("Newest");
  const [viewMode, setViewMode] = useState("grid4"); // 'grid4', 'grid3', 'grid2'

  return (
    <div className="bg-gray-100 w-[90%] mx-auto flex flex-col">
      {/* Header */}
      <header className="bg-white py-10 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold">Shop Page</h1>
        <p className="text-gray-600 mt-2">
          Let’s design the space you’ve always imagined.
        </p>
      </header>

      {/* Filters & Products */}
      <div className="container mx-auto px-4 md:px-8 py-8">
        {/* Horizontal Filters */}
        <div className="flex flex-wrap items-center justify-between mb-6">
          {/* Filters */}
          <ShopFilters
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedPrice={selectedPrice}
            setSelectedPrice={setSelectedPrice}
          />

          {/* View Mode & Sort Options */}
          <div className="flex items-center space-x-4">
            {/* View Mode Icons */}
            <div className="flex space-x-2">
              <button onClick={() => setViewMode("grid4")}>
                <GridIcon />
              </button>
              <button onClick={() => setViewMode("grid3")}>
                <SquaresIcon />
              </button>
              <button onClick={() => setViewMode("grid2")}>
                <ColumnsIcon />
              </button>
            </div>

            {/* Sort Options */}
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="bg-white border border-gray-300 rounded px-3 py-1 text-sm"
            >
              <option value="Newest">Newest</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <ProductGrid
          selectedCategory={selectedCategory}
          selectedPrice={selectedPrice}
          sortOption={sortOption}
          setSortOption={setSortOption}
          viewMode={viewMode}
        />
      </div>
    </div>
  );
};

export default Shop;
