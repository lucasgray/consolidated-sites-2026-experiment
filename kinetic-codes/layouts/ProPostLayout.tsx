import Link from 'next/link'
import { ProPost } from 'contentlayer/generated'

interface Props {
  post: ProPost
  children: React.ReactNode
}

export default function ProPostLayout({ post, children }: Props) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-neon-cyan/70 hover:text-neon-cyan transition-colors mb-10 text-sm"
        >
          ← Back to writing
        </Link>

        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-glow-cyan">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-muted text-sm">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            {post.readingTime?.text && (
              <>
                <span>·</span>
                <span>{post.readingTime.text}</span>
              </>
            )}
          </div>
          {post.summary && (
            <p className="mt-4 text-lg text-muted leading-relaxed">{post.summary}</p>
          )}
        </header>

        <article className="prose prose-invert max-w-none">
          {children}
        </article>

        <footer className="mt-16 pt-8 border-t border-cyan-900/40">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-neon-cyan/70 hover:text-neon-cyan transition-colors text-sm"
          >
            ← Back to writing
          </Link>
        </footer>
      </div>
    </div>
  )
}
