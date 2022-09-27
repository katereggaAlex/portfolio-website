import { navLinks } from "../nav/nav_links";

function Expertise() {
    return (
      <div id={navLinks.about.destination} className="layer">
        <h1 className="text-2xl sm:text-4xl border-b-2">Expertise</h1>

        <div className="rounded-xl shadow m-5 border border-white flex sm:flex-col flex-row">
          <div className="grow">
            <></>
          </div>
          <div className="bg-white h-full w-1"></div>
          <div className="grow"></div>
          <div className="bg-white h-full w-1"></div>
          <div className="grow"></div>
        </div>
      </div>
    );
}

export default Expertise;