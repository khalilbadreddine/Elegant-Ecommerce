import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  applyFiltersAction,
  sortProductsAction,
} from "../redux/actions/productActions";
import Filters from "../Components/Shop/Filters";
import UnifiedProductCard from "../Components/Product/UnifiedProductCard";
import ShopPageHeader from "../Components/Shop/ShopPageHeader";

function Shop() {
  const dispatch = useDispatch();
  const { filteredProducts = [] } = useSelector((state) => state.products);

  console.log("filteredProducts:", filteredProducts);

  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        if (viewMode === "list") {
          setViewMode("grid");
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [viewMode]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleFilterChange = (filters) => {
    dispatch(applyFiltersAction(filters));
    setCurrentPage(1);
  };

  const handleSortChange = (sortOption) => {
    dispatch(sortProductsAction(sortOption));
  };

  const handleViewChange = (mode) => {
    setViewMode(mode);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  if (!filteredProducts || filteredProducts.length === 0) {
    return <p>Loading products...</p>; // Show loading state if no products are available
  }

  return (
    <div className="p-4">
      <ShopPageHeader products={filteredProducts} />
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
            <UnifiedProductCard
              key={product._id}
              product={{ ...product, id: product._id }}
              viewMode={viewMode}
              useNavigation={true}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-10 mb-8 space-x-3">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            style={{
              padding: "0.5rem 1rem",
              border: "1px solid black",
              borderRadius: "0.375rem",
              backgroundColor: currentPage === index + 1 ? "black" : "#ffffff",
              color: currentPage === index + 1 ? "#ffffff" : "black",
              cursor: "pointer",
              transition: "background-color 0.3s, color 0.3s",
            }}
            onClick={() => setCurrentPage(index + 1)}
            onMouseOver={(e) => {
              if (currentPage !== index + 1) {
                e.target.style.backgroundColor = "black";
                e.target.style.color = "#ffffff";
              }
            }}
            onMouseOut={(e) => {
              if (currentPage !== index + 1) {
                e.target.style.backgroundColor = "#ffffff";
                e.target.style.color = "black";
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
