"use client";

import { motion } from "framer-motion";

interface TechBadgeProps {
  name: string;
  index: number;
}

export default function TechBadge({ name, index }: TechBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.3,
        delay: 0.1,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 12px rgba(255, 0, 255, 0.45)",
        transition: { duration: 0.15 },
      }}
      className="inline-block px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg font-mono text-sm text-gray-800 cursor-default"
    >
      {name}
    </motion.span>
  );
}
