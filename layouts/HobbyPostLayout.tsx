import { HobbyPost } from 'contentlayer/generated'
import BackButton from '@/components/BackButton'

interface Props {
  post: HobbyPost
  children: React.ReactNode
}

export default function HobbyPostLayout({ post, children }: Props) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <BackButton className="text-sm text-white hover:text-[#FF69B4] hover:underline transition-colors mb-8 inline-block" label="← Back" />

      <header className="mb-14 pb-10 border-b border-gray-700">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-2 leading-tight">
          {post.title}
        </h1>
        {post.summary && (
          <p className="text-lg leading-relaxed mb-4" style={{ color: '#FF69B4', fontVariant: 'small-caps' }}>{post.summary}</p>
        )}
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric', month: 'long', day: 'numeric',
            })}
          </time>
          {post.readingTime?.text && (
            <>
              <span aria-hidden>·</span>
              <span>{post.readingTime.text}</span>
            </>
          )}
        </div>
      </header>

      <article className="prose prose-gray max-w-none prose-lg
        prose-headings:font-bold prose-headings:text-gray-100
        prose-strong:text-gray-100 prose-strong:font-semibold
        prose-h2:text-3xl prose-h2:mt-12 prose-h3:text-2xl prose-h3:mt-10
        prose-a:text-white hover:prose-a:text-[#FF69B4] prose-a:no-underline hover:prose-a:underline
        prose-blockquote:border-[#FF69B4] prose-blockquote:text-gray-400

      ">
        {children}
      </article>

      <footer className="mt-16 pt-8 border-t border-gray-700">
        <BackButton className="text-sm text-white hover:text-[#FF69B4] hover:underline transition-colors" label="← Back" />
      </footer>
    </div>
  )
}
