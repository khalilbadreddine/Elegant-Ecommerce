// src/Components/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import NewsletterSection from "../Home/NewsletterSection";
import AnnouncementBar from "../Common/AnnouncementBar";
import { useState } from "react";
import Sidebar from "../Common/Sidebar";
import CartSidebar from "../Common/CartSidebar";
import WishlistSidebar from "../Common/WishlistSidebar";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);
  const toggleCart = () => setIsCartOpen((prev) => !prev);
  const toggleWishlist = () => setIsWishlistOpen((prev) => !prev);

  return (
    <>
      <AnnouncementBar />
      <Header
        openSidebar={openSidebar}
        toggleCart={toggleCart}
        toggleWishlist={toggleWishlist}
      />
      <Sidebar isOpen={isSidebarOpen}
              onClose={closeSidebar}
              onCartClick={toggleCart} // Pass the toggleCart function
              onWishlistClick={toggleWishlist}  />
      <CartSidebar isOpen={isCartOpen} onClose={toggleCart} />
      <WishlistSidebar isOpen={isWishlistOpen} onClose={toggleWishlist} />
      <div className="w-full mx-auto flex flex-col">
        <Outlet />
      </div>
      <NewsletterSection />
      <Footer />
    </>
  );
};



export default MainLayout;
