// src/components/ProductListings.js
import { useState, useEffect } from 'react';
import ProductCard from '../Components/Product/ShopProductCard';
import Filters from '../hooks/ProductListings';

const initialProducts = [
];

function ProductListings() {
  const [products, setProducts] = useState(initialProducts);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [filters, setFilters] = useState({
    category: 'All Categories',
    sortOrder: 'Price: Low to High',
  });
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [productsToShow, setProductsToShow] = useState(8);

  useEffect(() => {
    applyFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, products]);

  const applyFilters = () => {
    let filteredProducts = [...products];

    // Filter by category
    if (filters.category !== 'All Categories') {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === filters.category
      );
    }

    // Sort products
    switch (filters.sortOrder) {
      case 'Price: Low to High':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'Price: High to Low':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'New Arrivals':
        filteredProducts.sort((a, b) => b.id - a.id); // Assuming newer products have higher IDs
        break;
      case 'Bestsellers':
        filteredProducts.sort((a, b) => b.sales - a.sales); // Assuming 'sales' property exists
        break;
      default:
        break;
    }

    setVisibleProducts(filteredProducts.slice(0, productsToShow));
  };

  const loadMoreProducts = () => {
    setProductsToShow(productsToShow + 4); // Load 4 more products
    applyFilters();
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleViewChange = (mode) => {
    setViewMode(mode);
  };

  return (
    <div className="p-4">
      <Filters
        onFilterChange={handleFilterChange}
        onViewChange={handleViewChange}
        viewMode={viewMode}
      />
      <div
        className={`grid gap-4 ${
          viewMode === 'grid'
            ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
            : 'grid-cols-1'
        }`}
      >
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} viewMode={viewMode} />
        ))}
      </div>
      {/* Load More Button */}
      {visibleProducts.length < products.length && (
        <div className="flex justify-center mt-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={loadMoreProducts}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductListings;
