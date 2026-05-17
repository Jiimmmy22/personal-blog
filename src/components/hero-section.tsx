"use client";

import Link from "next/link";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { MotionButton } from "@/components/motion-button";

const easing = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 120, damping: 32, mass: 0.8 });
  const smoothY = useSpring(pointerY, { stiffness: 120, damping: 32, mass: 0.8 });
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${smoothX}px ${smoothY}px, rgba(239, 35, 60, 0.2), transparent 62%)`;

  return (
    <section
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        pointerX.set(event.clientX - bounds.left);
        pointerY.set(event.clientY - bounds.top);
      }}
      className="-mt-24 grid min-h-screen place-items-center overflow-hidden px-4 pt-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(239,35,60,0.32),transparent_30rem),radial-gradient(circle_at_80%_18%,rgba(255,255,255,0.08),transparent_26rem),linear-gradient(180deg,#080506_0%,#050505_46%,#110406_100%)]" />
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: spotlight }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t from-background to-transparent" />

      <div className="mx-auto flex w-full max-w-6xl flex-col items-start">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easing }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-300/20 bg-red-500/10 px-4 py-2 text-sm text-red-100 shadow-[0_0_70px_rgba(239,35,60,0.18)] backdrop-blur-xl"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_20px_rgba(239,35,60,0.9)]" />
          Systems for thought, code and taste
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.12, ease: easing }}
          className="max-w-5xl text-6xl font-semibold leading-[0.95] text-white sm:text-8xl lg:text-9xl"
        >
          Mr.Cold Beast
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.24, ease: easing }}
          className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-xl"
        >
          我的缺点曾向我进言 有缺陷就有高山镶嵌
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.36, ease: easing }}
          className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
        >
          <MotionButton>
            <Link
              href="/blog"
              className="block rounded-full bg-accent px-7 py-3.5 text-center text-sm font-semibold text-white shadow-[0_20px_80px_rgba(239,35,60,0.36)] transition duration-300 hover:bg-red-500"
            >
              Enter Blog
            </Link>
          </MotionButton>
          <MotionButton>
            <a
              href="#featured"
              className="block rounded-full border border-white/12 bg-white/6 px-7 py-3.5 text-center text-sm font-semibold text-zinc-200 backdrop-blur-xl transition duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              Explore Ideas
            </a>
          </MotionButton>
        </motion.div>
      </div>
    </section>
  );
}
