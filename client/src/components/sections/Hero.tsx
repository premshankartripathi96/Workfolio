import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profileImage from "@/assets/profile.jpg";

export default function Hero() {
  return (
    <section id="home" className="section pt-32 pb-20 md:pt-40 md:pb-32 bg-[#000080]"> {/* Navy blue background */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <motion.div 
          className="md:w-1/2 mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#4A90E2] font-medium mb-4">Hello, I'm</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-white mb-6">
            Prem Shankar Tripathi
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            A passionate web developer crafting beautiful and functional digital experiences
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              asChild
              size="lg" 
              className="bg-[#4A90E2] hover:bg-[#4A90E2]/90 text-white font-medium py-3 px-8 rounded-md"
            >
              <a href="#projects">View My Work</a>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg" 
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 font-medium py-3 px-8 rounded-md"
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-white/10 flex items-center justify-center overflow-hidden border-4 border-white/20">
            <Avatar className="w-full h-full">
              <AvatarImage src={profileImage} alt="Prem Shankar Tripathi" className="object-cover" />
              <AvatarFallback className="text-4xl font-bold">PST</AvatarFallback>
            </Avatar>
            <div className="absolute inset-0 bg-[#4A90E2] bg-opacity-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
