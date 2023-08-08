import type { Metadata } from 'next'
import { getAllPosts } from "../../../utils/api";
import PostPreview from "../../../components/PostPreview";

export const metadata: Metadata = {
  title: 'Van Build - Blog - Ryan Russell',
  description: 'Van Build Blog by Ryan Russell',
}

export default function Blog() {
  const posts = getAllPosts(["van"], ["title", "date", "excerpt", "coverImage", "slug", "category"]);

  return (
    <div className="container mx-auto max-w-6xl px-5">
      <main>
        <h1 className="text-center text-3xl">Van Posts</h1>

        <div className="h-12"></div>

        <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-32 gap-8">
          {posts.map((post) => (
            <div key={post.title}>
              <PostPreview post={post} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}