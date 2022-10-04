import { useEffect, useState } from "react";
import { navLinks } from "../nav/nav_links";
import "../styles/experience.css";
import { workToList } from "../utils/experience_helpers";
import personal from "../data/personal.json";

function Experience() {
  //ts-ignore
  const [data, _] = useState(workToList(personal.experience));
  return (
    <div id={navLinks.experience.destination} className="layer">
      <h1 className="heading">Experience</h1>
      <div className="m-5 p-10 w-full ">
        {data.map((value, key) => (
          <div
            key={key}
            className="w-full flex flex-col justify-center items-center"
          >
            <div className="text-white rounded-xl   text-xl max-w-5xl justify-between w-full py-3 px-5 background-header flex flex-col sm:flex-row">
              <h1>{`${value[1].title} at ${value[0]}`}</h1>
              <h1>{value[1].duration}</h1>
            </div>

            <div className="text-white background rounded-xl py-5 max-w-5xl w-full px-10 mt-4 mb-6 flex flex-col">
              <h1 className="opacity-60">{value[1].area}</h1>
              <p className="mt-2">{value[1].description}</p>
              <div className="flex flex-row overflow-x-auto mt-2">
                {value[1].tech.map((item, key) => (
                  <h1
                    key={key}
                    className="bg-green-700 sm:line-clamp-1 mr-4 opacity-80 py-1 px-4 rounded-2xl"
                  >
                    {item}
                  </h1>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
