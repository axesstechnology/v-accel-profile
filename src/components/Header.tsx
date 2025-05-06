

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../images/va.png'

const sections = ['About', 'Services', 'Tech Stack', 'Team', 'Contact'];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Always white background now, no need to track scroll position for navbar styling
      
      // Find the current active section
      const sectionElements = sections.map(s => {
        const id = s.toLowerCase().replace(' ', '-');
        const element = document.getElementById(id);
        return { id, element };
      }).filter(item => item.element);
      
      // Calculate which section is most visible in the viewport
      let mostVisibleSection = null;
      let maxVisibility = 0;
      
      sectionElements.forEach(({ id, element }) => {
        const rect = element.getBoundingClientRect();
        // Calculate how much of the section is visible in the viewport
        const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
        const visibilityRatio = visibleHeight / element.offsetHeight;
        
        if (visibilityRatio > maxVisibility) {
          maxVisibility = visibilityRatio;
          mostVisibleSection = id;
        }
      });
      
      setActiveSection(mostVisibleSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add smooth scrolling with offset to prevent header overlap
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Close menu if open
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
      
      // Get header height to offset the scroll
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      
      // Calculate position
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      // Smooth scroll
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md "
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={logo}
            alt="V-ACCEL"
            className="h-[110px] w-[200px]"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {sections.map((item) => {
              const id = item.toLowerCase().replace(' ', '-');
              const isActive = activeSection === id;

              return (
                <li key={item}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(id);
                    }}
                    className={`text-xl font-[500] hover:text-accent-dark transition-colors ${
                      isActive
                        ? 'text-accent-dark'
                        : 'text-gray-800'
                    }`}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="py-4">
            {sections.map((item) => {
              const id = item.toLowerCase().replace(' ', '-');
              const isActive = activeSection === id;

              return (
                <li key={item} className="border-b border-gray-100 last:border-0">
                  <a
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(id);
                    }}
                    className={`block px-6 py-3 hover:bg-gray-50 ${
                      isActive ? 'text-accent-dark font-medium' : 'text-gray-800'
                    }`}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;