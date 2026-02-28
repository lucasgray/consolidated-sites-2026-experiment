import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Projects | Lucas Gray',
  description: 'Personal hobby projects: games, apps, and creative experiments.',
}

const projects = [
  {
    title: 'Advent of the Reaper',
    description: 'A pixel Tactics RPG in the vein of the GBA Fire Emblem games, featuring upgraded graphics, strategies, and a great story and soundtrack. Developing as the sole programmer on the team, working with 3 pixel artists, a story writer, an illustrator, and composer.',
    imgSrc: '/static/images/advent/advent-splash.png',
    href: 'https://www.adventofthereaper.com',
    external: true,
  },
  {
    title: 'Eddie Bowles Historical Tour',
    description: 'Pokemon Go-esque mobile walking tour that explores the history of an underappreciated blues musician and composer from Cedar Falls, Iowa.',
    imgSrc: '/static/images/eddie-bowles/eddie-splash.png',
    href: '/hobby/blog/eddie-bowles-1',
    external: false,
  },
  {
    title: 'Runstrike',
    description: 'Augmented Reality running game. Gather resources on your routes, then return and progress through a retrofuturistic choose your own adventure story.',
    imgSrc: '/static/images/runstrike/runstrike-middle-of-splash.png',
    href: '/hobby/blog/runstrike-phaser',
    external: false,
  },
]

export default function HobbyProjectsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/hobby" className="text-sm text-gray-600 hover:text-gray-900 underline underline-offset-2 transition-colors mb-10 inline-block">
        ← Back
      </Link>

      <h1 className="text-4xl font-bold text-gray-900 mb-2">Projects</h1>
      <p className="text-gray-600 mb-12 text-lg">Games, apps, and creative experiments.</p>

      <div className="divide-y divide-gray-200 border-t border-gray-200">
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.href}
            className="flex gap-6 py-8 group"
            {...(project.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {project.imgSrc && (
              <div className="relative w-36 h-24 shrink-0 rounded-lg overflow-hidden bg-gray-100">
                <Image src={project.imgSrc} alt="" fill className="object-cover" />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h2 className="text-lg font-semibold text-gray-900 group-hover:text-rose-700 transition-colors mb-2">
                {project.title}
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
