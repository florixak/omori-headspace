import Characters from "@/components/characters";
import Emotions from "@/components/emotions";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Locations from "@/components/locations";
import Quotes from "@/components/quotes";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Characters />
      <Emotions />
      <Locations />
      <Quotes />
      <Gallery />
      <Footer />
    </main>
  );
}
