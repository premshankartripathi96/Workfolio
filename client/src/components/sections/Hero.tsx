import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Download, ArrowRight } from "lucide-react";
import profileImage from "@assets/IMG_20250619_184430_305_1755461869581.webp";

export default function Hero() {
  return (
    <section id="home" className="section pt-24 pb-20 bg-white dark:bg-[#11001f]">
      <div className="container mx-auto px-6 text-center">
        {/* Profile Image */}
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden transition-all duration-500 hover:scale-105">
            <Avatar className="w-full h-full transform transition-transform duration-500 hover:scale-110">
              <AvatarImage 
                src={profileImage} 
                alt="Paveen Singh " 
                className="object-cover scale-[1.7] translate-y-8" 
              />
              <AvatarFallback className="text-3xl font-bold text-[#8A2BE2]">Prem</AvatarFallback>
            </Avatar>
          </div>
        </motion.div>

        {/* Name and Description */}
        <motion.div 
          className="max-w-3xl mx-auto items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg md:text-xl text-black dark:text-white font-medium mb-4">Hello, I'm Prem Shankar Tripathi 👋🏻</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-ovo text-black dark:text-white mb-6">
            Full Stack Developer Based in Kanpur.
          </h1>
          <p className="text-black/80 dark:text-white/80 mb-8">
            A passionate Full Stack Developer crafting beautiful and functional digital experiences
          </p>
       <div className="flex justify-center items-center flex-col sm:flex-row gap-4 mt-4 w-full">
  <a
    href="#contact"
    className="flex items-center gap-2 px-10 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full shadow-md hover:from-purple-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
  >
    Contact Me <ArrowRight size={16} />
  </a>
  <a
    href="/sample-resume.pdf"
    download
    className="flex items-center gap-2 px-10 py-3 border border-purple-600 text-black/80 rounded-full shadow-md hover:from-purple-300 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
  >
    My Resume <Download size={16} />
  </a>
</div>

        </motion.div>
      </div>
    </section>
  );
}
