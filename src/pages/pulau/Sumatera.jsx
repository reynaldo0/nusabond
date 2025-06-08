import Footer from "../../components/Footer";
import CultureSlider from "./templates/Budaya";
import Hero from "./templates/Hero";

const Sumatera = () => {
  return (
    <div className="overflow-x-hidden bg-[#F6F4F0]">
      <Hero />
      <CultureSlider />
      <Footer />
    </div>
  );
};

export default Sumatera;
