import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FileText, Calendar, Tag } from "lucide-react";

interface WritingSample {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  publishDate: string;
  readTime: string;
  tags: string[];
  url: string;
}

const writingSamples: WritingSample[] = [
  {
    id: 1,
    title: "The Future of Interactive Learning",
    excerpt: "Exploring how technology is reshaping education through immersive experiences and gamification techniques that engage modern learners.",
    category: "Education Technology",
    publishDate: "2024-01-15",
    readTime: "5 min read",
    tags: ["EdTech", "Interactive Learning", "Gamification"],
    url: "https://lolababatunde413.journoportfolio.com/"
  },
  {
    id: 2,
    title: "Building Inclusive Curriculum for Game Development",
    excerpt: "A comprehensive approach to creating game development curricula that welcome learners from all backgrounds and skill levels.",
    category: "Curriculum Design",
    publishDate: "2024-02-08",
    readTime: "7 min read",
    tags: ["Curriculum", "Game Development", "Inclusion"],
    url: "https://lolababatunde413.journoportfolio.com/"
  },
  {
    id: 3,
    title: "From Code to Classroom: Teaching Programming Fundamentals",
    excerpt: "Effective strategies for introducing programming concepts to beginners through hands-on projects and real-world applications.",
    category: "Programming Education",
    publishDate: "2024-03-12",
    readTime: "6 min read",
    tags: ["Programming", "Teaching", "Beginner-Friendly"],
    url: "https://lolababatunde413.journoportfolio.com/"
  },
  {
    id: 4,
    title: "The Art of Instructional Design in Tech",
    excerpt: "How instructional design principles can transform complex technical concepts into accessible, engaging learning experiences.",
    category: "Instructional Design",
    publishDate: "2024-04-05",
    readTime: "8 min read",
    tags: ["Instructional Design", "Technical Writing", "UX"],
    url: "https://lolababatunde413.journoportfolio.com/"
  },
  {
    id: 5,
    title: "Project-Based Learning in the Digital Age",
    excerpt: "Leveraging project-based methodologies to create meaningful learning experiences that prepare students for real-world challenges.",
    category: "Educational Methods",
    publishDate: "2024-05-20",
    readTime: "6 min read",
    tags: ["Project-Based Learning", "Digital Education", "Student Engagement"],
    url: "https://lolababatunde413.journoportfolio.com/"
  }
];

interface WritingSamplesModalProps {
  trigger?: React.ReactNode;
}

export function WritingSamplesModal({ trigger }: WritingSamplesModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(writingSamples.map(sample => sample.category)));
  
  const filteredSamples = selectedCategory 
    ? writingSamples.filter(sample => sample.category === selectedCategory)
    : writingSamples;

  const defaultTrigger = (
    <Button variant="outline" className="gap-2">
      <FileText className="h-4 w-4" />
      View Writing Samples
    </Button>
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || defaultTrigger}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Writing Portfolio
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
            >
              All Categories
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Writing Samples Grid */}
          <div className="overflow-y-auto max-h-[50vh] pr-2">
            <div className="grid gap-4">
              <AnimatePresence>
                {filteredSamples.map((sample, index) => (
                  <motion.div
                    key={sample.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="hover:shadow-md transition-shadow cursor-pointer group">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <CardTitle className="text-lg group-hover:text-primary transition-colors">
                              {sample.title}
                            </CardTitle>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {new Date(sample.publishDate).toLocaleDateString()}
                              </div>
                              <span>{sample.readTime}</span>
                            </div>
                          </div>
                          <Badge variant="secondary">{sample.category}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                          {sample.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-1">
                            {sample.tags.slice(0, 3).map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                <Tag className="h-2 w-2 mr-1" />
                                {tag}
                              </Badge>
                            ))}
                            {sample.tags.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{sample.tags.length - 3} more
                              </Badge>
                            )}
                          </div>
                          
                          <Button
                            size="sm"
                            variant="ghost"
                            asChild
                            className="ml-2"
                          >
                            <a
                              href={sample.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1"
                            >
                              Read More
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t pt-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                {filteredSamples.length} {filteredSamples.length === 1 ? 'article' : 'articles'} 
                {selectedCategory && ` in ${selectedCategory}`}
              </p>
              <Button asChild>
                <a
                  href="https://lolababatunde413.journoportfolio.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Visit Full Portfolio
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}