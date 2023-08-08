import { join } from "path";
import type { Metadata } from 'next'
import { getPostBySlug } from "../../../../utils/api";
import markdownStyles from "./markdown-styles.module.css";
import markdownToHtml from "../../../../utils/markdownToHtml";

export const metadata: Metadata = {
  title: 'Van Build - Blog - Ryan Russell',
  description: 'Van Build Blog by Ryan Russell',
}

export default async function Post({ params }: { params: { slug: string } }) {
  const postsDirectory = join(process.cwd(), "content/van");
  const post = getPostBySlug(postsDirectory, params.slug, ["title", "author", "content"]);

  const content = await markdownToHtml(post.content || "");

  return (
    <div className="container min-h-screen max-w-8xl px-8 mx-auto">
      <main>
        <div className="w-full h-16  text-black">
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