import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./pages/Home";
import About from "./pages/About";
import Scene from "./pages/Scene";
import { PlayProvider } from "./context/Play";
import Jawa from "./pages/pulau/Jawa";
import Sumatera from "./pages/pulau/Sumatera";
import Sulawesi from "./pages/pulau/Sulawesi";
import Papua from "./pages/pulau/Papua";
import Kalimantan from "./pages/pulau/Kalimantan";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <PlayProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/scene" element={<Scene />} />
          <Route path="/pulau-jawa" element={<Jawa />} />
          <Route path="/pulau-sumatera" element={<Sumatera />} />
          <Route path="/pulau-sulawesi" element={<Sulawesi />} />
          <Route path="/pulau-papua" element={<Papua />} />
          <Route path="/pulau-kalimantan" element={<Kalimantan />} />
        </Routes>
      </PlayProvider>
    </BrowserRouter>
  );
}

export default App;
