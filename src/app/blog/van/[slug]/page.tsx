'use client'
import { join } from 'path'
import { useRouter } from 'next/navigation'
import { notFound } from 'next/navigation'
import { Mdx } from '@/components/MDXComponents'
import { allVanPosts } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { ArrowLeftIcon } from '@/components/LinksAndIcons'
 
export const generateStaticParams = async () =>
  allVanPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export default function Post({ params }: { params: { slug: string } }) {
  const post = allVanPosts.find((post) => post._raw.flattenedPath === join("blog/van/", params.slug))
 
  if (!post) notFound()

  let router = useRouter()
 
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <div>
      <div className="max-w-3xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="sm:px-8 mt-16 ">
            <div className='absolute justify-left'>
              {(
                <button
                  type="button"
                  onClick={() => router.back()}
                  aria-label="Go back to articles"
                  className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-500/50 dark:bg-zinc-600 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
                >
                  <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-200 dark:group-hover:stroke-zinc-400" />
                </button>
              )}
            </div>
            <div className='flex justify-center'>
                <time dateTime={post.date} className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500 sm:text-2xl">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </time>
            </div>
        </div>
      </div>
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="sm:px-8 mt-8">
            <div className='flex justify-center mx-auto'>
              <header className="flex flex-col items-left">
                <h1 className="mt-8 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl text-align:center">
                  {post.title}
                </h1>
              </header>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="sm:px-8 mt-8">
            <div className='flex justify-center mx-auto'>
              <article>
                <div className='mt-8'>
                  <Mdx code={post.body.code} />
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
