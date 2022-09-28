import { navLinks } from "../nav/nav_links";
import Planet from "./home/planet";
import "../styles/home.css";

function Home() {
  // const personalInfo = Object.entries(data.personal_info);
  // const brackets: string[] = ["{", "}"];
  return (
    <div
      id={navLinks.home.destination}
      className="layer image items-center bg-transparent flex sm:flex-row flex-col"
    >
      <h1 className="grow text-left text-5xl ml-5">
        Lets build <br />
        what ever your heart desires.
      </h1>
      <Planet />
    </div>
  );
}

export default Home;
