"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { PostMeta } from "@/lib/posts";

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.012 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group glass block rounded-[1.25rem] p-6 transition duration-300 hover:border-red-400/35 hover:shadow-[0_24px_90px_rgba(239,35,60,0.12)]"
      >
        <div className="mb-6 flex items-center justify-between gap-4 text-xs text-zinc-500">
          <span>{post.date}</span>
          <span>{post.readingTime}</span>
        </div>
        <p className="mb-3 text-sm font-medium text-red-300">{post.category}</p>
        <h2 className="text-xl font-semibold text-white transition group-hover:text-red-100">
          {post.title}
        </h2>
        <p className="mt-3 text-sm leading-6 text-zinc-400">{post.excerpt}</p>
      </Link>
    </motion.div>
  );
}
