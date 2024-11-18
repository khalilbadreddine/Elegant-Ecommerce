// src/Pages/Home.jsx
import Carousel from "../Sm-Components/Carousel";
import TaglineSection from "../Sm-Components/TaglineSection";
import CategorySection from "../Sm-Components/CategorySection";
import NewArrival from "../Sm-Components/NewArrival";
import FeaturesSection from "../Sm-Components/FeaturesSection";
import PromoSection from "../Sm-Components/PromoSection";
import ArticlesSection from "../Sm-Components/ArticlesSection";
import NewsletterSection from "../Sm-Components/NewsletterSection";

const Home = () => {
  return (
    <>
      <div className="w-[90%] mx-auto flex flex-col">
        <Carousel />
        <TaglineSection />
        <CategorySection />
        <NewArrival />
        <FeaturesSection />
        <PromoSection />
        <ArticlesSection />
        <NewsletterSection />
      </div>
    </>
  );
};

export default Home;
