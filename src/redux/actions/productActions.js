// src/redux/actions/productActions.js
import api from '../../api/axiosConfig';
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

/**
 * Fetch all products from the API.
 */
export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });
    const { data } = await api.get('/products');
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FETCH_PRODUCTS_FAILURE,
      payload: error.response?.data.message || error.message,
    });
  }
};

/**
 * Fetch a single product by ID from the API.
 * @param {number} id - The ID of the product to fetch.
 */
export const fetchProductById = (id) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_PRODUCT_REQUEST });
    const { data } = await api.get(`/products/${id}`);
    dispatch({ type: FETCH_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FETCH_PRODUCT_FAILURE,
      payload: error.response?.data.message || error.message,
    });
  }
};

/**
 * Apply filters to the product list.
 * @param {Object} filters - An object containing filter criteria (e.g., category, price range).
 */
export const applyFiltersAction = (filters) => (dispatch) => {
  dispatch({ type: APPLY_FILTERS, payload: filters });
};

/**
 * Sort the product list based on a sort option.
 * @param {string} sortOption - The criteria to sort by (e.g., "Price: Low to High").
 */
export const sortProductsAction = (sortOption) => (dispatch) => {
  dispatch({ type: SORT_PRODUCTS, payload: sortOption });
};
