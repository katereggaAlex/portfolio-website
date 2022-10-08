import { navLinks } from "./nav/nav_links";
import data from "../data/personal.json";
import { useState } from "react";
import { Project } from "../projects/projects";

function Projects() {
  const [projects] = useState(() => {
    const featured: Project[] = data.projects.filter(
      (value) => value.featured === true
    );
    const silent: Project[] = data.projects.filter(
      (value) => value.featured === false
    );

    return {
      featured: featured,
      silent: silent,
    };
  });
  return (
    <div id={navLinks.project.destination} className="layer">
      <h1 className="heading">Projects</h1>
      <div className="flex  m-5 p-10 flex-col">
        <div className="">dkmffkkfkmfmmf</div>
      </div>
    </div>
  );
}

export default Projects;
