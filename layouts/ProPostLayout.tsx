import { ProPost } from 'contentlayer/generated'
import BackButton from '@/components/BackButton'

interface Props {
  post: ProPost
  children: React.ReactNode
}

export default function ProPostLayout({ post, children }: Props) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <BackButton
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-800 hover:underline transition-colors mb-10 text-sm"
          label="← Back"
        />

        <header className="mb-14 pb-10 border-b border-gray-200">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 leading-tight text-gray-900">
            {post.title}
          </h1>
          {post.summary && (
            <p className="text-lg text-gray-500 leading-relaxed mb-4" style={{ fontVariant: 'small-caps' }}>{post.summary}</p>
          )}
          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            {post.readingTime?.text && (
              <>
                <span>·</span>
                <span>{post.readingTime.text}</span>
              </>
            )}
          </div>
        </header>

        <article className="prose prose-gray max-w-none prose-lg
          prose-headings:font-bold
          prose-strong:font-semibold
          prose-h1:text-2xl prose-h1:mt-12
          prose-h2:text-2xl prose-h2:mt-12 prose-h3:text-xl prose-h3:mt-10
        ">
          {children}
        </article>

        <footer className="mt-16 pt-8 border-t border-gray-200">
          <BackButton
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-800 transition-colors text-sm"
            label="← Back"
          />
        </footer>
      </div>
    </div>
  )
}
