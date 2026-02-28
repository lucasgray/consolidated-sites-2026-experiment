import Link from 'next/link'
import { HobbyPost } from 'contentlayer/generated'

interface Props {
  post: HobbyPost
  children: React.ReactNode
}

export default function HobbyPostLayout({ post, children }: Props) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/hobby/blog" className="text-sm text-gray-600 hover:text-gray-900 underline underline-offset-2 transition-colors mb-10 inline-block">
        ← Back to blog
      </Link>

      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric', month: 'long', day: 'numeric',
            })}
          </time>
          {post.readingTime?.text && (
            <>
              <span aria-hidden>·</span>
              <span>{post.readingTime.text}</span>
            </>
          )}
        </div>
        {post.summary && (
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">{post.summary}</p>
        )}
      </header>

      <article className="prose prose-gray max-w-none prose-lg">
        {children}
      </article>

      <footer className="mt-16 pt-8 border-t border-gray-200">
        <Link href="/hobby/blog" className="text-sm text-gray-600 hover:text-gray-900 underline underline-offset-2 transition-colors">
          ← Back to blog
        </Link>
      </footer>
    </div>
  )
}
