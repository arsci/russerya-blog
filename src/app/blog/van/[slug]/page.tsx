'use client'
import { join } from 'path'
import { notFound } from 'next/navigation'
import { Mdx } from '@/components/MDXComponents'
import { allVanPosts } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
 
export const generateStaticParams = async () =>
  allVanPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export default function Post({ params }: { params: { slug: string } }) {
  const post = allVanPosts.find((post) => post._raw.flattenedPath === join("blog/van/", params.slug))
 
  if (!post) notFound()
 
  const MDXContent = useMDXComponent(post.body.code)
  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {new Date(post.date).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </time>
        <h1 className="text-3xl font-bold">{post.title}</h1>
        {params.slug}
      </div>
      <div className="prose mt-8 dark:prose-invert prose-headings:font-display prose-a:text-cyan-500 prose-img:rounded-2xl">
      <Mdx code={post.body.code} />
      </div>
    </article>
  )
}
