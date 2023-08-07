import { getAllPosts } from "../../utils/api";
import PostPreview from "../../components/PostPreviewTech";
import { join } from "path";

export default function Blog() {
  const postsDirectory = join(process.cwd(), "content/tech");
  const posts = getAllPosts(postsDirectory, ["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <div className="container min-h-screen mx-auto px-5">
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