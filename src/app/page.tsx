import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Appointment from "@/components/Appointment";
import Testimonials from "@/components/Testimonials";
import FranchiseCTA from "@/components/FranchiseCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Features />
        <Gallery />
        <Appointment />
        <Testimonials />
        <FranchiseCTA />
      </main>
      <Footer />
    </>
  );
}
