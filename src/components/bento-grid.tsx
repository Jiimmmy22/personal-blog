"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Blog",
    eyebrow: "Writing archive",
    description: "记录设计、AI、工程和创作方法的长期笔记。",
    href: "/blog",
    className: "md:col-span-2 md:row-span-2",
    gradient: "from-red-500/22 via-white/8 to-white/4",
  },
  {
    title: "AI项目",
    eyebrow: "AI lab",
    description: "实验智能工具、自动化工作流和产品原型。",
    href: "/#ai-projects",
    className: "",
    gradient: "from-red-500/16 via-zinc-500/8 to-white/4",
  },
  {
    title: "编剧作品",
    eyebrow: "Screenplays",
    description: "故事结构、角色弧光和影像化表达的作品集。",
    href: "/#screenplays",
    className: "",
    gradient: "from-white/10 via-red-500/12 to-white/4",
  },
  {
    title: "关于我",
    eyebrow: "Profile",
    description: "一个写代码、写故事，也持续打磨审美系统的人。",
    href: "/#about",
    className: "md:col-span-2",
    gradient: "from-zinc-400/10 via-red-500/14 to-white/4",
  },
];

export function BentoGrid() {
  return (
    <section id="featured" className="scroll-mt-28">
      <div className="mb-8">
        <p className="text-sm font-medium text-red-300">Featured paths</p>
        <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
          探索我的创作宇宙
        </h2>
      </div>

      <div className="grid auto-rows-[15rem] gap-4 md:grid-cols-4">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.72,
              delay: index * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={card.className}
          >
            <motion.div
              whileHover={{ y: -6, scale: 1.018 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="h-full"
            >
              <Link
                href={card.href}
                className="group relative flex h-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.32)] backdrop-blur-2xl"
              >
                <div
                  className={[
                    "absolute inset-0 bg-gradient-to-br opacity-90 transition duration-500 group-hover:opacity-100",
                    card.gradient,
                  ].join(" ")}
                />
                <div className="absolute -right-20 -top-24 h-56 w-56 rounded-full bg-red-500/18 blur-3xl transition duration-700 group-hover:bg-red-500/28" />
                <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black/34 to-transparent" />

                <div className="relative z-10 flex h-full w-full flex-col justify-between">
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium text-zinc-300 backdrop-blur-xl">
                      {card.eyebrow}
                    </span>
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/8 text-sm text-zinc-300 transition duration-300 group-hover:border-red-300/30 group-hover:bg-red-500/16 group-hover:text-white">
                      →
                    </span>
                  </div>

                  <div>
                    <h3 className="text-3xl font-semibold tracking-normal text-white sm:text-4xl">
                      {card.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-6 text-zinc-400 transition duration-300 group-hover:text-zinc-300">
                      {card.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
