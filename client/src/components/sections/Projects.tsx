import { motion } from "framer-motion";
import { projects } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowBigRight, ArrowDown } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="section py-20 bg-white dark:bg-[#11001f]">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#2D2D2D] dark:text-white mb-4">My Projects</h2>
          <p className="text-[#333333] dark:text-white/80 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise in web development.
          </p>
          <div className="w-20 h-1 bg-[#8A2BE2] mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden project-card hover:cursor-pointer hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.15)] dark:shadow-[0_0_20px_rgba(255,255,255,0.18)] hover:shadow-[0_0_28px_rgba(0,0,0,0.25)] dark:hover:shadow-[0_0_28px_rgba(255,255,255,0.28)]">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold font-poppins text-[#2D2D2D] dark:text-white mb-2">{project.title}</h3>
                  <p className="text-[#333333] dark:text-white/80 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-[#F0E6FF] dark:bg-purple-900/40 text-sm text-[#4B0082] dark:text-purple-200 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between mt-4">
                    <a href={project.projectLink} className="text-[#8A2BE2] dark:text-purple-300 font-medium hover:underline">
                      View Project
                    </a>
                    <a href={project.sourceLink} className="text-[#4B0082] dark:text-purple-200 font-medium hover:underline">
                      Source Code
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12 flex justify-center">
          <Button 
            variant="outline" 
            className="flex items-center gap-2 px-8 py-6 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full shadow-md hover:from-purple-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            View All Projects
            <ArrowDown size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}
