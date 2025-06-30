import { ArrowRight, Download, Mail, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden pt-20">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-neon-accent/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in flex flex-col items-center">
          {/* Enhanced Profile Image with multiple effects */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-accent to-gold rounded-full blur-lg opacity-75 animate-pulse"></div>
            <div className="relative">
              <img
                src="https://i.postimg.cc/0j7tnCvP/wep.webp"
                alt="Profile"
                className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white/20 shadow-2xl object-cover bg-dark-charcoal/40 animate-glow relative z-10"
                style={{ boxShadow: '0 0 40px rgba(0,255,255,0.3), 0 0 80px rgba(255,215,0,0.2)' }}
              />
              {/* Rotating ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-neon-accent/50 animate-spin-slow"></div>
            </div>
          </div>

          {/* Enhanced Typography */}
          <div className="space-y-4 mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight">
              <span className="text-platinum block">Mohamed</span>
              <span className="text-gradient block animate-shimmer">Mostafa</span>
            </h1>
            
            <div className="relative">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-neon-accent font-semibold glow-text">
                Creative Technologist
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-neon-accent to-transparent"></div>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-platinum/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Building seamless digital experiences that convert. 
            <span className="text-gradient font-medium block mt-2">Transforming ideas into scalable solutions.</span>
          </p>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a href="#portfolio" className="btn-primary group relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                View Portfolio
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-accent to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a
              href="https://www.dropbox.com/scl/fi/zeafhqpir03ki83ahlxwf/Mohamed_Mostafa_CV.pdf?rlkey=31xihnvk49g0qnq4oid644rv4&st=1kftj2g4&dl=0"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary group flex items-center gap-2 justify-center relative overflow-hidden"
              download
            >
              <Download size={20} className="group-hover:scale-110 transition-transform duration-300" />
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mb-12">
            <a 
              href="#contact" 
              className="w-12 h-12 bg-glass backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center text-platinum hover:text-neon-accent hover:glow-border transition-all duration-300 group"
            >
              <Mail size={20} className="group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a 
              href="https://www.linkedin.com/in/mohamed-mostafa-ab38aa317/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-glass backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center text-platinum hover:text-neon-accent hover:glow-border transition-all duration-300 group"
            >
              <Linkedin size={20} className="group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-accent mb-1">25+</div>
              <div className="text-platinum/60 text-sm">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold mb-1">3+</div>
              <div className="text-platinum/60 text-sm">Years</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-accent mb-1">9</div>
              <div className="text-platinum/60 text-sm">Certificates</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neon-accent/50 rounded-full flex justify-center relative">
          <div className="w-1 h-3 bg-neon-accent rounded-full mt-2 animate-pulse"></div>
          <div className="absolute -bottom-8 text-platinum/50 text-xs">Scroll</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;