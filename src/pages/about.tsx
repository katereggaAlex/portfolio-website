import { navLinks } from "../nav/nav_links";

function About() {
    return (
      <div
        id={navLinks.about.destination}
        className="layer"
      >
        about
      </div>
    );
}

export default About;