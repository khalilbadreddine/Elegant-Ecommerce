import { Carousel } from "@material-tailwind/react";

export default function CarouselCustomNavigation() {
  return (
    <Carousel
      className="h-[60vh] md:h-screen w-full overflow-hidden"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="/assets/slide3.jpg"
        alt="image 1"
        className="h-full w-full object-cover object-center"
      />
      <img
        src="https://images.pexels.com/photos/6538903/pexels-photo-6538903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="image 2"
        className="h-full w-full object-cover object-center"
      />
      <img
        src="https://images.pexels.com/photos/6899350/pexels-photo-6899350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="image 3"
        className="h-full w-full object-cover object-center"
      />
    </Carousel>
  );
}
