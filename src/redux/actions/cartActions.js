import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../actionTypes";

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const updateCartQuantity = (productId, newQuantity) => ({
  type: UPDATE_CART_QUANTITY,
  payload: { productId, newQuantity },
});
