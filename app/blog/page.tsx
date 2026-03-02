import Link from 'next/link'
import { sortedProPosts } from '@/lib/contentlayer'

export const metadata = {
  title: 'Writing | Kinetic.codes',
  description: 'Technical writing on software engineering, architecture, and team leadership.',
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-800 hover:underline transition-colors mb-10 text-sm"
        >
          ← Back to home
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Writing</h1>
        <p className="text-gray-500 mb-12">Technical deep-dives on software engineering and architecture.</p>

        <ul className="space-y-8">
          {sortedProPosts.map((post) => (
            <li key={post.slug} className="border-b border-gray-200 pb-8 last:border-0">
              <Link href={`/blog/${post.slug}`} className="group block">
                <h2 className="text-xl font-semibold text-gray-900 group-hover:underline mb-2">
                  {post.title}
                </h2>
                {post.summary && (
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">{post.summary}</p>
                )}
                <time className="text-xs text-gray-400" dateTime={post.date}>
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
