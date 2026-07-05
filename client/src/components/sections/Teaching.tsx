import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Monitor, Code, Gamepad2, Database, Brain, Palette, Layers } from "lucide-react";

const technologies = [
  { name: "Unity & C#", icon: Gamepad2, category: "Game Dev" },
  { name: "JavaScript / React", icon: Code, category: "Web" },
  { name: "Python", icon: Monitor, category: "Programming" },
  { name: "Google Sheets / Data", icon: Database, category: "Data" },
  { name: "AI & Machine Learning", icon: Brain, category: "Emerging Tech" },
  { name: "UI/UX Design", icon: Palette, category: "Design" },
  { name: "Miro & Agile Tools", icon: Layers, category: "Product" },
];

const teachingSnapshots = [
  {
    title: "Unity Game Dev Workshop",
    description: "Hands-on Unity workshops teaching C# scripting and 3D game design fundamentals.",
    placeholder: "Unity Workshop",
  },
  {
    title: "Web Development Bootcamp",
    description: "Full-stack web development intensives covering React, Node.js, and modern tooling.",
    placeholder: "Web Dev Class",
  },
  {
    title: "Data Analysis Session",
    description: "Practical data literacy sessions using Google Sheets, VLOOKUP, and visualization techniques.",
    placeholder: "Data Session",
  },
];

export function Teaching() {
  return (
    <section id="teaching" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-2 text-center">
            In the Classroom
          </h2>
          <h3 className="text-3xl font-bold mb-4 text-center">Teaching</h3>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Creating hands-on learning environments where students build real projects
            and develop practical technical skills.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-16">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                    <tech.icon className="h-6 w-6 text-slate-600" />
                    <span className="text-sm font-medium">{tech.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {tech.category}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {teachingSnapshots.map((snapshot, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                    <span className="text-slate-500 text-sm font-medium">
                      {snapshot.placeholder}
                    </span>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{snapshot.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground">
                      {snapshot.description}
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
