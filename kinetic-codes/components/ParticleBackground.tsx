"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
      // Delay visibility to let particles settle
      setTimeout(() => setVisible(true), 100);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      particles: {
        color: {
          value: ["#00ffff", "#ff00ff", "#ff69b4"],
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: true,
          speed: 2,
          straight: false,
          attract: {
            enable: true,
            distance: 200,
            rotate: {
              x: 600,
              y: 1200,
            },
          },
          warp: true,
        },
        wobble: {
          enable: true,
          distance: 40,
          speed: 5,
        },
        number: {
          density: {
            enable: true,
            width: 1200,
            height: 800,
          },
          value: 12,
        },
        opacity: {
          value: { min: 0.08, max: 0.18 },
          animation: {
            enable: true,
            speed: 0.02,
            sync: false,
            startValue: "random",
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 100, max: 250 },
          animation: {
            enable: true,
            speed: 3,
            sync: false,
            startValue: "random",
            mode: "random",
          },
        },
        shadow: {
          blur: 80,
          color: {
            value: "#00ffff",
          },
          enable: true,
          offset: {
            x: 0,
            y: 0,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <>
      <div
        className="fixed inset-0 -z-10 overflow-hidden transition-opacity duration-1000"
        style={{
          filter: "blur(80px)",
          opacity: visible ? 1 : 0,
        }}
      >
        <Particles
          id="tsparticles"
          options={options}
          className="absolute inset-0"
        />
      </div>
      {/* Edge glow effects */}
      <div
        className="fixed inset-0 -z-5 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 50% 50% at 0% 0%, rgba(0, 255, 255, 0.25) 0%, transparent 70%),
            radial-gradient(ellipse 50% 50% at 100% 0%, rgba(255, 0, 255, 0.2) 0%, transparent 70%),
            radial-gradient(ellipse 50% 50% at 100% 100%, rgba(0, 255, 255, 0.15) 0%, transparent 70%),
            radial-gradient(ellipse 50% 50% at 0% 100%, rgba(255, 0, 255, 0.15) 0%, transparent 70%)
          `,
        }}
      />
    </>
  );
}
