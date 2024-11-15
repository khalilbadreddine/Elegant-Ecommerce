// src/Main.jsx
import Carousel from "./Sm-Components/Carousel";
import AnnouncementBar from "./Sm-Components/AnnouncementBar";
import Header from "./Sm-Components/Header";
import TaglineSection from "./Sm-Components/TaglineSection";
import CategorySection from "./Sm-Components/CategorySection";

const Main = () => {
  return (
    <>
      <AnnouncementBar />
      <div className="w-[90%] mx-auto  flex flex-col">
        <Header />
        <Carousel />
        <TaglineSection /> {/* Add the new TaglineSection here */}
        {/* Other components like AnnouncementBar, Header, etc. */}
        <CategorySection />
      </div>
    </>
  );
};

export default Main;
