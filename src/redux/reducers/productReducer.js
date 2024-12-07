// src/redux/reducers/productReducer.js
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  APPLY_FILTERS,
  SORT_PRODUCTS,
} from '../constants/actionTypes';

const initialState = {
  products: [],
  filteredProducts: [],
  loading: false,
  error: null,
  // For single product
  product: null,
  productLoading: false,
  productError: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fetch all products
    case FETCH_PRODUCTS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        filteredProducts: action.payload,
      };
    case FETCH_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    // Fetch single product
    case FETCH_PRODUCT_REQUEST:
      return { ...state, productLoading: true, productError: null };
    case FETCH_PRODUCT_SUCCESS:
      return { ...state, productLoading: false, product: action.payload };
    case FETCH_PRODUCT_FAILURE:
      return { ...state, productLoading: false, productError: action.payload };

    // Apply filters
    case APPLY_FILTERS:
      const filters = action.payload;
      let filtered = [...state.products];

      // Example filter: category
      if (filters.category) {
        filtered = filtered.filter(
          (product) => product.category === filters.category
        );
      }

      // Add more filter conditions as needed

      return { ...state, filteredProducts: filtered };

    // Sort products
    case SORT_PRODUCTS:
      const sorted = [...state.filteredProducts];
      const sortOption = action.payload;

      switch (sortOption) {
        case 'Price: Low to High':
          sorted.sort((a, b) => a.price - b.price);
          break;
        case 'Price: High to Low':
          sorted.sort((a, b) => b.price - a.price);
          break;
        case 'Newest':
          sorted.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          break;
        // Add more sorting options as needed
        default:
          break;
      }

      return { ...state, filteredProducts: sorted };

    default:
      return state;
  }
};

export default productReducer;
