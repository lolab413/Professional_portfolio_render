import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const skills: Record<string, { name: string; level: number }[]> = {
  "Game Development": [
    { name: "Unity", level: 4 },
    { name: "Game Design", level: 5 },
    { name: "C#", level: 4 },
    { name: "Python", level: 4 }
  ],
  "Web Development": [
    { name: "JavaScript", level: 5 },
    { name: "React", level: 4 },
    { name: "Node.js", level: 4 },
    { name: "SQL", level: 4 }
  ],
  "Education": [
    { name: "Instructional Design", level: 5 },
    { name: "Curriculum Development", level: 5 },
    { name: "E-Learning", level: 4 },
    { name: "Technical Training", level: 5 }
  ]
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function About() {
  const preventSave = (e: React.MouseEvent) => {
    e.preventDefault();
    return false;
  };

  return (
    <section id="about" className="py-8 md:py-20 bg-gradient-to-b from-purple-50 to-white dark:from-purple-950/30 dark:to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-xl md:text-3xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-transparent bg-clip-text">
            About Me
          </h2>

          <motion.div variants={item} className="mb-6 md:mb-12">
            <Card className="p-4 md:p-6 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border-primary/10">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <div className="relative shrink-0">
                  <motion.img
                    src="/Images/profile-picture.jpeg"
                    alt="Lola Babatunde"
                    className="w-20 md:w-30 h-20 md:h-30 rounded-full object-cover border-2 border-primary/20 shadow-lg select-none pointer-events-none"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1.4 }}
                    transition={{ duration: 0.5 }}
                    onContextMenu={preventSave}
                    draggable="false"
                    style={{
                      WebkitUserSelect: 'none',
                      WebkitTouchCallout: 'none',
                    }}
                  />
                  <div className="absolute inset-0 bg-transparent pointer-events-none" />
                </div>
                <p className="text-sm md:text-lg leading-relaxed md:leading-relaxed text-gray-800 dark:text-gray-200 text-center md:text-left">
                  As a Game Design Instructor and Curriculum Developer based in Dallas, Texas, I blend technical expertise with educational innovation. I specialize in teaching full-stack web development, game development, and data science, while creating engaging curriculum that bridges complex concepts with accessible learning experiences.
                </p>
              </div>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <motion.div key={category} variants={item}>
                <Card className="p-4 md:p-6 h-full bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-colors">
                  <h3 className="text-base md:text-xl font-semibold mb-3 md:mb-4 text-primary">{category}</h3>
                  <div className="space-y-2 md:space-y-4">
                    {items.map((skill) => (
                      <motion.div
                        key={skill.name}
                        className="space-y-1"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex justify-between text-xs md:text-sm">
                          <span className="text-gray-800 dark:text-gray-200">{skill.name}</span>
                          <motion.span
                            className="text-primary"
                            whileHover={{
                              scale: 1.1,
                              transition: { duration: 0.2 }
                            }}
                          >
                            {"★".repeat(skill.level)}
                            {"☆".repeat(5 - skill.level)}
                          </motion.span>
                        </div>
                        <div className="h-1 md:h-1.5 bg-primary/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(skill.level / 5) * 100}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-primary to-purple-500"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}