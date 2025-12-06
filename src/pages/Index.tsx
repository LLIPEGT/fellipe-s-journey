import HeroSection from "@/components/HeroSection";
import BiographySection from "@/components/BiographySection";
import InterestsSection from "@/components/InterestsSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <BiographySection />
      <InterestsSection />
      <GallerySection />
      <Footer />
    </main>
  );
};

export default Index;
