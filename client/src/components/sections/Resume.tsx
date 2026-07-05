import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";
import type { Experience, Education } from "@/lib/types";

const experiences: Experience[] = [
  {
    company: "Game-U",
    position: "Data Science & Game Design Instructor / Curriculum Developer",
    period: "March 2022 - Present",
    description: [
      "Instruct students in full-stack web development, game development, and data science",
      "Teach JavaScript, Lua, C#, React, Vue, Flutter, Python, and SQL",
      "Develop interactive labs covering databases, OOP, and algorithms",
      "Guide students in front-end and back-end development with Node.js and Express",
    ],
  },
  {
    company: "Freedom Learning Group/Coursera",
    position: "Instructional Content Author / Instructional Designer",
    period: "June 2023 - Sept. 2024",
    description: [
      "Created interactive learning modules for data science, AI, and machine learning",
      "Designed hands-on programming exercises in Python and SQL",
      "Developed technical tutorials using Articulate 360 and Adobe Creative Suite",
    ],
  },
  {
    company: "iCode",
    position: "Technical Lead Instructor / CS Instructional Designer",
    period: "June 2020 - Sept 2022",
    description: [
      "Led instruction in Python, JavaScript, SQL, and database management",
      "Designed curricula covering data structures, algorithms, and debugging",
      "Developed project-based learning experiences for full-stack applications",
    ],
  },
];

const education: Education[] = [
  {
    school: "Texas Woman's University",
    degree: "Bachelor of Business Administration (B.B.A.)",
    period: "August 2011 - May 2015",
    description: "Enactus Member",
  },
  {
    school: "Brookhaven College",
    degree: "Certificate in Computer Programming",
    period: "Post-Graduate September 2017",
    description: "Advanced programming and software development studies",
  },
  {
    school: "Purdue Global",
    degree: "Graduate Certificate in Instructional Design and Technology",
    period: "Post-Graduate",
    description:
      "Focused on learning experience design, adult learning theory, and technology-enabled instructional solutions.",
  },
];

export function Resume() {
  return (
    <section id="resume" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">Resume</h2>
            <a
              href="/resume.pdf"
              download="Lola_Babatunde_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-md text-sm font-medium h-10 px-4 border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-2 border-slate-400 pl-4">
                    <h3 className="font-semibold text-slate-800">{exp.position}</h3>
                    <p className="text-sm text-slate-500">
                      {exp.company} | {exp.period}
                    </p>
                    <ul className="mt-2 list-disc list-inside text-sm text-slate-600 space-y-1">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-slate-400 pl-4">
                    <h3 className="font-semibold text-slate-800">{edu.degree}</h3>
                    <p className="text-sm text-slate-500">
                      {edu.school} | {edu.period}
                    </p>
                    <p className="mt-2 text-sm text-slate-600">{edu.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
