import { socialLinks } from "@/lib/constants";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-10">
      {/* Horizontal line at the top */}
      <div className="container mx-auto px-6">
        <div className="w-full h-px bg-gray-300 mb-10"></div>
      </div>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <a href="#" className="text-xl font-bold font-poppins text-black/80">
              Prem's Portfolio<span className="text-red-500">.</span>
            </a>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-black/80 mb-2">© {new Date().getFullYear()} Prem Shankar Tripathi. All rights reserved.</p>
            <div className="flex space-x-4 mt-2">
              <a href={socialLinks.github} className="text-black/80 hover:text-red-500 transition-colors" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
              <a href={socialLinks.linkedin} className="text-black/80 hover:text-red-500 transition-colors" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a href={socialLinks.twitter} className="text-black/80 hover:text-red-500 transition-colors" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <Twitter size={20} />
              </a>
              <a href={socialLinks.instagram} className="text-black/80 hover:text-red-500 transition-colors" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
