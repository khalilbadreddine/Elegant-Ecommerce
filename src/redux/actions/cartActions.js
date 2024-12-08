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
import { fetchProductById } from './productActions'; 

// Utility: Load cart from local storage
const loadCartFromLocalStorage = () => JSON.parse(localStorage.getItem('cart')) || [];

// Utility: Save cart to local storage
const saveCartToLocalStorage = (cart) => localStorage.setItem('cart', JSON.stringify(cart));


// Fetch user's cart (handles both logged-in and anonymous users)


export const fetchCart = () => async (dispatch, getState) => {
  const { userInfo } = getState().auth;

  try {
    dispatch({ type: FETCH_CART_REQUEST });

    let cartItems = [];
    if (userInfo) {
      // For logged-in users
      const { data } = await api.get('/cart');
      cartItems = data.items || [];
    } else {
      // For guest users
      cartItems = loadCartFromLocalStorage();
    }

    // Fetch product details for each cart item
    const fullDetailsPromises = cartItems.map(async (item) => {
      const productDetails = await fetchProductById(item.productId); // Assuming this fetches product details
      return {
        ...item,
        productDetails,
      };
    });

    const detailedCartItems = await Promise.all(fullDetailsPromises);

    dispatch({ type: FETCH_CART_SUCCESS, payload: { items: detailedCartItems } });
  } catch (error) {
    dispatch({
      type: FETCH_CART_FAILURE,
      payload: error.response?.data.message || error.message,
    });
  }
};


// Add item to cart (handles both logged-in and anonymous users)
export const addToCart = (productId) => async (dispatch, getState) => {
  const { userInfo } = getState().auth;

  try {
    dispatch({ type: ADD_TO_CART_REQUEST });

    if (userInfo) {
      // For logged-in users
      const { data } = await api.post('/cart', { productId, quantity: 1 });
      dispatch({ type: ADD_TO_CART_SUCCESS, payload: data });
    } else {
      // For guest users
      const cart = loadCartFromLocalStorage();
      const existingItem = cart.find((item) => item.productId === productId);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ productId, quantity: 1 });
      }

      saveCartToLocalStorage(cart);
      dispatch({ type: ADD_TO_CART_SUCCESS, payload: { items: cart } });
    }
  } catch (error) {
    dispatch({
      type: ADD_TO_CART_FAILURE,
      payload: error.response?.data.message || error.message,
    });
  }
};

// Update cart item quantity (handles both logged-in and anonymous users)
export const updateCartItem = (productId, newQuantity) => async (dispatch, getState) => {
  const { userInfo } = getState().auth;

  try {
    dispatch({ type: UPDATE_CART_ITEM_REQUEST });

    if (userInfo) {
      // For logged-in users
      const { data } = await api.put(`/cart/${productId}`, { quantity: newQuantity });
      dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data });
    } else {
      // For guest users
      const cart = loadCartFromLocalStorage();
      const item = cart.find((item) => item.productId === productId);

      if (item) {
        item.quantity = newQuantity;
        saveCartToLocalStorage(cart);
        dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: { items: cart } });
      }
    }
  } catch (error) {
    dispatch({
      type: UPDATE_CART_ITEM_FAILURE,
      payload: error.response?.data.message || error.message,
    });
  }
};

// Remove item from cart (handles both logged-in and anonymous users)
export const removeFromCart = (productId) => async (dispatch, getState) => {
  const { userInfo } = getState().auth;

  try {
    dispatch({ type: REMOVE_FROM_CART_REQUEST });

    if (userInfo) {
      // For logged-in users
      const { data } = await api.delete(`/cart/${productId}`);
      dispatch({ type: REMOVE_FROM_CART_SUCCESS, payload: data });
    } else {
      // For guest users
      const cart = loadCartFromLocalStorage();
      const updatedCart = cart.filter((item) => item.productId !== productId);

      saveCartToLocalStorage(updatedCart);
      dispatch({ type: REMOVE_FROM_CART_SUCCESS, payload: { items: updatedCart } });
    }
  } catch (error) {
    dispatch({
      type: REMOVE_FROM_CART_FAILURE,
      payload: error.response?.data.message || error.message,
    });
  }
};
