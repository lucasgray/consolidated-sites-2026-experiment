import Link from 'next/link'
import { sortedProPosts } from '@/lib/contentlayer'

export const metadata = {
  title: 'Writing | Kinetic.codes',
  description: 'Technical writing on software engineering, architecture, and team leadership.',
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-neon-cyan/70 hover:text-neon-cyan transition-colors mb-10 text-sm"
        >
          ← Back to home
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-glow-cyan">Writing</h1>
        <p className="text-muted mb-12">Technical deep-dives on software engineering and architecture.</p>

        <ul className="space-y-8">
          {sortedProPosts.map((post) => (
            <li key={post.slug} className="border-b border-cyan-900/30 pb-8 last:border-0">
              <Link href={`/blog/${post.slug}`} className="group block">
                <h2 className="text-xl font-semibold text-neon-cyan group-hover:text-glow-cyan transition-all mb-2">
                  {post.title}
                </h2>
                {post.summary && (
                  <p className="text-muted text-sm leading-relaxed mb-3">{post.summary}</p>
                )}
                <time className="text-xs text-muted/60" dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
