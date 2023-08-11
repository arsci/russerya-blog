import Link from 'next/link'
import { compareDesc } from "date-fns"
import { allTechPosts } from 'contentlayer/generated'
 
export default function Home() {

  const posts = allTechPosts
    .sort((a,b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    });
  return (
    <div className="mx-auto max-w-xl py-8">
      <h1 className="mb-8 text-center text-2xl font-black">Posts</h1>
      {allTechPosts.map((post) => (
        <article key={post._id} className="mb-8">
          <h2 className="text-xl">
            <Link href={post.slug} className="text-blue-700 hover:text-blue-900">
              {post.title}
            </Link>
          </h2>
          <time
            dateTime={post.date}
            className="mb-2 block text-xs text-gray-600"
          >
            {new Date(post.date).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </time>
          <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            {post.description}
          </p>
          <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            {post._raw.flattenedPath}
          </p>
        </article>
      ))}
    </div>
  )
}