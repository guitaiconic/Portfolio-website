import HeroSection from "./_components/HeroSection";
import LatestWork from "./_components/LatestWork";
import Footer from "./_components/Footer";
import Spotlight from "./_components/Spotlight";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <Spotlight />
      <LatestWork />
      <Footer />
    </main>
  );
}
