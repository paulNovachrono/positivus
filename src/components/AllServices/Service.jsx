import ServiceBox from "./ServiceBox";
import ServiceText from "./ServiceText";

const Service = () => {
  return (
    <section className="px-10 md:px-40 md:mt-30 mt-15 flex flex-col gap-10">
      <ServiceText />
      <ServiceBox/>
    </section>
  );
};

export default Service;
