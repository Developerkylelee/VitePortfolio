import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import About from "./Main-Components/About";
// error in file name? but it works?.?.?
import Section2 from "./Main-Components/Section2";
import Section3 from "./Main-Components/Section3";
import Section4 from "./Main-Components/Projects";
import Contact from "./Main-Components/Contact";
import Projects from "./Main-Components/Projects";

function App() {
  return (
    <>
      <div id="body">
        <About />
        <Section2 />
        <Section3 />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
