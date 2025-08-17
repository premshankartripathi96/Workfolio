import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Download, ArrowRight } from "lucide-react";
import profileImage from "@assets/IMG_20250619_184430_305_1755461869581.webp";

export default function Hero() {
  return (
    <section id="home" className="section pt-24 pb-20 bg-white">
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
                alt="Prem Shankar Tripathi" 
                className="object-cover scale-[1.7] translate-y-8" 
              />
              <AvatarFallback className="text-3xl font-bold text-[#8A2BE2]">Prem</AvatarFallback>
            </Avatar>
          </div>
        </motion.div>

        {/* Name and Description */}
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-black font-medium mb-4">Hello, I'm 👋🏻</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-outfit text-black mb-6">
            Prem Shankar Tripathi
          </h1>
          <p className="text-lg md:text-xl text-black/80 mb-8">
            A passionate Full Stack Developer crafting beautiful and functional digital experiences
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              asChild
              variant="outline"
              className="bg-black/80 hover:bg-black text-white border-none font-medium py-2 px-4 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <a href="#" className="flex items-center gap-2">
                My Resume
                <Download size={16} />
              </a>
            </Button>
            <Button 
              asChild
              variant="outline" 
              className="bg-white text-black/80 border-black/80 hover:border-black hover:text-black font-medium py-2 px-4 rounded-2xl transition-all duration-300 transform hover:scale-105"
            >
              <a href="#contact" className="flex items-center gap-2">
                Contact Me
                <ArrowRight size={16} />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
