// src/Main.jsx
import Carousel from "./Sm-Components/Carousel";
import AnnouncementBar from "./Sm-Components/AnnouncementBar";
import Header from "./Sm-Components/Header";
import TaglineSection from "./Sm-Components/TaglineSection";
import CategorySection from "./Sm-Components/CategorySection";
import NewArrival from "./Sm-Components/NewArrival";
import FeaturesSection from "./Sm-Components/FeaturesSection";
import PromoSection from "./Sm-Components/PromoSection";
import ArticlesSection from "./Sm-Components/ArticlesSection";
import NewsletterSection from "./Sm-Components/NewsletterSection";
import Footer from "./Sm-Components/Footer";

const Main = () => {
  return (
    <>
      <AnnouncementBar />
      <div className="w-[85%] mx-auto  flex flex-col">
        <Header />
        <Carousel />
        <TaglineSection /> {/* Add the new TaglineSection here */}
        {/* Other components like AnnouncementBar, Header, etc. */}
        <CategorySection />
        <NewArrival />
        <FeaturesSection />
        <PromoSection />
        <ArticlesSection />
        <NewsletterSection />
        <Footer />
      </div>
    </>
  );
};

export default Main;
