import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-14"
        >
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary mb-5">
                About
              </p>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight mb-7"
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              >
                I design learning experiences at the intersection of education,
                technology, and creativity.
              </h2>
              <div className="space-y-5 text-base md:text-lg leading-relaxed text-muted-foreground">
                <p>
                  My background spans curriculum development, technical instruction,
                  educational content, and interactive design. I specialize in
                  translating complex concepts into approachable learning experiences
                  that give learners opportunities to explore, create, and build
                  confidence.
                </p>
                <p>
                  Whether I’m developing a coding curriculum, designing a digital
                  course, or supporting a student through a game project, I begin with
                  the same question: What does this learner need to move forward?
                </p>
              </div>
            </div>

            <motion.div
              className="flex flex-col items-end"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <Card className="border border-border shadow-none">
                <CardHeader className="pb-4">
                  <CardTitle className="text-sm font-semibold tracking-[0.16em] uppercase text-foreground">
                    What guides my work
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 text-base md:text-lg text-muted-foreground">
                    {[
                      "Accessibility from the beginning",
                      "Clarity without oversimplification",
                      "Learning through creation",
                      "Technology with a human purpose",
                    ].map((principle) => (
                      <li key={principle} className="flex items-start gap-3">
                        <span className="text-primary text-xl leading-6" aria-hidden="true">
                          ♢
                        </span>
                        <span>{principle}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <figure className="mt-8 w-full max-w-md overflow-hidden rounded-xl border border-border bg-muted">
                <img
                  src="/Images/about-section-image.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="block aspect-[16/9] w-full object-cover"
                />
              </figure>
            </motion.div>
          </div>

          <div className="border-t border-border pt-6">
            <p className="text-sm font-medium text-foreground">Based in Dallas, Texas</p>
            <p className="text-sm text-muted-foreground mt-1">
              Curriculum Developer · Learning Designer · Technical Educator
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
