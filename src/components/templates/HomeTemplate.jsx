import HeroSection from "../home/HeroSection";
import ProductCarousel from "../home/ProductCarousel";

const HomeTemplate = () => {
  return (
    <div className="h-[200vh]">
      <HeroSection />
      <ProductCarousel />
    </div>
  );
};

export default HomeTemplate;
