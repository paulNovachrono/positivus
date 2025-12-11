import { Link } from "react-router-dom";

const Partners = () => {
  return (
    <section className="md:flex md:justify-center md:items-center md:gap-40 mt-10 grid grid-cols-3 gap-3 place-items-stretch table-auto px-5 md:px-0">
      <Link to="https://www.amazon.com/">
        <img
          className="grayscale hover:grayscale-0 md:w-full w-2/3 "
          src="src/assets/Photos/partners/Company logo.svg"
          alt=""
        />
      </Link>
      <Link to="https://dribbble.com/">
        <img
          className="grayscale hover:grayscale-0 md:w-full w-2/3 "
          src="src/assets/Photos/partners/Company logo-1.svg"
          alt=""
        />
      </Link>
      <Link to="https://www.hubspot.com/">
        <img
          className="grayscale hover:grayscale-0 md:w-full w-2/3 "
          src="src/assets/Photos/partners/Company logo-2.svg"
          alt=""
        />
      </Link>
      <Link to="https://www.notion.com/">
        <img
          className="grayscale hover:grayscale-0 md:w-full w-2/3 "
          src="src/assets/Photos/partners/Company logo-3.svg"
          alt=""
        />
      </Link>
      <Link to="https://www.netflix.com/">
        <img
          className="grayscale hover:grayscale-0 md:w-full w-2/3 "
          src="src/assets/Photos/partners/Company logo-4.svg"
          alt=""
        />
      </Link>
      <Link to="https://www.zoom.com/">
        <img
          className="grayscale hover:grayscale-0 md:w-full w-2/3 "
          src="src/assets/Photos/partners/Company logo-5.svg"
          alt=""
        />
      </Link>
    </section>
  );
};

export default Partners;
