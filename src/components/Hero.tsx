import { ArrowRight, Download, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in flex flex-col items-center">
          {/* Profile Image */}
          <img
            src="https://d.top4top.io/p_3467ye7dg1.png"
            alt="Profile"
            className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-neon-accent shadow-xl mb-6 object-cover bg-dark-charcoal/40 animate-glow"
            style={{ boxShadow: '0 0 32px 0 rgba(0,255,255,0.15)' }}
          />
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            <span className="text-platinum">Mohamed</span>{' '}
            <span className="text-gradient">Mostafa</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-neon-accent font-semibold mb-8 glow-text">
            Creative Technologist
          </h2>
          
          <p className="text-xl md:text-2xl text-platinum/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Building seamless digital experiences that convert. 
            <span className="text-gradient font-medium"> Transforming ideas into scalable solutions.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#portfolio" className="btn-primary group">
              <span className="flex items-center gap-2">
                View Portfolio
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </a>
            
            <a
              href="https://www.dropbox.com/scl/fi/zeafhqpir03ki83ahlxwf/Mohamed_Mostafa_CV.pdf?rlkey=31xihnvk49g0qnq4oid644rv4&st=1kftj2g4&dl=0"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary group flex items-center gap-2 justify-center"
              download
            >
              <Download size={20} />
              Download Resume
            </a>
            
            <a 
              href="#contact" 
              className="flex items-center gap-2 text-platinum hover:text-neon-accent transition-colors duration-300 font-medium"
            >
              <Mail size={20} />
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neon-accent/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
