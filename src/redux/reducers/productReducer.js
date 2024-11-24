import {
  FETCH_PRODUCTS,
  APPLY_FILTERS,
  SORT_PRODUCTS,
} from "../actionTypes";

const initialState = {
  products: [], // Original products
  filteredProducts: [], // Products after filtering and sorting
  filters: {
    category: "All Categories",
  },
  sortOrder: "Price: Low to High",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS: {
      // Handle fetching all products or a single product
      const isSingleProduct = Array.isArray(action.payload) && action.payload.length === 1;
      return {
        ...state,
        products: isSingleProduct ? state.products : action.payload,
        filteredProducts: isSingleProduct ? action.payload : sortProducts(action.payload, state.sortOrder),
      };
    }

    case APPLY_FILTERS: {
      // Update filters and apply them
      const filtered = applyFilters(state.products, action.payload);
      const sortedFiltered = sortProducts(filtered, state.sortOrder);
      return {
        ...state,
        filters: action.payload,
        filteredProducts: sortedFiltered,
      };
    }

    case SORT_PRODUCTS: {
      // Update sortOrder and sort filtered products
      const sortedProducts = sortProducts(state.filteredProducts, action.payload);
      return {
        ...state,
        sortOrder: action.payload,
        filteredProducts: sortedProducts,
      };
    }

    default:
      return state;
  }
};

// Helper function to filter products
const applyFilters = (products, filters) => {
  let filtered = products;

  if (filters.category && filters.category !== "All Categories") {
    filtered = filtered.filter((product) => product.category === filters.category);
  }

  return filtered;
};

// Helper function to sort products
const sortProducts = (products, sortOrder) => {
  let sortedProducts = [...products];

  switch (sortOrder) {
    case "Price: Low to High":
      sortedProducts.sort((a, b) => a.price - b.price);
      break;
    case "Price: High to Low":
      sortedProducts.sort((a, b) => b.price - a.price);
      break;
    case "New Arrivals":
      sortedProducts.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
      break;
    case "Bestsellers":
      sortedProducts.sort((a, b) => b.sales - a.sales);
      break;
    default:
      break;
  }

  return sortedProducts;
};

export default productReducer;
