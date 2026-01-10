import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="w-full py-4 mt-auto bg-background/80 backdrop-blur-sm border-t border-primary/10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="container mx-auto px-4 text-center text-sm text-muted-foreground"
      >
        Made with 🧡 using React
      </motion.div>
    </footer>
  );
}
