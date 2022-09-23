import { useState } from "react";
import { Link } from "react-scroll";
import { getNavLinks } from "./nav_links";

function NavBar() {
  const [links, _] = useState(getNavLinks());

  return (
    <nav className="flex fixed top-0 flex-row items-center shadow justify-between p-5 bg-sky-700 w-full">
      <h1 className="text-white font-bold text-2xl">Kabba Joseph Timothy</h1>

      <ul className="flex text-lg text-white flex-row justify-center">
        {links.map((navLink, index) => (
          <li className="ml-3 mr-3" key={index}>
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
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
