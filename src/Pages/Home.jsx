// src/Pages/Home.jsx
import Carousel from "../Components/Common/Carousel";
import TaglineSection from "../Components/Home/TaglineSection";
import CategorySection from "../Components/Home/CategorySection";
import NewArrival from "../Components/Home/NewArrival";
import FeaturesSection from "../Components/Home/FeaturesSection";
import PromoSection from "../Components/Home/PromoSection";
import ArticlesSection from "../Components/Home/ArticlesSection";

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
