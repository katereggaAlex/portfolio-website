import NavBar from "./nav/navbar";
import Expertise from "./pages/expertise";
import Contact from "./pages/contact";
import Home from "./pages/Home";
import Projects from "./pages/projects";
import Experience from "./pages/experience";
import Footer from "./pages/footer";

function App() {
  return (
    <div className="h-full relative w-full bg-app_color">
      <NavBar />
      <Home />
      <Expertise />
      <Projects />
      <Experience />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
