import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 bg-[#FAFAF8]">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div className="order-2 md:order-1">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#6B7B6B] mb-4">
              About Me
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#1C1C1C] leading-tight mb-6"
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            >
              Building Confidence Through Technology
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-[#666666]">
              I enjoy helping students build confidence with technology. Whether I'm
              designing curriculum, mentoring students, or developing new learning
              experiences, my goal is to make complex technical concepts approachable,
              engaging, and practical.
            </p>
          </div>
          <motion.div
            className="order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="/Images/profile-picture.jpeg"
              alt="Lola Babatunde"
              className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
