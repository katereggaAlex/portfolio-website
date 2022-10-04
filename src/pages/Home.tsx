import { navLinks } from "../nav/nav_links";
import Planet from "./home/planet";
import "../styles/home.css";

function Home() {
  return (
    <div id={navLinks.home.destination} className="flex flex-col">
      <div className="layer image items-center text-white bg-transparent flex sm:flex-row flex-col">
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
          <div className="w-full flex flex-col items-center sm:items-end sm:pr-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-7 mt-3 h-7 border animate-bounce border-green-400 rounded-full"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
              />
            </svg>
          </div>
        </div>

        <Planet />
      </div>
    </div>
  );
}

export default Home;
