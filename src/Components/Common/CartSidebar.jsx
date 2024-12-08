import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import { Snackbar, Alert, useMediaQuery } from "@mui/material";
import CartProductCard from "../Product/CartProductCard";
import { removeFromCart, updateCartItem } from "../../redux/actions/cartActions";
import { gsap } from "gsap";

const CartSidebar = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false); // Loading state

  const cart = useSelector((state) => state.cart.cartItems || {});
  const items = cart.items || [];

  const sidebarRef = useRef(null);
  const itemsRef = useRef([]);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const isMobile = useMediaQuery("(max-width:600px)");

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const subtotal = items.reduce(
    (acc, item) => acc + (item.productId?.price || 0) * item.quantity,
    0
  );

  const handleQuantityChange = (productId, newQuantity) => {
    setLoading(true); // Start loading
    dispatch(updateCartItem(productId, newQuantity)).finally(() => {
      setLoading(false); // End loading
      setSnackbarMessage("Cart updated");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
    });
  };

  const handleRemoveFromCart = (productId) => {
    setLoading(true); // Start loading
    dispatch(removeFromCart(productId)).finally(() => {
      setLoading(false); // End loading
      setSnackbarMessage("Item removed from cart");
      setSnackbarSeverity("info");
      setSnackbarOpen(true);
    });
  };

  useEffect(() => {
    const sidebar = sidebarRef.current;
  
    if (isOpen) {
      gsap.to(sidebar, {
        x: 0, 
        duration: 0.3,
        ease: "power1.out",
      });
  
      // Ensure itemsRef.current contains valid elements
      if (itemsRef.current.some((el) => el)) {
        gsap.to(itemsRef.current.filter((el) => el), {
          opacity: 1,
          stagger: 0.05,
          duration: 0.3,
          ease: "power1.out",
        });
      }
    } else {
      gsap.to(sidebar, {
        x: "100%",
        duration: 0.3,
        ease: "power1.in",
      });
  
      if (itemsRef.current.some((el) => el)) {
        gsap.to(itemsRef.current.filter((el) => el), {
          opacity: 0,
          stagger: 0.05,
          duration: 0.2,
          ease: "power1.in",
        });
      }
    }
  }, [isOpen]);
  

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      <div
        ref={sidebarRef}
        className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg transform translate-x-full z-50 flex flex-col"
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-bold">Cart</h2>
          <button onClick={onClose} className="text-gray-600">
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {loading ? ( // Show loading indicator when updating cart
            <p className="text-gray-500">Updating cart...</p>
          ) : Array.isArray(items) && items.length > 0 ? (
            items.map((item, index) => (
              <CartProductCard
                key={index}
                productId={item.productId?._id || item._id} // Use nested _id
                image={item.image || item.productId?.images?.[0] } // Fallback for image
                title={item.productId?.title || "No title available"} // Use title from productId
                price={item.productId?.price || 0} // Use price from productId
                quantity={item.quantity}
                onRemove={() => handleRemoveFromCart(item._id)} // Use item _id for remove
                onQuantityChange={(newQuantity) =>
                  handleQuantityChange(item._id, newQuantity) // Use item _id for update
                }
                ref={(el) => (itemsRef.current[index] = el)}
              />
            ))
          ) : (
            <p className="text-gray-600">Your cart is empty.</p>
          )}
        </div>

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
