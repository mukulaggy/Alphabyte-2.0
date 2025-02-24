import StarCursor from "./components/SparkleEffect";
import Landing from "./Pages/Landing";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="bg-black">
      <Toaster />
      <StarCursor />
      <Landing />
    </div>
  );
}

export default App;
