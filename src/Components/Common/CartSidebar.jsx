import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { useState } from "react";
import { Snackbar, Alert, useMediaQuery } from "@mui/material";
import CartProductCard from "../Product/CartProductCard";
import {
  removeFromCart,
  updateCartQuantity,
} from "../../redux/actions/cartActions";

const CartSidebar = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Snackbar state
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  // Responsive breakpoint
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  // Calculate Subtotal
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Handle quantity change
  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateCartQuantity(productId, newQuantity));
    setSnackbarMessage("Cart updated");
    setSnackbarSeverity("success");
    setSnackbarOpen(true);
  };

  // Handle item removal
  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
    setSnackbarMessage("Item removed from cart");
    setSnackbarSeverity("info");
    setSnackbarOpen(true);
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-50 flex flex-col`}
      >
        {/* Header */}
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-bold">Cart</h2>
          <button onClick={onClose} className="text-gray-600">
            ✕
          </button>
        </div>

        {/* Cart Items Section */}
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.map((item) => (
            <CartProductCard
              key={item.id}
              productId={item.id}
              image={item.image}
              title={item.title}
              color={item.color}
              price={item.price}
              quantity={item.quantity}
              onRemove={() => handleRemoveFromCart(item.id)}
              onQuantityChange={(newQuantity) =>
                handleQuantityChange(item.id, newQuantity)
              }
            />
          ))}
          {cartItems.length === 0 && (
            <p className="text-gray-600">Your cart is empty.</p>
          )}
        </div>

        {/* Footer Section */}
        <div className="p-4 border-t bg-white">
          <div className="flex justify-between mb-2">
            <p>Subtotal</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <p>Total</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <button className="w-full bg-black text-white py-2 mt-4">
            Checkout
          </button>
          <button
            onClick={onClose}
            className="w-full bg-gray-200 text-black py-2 mt-2"
          >
            View Cart
          </button>
        </div>
      </div>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{
          vertical: isMobile ? "top" : "bottom",
          horizontal: "center",
        }}
        ContentProps={{
          sx: {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{
            width: "100%",
            backgroundColor: "#fff",
            color: "#000",
            boxShadow: 3,
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

CartSidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CartSidebar;