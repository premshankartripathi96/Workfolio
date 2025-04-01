import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close mobile menu when clicking a navigation link
  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Add shadow to navbar when scrolled
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Highlight active navigation based on scroll position
      const sections = document.querySelectorAll<HTMLElement>('section[id]');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (window.scrollY > sectionTop && window.scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed w-full bg-[#000080]/95 backdrop-blur-sm z-50 transition-all duration-300",
      scrolled ? "shadow-md" : ""
    )}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold font-poppins text-white">
          PST<span className="text-[#4A90E2]">.</span>
        </a>
        
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href}
              className={cn(
                "nav-link font-medium text-white/90 hover:text-[#4A90E2] relative",
                activeSection === link.href.substring(1) ? "text-[#4A90E2]" : ""
              )}
              onClick={() => setActiveSection(link.href.substring(1))}
            >
              {link.label}
              <span className={cn(
                "absolute bottom-[-4px] left-0 h-0.5 bg-[#4A90E2] transition-all duration-300",
                activeSection === link.href.substring(1) ? "w-full" : "w-0"
              )} />
            </a>
          ))}
        </nav>
        
        <button 
          className="md:hidden text-white text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "md:hidden bg-[#000080] transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-64" : "max-h-0"
        )}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href}
              className="font-medium text-white/90 hover:text-[#4A90E2] py-2"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
