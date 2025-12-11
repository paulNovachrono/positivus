import { NavLink } from "react-router-dom";

const NavItems = () => {
  return (
    <div className="absolute md:hidden w-101  top-27 border-2 rounded-4xl p-8 right-10 bg-white">
      <ul className="text-2xl flex flex-col gap-4 font-semibold">
        <li>
          <NavLink to="/about">About us</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/use">Use Cases</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <button
          className="w-full py-3 bg-black text-white rounded-2xl active:scale-80 hover:bg-(--accGreen)
         hover:text-black transition-colors ease-in-out duration-300 hover:border-2"
        >
          Request a quote
        </button>
      </ul>
    </div>
  );
};

export default NavItems;
