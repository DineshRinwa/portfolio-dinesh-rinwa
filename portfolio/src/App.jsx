import "./App.css";
import { Navbar } from "./components/sections/Navbar";
import { Home } from "./components/sections/Home";
import { Project } from "./components/sections/Project";
import { Skill } from "./components/sections/Skill";
import { Education } from "./components/sections/Education";
import { Contact } from "./components/sections/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Project />
      <Skill />
      <Education />
      <Contact />
    </>
  );
}

export default App;
