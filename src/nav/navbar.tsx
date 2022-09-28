import { useState } from "react";
import { Link } from "react-scroll";
import { getNavLinks } from "./nav_links";
import "../styles/navbar.css";

function NavBar() {
  const [links, _] = useState(getNavLinks());

  return (
    <nav className="flex fixed top-0 left-0 right-0 flex-row items-center bg-transparent  sm:justify-center w-full">
      <div className="">
        <ul className="flex text-base bg-blur p-4 m-5 z-10 rounded-xl border shadow border-cyan-400 text-cyan-400 flex-row justify-center">
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
      </div>
    </nav>
  );
}

export default NavBar;
