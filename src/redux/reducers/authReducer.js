// src/reducers/authReducer.js
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILURE,
  } from '../constants/userConstants';
  
  const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;
  
  const initialState = {
    userInfo: userInfoFromStorage,
    loading: false,
    error: null,
  };
  
  export default function authReducer(state = initialState, action) {
    switch (action.type) {
      case USER_LOGIN_REQUEST:
      case USER_REGISTER_REQUEST:
        return { ...state, loading: true, error: null };
  
      case USER_LOGIN_SUCCESS:
      case USER_REGISTER_SUCCESS:
        return { ...state, loading: false, userInfo: action.payload };
  
      case USER_LOGIN_FAILURE:
      case USER_REGISTER_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      case USER_LOGOUT:
        return { ...state, userInfo: null };
  
      default:
        return state;
    }
  }
  