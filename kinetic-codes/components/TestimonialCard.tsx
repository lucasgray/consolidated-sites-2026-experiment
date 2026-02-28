"use client";

import { motion } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  index: number;
}

export default function TestimonialCard({
  quote,
  name,
  role,
  company,
  index,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="p-6 bg-gray-50 border border-gray-200 rounded-xl relative shadow-sm h-full flex flex-col"
    >
      <span className="absolute -top-6 left-4 text-8xl text-neon-magenta/40 font-serif">
        &ldquo;
      </span>
      <blockquote className="text-gray-800 text-lg leading-relaxed mb-4 pt-4 flex-grow">
        {quote}
      </blockquote>
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-cyan to-neon-magenta flex items-center justify-center text-white font-bold">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-600">
            {role} at {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
