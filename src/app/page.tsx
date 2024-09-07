import HeroSection from "@/components/HeroSection";
import SeerahBooks from "@/components/SeerahBooks";
import SeerahPlaylist from "@/components/SeerahPlaylist";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SeerahPlaylist />
      <SeerahBooks />
    </main>
  );
}
