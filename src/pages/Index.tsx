import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FoodSection from "@/components/FoodSection";
import HobbiesSection from "@/components/HobbiesSection";
import DreamsSection from "@/components/DreamsSection";
import CurrentFocusSection from "@/components/CurrentFocusSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <FoodSection />
      <HobbiesSection />
      <DreamsSection />
      <CurrentFocusSection />
      <Footer />
    </main>
  );
};

export default Index;
