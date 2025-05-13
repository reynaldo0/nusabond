import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./pages/Home";
import About from "./pages/About";
import Scene from "./pages/Scene";
import { PlayProvider } from "./context/Play";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <PlayProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/scene" element={<Scene />} />
        </Routes>
      </PlayProvider>
    </BrowserRouter>
  );
}

export default App;
