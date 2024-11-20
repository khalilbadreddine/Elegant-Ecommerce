import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Persist cart and wishlist to localStorage
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("cartItems", JSON.stringify(state.cart.cartItems));
  localStorage.setItem("wishlistItems", JSON.stringify(state.wishlist.wishlistItems));
});

export default store;
