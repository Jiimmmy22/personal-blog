import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Crimson Notes`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-4 pb-24">
      <header className="mb-12">
        <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-zinc-500">
          <span className="rounded-full border border-red-300/20 bg-red-500/10 px-3 py-1 text-red-200">
            {post.category}
          </span>
          <span>{post.date}</span>
          <span>{post.readingTime}</span>
        </div>
        <h1 className="text-4xl font-semibold leading-tight text-white sm:text-6xl">
          {post.title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-400">{post.excerpt}</p>
      </header>

      <div className="glass rounded-[1.5rem] p-6 sm:p-10">
        <div
          className="prose-blog"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </article>
  );
}
