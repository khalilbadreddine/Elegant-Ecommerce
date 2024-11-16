const TaglineSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center px-6 py-10 md:px-12 lg:px-20 w-full">
      {/* Left Section */}
      <div className="text-start">
        <h2 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[50px] xl:text-[56px] font-semibold text-[#121212] leading-tight mb-6">
          Simply Unique
          <span className="text-[#6C7275] text-[36px] sm:text-[42px] md:text-[50px] lg:text-[60px] xl:text-[66px]">
            /
          </span>
          <br />
          Simply Better.
        </h2>
      </div>

      {/* Right Section */}
      <div className="flex text-start items-center">
        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed md:leading-loose">
          <span className="font-semibold text-[#121212]">3legant</span> is a
          gift & decorations store based in HCMC, Vietnam. Est since 2019.
        </p>
      </div>
    </div>
  );
};

export default TaglineSection;
