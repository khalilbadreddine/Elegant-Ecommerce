// productActions.js

import { FETCH_PRODUCTS, APPLY_FILTERS, SORT_PRODUCTS } from "../actionTypes";
import mockProducts from "../../utils/mockProducts";

// Fetch products
export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
  payload: mockProducts,
});

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
