import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/lib/types";

const projects: Project[] = [
  {
    id: 1,
    title: "LoveHandle E-Commerce Website Redesign",
    description: "Built with Ruby on Rails, Liquid, HTML, and SCSS, featuring a redesigned UI, wishlist functionality, and a floating cart that boosted sales and retention by over 40%.",
    imageUrl: "/Images/lovehandle-homepage.png",
    tags: ["Ruby on Rails", "Liquid", "SCSS"],
    link: "https://www.lovehandle.com/"
  },
  {
    id: 2,
    title: "3D Game Development Curriculum",
    description: "Unity curriculum built for iCode, featuring hands-on projects and interactive lessons to teach game design, C# scripting, and development fundamentals",
    imageUrl: "/Images/Unity.png",
    tags: ["Curriculum Development", "Instructional Design", "Project-Based Learning"],
    link: "https://media.journoportfolio.com/users/42831/uploads/14bef6b8-df11-41d3-a214-5cea6e4d6ffc.pdf"
  },
  {
    id: 3,
    title: "Exploration Code E-Learning Platform",
    description: "An interactive e-learning platform designed to teach coding and game development through hands-on projects, engaging lessons, and a structured curriculum for learners of all levels.",
    imageUrl: "/Images/exploration-code-new.png",
    tags: ["Curriculum Development", "Instructional Design", "Project-Based Learning"],
    link: "https://explorationcode.org/",
    inDevelopment: true
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#6B7B6B] mb-4 text-center">
            Case Studies
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 text-center text-[#1C1C1C]"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Curriculum & Learning Design
          </h2>
          <p className="text-[#666666] text-center mb-16 max-w-2xl mx-auto text-base md:text-lg">
            Selected projects showcasing curriculum development, instructional design,
            and learning experience creation.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <Card className="overflow-hidden h-full border border-[#E5E5E5] shadow-none hover:shadow-lg transition-shadow duration-300">
                  <div className="w-full aspect-square relative overflow-hidden bg-[#F5F5F5]">
                    {project.inDevelopment && (
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-10">
                        <Badge
                          variant="secondary"
                          className="bg-[#6B7B6B] text-white px-4 py-2 text-sm font-medium border-0"
                        >
                          Beta Coming Soon
                        </Badge>
                      </div>
                    )}
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center justify-between text-base font-medium text-[#1C1C1C]">
                      {project.title}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#888888] hover:text-[#6B7B6B] transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#666666] mb-4 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs text-[#888888] border-[#E5E5E5]">
                          {tag}
                        </Badge>
                      ))}
                    </div>
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
