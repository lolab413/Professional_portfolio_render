import { useState, useEffect } from "react";
import { Sidebar, SidebarContext } from "@/components/layout/Sidebar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { CoursesAndWriting } from "@/components/sections/CoursesAndWriting";
import { LearningPhilosophy } from "@/components/sections/LearningPhilosophy";
import { TwitchFeed } from "@/components/sections/TwitchFeed";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);

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

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="flex min-h-screen bg-background">
        <Sidebar />
        <ThemeToggle />
        <div
          className="flex-1 flex flex-col transition-[margin-left] duration-300 ease-in-out"
          style={{
            marginLeft: isOpen ? "225px" : "64px",
          }}
        >
          <main>
            <Hero />
            <section id="projects">
              <Projects />
            </section>
            <CoursesAndWriting />
            <section id="about">
              <About />
            </section>
            <TwitchFeed />
            <section id="philosophy">
              <LearningPhilosophy />
            </section>
            <section id="resume">
              <Resume />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </SidebarContext.Provider>
  );
}
