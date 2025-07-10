import { Linkedin, Heart, Github, Youtube } from 'lucide-react';

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
              href="https://www.linkedin.com/in/mohamed-mostafa-ab38aa317/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="w-12 h-12 bg-glass backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center text-platinum hover:text-neon-accent hover:glow-border transition-all duration-300"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/M-A-Yakout"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="w-12 h-12 bg-glass backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center text-platinum hover:text-neon-accent hover:glow-border transition-all duration-300"
            >
              <span className="sr-only">GitHub</span>
              <Github size={20} />
            </a>
            <a
              href="https://www.youtube.com/@Fox_Store722"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube channel"
              className="w-12 h-12 bg-glass backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center text-platinum hover:text-neon-accent hover:glow-border transition-all duration-300"
            >
              <span className="sr-only">YouTube</span>
              <Youtube size={20} />
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