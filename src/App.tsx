import { useState } from "react";
import {Link} from "react-scroll";
import NavBar from "./nav/navbar";
import Expertise from "./pages/expertise";
import Contact from "./pages/contact";
import Home from "./pages/Home";
import Projects from "./pages/projects";
import Tech from "./pages/tech";

function App() {

  return (
    <div className="h-full relative w-full bg-app_color">
      <NavBar />
      <Home />
      <Expertise />
      <Contact />
      <Projects />
      <Tech />
    </div>
  );
}

export default App;
