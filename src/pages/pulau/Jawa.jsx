import Hero from "./templates/Hero";
import Footer from "../../components/Footer";
import CultureSlider from "./templates/Budaya";

const Jawa = () => {
  return (
    <div className="bg-[#F6F4F0] overflow-x-hidden">
      <Hero />
      <CultureSlider />
      <Footer />
    </div>
  );
};

export default Jawa;
