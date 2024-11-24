import { Carousel } from "@material-tailwind/react";

export default function CarouselCustomNavigation() {
  const images = [
    {
      src: "https://images.pexels.com/photos/1046639/pexels-photo-1046639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Modern living room interior with a sofa and table",
    },
    {
      src: "https://images.pexels.com/photos/6538903/pexels-photo-6538903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&fm=webp",
      alt: "Elegant kitchen design with wooden cabinets",
    },
    {
      src: "https://images.pexels.com/photos/6899350/pexels-photo-6899350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&fm=webp",
      alt: "Beautiful outdoor patio with plants and seating",
    },
  ];

  return (
    <Carousel
      className="h-[60vh] md:h-screen w-full overflow-hidden"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div
          className="absolute bottom-4 left-1/2 z-50 flex -translate-x-1/2 gap-2"
          aria-label="Carousel navigation"
        >
          {Array.from({ length }).map((_, i) => (
            <button
              key={i}
              className={`block h-2 w-4 cursor-pointer rounded-full transition-all ${
                activeIndex === i
                  ? "bg-white w-6"
                  : "bg-white/50 w-4 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          sizes="(max-width: 600px) 600px, (max-width: 1024px) 1024px, 1440px"
          className="h-full w-full object-cover object-center"
        />
      ))}
    </Carousel>
  );
}
