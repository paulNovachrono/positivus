const Hero = () => {
  return (
    <section className="md:h-[515] w-full p-10 md:px-40 md:mt-40 mt-30">
      {/* mobile design */}
      <section className="flex md:hidden flex-col gap-4">
        <h1 className="text-4xl font-[fontM]">
          Navigating the digital landscape for success
        </h1>
        <img src="src/assets/Photos/Hero.png" alt="heroImage" />
        <p className="text-lg">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <button
          className="w-full py-3 bg-black text-white rounded-2xl active:scale-80 hover:bg-(--accGreen)
         hover:text-black transition-colors ease-in-out duration-300 hover:border-2"
        >
          Book a consultation
        </button>
      </section>
      {/* mobile design ends */}
      {/* Desktop design */}
      <section className="hidden  h-full w-full md:flex items-center justify-between">
        <div className="left w-1/2 flex flex-col gap-10">
          <h1 className="text-7xl font-[fontR]">
            Navigating the <br /> digital landscape <br /> for success
          </h1>
          <p className="text-2xl">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <button
            className="w-fit px-7 py-5 bg-black text-white text-xl rounded-2xl active:scale-80 hover:bg-(--accGreen)
         hover:text-black transition-colors ease-in-out duration-300 hover:border-2"
          >
            Book a consultation
          </button>
        </div>
        <div>
          <img
            className="w-[600px]"
            src="src/assets/Photos/Hero.png"
            alt="heroImage"
          />
        </div>
      </section>
      {/* Desktop design ends */}
    </section>
  );
};

export default Hero;
