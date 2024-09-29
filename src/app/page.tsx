import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SeerahBooks from "@/components/SeerahBooks";
import SeerahPlaylist from "@/components/SeerahPlaylist";

export default function Home() {
  return (
    <main className="w-full h-full">
      <HeroSection />
      <SeerahPlaylist />
      <SeerahBooks />
      <Footer />
    </main>
  );
}
