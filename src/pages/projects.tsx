import { navLinks } from "../utils/nav_links";
import data from "../data/personal.json";
import { useState } from "react";
import { Project } from "../utils/projects";
import FeaturedProjectCard from "./projects/featured_project_card";
import OtherProjectCard from "./projects/other_project_card";

function Projects() {
  const [projects] = useState(() => {
    const featured: Project[] = data.projects
      .filter((value) => value.featured === true)
      .sort();
    const silent: Project[] = data.projects
      .filter((value) => value.featured === false)
      .sort();

    return {
      featured: featured,
      silent: silent,
    };
  });
  return (
    <div id={navLinks.project.destination} className="layer">
      <h1 className="heading">Projects</h1>
      <div className="flex  mx-5 p-10 flex-col w-full ">
        {projects.featured.map((project, key) => (
          <div key={key} className="mt-4">
            <FeaturedProjectCard data={project} />
          </div>
        ))}
        <div className="flex w-full mt-24 flex-row items-center">
          <hr className="grow bg-white rounded " />
          <h1 className="mx-10 text-center text-xl">Other projects</h1>
          <hr className="grow bg-white rounded " />
        </div>
        <div className="grid sm:gap-6 sm:grid-cols-3 grid-cols-1 mt-10">
          {projects.silent.map((project, key) => (
            <div key={key} className="mt-4">
              <OtherProjectCard data={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
