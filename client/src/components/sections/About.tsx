import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 md:order-1">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-2">
              About Me
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Building Confidence Through Technology
            </h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I enjoy helping students build confidence with technology. Whether I'm
              designing curriculum, mentoring students, or developing new learning
              experiences, my goal is to make complex technical concepts approachable,
              engaging, and practical.
            </p>
          </div>
          <motion.div
            className="order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="/Images/profile-picture.jpeg"
              alt="Lola Babatunde"
              className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover shadow-xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
