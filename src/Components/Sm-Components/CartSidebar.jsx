// src/Components/Sm-Components/CartSidebar.jsx
import { useContext } from "react";
import PropTypes from "prop-types";
import CartProductCard from "./CartProductCard";
import { CartContext } from "../contexts/CartContext";

const CartSidebar = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  // Calculate Subtotal
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose} // Close the sidebar when clicking outside
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
              onRemove={() => removeFromCart(item.id)}
              onQuantityChange={(newQuantity) =>
                updateQuantity(item.id, newQuantity)
              }
            />
          ))}
          {cartItems.length === 0 && (
            <p className="text-gray-600">Your cart is empty.</p>
          )}
        </div>

        {/* Footer Section (Pinned to Bottom) */}
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
    </>
  );
};

// PropTypes for validation
CartSidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CartSidebar;
