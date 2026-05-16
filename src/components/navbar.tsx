"use client";

import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "首页" },
  { href: "/blog", label: "Blog", highlight: true },
];

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 18);
  });

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50 px-3 py-3 sm:px-4 sm:py-4"
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.nav
        animate={{
          backgroundColor: scrolled ? "rgba(9, 9, 11, 0.82)" : "rgba(255, 255, 255, 0.055)",
          borderColor: scrolled ? "rgba(255, 255, 255, 0.16)" : "rgba(255, 255, 255, 0.1)",
          boxShadow: scrolled
            ? "0 18px 70px rgba(0, 0, 0, 0.45), 0 0 42px rgba(239, 35, 60, 0.08)"
            : "0 24px 80px rgba(0, 0, 0, 0.28)",
        }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border px-3 backdrop-blur-2xl sm:h-16 sm:px-5"
      >
        <Link href="/" className="group flex items-center gap-3">
          <motion.span
            className="relative h-8 w-8 rounded-full border border-red-300/20 bg-red-500/10"
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 420, damping: 28 }}
          >
            <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_24px_rgba(239,35,60,0.95)]" />
          </motion.span>
          <span className="text-sm font-semibold tracking-wide text-white transition duration-300 group-hover:text-red-100">
            Crimson Notes
          </span>
        </Link>

        <div className="flex items-center gap-1 rounded-full border border-white/10 bg-black/20 p-1 shadow-inner shadow-white/5">
          {links.map((link) => {
            const isActive =
              pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "relative overflow-hidden rounded-full px-3 py-2 text-sm font-medium transition-colors duration-300 sm:px-4",
                  link.highlight
                    ? "text-white"
                    : "text-zinc-300 hover:text-white",
                ].join(" ")}
              >
                {isActive ? (
                  <motion.span
                    layoutId="nav-active-pill"
                    className={
                      link.highlight
                        ? "absolute inset-0 rounded-full bg-accent shadow-[0_0_34px_rgba(239,35,60,0.42)]"
                        : "absolute inset-0 rounded-full bg-white/10"
                    }
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                ) : null}
                {!isActive ? (
                  <motion.span
                    className={
                      link.highlight
                        ? "absolute inset-0 rounded-full bg-red-500/18 opacity-0"
                        : "absolute inset-0 rounded-full bg-white/8 opacity-0"
                    }
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.24, ease: "easeOut" }}
                  />
                ) : null}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </div>
      </motion.nav>
    </motion.header>
  );
}
