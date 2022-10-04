import { navLinks } from "../nav/nav_links";
import data from "../data/personal.json";
import InfoCard from "./contact/infoCard";
import { useState } from "react";

function Contact() {
  const [personalInfo, _] = useState(Object.entries(data.personal_info));
  return (
    <div id={navLinks.contact.destination} className="layer">
      <h1 className="heading">contact</h1>
      <div className="rounded-xl m-5 p-10 flex sm:justify-between justify-center flex-col sm:flex-row">
        <InfoCard personalInfo={personalInfo} />
        <div className="flex flex-col justify-center items-center w-full sm:ml-2">
          <h1 className="text-center text-2xl">
            Lets get in touch and bring that idea to life.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Contact;
