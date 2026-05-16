import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-4 pb-24">
      <p className="text-sm font-medium text-red-300">404</p>
      <h1 className="mt-3 text-4xl font-semibold text-white">这篇文章不存在</h1>
      <p className="mt-4 leading-7 text-zinc-400">可能已经被移动，或者还没有写完。</p>
      <Link
        href="/blog"
        className="mt-8 w-fit rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white"
      >
        返回博客列表
      </Link>
    </div>
  );
}
