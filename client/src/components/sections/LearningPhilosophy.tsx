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
    <section id="philosophy" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-2 text-center">
            How I Design Learning
          </h2>
          <h3 className="text-3xl font-bold mb-4 text-center">Learning Philosophy</h3>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
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
                <Card className="h-full hover:shadow-md transition-shadow border-l-4" style={{ borderLeftColor: '#334155' }}>
                  <CardHeader className="pb-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: '#f1f5f9' }}>
                      <item.icon className="h-5 w-5 text-slate-600" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground leading-relaxed">
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
