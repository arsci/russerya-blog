import { getAllPosts } from "../../utils/api";
import PostPreview from "../../components/PostPreview";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Ryan Russell',
  description: 'Blog - Ryan Russell',
}

export default function Blog() {
  const posts = getAllPosts(["tech"], ["title", "date", "excerpt", "coverImage", "slug", "category"]);

  return (
    <div className="container mx-auto max-w-6xl px-5">
      <main>
        <h1 className="text-center text-3xl">All Posts</h1>

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