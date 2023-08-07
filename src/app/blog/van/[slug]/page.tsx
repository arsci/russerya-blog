import { getPostBySlug } from "../../../../utils/api";
import markdownToHtml from "../../../../utils/markdownToHtml";
import markdownStyles from "./markdown-styles.module.css";
import { join } from "path";

export default async function Post({ params }: { params: { slug: string } }) {
  const postsDirectory = join(process.cwd(), "content/van");
  const post = getPostBySlug(postsDirectory, params.slug, ["title", "author", "content"]);

  const content = await markdownToHtml(post.content || "");

  return (
    <div className="container min-h-screen mx-auto">
      <main>
        <div className="w-full h-16  text-white">
          <p className="text-2xl">{post.title}</p>
          <p className="text-gray-400">{post.author}</p>
          <div
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </main>
    </div>
  );
}