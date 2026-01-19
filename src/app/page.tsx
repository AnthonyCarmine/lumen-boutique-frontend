import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import PromoBanner from "@/components/PromoBanner";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F6F7F8] text-[#111]">
      <Navbar />
      <Hero />
      <Collections />
      <PromoBanner />
    </main>
  );
}
