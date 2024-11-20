import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../actionTypes";

export const addToWishlist = (product) => ({
  type: ADD_TO_WISHLIST,
  payload: product,
});

export const removeFromWishlist = (productId) => ({
  type: REMOVE_FROM_WISHLIST,
  payload: productId,
});
