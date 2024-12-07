// src/reducers/wishlistReducer.js
import {
  FETCH_WISHLIST_REQUEST,
  FETCH_WISHLIST_SUCCESS,
  FETCH_WISHLIST_FAILURE,
  ADD_TO_WISHLIST_SUCCESS,
  ADD_TO_WISHLIST_FAILURE,
  REMOVE_FROM_WISHLIST_SUCCESS,
  REMOVE_FROM_WISHLIST_FAILURE,
} from '../constants/actionTypes';

const initialState = {
  wishlistItems: [],
  loading: false,
  error: null,
};

export default function wishlistReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_WISHLIST_REQUEST:
      return { ...state, loading: true };
    case FETCH_WISHLIST_SUCCESS:
      return { ...state, loading: false, wishlistItems: action.payload, error: null };
    case FETCH_WISHLIST_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case ADD_TO_WISHLIST_SUCCESS:
    case REMOVE_FROM_WISHLIST_SUCCESS:
      // Server returns the updated wishlist array
      return { ...state, wishlistItems: action.payload, error: null };

    case ADD_TO_WISHLIST_FAILURE:
    case REMOVE_FROM_WISHLIST_FAILURE:
      return { ...state, error: action.payload };

    default:
      return state;
  }
}
