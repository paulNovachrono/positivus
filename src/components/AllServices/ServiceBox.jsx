import { ArrowUpRight } from "lucide-react";
import serviceData from "./serviceData";

const ServiceBox = () => {
  return (
    <section className="md:grid md:grid-cols-2 w-full md:gap-10 grid grid-cols-1 gap-5">
      {serviceData.map((elem, index) => (
        <div
          key={index}
          className={`flex justify-between items-center bg-${elem.bgColor} rounded-[45px] py-10 px-7 border shadow-[0px_5px_0px_#191a23]  md:px-15 `}
        >
          <div className="left flex flex-col gap-7">
            <h2
              className={`text-xl font-[fontM] md:text-4xl md:w-[300px] bg-${elem.headingBgColor} rounded-2xl px-2`}
            >
              {elem.serviceText}
            </h2>
            <div className="flex items-center gap-4">
              <button
                className={`p-2 rounded-full bg-${elem.buttonBgcolor} border w-fit active:scale-75 hover:bg-${elem.buttonBgHove}  hover:text-${elem.buttonTextHover} transition-colors ease-linear duration-300 hover:border-${elem.buttonBorderHover}`}
              >
                <ArrowUpRight size="2.2rem" color={`${elem.buttonTextColor}`} />
              </button>
              <p className="text-xl">Service Info</p>
            </div>
          </div>
          <div className="right h-full">
            <img
              className="size-35 md:size-45 "
              src={elem.img}
              alt={elem.serviceText}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServiceBox;
