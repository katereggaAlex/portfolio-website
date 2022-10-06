import { useState } from "react";
import { Link } from "react-scroll";
import { getNavLinks } from "./nav_links";
import "../styles/navbar.css";

function NavBar() {
  const [links, _] = useState(getNavLinks());

  return (
    <nav className="flex z-10 fixed top-0 left-0 right-0 flex-row items-center sm:justify-center w-full">
      <ul className="flex text-base bg-blur z-20 p-4 m-5 rounded-xl border shadow border-cyan-400 text-cyan-500 flex-row justify-center">
        {links.map((navLink, index) => (
          <li
            className="ml-3 hover:text-green-400 cursor-pointer mr-3"
            key={index}
          >
            {navLink.name === "//Resume" ? (
              <a href={navLink.destination} target="_blank">
                {navLink.name}
              </a>
            ) : (
              <Link
                activeClass="active"
                to={navLink.destination}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                {navLink.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
