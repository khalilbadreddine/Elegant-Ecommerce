// src/Main.jsx
import Carousel from "./Sm-Components/Carousel";
import AnnouncementBar from "./Sm-Components/AnnouncementBar";
import Header from "./Sm-Components/Header";
import TaglineSection from "./Sm-Components/TaglineSection";

const Main = () => {
  return (
    <>
      <AnnouncementBar />
      <div className="w-[90%] mx-auto md:h-screen flex flex-col">
        <Header />
        <Carousel />
        <TaglineSection /> {/* Add the new TaglineSection here */}
      </div>
    </>
  );
};

export default Main;
