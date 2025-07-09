import { useEffect, useState, useCallback, useMemo } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Home, User, Code, Briefcase, GraduationCap, Mail, Menu, X } from 'lucide-react';

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

  // Memoize section IDs to avoid recreation on every render
  const sectionIds = useMemo(() => navItems.map(item => item.href.slice(1)), []);

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;
    const threshold = viewportHeight * 0.3;

    // Update scrolled state for navbar styling
    setScrolled(scrollPosition > 50);

    // Find active section
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

  // Throttled scroll event listener
  useEffect(() => {
    let timeoutId;
    const throttledScroll = () => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        handleScroll();
        timeoutId = null;
      }, 16); // ~60fps
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll(); // Set initial state

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  // Smooth scroll with fallback
  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    
    if (element) {
      // Close mobile sheet if open
      setSheetOpen(false);
      
      // Smooth scroll with fallback
      if ('scrollBehavior' in document.documentElement.style) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // Fallback for older browsers
        const elementTop = element.offsetTop;
        window.scrollTo({
          top: elementTop,
          behavior: 'smooth'
        });
      }
    }
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Sheet component handles its own click outside behavior
      if (!event.target.closest('.sheet-content')) {
        // Any additional cleanup if needed
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Prevent scroll when mobile sheet is open
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

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e, href) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleNavClick(e, href);
    }
  }, [handleNavClick]);

  return (
    <>
      {/* Mobile Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 lg:hidden transition-all duration-300 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="flex justify-between items-center px-6 py-4">
          <div className="text-xl font-bold text-white">Portfolio</div>
          
          {/* Modern Sheet-based Mobile Menu */}
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <button
                className="p-2 text-white hover:text-blue-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg"
                aria-label="Open navigation menu"
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent 
              side="left" 
              className="w-full max-w-xs bg-gray-900/98 backdrop-blur-md border-gray-700 p-0"
            >
              <div className="flex flex-col h-full">
                {/* Sheet Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-700">
                  <h2 className="text-xl font-bold text-white">Navigation</h2>
                </div>
                
                {/* Navigation Items */}
                <nav className="flex-1 py-6">
                  <ul className="space-y-2">
                    {navItems.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          onClick={(e) => handleNavClick(e, item.href)}
                          onKeyDown={(e) => handleKeyDown(e, item.href)}
                          className={`flex items-center px-6 py-4 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200 group ${
                            activeSection === item.href.slice(1) ? 'text-blue-400 bg-blue-500/10 border-r-2 border-blue-400' : ''
                          }`}
                        >
                          <item.icon 
                            size={20} 
                            className={`mr-3 flex-shrink-0 transition-transform duration-200 ${
                              activeSection === item.href.slice(1) ? 'scale-110' : 'group-hover:scale-105'
                            }`} 
                          />
                          <span className="text-base font-medium">{item.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Sheet Footer */}
                <div className="p-6 border-t border-gray-700">
                  <div className="text-xs text-gray-500 text-center">
                    © 2025 Portfolio
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Desktop Sidebar Navigation */}
      <nav className="hidden lg:flex fixed left-0 top-0 h-full w-20 xl:w-64 bg-gray-900/95 backdrop-blur-md border-r border-gray-700 z-40 transition-all duration-300">
        <div className="flex flex-col h-full">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center xl:justify-start p-6 border-b border-gray-700">
            <div className="xl:block hidden">
              <h1 className="text-xl font-bold text-white">Portfolio</h1>
            </div>
            <div className="xl:hidden block">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
            </div>
          </div>

          {/* Navigation Items */}
          <ul className="flex-1 py-6 space-y-2" role="menubar">
            {navItems.map((item) => (
              <li key={item.href} role="none">
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  onKeyDown={(e) => handleKeyDown(e, item.href)}
                  className={`group flex items-center px-6 py-3 mx-3 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                    activeSection === item.href.slice(1)
                      ? 'bg-blue-500/20 text-blue-400 shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }`}
                  role="menuitem"
                  aria-label={`Navigate to ${item.label}`}
                >
                  <item.icon 
                    size={20} 
                    className={`flex-shrink-0 transition-transform duration-200 ${
                      activeSection === item.href.slice(1) ? 'scale-110' : 'group-hover:scale-105'
                    }`} 
                  />
                  <span className="xl:block hidden ml-3 font-medium">
                    {item.label}
                  </span>
                  
                  {/* Active indicator */}
                  {activeSection === item.href.slice(1) && (
                    <div className="xl:hidden absolute left-0 w-1 h-8 bg-blue-400 rounded-r-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Footer */}
          <div className="p-6 border-t border-gray-700">
            <div className="xl:block hidden text-xs text-gray-500 text-center">
              © 2025 Portfolio
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;