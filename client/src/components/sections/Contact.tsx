import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Facebook, ArrowRight, Twitter } from "lucide-react";
import { contactInfo, socialLinks, web3formsEndpoint, web3formsAccessKey } from "@/lib/constants";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(2, { message: "Subject is required." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    try {
      if (!web3formsAccessKey) throw new Error("WEB3FORMS_ACCESS_KEY_MISSING");
      const payload = {
        access_key: web3formsAccessKey,
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      };
      await apiRequest("POST", web3formsEndpoint, payload);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="section py-20 bg-white dark:bg-[#11001f]">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#2D2D2D] dark:text-white mb-4">Get In Touch</h2>
          <p className="text-[#333333] dark:text-white/80 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out to me using the form below or through my social media.
          </p>
          <div className="w-20 h-1 bg-[#8A2BE2] mx-auto mt-4"></div>
        </motion.div>
        
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="place-items-center text-2xl font-semibold font-poppins text-[#2D2D2D] dark:text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-[#8A2BE2]">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-[#2D2D2D] dark:text-white mb-1">Email</h4>
                  <p className="text-[#333333] dark:text-white/80">pstripathi2020@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-[#8A2BE2]">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-[#2D2D2D] dark:text-white mb-1">Phone</h4>
                  <p className="text-[#333333] dark:text-white/80">+91 96960 60577</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-[#8A2BE2]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-[#2D2D2D] dark:text-white mb-1">Location</h4>
                  <p className="text-[#333333] dark:text-white/80">Kanpur, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="font-medium text-lg text-[#2D2D2D] dark:text-white mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/premshankartripathi96"  
                  className="text-[#2D2D2D] dark:text-white text-2xl transition-transform duration-300 hover:-translate-y-1 hover:text-[#8A2BE2] dark:hover:text-purple-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a 
                  href= "https://www.linkedin.com/in/prem-shankar-tripathi-3496472bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                  className="text-[#2D2D2D] dark:text-white text-2xl transition-transform duration-300 hover:-translate-y-1 hover:text-[#8A2BE2] dark:hover:text-purple-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href= "https://x.com/shivatripathi_8"
                  className="text-[#2D2D2D] dark:text-white text-2xl transition-transform duration-300 hover:-translate-y-1 hover:text-[#8A2BE2] dark:hover:text-purple-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Twitter size={24} />
                </a>
                <a 
                  href={socialLinks.instagram} 
                  className="text-[#2D2D2D] dark:text-white text-2xl transition-transform duration-300 hover:-translate-y-1 hover:text-[#8A2BE2] dark:hover:text-purple-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a 
                  href={socialLinks.facebook} 
                  className="text-[#2D2D2D] dark:text-white text-2xl transition-transform duration-300 hover:-translate-y-1 hover:text-[#8A2BE2] dark:hover:text-purple-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="place-items-center text-2xl font-semibold font-poppins text-[#2D2D2D] dark:text-white mb-6">Send Me a Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#333333] dark:text-white">Your Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Your Name"
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] placeholder-black/50 dark:placeholder-white/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#333333] dark:text-white">Your Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter Your Email"
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] placeholder-black/50 dark:placeholder-white/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#333333] dark:text-white">Subject</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Subject Here"
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] placeholder-black/50 dark:placeholder-white/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#333333] dark:text-white">Your Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter Your Message "
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] placeholder-black/50 dark:placeholder-white/50"
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="flex items-center gap-2 bg-[#8A2BE2] text-white font-medium py-6 px-4 rounded-full hover:from-purple-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:text-black"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <ArrowRight size={16} />
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
