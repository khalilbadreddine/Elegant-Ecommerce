import { FETCH_PRODUCTS, APPLY_FILTERS, SORT_PRODUCTS } from "../actionTypes";
import mockProducts from "../../utils/mockProducts";

// Fetch all products
export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
  payload: mockProducts,
});

// Fetch a product by ID
export const fetchProductById = (id) => {
  const product = mockProducts.find((product) => product.id === id);
  return {
    type: FETCH_PRODUCTS,
    payload: product ? [product] : [], // Return the product or an empty array if not found
  };
};

// Apply filters
export const applyFilters = (filters) => ({
  type: APPLY_FILTERS,
  payload: filters,
});

// Sort products
export const sortProductsAction = (sortOption) => ({
  type: SORT_PRODUCTS,
  payload: sortOption,
});
