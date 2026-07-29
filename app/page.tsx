import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WhyChoose from "@/components/home/WhyChoose";
import Projects from "@/components/home/Projects";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import ContactLocation from "@/components/home/ContactLocation";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyChoose />
      <Projects />   
      <Stats />
      <Testimonials />
      <ContactLocation /> 
      <Footer />         
    </>
  );
}
 