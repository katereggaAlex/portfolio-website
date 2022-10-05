import { navLinks } from "../nav/nav_links";
import data from "../data/personal.json";
import InfoCard from "./contact/infoCard";
import { useState } from "react";
import image from "../../public/images/project.svg";
import "../styles/contact.css";

function Contact() {
  const [personalInfo, _] = useState(Object.entries(data.personal_info));
  return (
    <div id={navLinks.contact.destination} className="layer">
      <h1 className="heading">contact</h1>
      <div className="rounded-xl m-5 p-10 flex sm:justify-between justify-center flex-col sm:flex-row">
        <InfoCard personalInfo={personalInfo} />
        <div className="flex flex-col justify-center items-center w-full sm:ml-2">
          <img className="w-44 h-44" src={image}/>
          <h1 className="text-center font-medium text-2xl">
            Lets get to work and bring that idea to life.
          </h1>

          <button className="shadow mt-6 button-background rounded-xl text-lg p-6 font-bold text-white hover:bg-green-700 cursor-pointer border border-green-700">
            Let's chat
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
