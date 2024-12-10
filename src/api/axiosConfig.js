// src/api/axiosConfig.js
import axios from 'axios';
import store from '../redux/store';

const api = axios.create({
  baseURL: "https://ecommerce-api-elegant-production.up.railway.app/api/", // Replace with your actual API base URL
});

api.interceptors.request.use(
  (config) => {
    const {
      auth: { userInfo },
    } = store.getState();
    if (userInfo && userInfo.token) {
      config.headers.Authorization = `Bearer ${userInfo.token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
