import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../images/Group 14.svg';

const sections = ['About', 'Services', 'Tech Stack', 'Team', 'Contact'];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const mobileHeaderHeight = 72; // Fixed height for mobile header in pixels

  useEffect(() => {
    // Create space at the top of the document to prevent content jumping
    const updateBodyPadding = () => {
      const headerHeight = window.innerWidth >= 768 
        ? headerRef.current?.offsetHeight || 130 
        : mobileHeaderHeight;
      
      document.body.style.paddingTop = `${headerHeight}px`;
    }; 

    updateBodyPadding();
    window.addEventListener('resize', updateBodyPadding);

    

    const handleScroll = () => {
      if (!headerRef.current) return;
      
      // Find the current active section
      const sectionElements = sections.map(s => {
        const id = s.toLowerCase().replace(' ', '-');
        const element = document.getElementById(id);
        return { id, element };
      }).filter(item => item.element);
      
      // Calculate which section is most visible in the viewport
      let mostVisibleSection = null;
      let maxVisibility = 0;
      
      const headerHeight = headerRef.current.offsetHeight;
      
      sectionElements.forEach(({ id, element }) => {
        if (!element) return;
        
        const rect = element.getBoundingClientRect();
        // Calculate how much of the section is visible in the viewport
        // Account for header height
        const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, headerHeight);
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
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateBodyPadding);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Smooth scrolling with offset to prevent header overlap
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Close menu if open
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
      
      // Get header height to offset the scroll
      const headerHeight = window.innerWidth >= 768
        ? headerRef.current?.offsetHeight || 130
        : mobileHeaderHeight;
      
      // Calculate position with offset
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
    <header className="fixed top-0 left-0 w-full z-50" ref={headerRef}>
      {/* Desktop Header */}
      <div className="hidden md:flex items-center justify-between px-6 py-3 bg-white shadow-md w-full">
        <div className="flex items-center">
          <img
            src={logo}
            alt="V-ACCEL"
            className="h-[100px] w-40 object-contain"
          />
        </div>
        <div className="text-center flex-1">
          <h1 className="text-5xl font-bold text-[#1f4051]">V-Accel AI Dynamics</h1>
          <p className="text-accent-dark font-medium pt-2">Accelerating Your Success with AI</p>
        </div>
        <nav>
          <ul className="flex space-x-6">
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
                    className={`text-lg hover:text-accent-dark ${
                      isActive ? 'text-accent-dark font-semibold' : 'text-gray-800'
                    }`}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Mobile Header - with fixed positioning */}
      <div className="md:hidden flex items-center justify-between px-6 py-3 bg-white shadow-md" style={{ height: `${mobileHeaderHeight}px` }}>
        {/* Left: Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="V-ACCEL"
            className="h-12 w-auto object-contain"
          />
        </div>
        
        {/* Center: Heading - properly centered */}
        <div className="flex flex-col items-center absolute left-1/2 transform -translate-x-1/2">
          <h1 className="text-lg font-bold text-[#1f4051] leading-tight text-center">
            V-Accel AI Dynamics
          </h1>
          <p className="text-xs text-accent-dark font-medium text-center pt-1">
            Accelerating Your Success with AI
          </p>
        </div>
        
        {/* Right: Menu Toggle */}
        <div className="flex items-center">
          <button onClick={toggleMenu} className="text-gray-800 p-1" aria-label="Toggle Menu">
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        
        {/* Toggle Menu */}
        {isMenuOpen && (
          <nav className="fixed top-[72px] left-0 right-0 bg-white shadow-lg p-4 z-40 max-h-[calc(100vh-72px)] overflow-y-auto">
            <ul className="space-y-4">
              {sections.map((section, index) => {
                const id = section.toLowerCase().replace(' ', '-');
                const isActive = activeSection === id;
                return (
                  <li key={index}>
                    <a 
                      href={`#${id}`} 
                      className={`block py-2 ${
                        isActive ? 'text-accent-dark font-semibold' : 'text-gray-800'
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(id);
                      }}
                    >
                      {section}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;