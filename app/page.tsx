import Characters from "@/components/characters";
import Emotions from "@/components/emotions";
import Header from "@/components/header";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Characters />
      <Emotions />
    </main>
  );
}
