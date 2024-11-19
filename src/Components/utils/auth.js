// src/utils/auth.js

// Check if the user is authenticated
export const isAuthenticated = () => {
  return !!localStorage.getItem("token"); // Returns true if token exists, false otherwise
};

// Sign out the user by removing the token
export const signOut = () => {
  localStorage.removeItem("token"); // Remove the token from localStorage
};
