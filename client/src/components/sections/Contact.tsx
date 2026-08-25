import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
        toast({
          title: "Message Not Sent",
          description: data.message || "There was a problem sending your message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
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
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary mb-4 text-center">
            Let's Connect
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 text-center text-foreground"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto text-base md:text-lg">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="order-2 md:order-1 border border-border shadow-none">
              <CardHeader>
                <CardTitle className="text-lg font-medium text-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm text-foreground">icodewithlola@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="h-5 w-5 text-primary shrink-0" />
                  <a
                    href="https://www.linkedin.com/in/lolababatunde/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    github.com/lolab413
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-primary shrink-0" />
                  <WritingSamplesModal
                    trigger={
                      <button className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left">
                        My Writing Samples
                      </button>
                    }
                  />
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm text-foreground">(214) 300-5515</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm text-foreground">Dallas, Texas 75214</span>
                </div>
                <div className="hidden md:flex justify-center pt-4">
                  <Avatoon />
                </div>
              </CardContent>
            </Card>

            <Card className="order-1 md:order-2 border border-border shadow-none">
              <CardHeader>
                <CardTitle className="text-lg font-medium text-foreground">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full border-border focus:border-primary focus:ring-primary"
                    required
                    disabled={isSubmitting}
                  />
                  <Input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Your Email"
                    className="w-full border-border focus:border-primary focus:ring-primary"
                    required
                    disabled={isSubmitting}
                  />
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="min-h-[120px] w-full resize-none border-border focus:border-primary focus:ring-primary"
                    required
                    disabled={isSubmitting}
                  />
                  <button
                    type="submit"
                    className="w-full h-11 rounded-md text-sm font-medium text-primary-foreground transition-colors flex items-center justify-center bg-primary hover:bg-primary/90"
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
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
