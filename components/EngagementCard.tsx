"use client";

import { motion } from "framer-motion";

interface EngagementCardProps {
  title: string;
  challenge: string;
  solution: string;
  impact: string;
  index: number;
}

export default function EngagementCard({
  title,
  challenge,
  solution,
  impact,
  index,
}: EngagementCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      whileHover={{
        y: -5,
        boxShadow: "0 0 25px rgba(255, 0, 255, 0.45)",
        transition: { duration: 0.15 },
      }}
      className="p-6 bg-background border border-neon-magenta/30 rounded-xl"
    >
      <h3 className="text-xl font-bold text-foreground mb-4 h-7">{title}</h3>

      <div className="space-y-3">
        <div className="lg:min-h-32">
          <span className="text-neon-magenta font-semibold text-sm uppercase tracking-wide">
            Challenge
          </span>
          <p className="text-muted mt-1">{challenge}</p>
        </div>

        <div className="lg:min-h-36">
          <span className="text-neon-cyan font-semibold text-sm uppercase tracking-wide">
            Solution
          </span>
          <p className="text-muted mt-1">{solution}</p>
        </div>

        <div className="lg:min-h-24">
          <span className="text-neon-lime font-semibold text-sm uppercase tracking-wide">
            Impact
          </span>
          <p className="text-muted mt-1">{impact}</p>
        </div>
      </div>
    </motion.div>
  );
}
