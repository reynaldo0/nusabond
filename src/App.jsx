import Navbar from "./components/navbar";
import About from "./pages/About/Peta";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="text-center">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
