import { notFound } from 'next/navigation'
import { allProPosts } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components.js'
import ProPostLayout from '@/layouts/ProPostLayout'
import MDXComponents from '@/components/MDXComponents'

export async function generateStaticParams() {
  return allProPosts
    .filter((p) => p.draft !== true)
    .map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = allProPosts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: `${post.title} | Kinetic.codes`,
    description: post.summary,
  }
}

export default async function ProPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = allProPosts.find((p) => p.slug === slug && p.draft !== true)
  if (!post) notFound()

  return (
    <ProPostLayout post={post}>
      <MDXLayoutRenderer code={post.body.code} components={MDXComponents} />
    </ProPostLayout>
  )
}
