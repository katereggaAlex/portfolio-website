import { useState } from "react";
import {Link} from "react-scroll";

function App() {

  return (
    <div>
      <Link
        activeClass="active"
        to="test1"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        Test 1
      </Link>
      <Link
        activeClass="active"
        to="test1"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        delay={1000}
      >
        Test 2 (delay)
      </Link>
      <Link
        className="test6"
        to="anchor"
        spy={true}
        smooth={true}
        duration={500}
      >
        Test 6 (anchor)
      </Link>
    </div>
  );
}

export default App;
