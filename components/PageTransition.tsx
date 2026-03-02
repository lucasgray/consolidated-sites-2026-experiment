"use client"

import { motion } from "framer-motion"
import { usePageTransition } from "@/contexts/TransitionContext"

const ease = [0.76, 0, 0.24, 1] as const

export default function PageTransition() {
  const { phase, world, onEntered, onExited } = usePageTransition()

  if (phase === "idle") return null

  const isHobby    = world === "hobby"
  const isEntering = phase === "entering"
  const dur        = isEntering ? 0.45 : 0.4

  const primary   = isHobby
    ? "linear-gradient(to bottom, #ff2d55, #7a0020)"
    : "linear-gradient(to bottom, #00e5ff, #003a4a)"
  const secondary = isHobby
    ? "linear-gradient(to bottom, #ff6b8a, #5a0018)"
    : "linear-gradient(to bottom, #00ffff, #002a38)"
  const edgeColor  = isHobby ? "#ffb3c0" : "#80ffff"
  const edgeGlow   = isHobby
    ? "0 0 8px 3px #ff2d55, 0 0 28px 10px rgba(255,45,85,0.45)"
    : "0 0 8px 3px #00e5ff, 0 0 28px 10px rgba(0,229,255,0.45)"

  const xIn  = "130vw"
  const xOut = "-150vw"

  const fillBase: React.CSSProperties = {
    position: "fixed",
    top: "-10vh",
    left: "-15vw",
    height: "120vh",
    width: "130vw",
    pointerEvents: "none",
    zIndex: 200,
  }

  const streaks = [
    { delay: 0.04, dur: 0.36, width: "2px", opacity: 0.75 },
    { delay: 0.10, dur: 0.42, width: "1px", opacity: 0.5  },
    { delay: 0.16, dur: 0.32, width: "2px", opacity: 0.9  },
  ]

  return (
    <>
      {/* Trailing accent stripe */}
      <motion.div
        style={{ ...fillBase, background: secondary, opacity: 0.65 }}
        initial={{ x: xIn, skewX: -8 }}
        animate={{ x: isEntering ? "0vw" : xOut, skewX: -8 }}
        transition={{ duration: dur, delay: isEntering ? 0.07 : 0, ease }}
      />

      {/* Main fill */}
      <motion.div
        style={{ ...fillBase, background: primary }}
        initial={{ x: xIn, skewX: -8 }}
        animate={{ x: isEntering ? "0vw" : xOut, skewX: -8 }}
        transition={{ duration: dur, delay: isEntering ? 0 : 0.07, ease }}
        onAnimationComplete={() => {
          if (phase === "entering") onEntered()
          else onExited()
        }}
      />

      {/* Streaks shooting through the fill */}
      {isEntering && streaks.map((streak, i) => (
        <motion.div
          key={i}
          style={{
            position: "fixed",
            top: "-10vh",
            left: "0",
            height: "120vh",
            width: streak.width,
            background: edgeColor,
            boxShadow: `0 0 4px 2px ${edgeColor}, 0 0 14px 5px ${edgeColor}55`,
            pointerEvents: "none",
            zIndex: 202,
            opacity: streak.opacity,
          }}
          initial={{ x: "108vw", skewX: -8 }}
          animate={{ x: "-115vw", skewX: -8 }}
          transition={{ duration: streak.dur, delay: streak.delay, ease }}
        />
      ))}

      {/* Leading edge glow line */}
      <motion.div
        style={{
          position: "fixed",
          top: "-10vh",
          left: "0",
          height: "120vh",
          width: "3px",
          background: edgeColor,
          boxShadow: edgeGlow,
          pointerEvents: "none",
          zIndex: 201,
        }}
        initial={{ x: "105vw", skewX: -8 }}
        animate={{ x: isEntering ? "-5vw" : "-120vw", skewX: -8 }}
        transition={{ duration: dur, delay: isEntering ? 0 : 0.07, ease }}
      />
    </>
  )
}
