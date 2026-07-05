import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Hammer, Bot, Accessibility, RotateCcw } from "lucide-react";

const philosophies = [
  {
    icon: Hammer,
    title: "Project-Based Learning",
    description: "Students learn best by building. Every lesson is anchored in a tangible project that produces real results.",
  },
  {
    icon: Bot,
    title: "AI Education",
    description: "Students should understand AI and not just use it. We explore how models work, not just their outputs.",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    description: "Technical learning should be approachable. Complexity is broken down so every learner can succeed.",
  },
  {
    icon: RotateCcw,
    title: "Iteration",
    description: "Curriculum should evolve through feedback. Every course is a living document refined by student experience.",
  },
];

export function LearningPhilosophy() {
  return (
    <section id="philosophy" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#6B7B6B] mb-4 text-center">
            How I Design Learning
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 text-center text-[#1C1C1C]"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Learning Philosophy
          </h2>
          <p className="text-[#666666] text-center mb-16 max-w-2xl mx-auto text-base md:text-lg">
            Four principles that guide every curriculum, workshop, and learning
            experience I create.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophies.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border border-[#E5E5E5] shadow-none hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 bg-[#F0F2F0]">
                      <item.icon className="h-5 w-5 text-[#6B7B6B]" />
                    </div>
                    <CardTitle className="text-lg font-medium text-[#1C1C1C]">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-[#666666] leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
