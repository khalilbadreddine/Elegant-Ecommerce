// src/reducers/cartReducer.js
import {
  FETCH_CART_REQUEST,
  FETCH_CART_SUCCESS,
  FETCH_CART_FAILURE,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  UPDATE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILURE,
  REMOVE_FROM_CART_SUCCESS,
  REMOVE_FROM_CART_FAILURE,
} from '../constants/actionTypes';

const initialState = {
  cartItems: [],
  loading: false,
  error: null,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CART_REQUEST:
      return { ...state, loading: true };
    case FETCH_CART_SUCCESS:
      return { ...state, loading: false, cartItems: action.payload, error: null };
    case FETCH_CART_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case ADD_TO_CART_SUCCESS:
    case UPDATE_CART_ITEM_SUCCESS:
    case REMOVE_FROM_CART_SUCCESS:
      // After each cart mutation, the server returns the updated cartItems array
      return { ...state, cartItems: action.payload, error: null };

    case ADD_TO_CART_FAILURE:
    case UPDATE_CART_ITEM_FAILURE:
    case REMOVE_FROM_CART_FAILURE:
      return { ...state, error: action.payload };

    default:
      return state;
  }
}
