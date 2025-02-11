import { ClassNames } from "@emotion/react";
import Hero from "./components/Landing/Hero";
import Navbar from "./components/Navbar";
import StarCursor from "./components/SparkleEffect";
import Landing from "./Pages/Landing";

function App() {
  return (
    <div className="bg-black">
      <StarCursor />
      <Landing />
    </div>
  );
}

export default App;
