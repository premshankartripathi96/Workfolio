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
      "fixed w-full bg-white/95 backdrop-blur-sm z-50 transition-all duration-300",
      scrolled ? "shadow-md" : ""
    )}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold font-outfit text-black">
          Prem's Portfolio<span className="text-red-500">.</span>
        </a>
        
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href}
              className={cn(
                "nav-link font-medium text-black/80 hover:text-[#8A2BE2] relative transition-transform duration-300 hover:scale-110",
                activeSection === link.href.substring(1) ? "text-[#8A2BE2]" : ""
              )}
              onClick={() => setActiveSection(link.href.substring(1))}
            >
              {link.label}
              <span className={cn(
                "absolute bottom-[-4px] left-0 h-0.5 bg-[#8A2BE2] transition-all duration-300",
                activeSection === link.href.substring(1) ? "w-full" : "w-0"
              )} />
            </a>
          ))}
        </nav>
        
        <button 
          className="md:hidden text-black text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "md:hidden bg-[#F0E6FF]/95 transition-all duration-300 overflow-hidden absolute right-0 w-1/2 mb-4",
          isOpen ? "max-h-64" : "max-h-0"
        )}
      >
        <div className="px-6 py-4 pb-8 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href}
              className="font-medium text-black/80 hover:text-[#8A2BE2] py-2 transition-transform duration-300 hover:scale-110"
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
