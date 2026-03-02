import { notFound } from 'next/navigation'
import { allHobbyPosts } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components.js'
import HobbyPostLayout from '@/layouts/HobbyPostLayout'
import MDXComponents from '@/components/MDXComponents'

export async function generateStaticParams() {
  return allHobbyPosts
    .filter((p) => p.draft !== true)
    .map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = allHobbyPosts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: `${post.title} | Lucas Gray`,
    description: post.summary,
  }
}

export default async function HobbyPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = allHobbyPosts.find((p) => p.slug === slug && p.draft !== true)
  if (!post) notFound()

  return (
    <HobbyPostLayout post={post}>
      <MDXLayoutRenderer code={post.body.code} components={MDXComponents} />
    </HobbyPostLayout>
  )
}
