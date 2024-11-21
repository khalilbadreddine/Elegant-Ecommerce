// src/Components/Layout/ViewToggle.js

import PropTypes from "prop-types";
import { GridIcon, LayoutIcon } from "../Common/Icons";

const ViewToggle = ({ view, setView }) => {
  const handleViewChange = (nextView) => {
    if (nextView !== view) {
      setView(nextView);
    }
  };

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <button
        onClick={() => handleViewChange("grid")}
        style={{
          padding: "10px",
          borderRadius: "4px",
          border: view === "grid" ? "2px solid black" : "1px solid gray",
          backgroundColor: "white",
        }}
        title="Grid View"
      >
        <GridIcon />
      </button>
      <button
        onClick={() => handleViewChange("list")}
        style={{
          padding: "10px",
          borderRadius: "4px",
          border: view === "list" ? "2px solid black" : "1px solid gray",
          backgroundColor: "white",
        }}
        title="List View"
      >
        <LayoutIcon />
      </button>
    </div>
  );
};

ViewToggle.propTypes = {
  view: PropTypes.string.isRequired,
  setView: PropTypes.func.isRequired,
};

export default ViewToggle;
