const ShopPageHeader = () => {
  return (
    <div
      className="h-48 sm:h-56 lg:h-64 rounded-md flex flex-col items-center justify-center text-center"
      style={{
        backgroundImage: "url('/assets/shop.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-white text-lg sm:text-2xl lg:text-4xl font-bold">
        Shop Page
      </h1>
      <p className="text-white text-sm sm:text-base lg:text-lg mt-2">
        Let&apos;s design the place you always imagined!
      </p>
    </div>
  );
};

export default ShopPageHeader;
