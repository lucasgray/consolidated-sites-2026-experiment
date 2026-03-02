import Link from 'next/link'
import { sortedHobbyPosts } from '@/lib/contentlayer'

export const metadata = {
  title: 'Blog | Lucas Gray',
  description: 'Personal blog on games, VR, creative coding, and side projects.',
}

export default function HobbyBlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Link href="/hobby" className="text-sm text-white hover:text-[#FF69B4] hover:underline transition-colors mb-8 inline-block">
        ← Back
      </Link>

      <h1 className="text-3xl font-bold text-gray-100 mb-2">All Posts</h1>
      <p className="text-gray-400 mb-10 text-base">
        {sortedHobbyPosts.length} posts on games, VR, and creative side projects.
      </p>

      <div className="divide-y divide-gray-700">
        {sortedHobbyPosts.map((post) => (
          <Link key={post.slug} href={`/hobby/blog/${post.slug}`} className="block py-5 group">
            <h2 className="text-xl font-bold text-gray-100 group-hover:text-[#FF69B4] group-hover:underline transition-colors mb-1">
              {post.title}
            </h2>
            {post.summary && (
              <p className="text-sm text-gray-400 leading-relaxed mb-2 line-clamp-2">{post.summary}</p>
            )}
            <time className="text-xs text-gray-500" dateTime={post.date}>
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
