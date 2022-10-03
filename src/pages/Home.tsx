import { navLinks } from "../nav/nav_links";
import Planet from "./home/planet";
import "../styles/home.css";

function Home() {
  // const personalInfo = Object.entries(data.personal_info);
  // const brackets: string[] = ["{", "}"];
  return (
    <div
      id={navLinks.home.destination}
      className="layer image items-center text-white bg-transparent flex sm:flex-row flex-col"
    >
      <div className="grow sm:text-left text-center flex flex-col ml-5">
        <h1 className="font-semibold text-5xl sm:text-6xl">
          Hi, <br /> I am Joseph, <br />
          software developer.
        </h1>

        <h1 className="mt-10 text-xl opacity-75 italic">
          {"<h1>"}
          <br />
          &emsp;I build software for the web and mobile.
          <br />
          {"</h1>"}
        </h1>
      </div>
      <Planet />
    </div>
  );
}

export default Home;
