import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Samples from "@/components/Samples";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Samples />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
