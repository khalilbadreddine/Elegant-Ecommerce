// src/Components/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import NewsletterSection from "../Home/NewsletterSection";
import AnnouncementBar from "../Common/AnnouncementBar";

const MainLayout = () => {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <div className="w-full mx-auto flex flex-col">
        {/* Outlet for rendering child routes */}
        <Outlet />
      </div>
      <NewsletterSection />
      <Footer />
    </>
  );
};

export default MainLayout;
