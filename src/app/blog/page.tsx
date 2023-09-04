import { compareDesc } from "date-fns"
import { allTechPosts } from 'contentlayer/generated'
 
export default function Home() {

  const posts = allTechPosts
    .sort((a,b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    });
    
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight blog-index sm:text-4xl max-w-">Blog</h2>
          <p className="mt-2 text-lg leading-8 blog-header">
            Everything from technology and automobiles to home improvement projects.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t lines pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {allTechPosts.map((post) => (
              <article key={post._id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                <time
                  dateTime={post.date}
                  className="mb-2 block text-xs blog-index"
                >
                  {new Date(post.date).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </time>
                  <a
                    href="/blog"
                    className="category-icons"
                  >
                    blog
                  </a>
                </div>
                <div className="group relative mb-20">
                  <h3 className="mt-3 text-lg font-semibold leading-6 blog-index dark:hover:text-gray-400 hover:text-black">
                    <a href={post.slug}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 blog-index">{post.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
  )
}