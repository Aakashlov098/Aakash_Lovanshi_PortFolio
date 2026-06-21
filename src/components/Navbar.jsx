import { useState, useEffect } from 'react';
import SmoothFollower from './SmoothFollower';

export default function Navbar({ personalData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  // Track scroll position to set active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // offset for navbar height
      
      for (const item of navItems) {
        const el = document.getElementById(item.href.substring(1));
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href.substring(1));
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetEl = document.getElementById(href.substring(1));
    if (targetEl) {
      window.scrollTo({
        top: targetEl.offsetTop - 80, // offset for sticky nav height
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#09090b]/80 backdrop-blur-md border-b border-neutral-900 transition-all duration-300">
      <SmoothFollower/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Name */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center space-x-2 text-zinc-100 hover:text-white transition-colors duration-300"
            >
              <span className="text-2xl font-bold tracking-tight">{personalData.name}</span>
              <span className="px-1.5 py-0.5 text-[10px] font-mono font-medium bg-blue-600/10 border border-blue-500/20 text-blue-400 rounded-md uppercase tracking-wider">
                MERN
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`text-base font-medium transition-all duration-300 relative py-1 hover:text-zinc-100 ${
                    activeSection === item.href.substring(1) 
                      ? 'text-zinc-100' 
                      : 'text-zinc-400'
                  }`}
                >
                  {item.name}
                  {/* Subtle underline for active link */}
                  {activeSection === item.href.substring(1) && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 rounded-full transition-all duration-300" />
                  )}
                </a>
              ))}
              
              <a
                href={personalData.resumeLink}
                className="inline-flex items-center justify-center px-4 py-1.5 text-lg font-medium text-zinc-100 bg-zinc-900 border border-neutral-800 rounded-full hover:bg-zinc-800 hover:border-neutral-700 transition-all duration-300"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 focus:outline-none transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                // Close Icon SVG
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Menu (Hamburger) Icon SVG
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden border-t border-neutral-900 bg-[#09090b] transition-all duration-300">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  activeSection === item.href.substring(1)
                    ? 'text-zinc-100 bg-zinc-900'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50'
                }`}
              >
                {item.name}
              </a>
            ))}
            <div className="px-3 pt-3">
              <a
                href={personalData.resumeLink}
                className="w-full text-center block px-4 py-2 text-sm font-medium text-zinc-100 bg-zinc-900 border border-neutral-800 rounded-full hover:bg-zinc-800 hover:border-neutral-700 transition-all duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
