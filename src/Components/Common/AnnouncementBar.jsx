// src/components/AnnouncementBar.jsx
import { Ticket, Close } from "./Icons";
import { useState } from "react";

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null; // If not visible, render nothing

  return (
    <div className="w-full bg-gray-100 text-center p-4 flex items-center justify-between px-4">
      <div className="flex items-center gap-2 text-xs font-semibold text-[#343839]">
        <span role="img" aria-label="ticket">
          <Ticket />
        </span>
        <span>30% off storewide — Limited time!</span>
        <a
          href="#shop"
          className="text-blue-600 underline ml-2 hidden md:inline"
        >
          Shop Now →
        </a>
      </div>

      {/* Close Button */}
      <button onClick={() => setIsVisible(false)} aria-label="Close">
        <Close className="w-3 h-3 text-gray-700" />
      </button>
    </div>
  );
};

export default AnnouncementBar;
