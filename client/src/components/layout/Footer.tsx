import { socialLinks } from "@/lib/constants";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-xl font-bold font-poppins">
              Prem's Portfolio<span className="text-[#4A90E2]">.</span>
            </a>
            <p className="mt-2 text-gray-200">Web Developer & BCA Student</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-gray-200 mb-2">© {new Date().getFullYear()} Prem Shankar Tripathi. All rights reserved.</p>
            <div className="flex space-x-4 mt-2">
              <a href={socialLinks.github} className="text-gray-200 hover:text-[#4A90E2] transition-colors" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
              <a href={socialLinks.linkedin} className="text-gray-200 hover:text-[#4A90E2] transition-colors" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a href={socialLinks.twitter} className="text-gray-200 hover:text-[#4A90E2] transition-colors" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <Twitter size={20} />
              </a>
              <a href={socialLinks.instagram} className="text-gray-200 hover:text-[#4A90E2] transition-colors" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
