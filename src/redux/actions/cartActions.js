// src/actions/cartActions.js
import api from '../../api/axiosConfig';
import {
  FETCH_CART_REQUEST,
  FETCH_CART_SUCCESS,
  FETCH_CART_FAILURE,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILURE,
  REMOVE_FROM_CART_REQUEST,
  REMOVE_FROM_CART_SUCCESS,
  REMOVE_FROM_CART_FAILURE,
} from '../constants/actionTypes';

// Fetch user's cart from the API
export const fetchCart = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_CART_REQUEST });
    const { data } = await api.get('/cart');
    dispatch({ type: FETCH_CART_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FETCH_CART_FAILURE,
      payload: error.response?.data.message || error.message,
    });
  }
};

// Add item to cart
export const addToCart = (productId) => async (dispatch) => {
  try {
    dispatch({ type: ADD_TO_CART_REQUEST });
    const { data } = await api.post('/cart', { productId, quantity: 1 });
    dispatch({ type: ADD_TO_CART_SUCCESS, payload: data });
    console.log("data",data);
  } catch (error) {
    dispatch({
      type: ADD_TO_CART_FAILURE,
      payload: error.response?.data.message || error.message,
    });
  }
};


// Update cart item quantity
export const updateCartItem = (itemId, newQuantity) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_CART_ITEM_REQUEST });
    const { data } = await api.put(`/cart/${itemId}`, { quantity: newQuantity });
    dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: UPDATE_CART_ITEM_FAILURE,
      payload: error.response?.data.message || error.message,
    });
  }
};

// Remove item from cart
export const removeFromCart = (itemId) => async (dispatch) => {
  try {
    dispatch({ type: REMOVE_FROM_CART_REQUEST });
    const { data } = await api.delete(`/cart/${itemId}`);
    dispatch({ type: REMOVE_FROM_CART_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: REMOVE_FROM_CART_FAILURE,
      payload: error.response?.data.message || error.message,
    });
  }
};
