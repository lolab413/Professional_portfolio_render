import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center bg-[#FAFAF8]"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-6xl">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#6B7B6B] mb-8"
          >
            Case Study Portfolio
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-medium text-[#1C1C1C] leading-[1.05] tracking-tight mb-8"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Learning design
            <br />
            <em className="text-[#6B7B6B]">rooted in</em>
            <br />
            human growth.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-[#666666] leading-relaxed max-w-xl mb-10"
          >
            Curriculum, course design, and teaching resources built to make
            technology accessible — one learner at a time.
          </motion.p>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-8 mb-20"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#1C1C1C] hover:text-[#6B7B6B] transition-colors"
            >
              View case studies
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-[#666666] hover:text-[#1C1C1C] transition-colors"
            >
              About me
            </a>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-[#E5E5E5] mb-10" />

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-16 md:gap-24"
          >
            <div>
              <p className="text-3xl md:text-4xl font-medium text-[#1C1C1C] tracking-tight" style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}>
                4+
              </p>
              <p className="text-xs text-[#888888] mt-1 max-w-[80px] leading-snug">
                Years designing curriculum
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-medium text-[#1C1C1C] tracking-tight" style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}>
                500+
              </p>
              <p className="text-xs text-[#888888] mt-1 max-w-[80px] leading-snug">
                Students served
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-medium text-[#1C1C1C] tracking-tight" style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}>
                12+
              </p>
              <p className="text-xs text-[#888888] mt-1 max-w-[80px] leading-snug">
                Courses developed
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
