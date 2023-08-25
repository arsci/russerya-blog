import { compareDesc } from "date-fns"
import * as Socials from '../components/LinksAndIcons'
import { allVanPosts } from 'contentlayer/generated'
import { allTechPosts } from 'contentlayer/generated'
import { allHomePosts } from 'contentlayer/generated'


export default function Home() {

  const latestVanPost = allVanPosts
    .sort((a,b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })[0];

  const latestTechPost = allTechPosts
    .sort((a,b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })[0];

  const latestHomePost = allHomePosts
    .sort((a,b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })[0];

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight blog-index sm:text-4xl">Latest Blog Posts</h2>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t lines pt-10 sm:mt-8 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {allTechPosts.map((latestTechPost) => (
            <article key={latestTechPost._id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
              <time
                dateTime={latestTechPost.date}
                className="mb-2 block text-xs blog-index"
              >
                {new Date(latestTechPost.date).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
                <a
                  href={latestTechPost.category}
                  className="category-icons"
                >
                  {latestTechPost.category}
                </a>
              </div>
              <div className="group relative mb-20">
                <h3 className="mt-3 text-lg font-semibold leading-6 blog-index dark:hover:text-gray-400 hover:text-black">
                  <a href={latestTechPost.slug}>
                    <span className="absolute inset-0" />
                    {latestTechPost.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 blog-index">{latestTechPost.description}</p>
              </div>
            </article>
          ))}

          {allVanPosts.map((latestVanPost) => (
            <article key={latestVanPost._id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
              <time
                dateTime={latestVanPost.date}
                className="mb-2 block text-xs blog-index"
              >
                {new Date(latestVanPost.date).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
                <a
                  href={latestVanPost.category}
                  className="category-icons"
                >
                  {latestVanPost.category}
                </a>
              </div>
              <div className="group relative mb-20">
                <h3 className="mt-3 text-lg font-semibold leading-6 blog-index dark:hover:text-gray-400 hover:text-black">
                  <a href={latestVanPost.slug}>
                    <span className="absolute inset-0" />
                    {latestVanPost.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 blog-index">{latestVanPost.description}</p>
              </div>
            </article>
          ))}

          {allHomePosts.map((latestHomePost) => (
            <article key={latestHomePost._id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
              <time
                dateTime={latestHomePost.date}
                className="mb-2 block text-xs blog-index"
              >
                {new Date(latestHomePost.date).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
                <a
                  href={latestHomePost.category}
                  className="category-icons"
                >
                  {latestHomePost.category}
                </a>
              </div>
              <div className="group relative mb-20">
                <h3 className="mt-3 text-lg font-semibold leading-6 blog-index dark:hover:text-gray-400 hover:text-black">
                  <a href={latestHomePost.slug}>
                    <span className="absolute inset-0" />
                    {latestHomePost.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 blog-index">{latestHomePost.description}</p>
              </div>
            </article>
          ))}   
        </div>
      </div>
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 border-t lines pt-10 sm:pt-16 lg:mx-0 lg:max-w-none mb-16">
          My name is Ryan Russell, and I'm a Cloud and DevOps engineer from Northern California that has a passion for technology, cars, and home improvement projects.
          I created this site in order to share some of my projects, enjoy!
        </div>
      </div>
      {/* <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 border-t lines pt-10 sm:pt-16 lg:mx-0 lg:max-w-none">
          <div className="mt-10 flex justify-center space-x-10">
            {Socials.socials.map((item) => (
              <a key={item.name} href={item.href} target={item.target} className="text-gray-500 dark:text-gray-300">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-20 w-20" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  )
}
