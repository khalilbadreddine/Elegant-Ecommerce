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
  const [productsToShow, setProductsToShow] = useState(4);

  // Automatically adjust view mode based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // Medium (md) or larger screens
        if (viewMode === "list") {
          setViewMode("grid"); // Fallback to grid if list view is not available
        }
      } else {
        // Small screens
        if (viewMode === "desktoplist") {
          setViewMode("list"); // Fallback to list for small screens
        }
      }
    };

    // Initial check and event listener for resize
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [viewMode]);

  useEffect(() => {
    // Fetch products from mock data (or API later)
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleFilterChange = (filters) => {
    // Dispatch filters to Redux
    dispatch(applyFilters(filters));
    setProductsToShow(4); // Reset visible products when filters change
  };

  const handleSortChange = (sortOption) => {
    // Dispatch sort option to Redux
    dispatch(sortProductsAction(sortOption));
  };

  const loadMoreProducts = () => {
    setProductsToShow((prev) => prev + 4); // Load more products
  };

  const handleViewChange = (mode) => {
    setViewMode(mode);
  };

  return (
    <div className="p-4">
      <ShopPageHeader />
      <Filters
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
        onViewChange={handleViewChange}
        viewMode={viewMode} // Pass current viewMode to keep buttons in sync
      />
      <div
        className={`grid gap-4 ${
          viewMode === "grid"
            ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            : viewMode === "desktoplist"
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-2" // Max 2 cards per row
            : "grid-cols-1"
        }`}
      >
        {filteredProducts.slice(0, productsToShow).map((product) => (
          <ProductCard key={product.id} product={product} viewMode={viewMode} />
        ))}
      </div>

      {/* Load More Button */}
      {productsToShow < filteredProducts.length && (
        <div className="flex justify-center mt-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={loadMoreProducts}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default Shop;
