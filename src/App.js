import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import FeaturedWork from "./components/featuredWorkSection/FeaturedWork";
import { BrowserRouter } from "react-router-dom";
import ContactSection from "./components/ContactSection/ContactSection";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <HeroSection />
        <SkillsSection />
        <FeaturedWork />
        <ContactSection />
      </BrowserRouter>
    </div>
  );
}

export default App;
