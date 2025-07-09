import { useEffect, useState, useCallback, useMemo } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Home, User, Code, Briefcase, GraduationCap, Mail, Menu } from 'lucide-react';

const navItems = [
  { href: '#hero', label: 'Home', icon: Home },
  { href: '#about', label: 'About', icon: User },
  { href: '#skills', label: 'Skills', icon: Code },
  { href: '#portfolio', label: 'Portfolio', icon: Briefcase },
  { href: '#education', label: 'Education', icon: GraduationCap },
  { href: '#contact', label: 'Contact', icon: Mail },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const sectionIds = useMemo(() => navItems.map(item => item.href.slice(1)), []);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;
    const threshold = viewportHeight * 0.3;

    setScrolled(scrollPosition > 50);

    for (const sectionId of sectionIds) {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + scrollPosition;
        const elementBottom = elementTop + rect.height;
        
        if (scrollPosition + threshold >= elementTop && scrollPosition + threshold < elementBottom) {
          setActiveSection(sectionId);
          return;
        }
      }
    }
  }, [sectionIds]);

  useEffect(() => {
    let timeoutId;
    const throttledScroll = () => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        handleScroll();
        timeoutId = null;
      }, 16);
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    
    if (element) {
      setSheetOpen(false);
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  useEffect(() => {
    if (sheetOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [sheetOpen]);

  const handleKeyDown = useCallback((e, href) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleNavClick(e, href);
    }
  }, [handleNavClick]);

  const toggleVisibility = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  return (
    <>
      {/* Mobile Menu Button */}
      <div className={`fixed top-4 left-4 z-50 lg:hidden transition-all duration-300 ${
        scrolled ? 'bg-gray-900/80 backdrop-blur-md rounded-full p-2 shadow-lg' : ''
      }`}>
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <button
              className="p-2 text-white hover:text-teal-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400 rounded-full"
              aria-label="Open navigation menu"
            >
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent 
            side="left" 
            className="w-full max-w-[280px] bg-gradient-to-b from-gray-900 to-gray-800/95 backdrop-blur-lg border-r border-gray-700/50 p-0"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
                <h2 className="text-xl font-bold text-white">Menu</h2>
              </div>
              
              <nav className="flex-1 py-6">
                <ul className="space-y-3">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        onKeyDown={(e) => handleKeyDown(e, item.href)}
                        className={`flex items-center px-6 py-3 text-gray-200 hover:text-teal-400 hover:bg-gray-700/30 transition-all duration-200 rounded-lg ${
                          activeSection === item.href.slice(1) ? 'text-teal-400 bg-teal-500/10 border-r-2 border-teal-400' : ''
                        }`}
                      >
                        <div className="p-2 rounded-full border border-gray-600/50 group-hover:border-teal-400 transition-colors duration-200">
                          <item.icon size={20} />
                        </div>
                        <span className="ml-4 text-base font-medium">{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="p-6 border-t border-gray-700/50">
                <div className="text-xs text-gray-400 text-center">
                  © {new Date().getFullYear()} Portfolio
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Menu Button and Navigation */}
      <div className="hidden lg:block fixed top-4 left-4 z-50">
        <div className="relative">
          {/* Menu Button */}
          <button
            onClick={toggleVisibility}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`p-3 rounded-full transition-all duration-300 ${
              scrolled ? 'bg-gray-900/80 backdrop-blur-md' : 'bg-gray-900/50'
            } ${
              isHovered || isVisible ? 'shadow-lg ring-2 ring-teal-400/50' : 'shadow-md'
            }`}
            aria-label="Toggle navigation"
          >
            <Menu 
              size={24} 
              className={`text-white transition-transform duration-300 ${
                isHovered || isVisible ? 'rotate-90 text-teal-400' : ''
              }`}
            />
          </button>

          {/* Navigation Panel */}
          <div 
            className={`absolute top-0 left-14 bg-gradient-to-b from-gray-900/95 to-gray-800/95 backdrop-blur-lg border border-gray-700/50 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 ${
              isHovered || isVisible ? 'opacity-100 translate-x-0 visible' : 'opacity-0 -translate-x-2 invisible'
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex flex-col w-64">
              <div className="p-4 border-b border-gray-700/50">
                <h1 className="text-xl font-bold text-white">Portfolio</h1>
              </div>

              <nav className="p-2">
                <ul className="space-y-1">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        onKeyDown={(e) => handleKeyDown(e, item.href)}
                        className={`group flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                          activeSection === item.href.slice(1)
                            ? 'bg-teal-500/10 text-teal-400'
                            : 'text-gray-300 hover:text-teal-400 hover:bg-gray-700/30'
                        }`}
                      >
                        <div className="p-2 rounded-full border border-gray-600/50 group-hover:border-teal-400 transition-colors duration-200">
                          <item.icon size={20} />
                        </div>
                        <span className="ml-3 font-medium">{item.label}</span>
                        <span className="ml-auto text-xs text-gray-400 group-hover:text-teal-400 transition-colors duration-200">
                          ⌘{navItems.indexOf(item) + 1}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="p-4 border-t border-gray-700/50">
                <div className="text-xs text-gray-400 text-center">
                  © {new Date().getFullYear()} Portfolio
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;