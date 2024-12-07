// src/redux/store.js
import { createStore, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from './reducers';

// Retrieve user info from localStorage if available
const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

// Initial state
const initialState = {
  auth: { userInfo: userInfoFromStorage },
  cart: { cartItems: [], loading: false },
  wishlist: { wishlistItems: [], loading: false },
  products: { products: [], loading: false },
};

const middleware = [thunk];

// Safely access the Redux DevTools Extension compose if it's available, otherwise fallback to Redux compose
// Also, we can specify extension options if needed.
// For example, name: 'MyEcommerceStore' helps identify the store in DevTools.
const composeEnhancers =
  (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options here (optional)
        name: 'MyEcommerceStore',
        // e.g. actionsDenylist, actionsCreators, serialize, etc.
      })
    : compose;

// Create the store with middleware and enhancers
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

// Subscribe to store updates to persist userInfo if present
store.subscribe(() => {
  const state = store.getState();
  if (state.auth.userInfo) {
    localStorage.setItem('userInfo', JSON.stringify(state.auth.userInfo));
  } else {
    localStorage.removeItem('userInfo');
  }
});

export default store;
