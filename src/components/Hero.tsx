import { ArrowRight, Download, Mail, ChevronDown } from 'lucide-react';

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
            src="https://i.postimg.cc/0j7tnCvP/wep.webp"
            alt="Profile"
            className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-neon-accent shadow-xl mb-6 object-cover bg-dark-charcoal/40 animate-glow"
            loading="eager"
            decoding="async"
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
              href="https://www.dropbox.com/scl/fi/xx0gx3r6ybse3y9avhi0t/cv.pdf?rlkey=aczl47jyzoxr5w8yeopecmhti&st=x7dgwm8v&dl=0"
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

      {/* Modern CSS Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center space-y-2">
        <span className="text-platinum/60 text-sm font-medium tracking-wide uppercase">Scroll</span>
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <div className="scroll-dot"></div>
          <ChevronDown className="scroll-chevron w-5 h-5 text-neon-accent" />
        </div>
      </div>
      <style jsx>{`
        .scroll-indicator {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: scrollBounce 2s infinite;
        }
        .scroll-line {
          width: 2px;
          height: 40px;
          background: linear-gradient(to bottom, transparent, #64ffda, transparent);
          border-radius: 2px;
          margin-bottom: 8px;
          position: relative;
          overflow: hidden;
        }
        .scroll-line::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 10px;
          background: #64ffda;
          border-radius: 2px;
          animation: scrollProgress 2s infinite;
          box-shadow: 0 0 10px #64ffda;
        }
        .scroll-dot {
          width: 8px;
          height: 8px;
          background: #64ffda;
          border-radius: 50%;
          box-shadow: 0 0 15px #64ffda;
          animation: scrollPulse 2s infinite;
          margin-bottom: 4px;
        }
        .scroll-chevron {
          animation: scrollChevron 2s infinite;
        }
        @keyframes scrollBounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        @keyframes scrollProgress {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(400%);
            opacity: 0;
          }
        }
        @keyframes scrollPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.8;
          }
        }
        @keyframes scrollChevron {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.6;
          }
          50% {
            transform: translateY(5px);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
