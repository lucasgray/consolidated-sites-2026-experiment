import Link from 'next/link'
import { sortedHobbyPosts } from '@/lib/contentlayer'

export const metadata = {
  title: 'Hobby | Lucas Gray',
  description: 'Personal projects, games, VR experiments, and other creative adventures.',
}

const projects = [
  {
    title: 'Advent of the Reaper',
    description: 'A pixel Tactics RPG in the vein of GBA Fire Emblem. Sole programmer working with artists, writers, and composers.',
    href: 'https://www.adventofthereaper.com',
    external: true,
  },
  {
    title: 'Eddie Bowles Historical Tour',
    description: 'Pokemon Go-esque mobile walking tour exploring an underappreciated blues musician from Cedar Falls, Iowa.',
    href: '/hobby/blog/eddie-bowles-1',
    external: false,
  },
  {
    title: 'Runstrike',
    description: 'AR running game — gather resources on your routes, then progress through a retrofuturistic choose-your-own-adventure story.',
    href: '/hobby/blog/runstrike-phaser',
    external: false,
  },
]

export default function HobbyPage() {
  const recentPosts = sortedHobbyPosts.slice(0, 5)

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-3">Lucas&apos;s Hobby Lab</h1>
      <p className="text-gray-600 mb-16 text-lg leading-relaxed">
        Games, VR experiments, pixel art, and creative side projects.
      </p>

      {/* Projects */}
      <section className="mb-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-rose-700 mb-6">Projects</h2>
        <div className="divide-y divide-gray-200 border-t border-gray-200">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="flex items-start justify-between gap-6 py-6 group"
              {...(project.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-rose-700 transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">{project.description}</p>
              </div>
              <span className="text-gray-500 group-hover:text-rose-600 transition-colors text-xl shrink-0 mt-0.5" aria-hidden>→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Posts */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-rose-700">Recent Posts</h2>
          <Link href="/hobby/blog" className="text-sm text-gray-600 hover:text-gray-900 underline underline-offset-2 transition-colors">
            All posts →
          </Link>
        </div>
        <div className="divide-y divide-gray-200 border-t border-gray-200">
          {recentPosts.map((post) => (
            <Link key={post.slug} href={`/hobby/blog/${post.slug}`} className="block py-6 group">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-rose-700 transition-colors mb-1">
                {post.title}
              </h3>
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
      </section>
    </div>
  )
}
