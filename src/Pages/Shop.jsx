import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  applyFilters,
  sortProductsAction,
} from "../redux/actions/productActions";
import Filters from "../Components/Shop/Filters";
import ProductCard from "../Components/Product/ShopProductCard";
import ShopPageHeader from "../Components/Shop/ShopPageHeader";

function Shop() {
  const dispatch = useDispatch();

  // Access products and filters from Redux store
  const { filteredProducts } = useSelector((state) => state.products);

  const [viewMode, setViewMode] = useState("grid"); // Default: 'grid'
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const itemsPerPage = 4; // Number of products per page

  // Automatically adjust view mode based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        if (viewMode === "list") {
          setViewMode("grid"); // Fallback to grid if list view is not available
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [viewMode]);

  useEffect(() => {
    // Fetch products from mock data (or API later)
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleFilterChange = (filters) => {
    dispatch(applyFilters(filters));
    setCurrentPage(1); // Reset to the first page when filters change
  };

  const handleSortChange = (sortOption) => {
    dispatch(sortProductsAction(sortOption));
  };

  const handleViewChange = (mode) => {
    setViewMode(mode);
  };

  // Calculate products for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div className="p-4">
      <ShopPageHeader />
      <Filters
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
        onViewChange={handleViewChange}
        viewMode={viewMode}
      />
      <div>
        <div
          className={`grid gap-4 ${
            viewMode === "grid"
              ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              : viewMode === "desktoplist"
              ? "grid-cols-1 md:grid-cols-2"
              : "grid-cols-1"
          }`}
        >
          {currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              viewMode={viewMode}
            />
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 mb-8 space-x-3">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            style={{
              padding: "0.5rem 1rem",
              border: "1px solid black", // Primary color for border
              borderRadius: "0.375rem",
              backgroundColor: currentPage === index + 1 ? "black" : "#ffffff", // Active and inactive background
              color: currentPage === index + 1 ? "#ffffff" : "black", // Text color
              cursor: "pointer",
              transition: "background-color 0.3s, color 0.3s",
            }}
            onClick={() => setCurrentPage(index + 1)}
            onMouseOver={(e) => {
              if (currentPage !== index + 1) {
                e.target.style.backgroundColor = "black"; // Hover background
                e.target.style.color = "#ffffff"; // Hover text color
              }
            }}
            onMouseOut={(e) => {
              if (currentPage !== index + 1) {
                e.target.style.backgroundColor = "#ffffff"; // Reset background
                e.target.style.color = "black"; // Reset text color
              }
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Shop;
