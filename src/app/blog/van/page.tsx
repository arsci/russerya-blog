import { compareDesc } from "date-fns"
import { allVanPosts } from 'contentlayer/generated'
 
export default function Home() {

  const posts = allVanPosts
    .sort((a,b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    });
    
  return (
    <div className="py-14 sm:py-16">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight blog-index sm:text-4xl">Van Build</h2>
          <p className="mt-2 text-lg leading-8 blog-header">
            In June 2023 we <a href="/blog/van/about-the-van" className="inline-links">purchased a 2023 Ford Transit</a> to convert into a camper. Our goal is to spend
            the following ~9 months building it out to be able to live and work out of it for 2-3 weeks at a time.
            We&apos;ll be documenting the process here through various blog posts, guides, and videos!
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t lines pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {allVanPosts.map((post) => (
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
                    href={post.category}
                    className="category-icons"
                  >
                    {post.category}
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