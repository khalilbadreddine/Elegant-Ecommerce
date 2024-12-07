// src/actions/wishlistActions.js
import api from '../../api/axiosConfig';
import {
  FETCH_WISHLIST_REQUEST,
  FETCH_WISHLIST_SUCCESS,
  FETCH_WISHLIST_FAILURE,
  ADD_TO_WISHLIST_REQUEST,
  ADD_TO_WISHLIST_SUCCESS,
  ADD_TO_WISHLIST_FAILURE,
  REMOVE_FROM_WISHLIST_REQUEST,
  REMOVE_FROM_WISHLIST_SUCCESS,
  REMOVE_FROM_WISHLIST_FAILURE,
} from '../constants/actionTypes';

export const fetchWishlist = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_WISHLIST_REQUEST });
    const { data } = await api.get('/wishlist');
    dispatch({ type: FETCH_WISHLIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FETCH_WISHLIST_FAILURE,
      payload: error.response?.data.message || error.message,
    });
  }
};

export const addToWishlist = (productId) => async (dispatch) => {
  try {
    dispatch({ type: ADD_TO_WISHLIST_REQUEST });
    const { data } = await api.post('/wishlist', { productId });
    dispatch({ type: ADD_TO_WISHLIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ADD_TO_WISHLIST_FAILURE,
      payload: error.response?.data.message || error.message,
    });
  }
};

export const removeFromWishlist = (itemId) => async (dispatch) => {
  try {
    dispatch({ type: REMOVE_FROM_WISHLIST_REQUEST });
    const { data } = await api.delete(`/wishlist/${itemId}`);
    dispatch({ type: REMOVE_FROM_WISHLIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: REMOVE_FROM_WISHLIST_FAILURE,
      payload: error.response?.data.message || error.message,
    });
  }
};
