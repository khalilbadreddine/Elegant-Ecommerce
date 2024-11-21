// src/pages/Shop.jsx
import React, { useState, useEffect } from "react";
import Filters from "../Components/Shop/Filters";
import ProductCard from "../Components/Product/ShopProductCard";

const initialProducts = [
  {
    id: 1,
    image: "/assets/Couch.png",
    title: "Modern Loveseat Sofa",
    price: 199.0,
    oldPrice: 400.0,
    rating: 4.5, // Example placeholder rating
    category: "Furniture", // Example category
    sales: 120, // Example sales number
  },
  {
    id: 2,
    image: "/assets/red-table.png",
    title: "Elegant Red Table",
    price: 89.99,
    oldPrice: 129.99,
    rating: 4.2,
    category: "Furniture",
    sales: 85,
  },
  {
    id: 3,
    image: "/assets/lamp.png",
    title: "Vintage Table Lamp",
    price: 49.99,
    oldPrice: 79.99,
    rating: 4.0,
    category: "Lighting",
    sales: 70,
  },
  {
    id: 4,
    image: "/assets/tall-lamp.png",
    title: "Tall Standing Lamp",
    price: 79.99,
    oldPrice: 109.99,
    rating: 4.6,
    category: "Lighting",
    sales: 150,
  },
  {
    id: 5,
    image: "/assets/pillow.png",
    title: "Comfortable Pillow",
    price: 19.99,
    oldPrice: 29.99,
    rating: 4.1,
    category: "Accessories",
    sales: 200,
  },
  {
    id: 6,
    image: "/assets/backet.png",
    title: "Decorative Basket",
    price: 24.99,
    oldPrice: 34.99,
    rating: 3.8,
    category: "Decor",
    sales: 65,
  },
  {
    id: 7,
    image: "/assets/couch-gray.png",
    title: "Luxurious Gray Sofa",
    price: 599.99,
    oldPrice: 899.99,
    rating: 4.9,
    category: "Furniture",
    sales: 300,
  },
  {
    id: 8,
    image: "/assets/plakar.png",
    title: "Plakar LED Lamp",
    price: 249.0,
    oldPrice: 300.0,
    rating: 4.3,
    category: "Lighting",
    sales: 110,
  },
  {
    id: 9,
    image: "/assets/toast.png",
    title: "Premium Toaster",
    price: 224.99,
    oldPrice: 299.0,
    rating: 4.4,
    category: "Kitchen Appliances",
    sales: 180,
  },
  {
    id: 10,
    image: "/assets/black-table.png",
    title: "Black Coffee Table",
    price: 149.99,
    oldPrice: 199.99,
    rating: 4.5,
    category: "Furniture",
    sales: 130,
  },
];
const products = [
  {
    id: 1,
    image: "/assets/smartphone.png",
    title: "Quantum Smartphone X100",
    price: 999.99,
    oldPrice: 1299.99,
    rating: 4.7,
    category: "Electronics",
    description:
      "The future of communication. Ultra HD camera and AI assistant.",
  },
  {
    id: 2,
    image: "/assets/desk-chair.png",
    title: "Ergonomic Desk Chair",
    price: 149.99,
    oldPrice: 199.99,
    rating: 4.5,
    category: "Furniture",
    description: "Work in comfort with lumbar support and adjustable height.",
  },
  {
    id: 3,
    image: "/assets/gaming-console.png",
    title: "Supernova Gaming Console",
    price: 399.99,
    oldPrice: null,
    rating: 4.9,
    category: "Gaming",
    description: "Level up with 4K graphics and immersive gameplay.",
  },
  {
    id: 4,
    image: "/assets/coffee-maker.png",
    title: "BrewMaster Coffee Machine",
    price: 89.99,
    oldPrice: 129.99,
    rating: 4.6,
    category: "Kitchen",
    description: "Brew the perfect cup every morning with advanced settings.",
  },
  {
    id: 5,
    image: "/assets/fitness-tracker.png",
    title: "Fitness Tracker 3.0",
    price: 69.99,
    oldPrice: 99.99,
    rating: 4.2,
    category: "Health",
    description:
      "Track your steps, heart rate, and sleep with real-time analytics.",
  },
  {
    id: 6,
    image: "/assets/luxury-watch.png",
    title: "Luxury Gold Watch",
    price: 499.99,
    oldPrice: 799.99,
    rating: 4.8,
    category: "Accessories",
    description: "Timeless elegance with precision engineering.",
  },
  {
    id: 7,
    image: "/assets/bluetooth-speaker.png",
    title: "Portable Bluetooth Speaker",
    price: 39.99,
    oldPrice: 59.99,
    rating: 4.3,
    category: "Electronics",
    description: "Crystal clear sound on the go. Waterproof and durable.",
  },
  {
    id: 8,
    image: "/assets/running-shoes.png",
    title: "Marathon Pro Running Shoes",
    price: 119.99,
    oldPrice: 149.99,
    rating: 4.7,
    category: "Sportswear",
    description:
      "Run with confidence. Designed for comfort and peak performance.",
  },
];

function Shop() {
  const [products, setProducts] = useState(initialProducts);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: "All Categories",
    sortOrder: "Price: Low to High",
  });
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
  const [productsToShow, setProductsToShow] = useState(4);

  useEffect(() => {
    applyFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, productsToShow]);

  const applyFilters = () => {
    let filteredProducts = [...products];

    // Filter by category
    if (filters.category !== "All Categories") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === filters.category
      );
    }

    // Sort products
    switch (filters.sortOrder) {
      case "Price: Low to High":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "Price: High to Low":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "New Arrivals":
        filteredProducts.sort((a, b) => b.id - a.id); // Assuming higher IDs are newer
        break;
      case "Bestsellers":
        filteredProducts.sort((a, b) => b.sales - a.sales);
        break;
      default:
        break;
    }

    setVisibleProducts(filteredProducts.slice(0, productsToShow));
  };

  const loadMoreProducts = () => {
    setProductsToShow(productsToShow + 4); // Load 4 more products
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setProductsToShow(4); // Reset visible products when filters change
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
          viewMode === "grid"
            ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            : "grid-cols-1"
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
