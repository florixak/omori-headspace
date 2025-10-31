import Characters from "@/components/characters";
import Header from "@/components/header";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Characters />
    </main>
  );
}
