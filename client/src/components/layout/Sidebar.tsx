import { useState, createContext, useContext } from "react";
import { motion } from "framer-motion";
import { FiHome, FiUser, FiBriefcase, FiFileText, FiMail, FiChevronsRight, FiGithub, FiEdit } from "react-icons/fi";
import { WritingSamplesModal } from "@/components/WritingSamplesModal";

export const SidebarContext = createContext<{
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}>({ isOpen: true, setIsOpen: () => {} });

export const useSidebar = () => useContext(SidebarContext);

const navItems = [
  { href: "#home", icon: FiHome, label: "Home" },
  { href: "#about", icon: FiUser, label: "About" },
  { href: "#projects", icon: FiBriefcase, label: "Projects" },
  { href: "#resume", icon: FiFileText, label: "Resume" },
  { href: "#contact", icon: FiMail, label: "Contact" },
];

export function Sidebar() {
  const [selected, setSelected] = useState("Home");
  const { isOpen, setIsOpen } = useSidebar();

  const handleNavClick = (label: string, href: string) => {
    setSelected(label);
    const element = document.querySelector(href);
    if (element) {
      // Add an offset to account for the fixed header
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    // Close sidebar on mobile after navigation
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      layout
      className="fixed left-0 top-0 z-50 h-screen shrink-0 border-r border-primary/10 bg-background/80 backdrop-blur-sm p-2"
      style={{
        width: isOpen ? "225px" : "fit-content",
      }}
    >
      <div className="flex items-center justify-between mb-4 p-2">
        <motion.div layout className="grid h-10 w-10 place-content-center rounded-md bg-primary text-primary-foreground">
          LB
        </motion.div>
        {isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
          >
            <span className="block text-sm font-semibold">Lola Babatunde</span>
            <span className="block text-xs text-muted-foreground">Game Design</span>
          </motion.div>
        )}
      </div>

      <div className="space-y-1">
        {navItems.map(({ href, icon: Icon, label }) => (
          <motion.div
            key={href}
            layout
            onClick={() => handleNavClick(label, href)}
            className={`relative flex h-10 w-full items-center rounded-md transition-colors cursor-pointer ${
              selected === label
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-primary/5"
            }`}
          >
            <motion.div layout className="grid h-full w-10 place-content-center text-lg">
              <Icon />
            </motion.div>
            {isOpen && (
              <motion.span
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.125 }}
                className="text-sm font-medium"
              >
                {label}
              </motion.span>
            )}
          </motion.div>
        ))}
        
        {/* GitHub Link */}
        <a 
          href="https://github.com/lolab413"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            layout
            className="relative flex h-10 w-full items-center rounded-md transition-colors cursor-pointer text-muted-foreground hover:bg-primary/5 hover:text-primary"
          >
            <motion.div layout className="grid h-full w-10 place-content-center text-lg">
              <FiGithub />
            </motion.div>
            {isOpen && (
              <motion.span
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.125 }}
                className="text-sm font-medium"
              >
                GitHub
              </motion.span>
            )}
          </motion.div>
        </a>
        
        {/* Writing Samples Modal */}
        <WritingSamplesModal 
          trigger={
            <motion.div
              layout
              className="relative flex h-10 w-full items-center rounded-md transition-colors cursor-pointer text-muted-foreground hover:bg-primary/5 hover:text-primary"
            >
              <motion.div layout className="grid h-full w-10 place-content-center text-lg">
                <FiEdit />
              </motion.div>
              {isOpen && (
                <motion.span
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.125 }}
                  className="text-sm font-medium"
                >
                  Writing Samples
                </motion.span>
              )}
            </motion.div>
          }
        />
      </div>

      <motion.button
        layout
        onClick={() => setIsOpen(!isOpen)}
        className="absolute bottom-4 left-0 right-0 border-t border-primary/10 transition-colors hover:bg-primary/5"
      >
        <div className="flex items-center p-2">
          <motion.div layout className="grid h-10 w-10 place-content-center text-lg">
            <FiChevronsRight className={`transition-transform ${isOpen && "rotate-180"}`} />
          </motion.div>
          {isOpen && (
            <motion.span
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.125 }}
              className="text-sm font-medium"
            >
              Hide Menu
            </motion.span>
          )}
        </div>
      </motion.button>
    </motion.nav>
  );
}