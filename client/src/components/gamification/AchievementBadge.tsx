import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Trophy } from "lucide-react";

interface AchievementBadgeProps {
  title: string;
  isVisible: boolean;
}

export function AchievementBadge({ title, isVisible }: AchievementBadgeProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          className="fixed bottom-4 right-4 z-50"
        >
          <Badge className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground">
            <Trophy className="h-4 w-4" />
            <span>Achievement Unlocked: {title}</span>
          </Badge>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
