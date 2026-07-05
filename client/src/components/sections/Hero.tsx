import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-slate-500 mb-4">
            Instructional Designer & Educator
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-800">
            Lola Babatunde
          </h1>

          <p className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed">
            Curriculum design, game development instruction, and learning
            experiences that make complex technology approachable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-11 px-8 text-white shadow-md hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#334155' }}
            >
              View Case Studies <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-11 px-8 border text-slate-700 hover:bg-slate-50 transition-colors"
              style={{ backgroundColor: '#ffffff', borderColor: '#cbd5e1' }}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
