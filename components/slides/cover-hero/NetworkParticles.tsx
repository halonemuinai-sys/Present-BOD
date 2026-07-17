"use client";

import { useMemo } from "react";
import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export default function NetworkParticles() {
  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      particles: {
        number: { value: 26, density: { enable: true, width: 900, height: 700 } },
        color: { value: "#d99a2b" },
        opacity: {
          value: { min: 0.25, max: 0.85 },
          animation: { enable: true, speed: 0.6, sync: false, startValue: "random" },
        },
        size: { value: { min: 1, max: 3 } },
        links: {
          enable: true,
          distance: 130,
          color: "#d99a2b",
          opacity: 0.25,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.35,
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "bounce" },
        },
      },
      interactivity: { events: { onHover: { enable: false }, onClick: { enable: false } } },
      detectRetina: true,
    }),
    [],
  );

  return (
    <ParticlesProvider
      init={async (engine) => {
        await loadSlim(engine);
      }}
    >
      <Particles id="cover-network-particles" className="absolute inset-0" options={options} />
    </ParticlesProvider>
  );
}
