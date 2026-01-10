import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, FileText, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { Avatoon } from "@/components/Avatoon";
import { WritingSamplesModal } from "@/components/WritingSamplesModal";
import { useState, FormEvent } from "react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Reset status
    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok) {
        // Success
        setSubmitStatus("success");
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
          variant: "default",
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          message: ""
        });
      } else {
        // API error
        setSubmitStatus("error");
        toast({
          title: "Message Not Sent",
          description: data.message || "There was a problem sending your message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      // Network error
      setSubmitStatus("error");
      toast({
        title: "Connection Error",
        description: "Could not connect to the server. Please check your internet connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Get In Touch</h2>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <Card className="order-2 md:order-1">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm md:text-base break-all">icodewithlola@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="h-5 w-5 text-primary shrink-0" />
                  <a 
                    href="https://www.linkedin.com/in/lolababatunde/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm md:text-base hover:text-primary transition-colors"
                  >
                    linkedin.com/in/lolababatunde
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Github className="h-5 w-5 text-primary shrink-0" />
                  <a 
                    href="https://github.com/lolab413"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm md:text-base hover:text-primary transition-colors"
                  >
                    github.com/lolab413
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-primary shrink-0" />
                  <WritingSamplesModal 
                    trigger={
                      <button className="text-sm md:text-base hover:text-primary transition-colors text-left">
                        My Writing Samples
                      </button>
                    }
                  />
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm md:text-base">(214) 300-5515</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm md:text-base">Dallas, Texas 75214</span>
                </div>
              </CardContent>
            </Card>

            <div className="relative order-1 md:order-2">
              <Card className="relative z-10">
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <Input 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name" 
                        className="w-full text-base"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <Input 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email" 
                        placeholder="Your Email" 
                        className="w-full text-base"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <Textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message" 
                        className="min-h-[120px] w-full text-base resize-none"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : submitStatus === "success" ? (
                        <>
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Message Sent
                        </>
                      ) : submitStatus === "error" ? (
                        <>
                          <AlertCircle className="mr-2 h-4 w-4" />
                          Try Again
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <div className="hidden md:block">
                <Avatoon />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}