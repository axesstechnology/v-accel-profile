// import React, { useState, useEffect, useRef } from 'react';
// import { Menu, X } from 'lucide-react';
// import logo from '../images/Group 14.svg';

// const sections = ['About', 'Services', 'Tech Stack', 'Team', 'Contact'];

// const Header: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [showHeading, setShowHeading] = useState(false);
//   const headerRef = useRef<HTMLDivElement>(null);
//   const mobileHeaderHeight = 72; // Fixed height for mobile header in pixels

//   useEffect(() => {
//     // First animate the logo pop-up
//     const loadTimer = setTimeout(() => {
//       setIsLoading(false);
//       // Then animate the heading fade-in
//       setTimeout(() => {
//         setShowHeading(true);
//       }, 300);
//     }, 900);

//     // Add animation to other components in the header
//     const navItems = document.querySelectorAll('nav ul li');
//     navItems.forEach((item, index) => {
//       setTimeout(() => {
//         item.classList.add('animate-fade-in');
//       }, 500 + index * 100);
//     });

//     const mobileMenuItems = document.querySelectorAll('.md\\:hidden nav ul li');
//     mobileMenuItems.forEach((item, index) => {
//       setTimeout(() => {
//         item.classList.add('animate-slide-in');
//       }, 500 + index * 100);
//     });

//     // Create space at the top of the document to prevent content jumping
//     const updateBodyPadding = () => {
//       const headerHeight = window.innerWidth >= 768 
//         ? headerRef.current?.offsetHeight || 130 
//         : mobileHeaderHeight;
      
//       document.body.style.paddingTop = `${headerHeight}px`;
//     }; 

//     updateBodyPadding();
//     window.addEventListener('resize', updateBodyPadding);

//     const handleScroll = () => {
//       if (!headerRef.current) return;
      
//       // Find the current active section
//       const sectionElements = sections.map(s => {
//         const id = s.toLowerCase().replace(' ', '-');
//         const element = document.getElementById(id);
//         return { id, element };
//       }).filter(item => item.element);
      
//       // Calculate which section is most visible in the viewport
//       let mostVisibleSection = null;
//       let maxVisibility = 0;
      
//       const headerHeight = headerRef.current.offsetHeight;
      
//       sectionElements.forEach(({ id, element }) => {
//         if (!element) return;
        
//         const rect = element.getBoundingClientRect();
//         // Calculate how much of the section is visible in the viewport
//         // Account for header height
//         const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, headerHeight);
//         const visibilityRatio = visibleHeight / element.offsetHeight;
        
//         if (visibilityRatio > maxVisibility) {
//           maxVisibility = visibilityRatio;
//           mostVisibleSection = id;
//         }
//       });
      
//       setActiveSection(mostVisibleSection);
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     // Initial check
//     handleScroll();
    
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('resize', updateBodyPadding);
//       clearTimeout(loadTimer);
//     };
//   }, []);

//   // Reset animations when page refreshes
//   const handleRefresh = () => {
//     setIsLoading(true);
//     setShowHeading(false);
    
//     // Repeat the animation sequence
//     setTimeout(() => {
//       setIsLoading(false);
//       setTimeout(() => {
//         setShowHeading(true);
//       }, 300);
//     }, 1000);
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   // Smooth scrolling with offset to prevent header overlap
//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       // Close menu if open
//       if (isMenuOpen) {
//         setIsMenuOpen(false);
//       }
      
//       // Get header height to offset the scroll
//       const headerHeight = window.innerWidth >= 768
//         ? headerRef.current?.offsetHeight || 130
//         : mobileHeaderHeight;
      
//       // Calculate position with offset
//       const elementPosition = element.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
//       // Smooth scroll
//       window.scrollTo({
//         top: offsetPosition,
//         behavior: 'smooth'
//       });
//     }
//   };

//   return (
//     <>
//       {/* Simple page refresh transition */}
//       <div className={`fixed inset-0 z-50 flex items-center justify-center bg-white ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-500`}>
//         <div className="flex flex-col items-center">
//           {/* Logo pop-up animation */}
//           <img
//             src={logo}
//             alt="V-ACCEL"
//             className={`h-32 w-auto object-contain transform transition-transform duration-300 ${isLoading ? 'scale-100' : 'scale-110'}`}
//           />
//         </div>
//       </div>

//       <header className="fixed top-0 left-0 w-full z-40" ref={headerRef}>
//         {/* Desktop Header */}
//         <div className="hidden md:flex items-center justify-between px-6 py-3 bg-white shadow-md w-full">
//           <div className="flex items-center">
//             <img
//               src={logo}
//               alt="V-ACCEL"
//               className={`h-[100px] w-40 object-contain transition-all duration-500 ${isLoading ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}
//             />
//           </div>
//           <div className="text-center flex-1 pl-20 ml-20">
//             <h1 className={`text-5xl font-bold text-[#1f4051] transition-all duration-700 ${showHeading ? 'opacity-100' : 'opacity-0 transform translate-y-4'}`}>V-Accel AI Dynamics</h1>
//             <p className={`text-accent-dark text-lg pt-2 transition-all duration-700 delay-100 ${showHeading ? 'opacity-100' : 'opacity-0 transform translate-y-4'}`}>Accelerating Your Success with AI</p>
//           </div>
//           <nav>
//             <ul className="flex space-x-6">
//               {sections.map((item, index) => {
//                 const id = item.toLowerCase().replace(' ', '-');
//                 const isActive = activeSection === id;
//                 return (
//                   <li key={item} className={`transition-all duration-500 delay-${300 + (index * 100)} ${showHeading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
//                     <a
//                       href={`#${id}`}
//                       onClick={(e) => {
//                         e.preventDefault();
//                         scrollToSection(id);
//                       }}
//                       className={`text-lg hover:text-accent-dark transition-colors duration-300 ${
//                         isActive ? 'text-accent-dark font-semibold' : 'text-gray-800'
//                       }`}
//                     >
//                       {item}
//                     </a>
//                   </li>
//                 );
//               })}
//             </ul>
//           </nav>
//         </div>

//         {/* Mobile Header - with fixed positioning */}
//         <div className="md:hidden flex items-center justify-between px-4 py-2 bg-white shadow-md" style={{ height: `${mobileHeaderHeight}px` }}>
//           {/* Left: Logo */}
//           <div className="flex items-center">
//             <img
//               src={logo}
//               alt="V-ACCEL"
//               className={`h-12 w-auto object-contain transition-all duration-500 ${isLoading ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}
//             />
//           </div>
          
//           {/* Center: Heading - properly centered */}
//           <div className="flex flex-col items-center absolute left-1/2 transform -translate-x-1/2">
//             <h1 className={`text-lg font-bold text-[#1f4051] leading-tight text-center transition-all duration-700 ${showHeading ? 'opacity-100' : 'opacity-0 transform translate-y-2'}`}>
//               V-Accel AI Dynamics
//             </h1>
//             <p className={`text-xs text-accent-dark font-medium text-center pt-1 transition-all duration-700 delay-100 ${showHeading ? 'opacity-100' : 'opacity-0 transform translate-y-2'}`}>
//               Accelerating Your Success with AI
//             </p>
//           </div>
          
//           {/* Right: Menu Toggle */}
//           <div className="flex items-center">
//             <button onClick={toggleMenu} className="text-gray-800 p-1" aria-label="Toggle Menu">
//               {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
//             </button>
//           </div>
          
//           {/* Toggle Menu */}
//           {isMenuOpen && (
//             <nav className="fixed top-[72px] left-0 right-0 bg-white shadow-lg p-4 z-40 max-h-[calc(100vh-72px)] overflow-y-auto">
//               <ul className="space-y-4">
//                 {sections.map((section, index) => {
//                   const id = section.toLowerCase().replace(' ', '-');
//                   const isActive = activeSection === id;
//                   return (
//                     <li key={index} className={`transition-all duration-500 delay-${200 + (index * 75)} ${showHeading ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
//                       <a 
//                         href={`#${id}`} 
//                         className={`block py-2 transition-colors duration-300 ${
//                           isActive ? 'text-accent-dark font-semibold' : 'text-gray-800'
//                         }`}
//                         onClick={(e) => {
//                           e.preventDefault();
//                           scrollToSection(id);
//                         }}
//                       >
//                         {section}
//                       </a>
//                     </li>
//                   );
//                 })}
//               </ul>
//             </nav>
//           )}
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../images/Group 14.svg';

const sections = ['About','Services','Tech Stack','Team','Contact'];

// Helper component for letter animation
const AnimatedText: React.FC<{ text: string; show: boolean; baseDelay?: number; letterDelay?: number }> = ({ text, show, baseDelay = 0, letterDelay = 40 }) => {
  return (
    <span className="inline-block overflow-hidden">
      {text.split('').map((char: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined, i: React.Key | null | undefined) => (
        <span 
          key={i} 
          className={`inline-block transition-all duration-300 ${show 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-3'}`}
          style={{ 
            transitionDelay: `${baseDelay + (Number(i) * letterDelay)}ms`,
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showHeading, setShowHeading] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const mobileHeaderHeight = 72; // Fixed height for mobile header in pixels

  useEffect(() => {
    // First animate the logo pop-up
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
      // Then animate the heading fade-in
      setTimeout(() => {
        setShowHeading(true);
      }, 300);
    }, 1000);

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
      clearTimeout(loadTimer);
    };
  }, []);

  // Reset animations when page refreshes
  const handleRefresh = () => {
    setIsLoading(true);
    setShowHeading(false);
    
    // Repeat the animation sequence
    setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        setShowHeading(true);
      }, 250);
    }, 500);
  };

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
    <>
      {/* Simple page refresh transition */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center bg-white ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-500`}>
        <div className="flex flex-col items-center">
          {/* Logo pop-up animation */}
          <img
            src={logo}
            alt="V-ACCEL"
            className={`h-32 w-auto object-contain transform transition-transform duration-300 ${isLoading ? 'scale-100' : 'scale-110'}`}
          />
        </div>
      </div>

      <header className="fixed top-0 left-0 w-full z-40" ref={headerRef}>
        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between px-6 py-3 bg-white shadow-md w-full">
          <div className="flex items-center">
            <img
              src={logo}
              alt="V-ACCEL"
              className={`h-[100px] w-40 object-contain transition-all duration-500 ${isLoading ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}
            />
          </div>
          <div className="text-center flex-1 pl-20 ml-20">
            <h1 className={`text-5xl font-bold text-[#1f4051] transition-all duration-700 ${showHeading ? 'opacity-100' : 'opacity-0 transform translate-y-4'}`}>V-Accel AI Dynamics</h1>
            <b><p className={`text-accent-dark text-xl  pt-2 transition-all duration-700 delay-100 ${showHeading ? 'opacity-100' : 'opacity-0 transform translate-y-4'}`}>Accelerating Your Success with AI</p></b>
          </div>
          <nav>
            <ul className="flex space-x-5">
              {sections.map((item, index) => {
                const id = item.toLowerCase().replace(' ', '-');
                const isActive = activeSection === id;
                // Base delay for each menu item
                const baseDelay = 500 + (index * 100);
                
                return (
                  <li key={item}>
                    <a
                      href={`#${id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(id);
                      }}
                      className={`text-lg hover:text-accent-dark transition-colors duration-300 ${
                        isActive ? 'text-accent-dark font-semibold' : 'text-gray-800'
                      }`}
                    >
                      <AnimatedText text={item} show={showHeading} baseDelay={baseDelay} />
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
              className={`h-12 w-auto object-contain transition-all duration-500 ${isLoading ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}
            />
          </div>
          
          {/* Center: Heading - properly centered */}
          <div className="flex flex-col items-center absolute left-1/2 transform -translate-x-1/2">
            <h1 className={`text-lg font-bold text-[#1f4051] leading-tight text-center transition-all duration-700 ${showHeading ? 'opacity-100' : 'opacity-0 transform translate-y-2'}`}>
              V-Accel AI Dynamics
            </h1>
            <p className={`text-xs text-accent-dark font-medium text-center pt-1 transition-all duration-700 delay-100 ${showHeading ? 'opacity-100' : 'opacity-0 transform translate-y-2'}`}>
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
                  // Base delay for each mobile menu item
                  const baseDelay = 500 + (index * 80);
                  
                  return (
                    <li key={index}>
                      <a 
                        href={`#${id}`} 
                        className={`block py-2 transition-colors duration-300 ${
                          isActive ? 'text-accent-dark font-semibold' : 'text-gray-800'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(id);
                        }}
                      >
                        <AnimatedText text={section} show={showHeading} baseDelay={baseDelay} letterDelay={30} />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;

