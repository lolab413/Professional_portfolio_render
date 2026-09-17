import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FileText } from "lucide-react";
import {
  WritingSamplesModal,
  writingSamples,
} from "@/components/WritingSamplesModal";

const courses = [
  {
    title: "Create User Stories in Miro",
    description:
      "Understanding the available templates and tools, and developing a User Story in Miro.",
    url: "https://www.coursera.org/projects/create-user-stories-miro",
    thumbnail: "/Images/portfolio/course-miro.png",
  },
  {
    title: "Grab Data Fast with Vertical and Horizontal LOOKUP",
    description:
      "A guided project on how VLOOKUP and HLOOKUP pull data from a spreadsheet.",
    url: "https://www.coursera.org/projects/grab-data-fast-with-vertical-and-horizontal-lookup-in-google-sheets",
    thumbnail: "/Images/portfolio/course-lookups.png",
  },
];

export function CoursesAndWriting() {
  return (
    <section id="courses-writing" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary mb-4 text-center">
            Published &amp; Contributed Work
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-medium text-center text-foreground"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Courses &amp; Writing
          </h2>
          <p className="text-muted-foreground text-center mt-4 mb-14 max-w-2xl mx-auto text-base md:text-lg">
            Selected online courses and professional writing created to make
            technical ideas clearer and more useful.
          </p>

          <div className="mb-16">
            <div className="flex items-end justify-between gap-4 mb-6">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-primary font-semibold">
                  Online courses
                </p>
                <h3 className="text-xl font-medium text-foreground mt-1">
                  Course contributions
                </h3>
              </div>
              <span className="text-sm text-muted-foreground">Coursera</span>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {courses.map((course, index) => (
                <motion.a
                  key={course.title}
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group overflow-hidden rounded-lg border border-border bg-background transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-muted">
                    <img
                      src={course.thumbnail}
                      alt={`Preview of ${course.title}`}
                      loading="lazy"
                      className="h-full w-full object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <Badge variant="outline">Course Contributor</Badge>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                    </div>
                    <h4 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                      {course.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                      {course.description}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6">
              <p className="text-xs uppercase tracking-[0.14em] text-primary font-semibold">
                Writing samples
              </p>
              <h3 className="text-xl font-medium text-foreground mt-1">
                Articles, infographics &amp; whitepapers
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {writingSamples.map((sample, index) => (
                <WritingSamplesModal
                  key={sample.id}
                  initialSampleId={sample.id}
                  trigger={
                    <motion.button
                      type="button"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                      viewport={{ once: true }}
                      className="group h-full overflow-hidden rounded-lg border border-border bg-background text-left transition-all hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-muted">
                        <img
                          src={sample.thumbnail}
                          alt={`Preview of ${sample.title}`}
                          loading="lazy"
                          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                      <div className="p-5">
                        <div className="flex items-center justify-between gap-3 mb-3">
                          <Badge variant="outline">{sample.format}</Badge>
                          <FileText className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                        </div>
                        <h4 className="text-base font-medium text-foreground group-hover:text-primary transition-colors">
                          {sample.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-2">
                          Open preview
                        </p>
                      </div>
                    </motion.button>
                  }
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}