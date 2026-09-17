import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";

export interface WritingSample {
  id: string;
  title: string;
  description: string;
  format: string;
  tags: string[];
  url: string;
  thumbnail: string;
}

export const writingSamples: WritingSample[] = [
  {
    id: "touchpoint-dns",
    title: "TouchPoint Networks Protects SMBs from DNS Attacks",
    description:
      "A cybersecurity article explaining how DNS attacks affect small and midsize businesses and how organizations can reduce their exposure.",
    format: "Article",
    tags: ["Cybersecurity", "B2B Writing", "Technology"],
    url: "https://www.asktouchpoint.com/blog?p=touchpoint-networks-protects-smbs-from-dns-attacks-181221",
    thumbnail: "/Images/portfolio/writing-touchpoint.png",
  },
  {
    id: "dallas-housing",
    title: "The Dallas Housing Authority Infographic",
    description:
      "An infographic that translates housing and community information into a clear, visual format for a broad public audience.",
    format: "Infographic",
    tags: ["Visual Communication", "Public Information", "Content Design"],
    url: "https://lolababatunde413.journoportfolio.com/?item=403667",
    thumbnail: "/Images/portfolio/writing-dallas-housing.png",
  },
  {
    id: "cds-global-cloud",
    title: "CDS Global Cloud",
    description:
      "A partner and investor-facing whitepaper communicating the value, reach, and business potential of a global cloud platform.",
    format: "Whitepaper",
    tags: ["Whitepaper", "Business Writing", "Cloud Technology"],
    url: "https://media.journoportfolio.com/users/42831/uploads/6ecd3ef7-6970-498e-abe2-92d6b6759fd2.pdf",
    thumbnail: "/Images/portfolio/writing-cds-cloud.png",
  },
];

interface WritingSamplesModalProps {
  trigger?: React.ReactNode;
  initialSampleId?: string;
}

export function WritingSamplesModal({
  trigger,
  initialSampleId,
}: WritingSamplesModalProps) {
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(
    initialSampleId ?? writingSamples[0].id,
  );

  useEffect(() => {
    if (initialSampleId) {
      setSelectedId(initialSampleId);
    }
  }, [initialSampleId]);

  const selectedSample =
    writingSamples.find((sample) => sample.id === selectedId) ??
    writingSamples[0];

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
    if (nextOpen && initialSampleId) {
      setSelectedId(initialSampleId);
    }
  };

  const defaultTrigger = (
    <Button variant="outline" className="gap-2">
      <FileText className="h-4 w-4" />
      View Writing Samples
    </Button>
  );

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{trigger || defaultTrigger}</DialogTrigger>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Writing Portfolio
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-[1.15fr_0.85fr]">
          <div className="bg-muted min-h-[280px] md:min-h-[460px] flex items-center justify-center overflow-hidden">
            <img
              src={selectedSample.thumbnail}
              alt={`Preview of ${selectedSample.title}`}
              className="h-full max-h-[560px] w-full object-contain"
            />
          </div>

          <div className="p-6 flex flex-col">
            <Badge variant="outline" className="w-fit mb-4">
              {selectedSample.format}
            </Badge>
            <h3
              className="text-2xl md:text-3xl font-medium text-foreground leading-tight mb-4"
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            >
              {selectedSample.title}
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {selectedSample.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {selectedSample.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <Button asChild className="mt-8 w-fit">
              <a
                href={selectedSample.url}
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                View original work
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="border-t border-border px-6 py-5">
          <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-muted-foreground mb-3">
            More writing samples
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            {writingSamples.map((sample) => (
              <button
                key={sample.id}
                type="button"
                onClick={() => setSelectedId(sample.id)}
                className={`flex items-center gap-3 rounded-md border p-2 text-left transition-colors ${
                  selectedSample.id === sample.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:bg-muted"
                }`}
              >
                <img
                  src={sample.thumbnail}
                  alt=""
                  className="h-12 w-16 rounded object-cover bg-muted"
                />
                <span className="text-xs font-medium leading-snug line-clamp-2">
                  {sample.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}