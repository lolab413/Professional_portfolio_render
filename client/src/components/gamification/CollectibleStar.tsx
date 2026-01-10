import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useState } from "react";

interface CollectibleStarProps {
  sectionId: string;
}

export function CollectibleStar({ sectionId }: CollectibleStarProps) {
  const [collected, setCollected] = useState(false);

  const handleCollect = () => {
    if (!collected) {
      setCollected(true);
      // Could add to local storage or state management for persistence
      localStorage.setItem(`star-${sectionId}`, 'collected');
    }
  };

  return (
    <motion.div
      className={`absolute right-4 top-4 cursor-pointer ${collected ? 'text-yellow-400' : 'text-muted-foreground'}`}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleCollect}
    >
      <Star className="h-6 w-6 fill-current" />
    </motion.div>
  );
}
