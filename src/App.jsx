import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollOnTop";
import { PlayProvider } from "./context/Play";
import About from "./pages/About";
import { HeroQuiz } from "./pages/HeroQuiz";
import { Home } from "./pages/Home";
import Jawa from "./pages/pulau/Jawa";
import Kalimantan from "./pages/pulau/Kalimantan";
import Papua from "./pages/pulau/Papua";
import Sulawesi from "./pages/pulau/Sulawesi";
import Sumatera from "./pages/pulau/Sumatera";
import Quiz from "./pages/Quiz";
import Scene from "./pages/Scene";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <PlayProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pulau-jawa" element={<Jawa />} />
          <Route path="/pulau-sumatera" element={<Sumatera />} />
          <Route path="/pulau-sulawesi" element={<Sulawesi />} />
          <Route path="/pulau-papua" element={<Papua />} />
          <Route path="/pulau-kalimantan" element={<Kalimantan />} />
          <Route path="/quiz" element={<HeroQuiz />} />
          <Route path="/soal-quiz" element={<Quiz />} />
        </Routes>
      </PlayProvider>
    </BrowserRouter>
  );
}

export default App;
