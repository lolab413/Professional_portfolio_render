import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import ReactConfetti from "react-confetti";
import { AchievementBadge } from "@/components/gamification/AchievementBadge";
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
  const [showConfetti, setShowConfetti] = useState(false);
  const [showAchievement, setShowAchievement] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (sectionRef.current) {
      setDimensions({
        width: sectionRef.current.offsetWidth,
        height: sectionRef.current.offsetHeight,
      });
    }
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Lola_Babatunde_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Trigger confetti and achievement
    setShowConfetti(true);
    setShowAchievement(true);

    // Remove confetti after 5 seconds
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    // Hide achievement after 6 seconds
    setTimeout(() => {
      setShowAchievement(false);
    }, 6000);
  };

  return (
    <section
      id="resume"
      className="py-20 bg-muted/50 relative"
      ref={sectionRef}
    >
      {showConfetti && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <ReactConfetti
            width={dimensions.width}
            height={dimensions.height}
            recycle={false}
            numberOfPieces={500}
            gravity={0.3}
            initialVelocityY={-15}
            initialVelocityX={8}
            spread={180}
            confettiSource={{
              x: dimensions.width / 2,
              y: 0,
              w: 0,
              h: 0,
            }}
            colors={[
              "#ff69b4", // pink
              "#4b0082", // indigo
              "#9370db", // medium purple
              "#ba55d3", // medium orchid
              "#ff1493", // deep pink
              "#dda0dd", // plum
            ]}
            drawShape={(ctx) => {
              ctx.beginPath();
              for (let i = 0; i < 6; i++) {
                ctx.lineTo(
                  10 * Math.cos((2 * Math.PI * i) / 6),
                  10 * Math.sin((2 * Math.PI * i) / 6),
                );
              }
              ctx.closePath();
              ctx.fill();
            }}
          />
        </div>
      )}
      <AchievementBadge
        title="Resume Master - Portfolio Downloaded!"
        isVisible={showAchievement}
      />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Resume</h2>
            <Button
              variant="outline"
              onClick={handleDownload}
              className="hover:scale-105 transition-transform"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-2 border-primary pl-4">
                    <h3 className="font-semibold">{exp.position}</h3>
                    <p className="text-sm text-muted-foreground">
                      {exp.company} | {exp.period}
                    </p>
                    <ul className="mt-2 list-disc list-inside text-sm space-y-1">
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
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-primary pl-4">
                    <h3 className="font-semibold">{edu.degree}</h3>
                    <p className="text-sm text-muted-foreground">
                      {edu.school} | {edu.period}
                    </p>
                    <p className="mt-2 text-sm">{edu.description}</p>
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
