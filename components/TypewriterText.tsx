"use client";

import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function TypewriterText({
  text,
  className = "",
  delay = 0,
}: TypewriterTextProps) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [started, setStarted] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started || visibleCount >= text.length) return;

    const currentChar = text[visibleCount - 1];
    const isPause = currentChar === "." || currentChar === "!" || currentChar === "?" || currentChar === ",";

    const timeout = setTimeout(
      () => {
        setVisibleCount((prev) => prev + 1);
      },
      isPause ? 600 : 25
    );

    return () => clearTimeout(timeout);
  }, [started, visibleCount, text]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={className}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`relative ${index < visibleCount ? "opacity-100" : "opacity-0"}`}
        >
          {char}
          {index === visibleCount - 1 && (
            <span
              className={`absolute left-full top-0 w-[3px] h-[1em] bg-neon-cyan transition-opacity ${
                showCursor ? "opacity-100" : "opacity-0"
              }`}
            />
          )}
        </span>
      ))}
      {visibleCount === 0 && (
        <span
          className={`inline-block w-[3px] h-[1em] bg-neon-cyan transition-opacity ${
            showCursor ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </span>
  );
}
