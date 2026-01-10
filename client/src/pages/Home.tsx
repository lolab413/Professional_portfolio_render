import { useState, useEffect } from "react";
import { Sidebar, SidebarContext } from "@/components/layout/Sidebar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { AchievementBadge } from "@/components/gamification/AchievementBadge";
import { ProgressBar } from "@/components/gamification/ProgressBar";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);
  const [achievements, setAchievements] = useState({
    about: false,
    projects: false,
    resume: false,
    contact: false
  });

  // Auto-collapse sidebar after 2 seconds
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isOpen) {
      timeoutId = setTimeout(() => {
        setIsOpen(false);
      }, 2000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target.id;
            setAchievements(prev => ({
              ...prev,
              [section]: true
            }));
          }
        });
      },
      { threshold: 0.5 }
    );

    ['about', 'projects', 'resume', 'contact'].forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="flex min-h-screen bg-background">
        <Sidebar />
        <ThemeToggle />
        <ProgressBar />
        <motion.div
          layout
          className="flex-1 flex flex-col"
          style={{
            marginLeft: isOpen ? "225px" : "64px",
          }}
        >
          <main>
            <Hero />
            <section id="about">
              <About />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="resume">
              <Resume />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </main>
          <Footer />
        </motion.div>

        <AchievementBadge 
          title="About Me Master"
          isVisible={achievements.about}
        />
        <AchievementBadge
          title="Project Explorer"
          isVisible={achievements.projects}
        />
        <AchievementBadge
          title="Resume Reader"
          isVisible={achievements.resume}
        />
        <AchievementBadge
          title="Connection Established"
          isVisible={achievements.contact}
        />
      </div>
    </SidebarContext.Provider>
  );
}