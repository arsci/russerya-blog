'use client'
import { join } from 'path'
import { notFound } from 'next/navigation'
import { Mdx } from '@/components/MDXComponents'
import { allHomePosts } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
 
export const generateStaticParams = async () =>
  allHomePosts.map((post) => ({ slug: post._raw.flattenedPath }))

export default function Post({ params }: { params: { slug: string } }) {
  const post = allHomePosts.find((post) => post._raw.flattenedPath === join("blog/home/", params.slug))
 
  if (!post) notFound()
 
  const MDXContent = useMDXComponent(post.body.code)
  return (
    <article className="mx-auto max-w-xl py-8 px-8">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs">
          {new Date(post.date).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </time>
        <h1 className="text-3xl font-bold">{post.title}</h1>
      </div>
      <div className="prose mt-8 dark:prose-invert prose-headings:font-display prose-a:text-cyan-500 prose-img:rounded-2xl">
      <Mdx code={post.body.code} />
      </div>
    </article>
  )
}
