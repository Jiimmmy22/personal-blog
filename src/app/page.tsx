import Link from "next/link";
import { BentoGrid } from "@/components/bento-grid";
import { HeroSection } from "@/components/hero-section";
import { PostCard } from "@/components/post-card";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <HeroSection />
      <div className="mx-auto max-w-6xl px-4 pb-24">
      <BentoGrid />

      <section className="mt-24">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-medium text-red-300">Latest writing</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">最近文章</h2>
          </div>
          <Link href="/blog" className="hidden text-sm text-zinc-400 transition hover:text-white sm:block">
            查看全部
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
      </div>
    </>
  );
}
