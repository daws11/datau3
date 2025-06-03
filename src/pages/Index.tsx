
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <Solutions />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
