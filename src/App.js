import "./index.css";
import Labyrinth from "./components/Labyrinth";
import Path from "./components/Path";
function App() {
  return (
    <div className="w-screen h-screen bg-[url('./assets/background.jpeg')] bg-cover bg-no-repeat flex flex-col font-serif">
      <div className="container mx-auto">
        <Labyrinth />
        <Path />
      </div>
    </div>
  );
}

export default App;
