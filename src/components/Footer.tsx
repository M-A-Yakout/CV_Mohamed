
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-charcoal border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="text-3xl font-serif font-bold text-gradient mb-4">
              Mohamed Mostafa
            </div>
            <p className="text-platinum/80 text-lg">
              Creative Technologist & Digital Solutions Architect
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="#"
              className="w-12 h-12 bg-glass backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center text-platinum hover:text-neon-accent hover:glow-border transition-all duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-glass backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center text-platinum hover:text-neon-accent hover:glow-border transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-glass backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center text-platinum hover:text-neon-accent hover:glow-border transition-all duration-300"
            >
              <Twitter size={20} />
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-8">
            <p className="text-platinum/60 text-sm flex items-center justify-center gap-2">
              © 2025 Mohamed Mostafa.{' '}
              <Heart size={16} className="text-neon-accent animate-pulse" />
              
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
