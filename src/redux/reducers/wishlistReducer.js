import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../actionTypes";

const initialState = {
  wishlistItems: JSON.parse(localStorage.getItem("wishlistItems")) || [],
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      if (state.wishlistItems.find((item) => item.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        wishlistItems: [...state.wishlistItems, action.payload],
      };

    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter(
          (item) => item.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default wishlistReducer;
