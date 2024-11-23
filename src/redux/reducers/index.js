import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
  products: productReducer,
});

export default rootReducer;
