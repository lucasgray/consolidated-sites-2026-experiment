"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { sortedHobbyPosts } from '@/lib/contentlayer'

const projects = [
  {
    title: 'Advent of the Reaper',
    description: 'A pixel Tactics RPG in the vein of GBA Fire Emblem. Sole programmer working with artists, writers, and composers.',
    imgSrc: '/static/images/advent/advent-illustration.jpeg',
    href: 'https://www.adventofthereaper.com',
    external: true,
  },
  {
    title: 'Eddie Bowles Historical Tour',
    description: 'Pokémon Go-esque mobile walking tour exploring an underappreciated blues musician from Cedar Falls, Iowa.',
    imgSrc: '/static/images/eddie-bowles/eddie-truck.jpg',
    href: '/hobby/blog/eddie-bowles-1',
    external: false,
  },
  {
    title: 'Runstrike',
    description: 'AR running game — gather resources on your routes, then progress through a retrofuturistic choose-your-own-adventure story.',
    imgSrc: '/static/images/runstrike/runstrike-middle-of-splash.png',
    href: '/hobby/blog/runstrike-phaser',
    external: false,
  },
  {
    title: 'Kinetic Arcade',
    description: 'A collection of small browser games built for fun — pixel art, retro mechanics, and quick experiments.',
    imgSrc: '/images/kinetic-arcade.png',
    href: '/hobby/blog',
    external: false,
  },
]

export default function HobbyPage() {
  const [tab, setTab] = useState<'projects' | 'blog'>('projects')

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">

      {/* Header */}
      <div className="mb-8 flex items-center gap-5">
        <Image
          src="/images/hobby-avatar.png"
          alt="Lucas Gray"
          width={72}
          height={72}
          className="rounded-full shrink-0"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-100 mb-2">Lucas&apos;s Hobby Lab</h1>
          <p className="text-gray-400 text-base">Games, VR experiments, pixel art, and creative side projects.</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-8 border-b-2 border-gray-700">
        {(['projects', 'blog'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-6 py-3 text-base font-semibold capitalize transition-colors border-b-2 -mb-px cursor-pointer ${
              tab === t
                ? 'border-[#FF69B4] text-[#FF69B4] font-bold'
                : 'border-transparent text-gray-500 hover:text-gray-200 hover:border-gray-600'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Projects tab */}
      {tab === 'projects' && (
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              {...(project.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="group block border border-gray-700 rounded-xl overflow-hidden hover:border-[#FF69B4] hover:shadow-lg transition-all duration-200"
            >
              <div className="relative h-64 bg-gray-800 overflow-hidden">
                <Image
                  src={project.imgSrc}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h2 className="text-base font-semibold text-gray-100 group-hover:text-[#FF69B4] group-hover:underline transition-colors mb-1.5">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-400 leading-relaxed">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Blog tab */}
      {tab === 'blog' && (
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
      )}
    </div>
  )
}
