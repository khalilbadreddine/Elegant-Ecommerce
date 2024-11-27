import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes
import LoadingScreen from "./LoadingScreen"; // Your loading animation component

const LoadingWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation(); // Hook is now safely used here

  useEffect(() => {
    setIsLoading(true); // Trigger loading animation
    const timer = setTimeout(() => setIsLoading(false), 1000); // Simulate loading
    return () => clearTimeout(timer); // Cleanup
  }, [location.pathname]);

  return (
    <>
      {isLoading && <LoadingScreen />}
      {!isLoading && children}
    </>
  );
};

// Props validation
LoadingWrapper.propTypes = {
  children: PropTypes.node.isRequired, // Ensures 'children' is provided and is a valid React node
};

export default LoadingWrapper;
