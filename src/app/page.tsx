import { compareDesc } from "date-fns"
import { allVanPosts } from 'contentlayer/generated'
import { allTechPosts } from 'contentlayer/generated'
import { allHomePosts } from 'contentlayer/generated'
import { NewsletterMain } from "@/components/Newsletter"
import imgVan from '@/images/img-van.jpg'
import imgNala from '@/images/img-nala.jpg'
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
        <div className="preview-cards-header">
          <h2 className="preview-cards-header-text">Latest Blog Posts</h2>
        </div>
        <div className="preview-cards">
          <a href={latestTechPost.slug}>
            <div className="preview-article-wrapper-div">
              <article key={latestTechPost._id} className="preview-article">
                <div className="preview-article-date-time-category-grid">
                  <div className="preview-article-date-time-col">
                    <time
                      dateTime={latestTechPost.date}
                      className="preview-article-date-time"
                    >
                      {new Date(latestTechPost.date).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </time>
                  </div>
                  <div className="preview-article-category-col">
                    <a
                      href={"blog/"}
                      className="category-icons"
                    >
                      {latestTechPost.category}
                    </a>
                  </div>
                </div>
                <div className="preview-post-title">
                  <h3 className="preview-post-header">
                    <a href={latestTechPost.slug}>
                      <span className="preview-post-span" />
                        {latestTechPost.title}
                    </a>
                  </h3>
                </div>
                <div className="preview-post-desc">
                  <p>{latestTechPost.description}</p>
                </div>
              </article>
            </div>
          </a>
          <a href={latestVanPost.slug}>
            <div className="preview-article-wrapper-div">
              <article key={latestVanPost._id} className="preview-article">
                <div className="preview-article-date-time-category-grid">
                  <div className="preview-article-date-time-col">
                    <time
                      dateTime={latestVanPost.date}
                      className="preview-article-date-time"
                    >
                      {new Date(latestVanPost.date).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </time>
                  </div>
                  <div className="preview-article-category-col">
                    <a
                      href={"blog/" + latestVanPost.category}
                      className="category-icons"
                    >
                      {latestVanPost.category}
                    </a>
                  </div>
                </div>
                <div className="preview-post-title">
                  <h3 className="preview-post-header">
                    <a href={latestVanPost.slug}>
                      <span className="preview-post-span" />
                      {latestVanPost.title}
                    </a>
                  </h3>
                </div>
                <div className="preview-post-desc">
                  <p>{latestVanPost.description}</p>
                </div>
              </article>
            </div>
          </a>
          <a href={latestHomePost.slug}>
            <div className="preview-article-wrapper-div">
              <article key={latestHomePost._id} className="preview-article">
                <div className="preview-article-date-time-category-grid">
                  <div className="preview-article-date-time-col">
                    <time
                      dateTime={latestHomePost.date}
                      className="preview-article-date-time"
                    >
                      {new Date(latestHomePost.date).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </time>
                  </div>
                  <div className="preview-article-category-col">
                    <a
                      href={"blog/" + latestHomePost.category}
                      className="category-icons"
                    >
                      {latestHomePost.category}
                    </a>
                  </div>
                </div>
                <div className="preview-post-title">
                  <h3 className="preview-post-header">
                    <a href={latestHomePost.slug}>
                      <span className="preview-post-span" />
                      {latestHomePost.title}
                    </a>
                  </h3>
                </div>
                <div className="preview-post-desc">
                  <p>{latestHomePost.description}</p>
                </div>
              </article> 
            </div>
          </a>
          <div className="w-full border-t lines lg:hidden" />
        </div>
        <div className="w-full border-t lines mt-10 hidden lg:block" />
        <div className="mb-8 -mt-4">
          <NewsletterMain />
        </div>
      </div>
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 border-t lines pt-8 sm:pt-8 lg:mx-0 lg:max-w-none mb-2">
          <p>
            Hello and welcome! I&#39;m Ryan Russell, a Cloud and DevOps Engineer from Northern California. My days are fueled by a deep-rooted passion for technology—whether I&#39;m automating workflows, building cloud infrastructure, or diving into the code that makes it all possible. 
          </p>
        </div>
        <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 lines pt-2 sm:pt-6 lg:mx-0 lg:max-w-none mb-2">
          <p>
            But my interests don&#39;t stop there. I&#39;m also an avid car enthusiast who loves nothing more than the sound of a roaring engine and the feeling of freedom on the open road. When I&#39;m not behind a screen or a steering wheel, you&#39;ll find me embroiled in various home improvement projects, striving to make my living space as efficient and comfortable as the systems I design at work.
          </p>
        </div>
        <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 lines pt-2 sm:pt-6 lg:mx-0 lg:max-w-none mb-16">
          <p>
            I created this blog as a platform to share my adventures in tech, automobiles, and home improvement. Whether you&#39;re a fellow engineer, a gearhead, a DIYer, or just someone curious about these worlds, I hope you find something here that sparks your interest. Enjoy exploring, feel free to connect with me on <Link href={"https://linkedin.com/in/russerya/"} className="inline-links">LinkedIn</Link> and <Link href={"https://github.com/arsci/"} className="inline-links">GitHub</Link>, and don&#39;t forget to check out my <Link href={'/portfolio'} className="inline-links">Portfolio</Link>!
          </p>
        </div>
      </div>
      <Photos />
    </div>
  )
}

function Photos() {
  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[imgNala, imgBoard, imgVan].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl'
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
