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
    description: " Unity curriculum built for iCode, featuring hands-on projects and interactive lessons to teach game design, C# scripting, and development fundamentals",
    imageUrl: "/Images/Unity.png",
    tags: ["Curriculum Development", "Instructional Design", "Project-Based Learning"],
    link: "https://media.journoportfolio.com/users/42831/uploads/14bef6b8-df11-41d3-a214-5cea6e4d6ffc.pdf"
  },
  {
    id: 3,
    title: "Exploration Code E-Learning Platform",
    description: " An interactive e-learning platform designed to teach coding and game development through hands-on projects, engaging lessons, and a structured curriculum for learners of all levels.",
    imageUrl: "/Images/exploration-code-new.png",
    tags: ["Curriculum Development", "Instructional Design", "Project-Based Learning"],
    link: "https://explorationcode.org/",
    inDevelopment: true
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="overflow-hidden h-full">
                  <div className="aspect-video relative overflow-hidden">
                    {project.inDevelopment && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
                        <Badge 
                          variant="secondary" 
                          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 text-lg font-semibold shadow-lg"
                        >
                          Beta Coming Soon
                        </Badge>
                      </div>
                    )}
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {project.title}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
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