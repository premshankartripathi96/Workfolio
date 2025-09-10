import { useState, useEffect } from "react";
import { Menu, X, Download, Moon, Sun } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState<boolean>(false);

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

  // Initialize theme on mount
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const shouldBeDark = stored ? stored === "dark" : false;
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ",
      scrolled
        ? "bg-white/50 dark:bg-[#11001f]/70 backdrop-blur-[50px] shadow-md"
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-6 py-6 grid grid-cols-3 items-center">
        <a
          href="#top"
          className={cn(
            "text-xl sm:text-2xl whitespace-nowrap font-bold font-outfit text-black dark:text-white justify-self-start transition-all",
          )}
        >
          Prem's Portfolio<span className="text-red-500">.</span>
        </a>
        
        {/* Centered nav */}
        <nav className="fixed hidden md:flex space-x-8 justify-self-center">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href}
              className={cn(
                "nav-link font-medium text-black/80 dark:text-white/80 hover:text-[#8A2BE2] dark:hover:text-purple-300 relative transition-transform duration-300 hover:scale-110",
                activeSection === link.href.substring(1) ? "text-[#8A2BE2] dark:text-purple-300" : ""
              )}
              onClick={() => setActiveSection(link.href.substring(1))}
            >
              {link.label}
              <span className={cn(
                "absolute bottom-[-4px] left-0 h-0.5 bg-[#8A2BE2] dark:bg-purple-300 transition-all duration-300",
                activeSection === link.href.substring(1) ? "w-full" : "w-0"
              )} />
            </a>
          ))}
        </nav>
        
        {/* Right controls: theme toggle + mobile menu */}
        <div className="flex items-center justify-self-end gap-3 col-start-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            title="Toggle theme"
            className="p-2 rounded-full border border-transparent hover:border-[#8A2BE2] dark:hover:border-purple-300 text-black dark:text-white hover:text-[#8A2BE2] dark:hover:text-purple-300 transition-colors"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            className="md:hidden text-black dark:text-white text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "md:hidden bg-white/70 dark:bg-[#11001f]/70 backdrop-blur-[20px] transition-all duration-300 overflow-hidden absolute right-0 top-full mt-0 w-1/2",
          isOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="px-6 py-4 pb-8 flex flex-col space-y-4">
          
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href}
              className="font-medium text-black/80 dark:text-white/80 hover:text-[#8A2BE2] dark:hover:text-purple-300 py-2 transition-transform duration-300 hover:scale-110"
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
