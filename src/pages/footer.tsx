import { useState } from "react";
import data from "../data/personal.json";
import { openEmailClient } from "../utils/email";

export default function Footer() {
  const [logos] = useState(data.logos);
  return (
    <div className="layer px-20 pb-10 flex sm:flex-row flex-col sm:justify-between text-center justify-center">
      <div className="w-full">
        <h1 className="w-full sm:text-left">
          This site was created by Kabba Joseph Timothy
        </h1>

        <h1 className="w-full sm:text-left">©copyright since 2022</h1>
      </div>
      <div className="w-full flex flex-row sm:justify-end justify-center">
        <a href={logos.github.link} target="_blank">
          <img
            alt="svgImg"
            className="m-2 h-10 w-10 cursor-pointer"
            src={logos.github.logo}
          />
        </a>
        <a href={logos.linkedIn.link} target="_blank">
          <img
            alt="svgImg"
            className="m-2 h-10 w-10 cursor-pointer"
            src={logos.linkedIn.logo}
          />
        </a>
        <a href={logos.gmail.link} target="_blank">
          <img
            alt="svgImg"
            className="m-2 h-10 w-10 cursor-pointer"
            onClick={(e) => {
              openEmailClient(data.personal_info.email, e);
            }}
            src={logos.gmail.logo}
          />
        </a>
      </div>
    </div>
  );
}
