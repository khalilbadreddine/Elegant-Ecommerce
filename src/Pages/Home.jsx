// src/Pages/Home.jsx
import Carousel from "../Components/Sm-Components/Carousel";
import TaglineSection from "../Components/Sm-Components/TaglineSection";
import CategorySection from "../Components/Sm-Components/CategorySection";
import NewArrival from "../Components/Sm-Components/NewArrival";
import FeaturesSection from "../Components/Sm-Components/FeaturesSection";
import PromoSection from "../Components/Sm-Components/PromoSection";
import ArticlesSection from "../Components/Sm-Components/ArticlesSection";

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
      </div>
    </>
  );
};

export default Home;
