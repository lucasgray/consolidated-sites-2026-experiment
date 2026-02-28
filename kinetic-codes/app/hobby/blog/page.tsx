import Link from 'next/link'
import { sortedHobbyPosts } from '@/lib/contentlayer'

export const metadata = {
  title: 'Blog | Lucas Gray',
  description: 'Personal blog on games, VR, creative coding, and side projects.',
}

export default function HobbyBlogPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/hobby" className="text-sm text-gray-600 hover:text-gray-900 underline underline-offset-2 transition-colors mb-10 inline-block">
        ← Back
      </Link>

      <h1 className="text-4xl font-bold text-gray-900 mb-2">All Posts</h1>
      <p className="text-gray-600 mb-12 text-lg">
        {sortedHobbyPosts.length} posts on games, VR, and creative side projects.
      </p>

      <div className="divide-y divide-gray-200 border-t border-gray-200">
        {sortedHobbyPosts.map((post) => (
          <Link key={post.slug} href={`/hobby/blog/${post.slug}`} className="block py-6 group">
            <h2 className="text-lg font-semibold text-gray-900 group-hover:text-rose-700 transition-colors mb-1">
              {post.title}
            </h2>
            {post.summary && (
              <p className="text-base text-gray-600 leading-relaxed mb-3 line-clamp-2">{post.summary}</p>
            )}
            <time className="text-sm text-gray-500" dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric', month: 'long', day: 'numeric',
              })}
            </time>
          </Link>
        ))}
      </div>
    </div>
  )
}
