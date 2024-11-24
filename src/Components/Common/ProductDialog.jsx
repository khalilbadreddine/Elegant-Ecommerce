import PropTypes from "prop-types";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const ProductDialog = ({ isOpen, onClose, product, onAddToCart }) => {
  if (!product) return null;

  return (
    <Dialog
      open={isOpen}
      handler={onClose}
      className="max-w-screen sm:max-w-md mx-auto p-2"
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        aria-label="Close"
      >
        ✕
      </button>

      <DialogHeader className="text-lg font-semibold text-gray-800 px-4 py-2">
        {product.title}
      </DialogHeader>
      <DialogBody className="overflow-y-auto max-h-[70vh] px-4 py-2">
        <div className="w-full max-h-64 md:max-h-80 overflow-hidden rounded-lg">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-sm text-gray-600 mt-2">{product.description}</p>
        <div className="flex items-center gap-2 mt-4">
          <span className="text-gray-800 font-bold text-xl">
            ${product.price.toFixed(2)}
          </span>
          {product.oldPrice && (
            <span className="text-gray-400 line-through text-sm">
              ${product.oldPrice.toFixed(2)}
            </span>
          )}
        </div>
      </DialogBody>
      <DialogFooter className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 px-4 py-2">
        <button
          className="border-2 border-black text-black py-2 px-4 rounded-full w-full sm:w-auto hover:bg-gray-100"
          onClick={() => (window.location.href = "#")} // Replace with actual URL logic
        >
          View Product Page
        </button>
        <button
          className="bg-black text-white py-2 px-4 rounded-full w-full sm:w-auto hover:bg-gray-800"
          onClick={() => {
            onAddToCart();
            onClose();
          }}
        >
          Add to Cart
        </button>
      </DialogFooter>
    </Dialog>
  );
};

ProductDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  product: PropTypes.object,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductDialog;
