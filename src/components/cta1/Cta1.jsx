const Cta1 = () => {
  return (
    <section className="w-full flex justify-center items-center px-10 md:px-40 md:my-30 mt-10">
      <div className="w-full bg-[#f3f3f3] rounded-3xl md:px-16 md:py-10 p-10 flex justify-between items-center">
        <div className="left md:w-1/2 w-full flex flex-col gap-3">
          <h2 className="text-xl font-[fontM] md:text-4xl ">
            Let's make things happen
          </h2>
          <p className="text-lg ">
            Contact us today to learn more about how our digital <br />{" "}
            marketing services can help your business grow and <br /> succeed
            online.
          </p>
          <button className="bg-black text-white text-lg  py-5 rounded-xl w-full hover:bg-(--accGreen) hover:text-black mt-3 transition-colors ease-linear duration-300">
            Get Your Free Proposal
          </button>
        </div>
        <div className="right relative md:h-[300px] h-full w-full hidden md:flex items-center justify-center">
          <img
            className=" absolute lg:right-0 bottom-[-25%] h-[450px] "
            src="src/assets/Photos/cta1.svg"
            alt="cta1"
          />
        </div>
      </div>
    </section>
  );
};

export default Cta1;
