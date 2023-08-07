import { getAllPosts } from "../../utils/api";
import PostPreview from "../../components/PostPreviewTech";
import { join } from "path";

export default function Blog() {
  const vanPostsDirectory = join(process.cwd(), "content/van");
  const vanPosts = getAllPosts(vanPostsDirectory, ["title", "date", "excerpt", "coverImage", "slug"]);
  const techPostsDirectory = join(process.cwd(), "content/tech");
  const techPosts = getAllPosts(techPostsDirectory, ["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <div className="container min-h-screen mx-auto px-5">
      <main>
        <h1 className="text-center text-3xl">Technology Posts</h1>

        <div className="h-12"></div>

        <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-32 gap-8">
          {techPosts.map((post) => (
            <div key={post.title}>
              <PostPreview post={post} />
            </div>
          ))}
        </div>

        <h1 className="text-center text-3xl">Van Posts</h1>

        <div className="h-12"></div>

        <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-32 gap-8">
          {vanPosts.map((post) => (
            <div key={post.title}>
              <PostPreview post={post} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}