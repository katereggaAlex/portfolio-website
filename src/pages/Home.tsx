import { navLinks } from "../nav/nav_links";

function Home() {
  const name = `{
     name: "KABBA JOSEPH TIMOTHY"
  }`
  return (
    <div
      id={navLinks.home.destination}
      className="layer grid sm:grid-rows-1 sm:grid-cols-2 grid-cols-1 grid-rows-2"
    >
      <div className="flex flex-col shadow-xl bg-black h-80 w-4/5 mt-10 rounded-xl">
        <div className="flex flex-row p-3 justify-start">
          <div className="rounded-full shadow w-4 h-4 mr-2 bg-red-400"></div>
          <div className="rounded-full shadow w-4 h-4 mr-2 bg-blue-400"></div>
          <div className="rounded-full shadow w-4 h-4 bg-yellow-400"></div>
        </div>

        <hr className="bg-white mt-1"/>
        <div className="text-gray-500 p-4 font-bold">
          {name}
        </div>
      </div>
      <div>hello</div>
    </div>
  );
}

export default Home;
