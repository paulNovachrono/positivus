import { ArrowUpRight } from "lucide-react";

const ServiceBox = ({
  serviceText = "Our service 1",
  img = "src/assets/Photos/seo.png",
  bgColor = "(--gray)",
  buttonBgcolor = "(--accGreen)",
  buttonBgHove = "black",
  buttonTextColor = "black",
  buttonTextHover = "(--accGreen)",
  buttonBorderHover = "black",
  headingBgColor = "(--accGreen)"
}) => {
  return (
    <div
      className={`flex justify-between items-center bg-${bgColor} rounded-[45px] py-10 px-7 border shadow-[0px_5px_0px_#191a23] md:w-1/2 md:px-15`}
    >
      <div className="left flex flex-col gap-7">
        <h2
          className={`text-xl font-[fontM] md:text-4xl md:w-[300px] bg-${headingBgColor} rounded-2xl px-2`}
        >
          {serviceText}
        </h2>
        <div
        className="flex items-center gap-4"
        >
          <button
          className={`p-2 rounded-full bg-${buttonBgcolor} border w-fit active:scale-75 hover:bg-${buttonBgHove} text-${buttonTextColor} hover:text-${buttonTextHover} transition-colors ease-linear duration-300 hover:border-${buttonBorderHover}`}
        >
          <ArrowUpRight size="2.2rem" />
        </button>
        <p className="text-xl">Service Info</p>
        </div>
      </div>
      <div className="right h-full">
        <img className="size-35 md:size-45 " src={img} alt={serviceText} />
      </div>
    </div>
  );
};

export default ServiceBox;
