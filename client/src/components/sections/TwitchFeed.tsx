import { motion } from "framer-motion";
import { ExternalLink, Radio } from "lucide-react";

const channel = "lolab413";

export function TwitchFeed() {
  const parent = typeof window !== "undefined" ? window.location.hostname : "localhost";
  const playerUrl = `https://player.twitch.tv/?channel=${channel}&parent=${parent}&autoplay=false`;

  return (
    <section id="twitch" className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-12 items-center"
        >
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary mb-4">
              On Twitch
            </p>
            <h2
              className="text-3xl md:text-4xl font-medium text-foreground mb-4"
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            >
              Gaming, Live coding &amp; learning
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Join me on stream as I play games, write code, and explore game development.
            </p>
            <a
              href={`https://www.twitch.tv/${channel}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <Radio className="h-4 w-4 text-primary" />
              Visit my Twitch channel
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="w-full overflow-hidden rounded-lg border border-border bg-card">
            <div className="aspect-video w-full">
              <iframe
                src={playerUrl}
                title="Lola Babatunde on Twitch"
                className="h-full w-full"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}