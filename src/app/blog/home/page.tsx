import { compareDesc } from "date-fns"
import { allHomePosts } from 'contentlayer/generated'
 
export default function Home() {

  const posts = allHomePosts
    .sort((a,b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    });
    
  return (
    <div className="py-14 sm:py-16">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="preview-cards-header-blog-pages">
          <h2 className="preview-cards-header-text">Home Projects</h2>
          <p className="preview-cards-blog-pages-p">
            Projects from around the house
          </p>
        </div>
        <div className="preview-cards">
          {allHomePosts.map((post) => (
            <div key={post._id}>
            <a href={post.slug}>
              <div className="preview-article-wrapper-div">
                <article key={post._id} className="preview-article">
                  <div className="preview-article-date-time-category-grid">
                    <div className="preview-article-date-time-col">
                      <time
                        dateTime={post.date}
                        className="preview-article-date-time"
                      >
                        {new Date(post.date).toLocaleDateString('en-US', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </time>
                      </div>
                      <div className="preview-article-category-col">
                        <a
                          href={post.category}
                          className="category-icons"
                        >
                          {post.category}
                        </a>
                      </div>
                    </div>
                    <div className="preview-post-title">
                      <h3 className="preview-post-header">
                        <a href={post.slug}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                      </h3>
                    </div>
                    <div className="preview-post-desc">
                      <p>{post.description}</p>
                    </div>
                  </article>
                </div>
              </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}