"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  index: number;
  image?: string;
}

export default function TestimonialCard({
  quote,
  name,
  role,
  company,
  index,
  image,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(6px)", scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="p-6 bg-gray-50 border border-gray-200 rounded-xl relative shadow-sm h-full flex flex-col"
    >
      <span className="absolute -top-6 left-4 text-8xl text-neon-magenta/40 font-serif select-none">
        &ldquo;
      </span>
      <blockquote className="text-gray-800 text-lg leading-relaxed mb-4 pt-4 flex-grow">
        {quote.split("\n\n").map((para, i) => (
          <p key={i} className={i > 0 ? "mt-4" : ""}>{para}</p>
        ))}
      </blockquote>
      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-200">
        {image ? (
          <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 ring-2 ring-gray-200">
            <Image src={image} alt={name} width={48} height={48} className="object-cover w-full h-full" />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-cyan to-neon-magenta flex items-center justify-center text-white font-bold shrink-0">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-600">{role} at {company}</p>
        </div>
      </div>
    </motion.div>
  );
}
