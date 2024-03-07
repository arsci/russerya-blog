import { compareDesc } from "date-fns"
import * as Socials from '../components/LinksAndIcons'
import { allVanPosts } from 'contentlayer/generated'
import { allTechPosts } from 'contentlayer/generated'
import { allHomePosts } from 'contentlayer/generated'
import imgVan from '@/images/img-van.jpg'
import imgNala from '@/images/img-nala.jpg'
import imgFocus from '@/images/img-focus.png'
import imgBoard from '@/images/img-board.jpg'
import clsx from 'clsx'
import Image from "next/image"
import Link from "next/link"

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
    <div className="py-14 sm:py-16">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight blog-index sm:text-4xl max-w-">Latest Blog Posts</h2>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t lines pt-4 sm:mt-8 sm:pt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
                  href={"blog/"}
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
                  href={"blog/" + latestVanPost.category}
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
                  href={"blog/" + latestHomePost.category}
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
        </div>
      </div>
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 border-t lines pt-8 sm:pt-8 lg:mx-0 lg:max-w-none mb-2">
          <p>
            Hello and welcome! I&apos;m Ryan Russell, a Cloud and DevOps Engineer from Northern California. My days are fueled by a deep-rooted passion for technology—whether I&apos;m automating workflows, building cloud infrastructure, or diving into the code that makes it all possible. 
          </p>
        </div>
        <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 lines pt-2 sm:pt-6 lg:mx-0 lg:max-w-none mb-2">
          <p>
            But my interests don&apos;t stop there. I&apos;m also an avid car enthusiast who loves nothing more than the sound of a roaring engine and the feeling of freedom on the open road. When I&apos;m not behind a screen or a steering wheel, you&apos;ll find me embroiled in various home improvement projects, striving to make my living space as efficient and comfortable as the systems I design at work.
          </p>
        </div>
        <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 lines pt-2 sm:pt-6 lg:mx-0 lg:max-w-none mb-16">
          <p>
            I created this blog as a platform to share my adventures in tech, automobiles, and home improvement. Whether you&apos;re a fellow engineer, a gearhead, a DIYer, or just someone curious about these worlds, I hope you find something here that sparks your interest. Enjoy exploring, and feel free to connect with me on 
            <Link href={"https://linkedin.com/in/russerya/"} className="inline-links"> LinkedIn </Link>and 
            <Link href={"https://github.com/arsci/"} className="inline-links"> GitHub</Link>!
          </p>
        </div>
      </div>
      <Photos />
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[imgNala, imgFocus, imgBoard, imgVan].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
