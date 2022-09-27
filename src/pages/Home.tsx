import { navLinks } from "../nav/nav_links";
import data from "../data/personal.json";
import InfoCard from "./home/infoCard";
import Planet from "./home/planet";

function Home() {
  const personalInfo = Object.entries(data.personal_info);
  const brackets: string[] = ["{", "}"];
  return (
    <div
      id={navLinks.home.destination}
      className="layer flex sm:flex-row flex-col"
    >
      <InfoCard personalInfo={personalInfo} />
      <Planet/>
    </div>
  );
}

export default Home;
