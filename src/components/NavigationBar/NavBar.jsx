import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import NavItems from "./NavItems";
import { useState } from "react";

const NavBar = () => {
  // state for mobile menu
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-between p-10 md:px-40 bg-white">
      <Link className="logo shrink-0" to="/">
        <img src="src/assets/Photos/logo.svg" alt="logo" />
      </Link>
      {/* Mobile menu */}
      <div className="mobileMenu md:hidden">
        {isActive == false ? (
          <Menu
            onClick={() => setIsActive((prev) => !prev)}
            size={35}
            strokeWidth={2.5}
          />
        ) : (
          <X
            onClick={() => setIsActive((prev) => !prev)}
            size={35}
            strokeWidth={2.5}
          />
        )}
      </div>
      {isActive ? <NavItems /> : null}
      {/* mobile menu end */}

      {/* Desktop menu */}
      <div className="desktopMenu hidden md:block shrink-0">
        <ul className="flex items-center justify-center text-xl gap-10 font-medium">
          <li>
            <NavLink
              className="hover:underline underline-offset-10 hover:bg-(--accGreen) hover:p-2 hover:rounded-2xl hover:transition-all hover:ease-in-out hover:duration-300"
              to="/about"
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:underline underline-offset-10 hover:bg-(--accGreen) hover:p-2 hover:rounded-2xl hover:transition-all hover:ease-in-out hover:duration-300"
              to="/services"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:underline underline-offset-10 hover:bg-(--accGreen) hover:p-2 hover:rounded-2xl hover:transition-all hover:ease-in-out hover:duration-300"
              to="/use"
            >
              Use Cases
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:underline underline-offset-10 hover:bg-(--accGreen) hover:p-2 hover:rounded-2xl hover:transition-all hover:ease-in-out hover:duration-300"
              to="/pricing"
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:underline underline-offset-10 hover:bg-(--accGreen) hover:p-2 hover:rounded-2xl hover:transition-all hover:ease-in-out hover:duration-300"
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
      <button className="hidden md:block shrink-0 px-7 py-3 border text-xl text-black rounded-2xl hover:bg-black hover:text-white hover:border-(--accGreen) hover:border-2 transition-colors ease-in-out duration-400 cursor-pointer">
        Request a quote
      </button>
    </nav>
  );
};

export default NavBar;
