import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import WorldMap from "@/components/WorldMap";
import CoreZone from "@/components/CoreZone";

const Index = () => {
  const [view, setView] = useState<"map" | "core">("map");

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {view === "map" ? (
          <motion.div
            key="map"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <WorldMap onEnterCore={() => setView("core")} />
          </motion.div>
        ) : (
          <motion.div
            key="core"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CoreZone onBack={() => setView("map")} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
