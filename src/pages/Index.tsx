
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-slate">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
