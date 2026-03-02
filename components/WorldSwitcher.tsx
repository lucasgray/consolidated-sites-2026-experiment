"use client"

import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { motion } from "framer-motion"
import { usePageTransition } from "@/contexts/TransitionContext"

type Phase = "hidden" | "visible" | "floating"

const variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  floating: {
    opacity: 1,
    y: [0, 5, 0],
    transition: { duration: 4, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" as const },
  },
}

export default function WorldSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  const { triggerTransition } = usePageTransition()
  const isHobby = pathname.startsWith("/hobby")
  const [phase, setPhase] = useState<Phase>("hidden")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setPhase("visible")
    const t = setTimeout(() => setPhase("floating"), 600)
    return () => clearTimeout(t)
  }, [])

  if (!mounted) return null

  return createPortal(
    <div className="fixed bottom-4 right-4 z-[210]">
      <motion.div
        initial="hidden"
        animate={phase}
        variants={variants}
        className="bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col items-center px-2 pt-1.5 pb-2 gap-1 md:px-3 md:pt-2 md:pb-2.5 md:gap-1.5"
      >
        <div className="flex items-center">
          <button
            onClick={() => {
              localStorage.setItem("world-preference", "pro")
              triggerTransition("/", "pro")
            }}
            title="Kinetic.codes — professional"
            className={`flex flex-col items-center gap-1 group relative cursor-pointer p-1.5 md:p-0 ${!isHobby ? "z-20" : "z-10"}`}
          >
            <div
              className={`relative w-7 h-7 md:w-9 md:h-9 rounded-full overflow-hidden ring-2 ring-white transition-all duration-200 ${
                !isHobby
                  ? "ring-[#00ffff] shadow-[0_0_8px_#00ffff] scale-110"
                  : "opacity-60 group-hover:opacity-90 group-hover:scale-105"
              }`}
            >
              <Image src="/lucas-color-pop.jpg" alt="Pro" fill className="object-cover" />
            </div>
            <span className={`text-[9px] font-medium leading-none ${!isHobby ? "text-gray-800" : "text-gray-500"}`}>
              pro
            </span>
          </button>

          <button
            onClick={() => {
              localStorage.setItem("world-preference", "hobby")
              triggerTransition("/hobby", "hobby")
            }}
            title="Personal projects & blog"
            className={`flex flex-col items-center gap-1 group relative -ml-2 cursor-pointer p-1.5 md:p-0 ${isHobby ? "z-20" : "z-10"}`}
          >
            <div
              className={`relative w-7 h-7 md:w-9 md:h-9 rounded-full overflow-hidden ring-2 ring-white transition-all duration-200 ${
                isHobby
                  ? "ring-[#ff2d55] shadow-[0_0_8px_#ff2d55] scale-110"
                  : "opacity-60 group-hover:opacity-90 group-hover:scale-105"
              }`}
            >
              <Image src="/images/hobby-avatar.png" alt="Hobby" fill className="object-cover" />
            </div>
            <span className={`text-[9px] font-medium leading-none ${isHobby ? "text-gray-800" : "text-gray-500"}`}>
              hobby
            </span>
          </button>
        </div>
        <p className="text-[9px] text-gray-500 font-medium tracking-wide select-none text-center max-w-[5.5rem] leading-tight">choose your own adventure</p>
      </motion.div>
    </div>,
    document.body
  )
}
