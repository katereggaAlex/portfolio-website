import { useState } from "react";
import { Link } from "react-scroll";
import { getNavLinks } from "./nav_links";

function NavBar() {
  const [links, _] = useState(getNavLinks());

  return (
    <nav className="flex fixed top-0 left-0 right-0 flex-row items-center shadow justify-between p-5 bg-app_color w-full">
      <h1 className="text-white font-bold text-2xl">var name = "KabbaJosephTimothy"</h1>

      <ul className="flex text-lg text-white flex-row justify-center">
        {links.map((navLink, index) => (
          <li className="ml-3 hover:border-b-2 bor mr-3" key={index}>
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
