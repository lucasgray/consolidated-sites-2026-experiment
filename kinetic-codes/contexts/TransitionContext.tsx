"use client"

import { createContext, useContext, useState, useCallback } from "react"
import { useRouter } from "next/navigation"

type World = "pro" | "hobby"
type Phase = "idle" | "entering" | "exiting"

interface TransitionCtx {
  triggerTransition: (href: string, world: World) => void
  phase: Phase
  world: World | null
  onEntered: () => void
  onExited: () => void
}

const Ctx = createContext<TransitionCtx>({
  triggerTransition: () => {},
  phase: "idle",
  world: null,
  onEntered: () => {},
  onExited: () => {},
})

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [phase, setPhase] = useState<Phase>("idle")
  const [world, setWorld] = useState<World | null>(null)
  const [pendingHref, setPendingHref] = useState<string | null>(null)

  const triggerTransition = useCallback((href: string, w: World) => {
    setWorld(w)
    setPendingHref(href)
    setPhase("entering")
  }, [])

  const onEntered = useCallback(() => {
    if (pendingHref) router.push(pendingHref)
    setPhase("exiting")
  }, [pendingHref, router])

  const onExited = useCallback(() => {
    setPhase("idle")
    setWorld(null)
    setPendingHref(null)
  }, [])

  return (
    <Ctx.Provider value={{ triggerTransition, phase, world, onEntered, onExited }}>
      {children}
    </Ctx.Provider>
  )
}

export function usePageTransition() {
  return useContext(Ctx)
}
