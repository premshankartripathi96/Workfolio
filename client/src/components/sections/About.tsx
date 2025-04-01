import { motion } from "framer-motion";
import { CodeXml, Layout, SmilePlus, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="section py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#2D2D2D] mb-4">About Me</h2>
          <div className="w-20 h-1 bg-[#4A90E2] mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold font-poppins text-[#2D2D2D] mb-6">Who I Am</h3>
            <p className="text-[#333333] mb-6">
              Hello! I'm Prem Shankar Tripathi, a web developer with a passion for creating beautiful, functional, and user-friendly websites. Currently pursuing my BCA (Bachelor of Computer Applications) in my 2nd year, I combine my academic knowledge with practical skills to deliver exceptional web solutions.
            </p>
            <p className="text-[#333333] mb-6">
              I believe in the power of clean code and thoughtful design to create impactful digital experiences. My approach combines technical expertise with creative problem-solving to build websites that not only look great but also perform excellently.
            </p>
            
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-xl font-semibold font-poppins text-[#2D2D2D] mb-4">Education</h4>
              <Card className="mb-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-5">
                  <h5 className="font-medium text-[#2D2D2D]">Bachelor of Computer Applications (BCA)</h5>
                  <p className="text-[#333333] opacity-80">2nd Year • 2022 - Present</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold font-poppins text-[#2D2D2D] mb-6">My Approach</h3>
            <div className="space-y-6">
              <div className="flex">
                <div className="mr-4 mt-1 text-[#4A90E2]">
                  <CodeXml size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-[#2D2D2D] mb-2">Clean Code</h4>
                  <p className="text-[#333333]">I write maintainable, efficient code following best practices to ensure scalability and performance.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 mt-1 text-[#4A90E2]">
                  <Layout size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-[#2D2D2D] mb-2">Responsive Design</h4>
                  <p className="text-[#333333]">Every project I build is fully responsive, ensuring a seamless experience across all devices.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 mt-1 text-[#4A90E2]">
                  <SmilePlus size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-[#2D2D2D] mb-2">User-Centered</h4>
                  <p className="text-[#333333]">I focus on creating intuitive interfaces that prioritize user experience and accessibility.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 mt-1 text-[#4A90E2]">
                  <Rocket size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-[#2D2D2D] mb-2">Performance</h4>
                  <p className="text-[#333333]">Optimizing for speed and efficiency is a core part of my development process.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
