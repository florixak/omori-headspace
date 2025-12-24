import Characters from "@/components/characters/characters";
import Emotions from "@/components/emotions/emotions";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery/gallery";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Locations from "@/components/locations/locations";
import Quotes from "@/components/quotes/quotes";
import SpoilerWarning from "@/components/spoiler-warning";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Characters />
      <Emotions />
      <Locations />
      <Quotes />
      <Gallery />
      <Footer />
      <SpoilerWarning />
    </main>
  );
}
