import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";
import { WritingSamplesModal } from "@/components/WritingSamplesModal";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-100/80 via-pink-50/80 to-blue-50/80 dark:from-purple-950/30 dark:via-pink-900/20 dark:to-blue-900/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 w-full h-full">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-block"
          >
            <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Game Design & Development
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl md:text-2xl text-foreground mb-8 drop-shadow-sm"
          >
            Blending Education & Technology
            <br />
            <span className="text-muted-foreground">
              Developer • Game Design Teacher • Instructional Designer
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-primary/90 hover:bg-primary text-primary-foreground"
              asChild
            >
              <a href="#projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/20 hover:border-primary/40"
              asChild
            >
              <a href="#contact">Get In Touch</a>
            </Button>
            <WritingSamplesModal 
              trigger={
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-secondary/80 hover:bg-secondary transition-colors"
                >
                  Writing Samples <FileText className="ml-2 h-4 w-4" />
                </Button>
              }
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}