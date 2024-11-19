// src/Components/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Header from "./Sm-Components/Header";
import Footer from "./Sm-Components/Footer";
import AnnouncementBar from "./Sm-Components/AnnouncementBar";
import NewsletterSection from "./Sm-Components/NewsletterSection";

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
