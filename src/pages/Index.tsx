import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { VideoUploader } from "@/components/VideoUploader";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Testimonials />
      <TechStack />
      
      <section id="video-upload" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <VideoUploader />
        </div>
      </section>
      
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
