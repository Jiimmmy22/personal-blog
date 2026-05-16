import { PostCard } from "@/components/post-card";
import { Reveal } from "@/components/reveal";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog | Crimson Notes",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-6xl px-4 pb-24">
      <Reveal>
        <section className="mb-14">
          <p className="text-sm font-medium text-red-300">Archive</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
            文章列表
          </h1>
          <p className="mt-5 max-w-2xl leading-8 text-zinc-400">
            关于界面、系统、审美和工程判断的公开笔记。每篇文章都是一次把复杂问题讲清楚的练习。
          </p>
        </section>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((post, index) => (
          <Reveal key={post.slug} delay={index * 0.04}>
            <PostCard post={post} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
