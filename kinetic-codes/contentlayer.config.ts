import { defineDocumentType, ComputedFields, makeSource } from 'contentlayer2/source-files'
import readingTime from 'reading-time'
import path from 'path'
import { fromHtmlIsomorphic } from 'hast-util-from-html-isomorphic'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import { remarkAlert } from 'remark-github-blockquote-alert'
import {
  remarkExtractFrontmatter,
  remarkCodeTitles,
  remarkImgToJsx,
  extractTocHeadings,
} from 'pliny/mdx-plugins/index.js'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeKatex from 'rehype-katex'
import rehypeKatexNoTranslate from 'rehype-katex-notranslate'
import rehypeCitation from 'rehype-citation'
import rehypePrismPlus from 'rehype-prism-plus'
import rehypePresetMinify from 'rehype-preset-minify'

const root = process.cwd()

const icon = fromHtmlIsomorphic(
  `<span class="content-header-link">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 linkicon">
  <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
  <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
  </svg>
  </span>`,
  { fragment: true }
)

const mdxOptions = {
  cwd: process.cwd(),
  remarkPlugins: [
    remarkExtractFrontmatter,
    remarkGfm,
    remarkCodeTitles,
    remarkMath,
    remarkImgToJsx,
    remarkAlert,
  ],
  rehypePlugins: [
    rehypeSlug,
    [
      rehypeAutolinkHeadings,
      {
        behavior: 'append',
        headingProperties: { className: ['content-header'] },
        content: icon,
      },
    ],
    rehypeKatex,
    rehypeKatexNoTranslate,
    [rehypeCitation, { path: path.join(root, 'content') }],
    [rehypePrismPlus, { defaultLanguage: 'js', ignoreMissing: true }],
    rehypePresetMinify,
  ],
}

const sharedFields = {
  title: { type: 'string' as const, required: true },
  date: { type: 'date' as const, required: true },
  tags: { type: 'list' as const, of: { type: 'string' as const }, default: [] },
  lastmod: { type: 'date' as const },
  draft: { type: 'boolean' as const },
  summary: { type: 'string' as const },
  images: { type: 'json' as const },
  authors: { type: 'list' as const, of: { type: 'string' as const } },
  layout: { type: 'string' as const },
  canonicalUrl: { type: 'string' as const },
}

const computedFields: ComputedFields = {
  readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.replace(/^(pro|hobby)\//, ''),
  },
  path: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath,
  },
  filePath: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFilePath,
  },
  toc: { type: 'json', resolve: (doc) => extractTocHeadings(doc.body.raw) },
}

export const ProPost = defineDocumentType(() => ({
  name: 'ProPost',
  filePathPattern: 'pro/**/*.mdx',
  contentType: 'mdx',
  fields: sharedFields,
  computedFields,
}))

export const HobbyPost = defineDocumentType(() => ({
  name: 'HobbyPost',
  filePathPattern: 'hobby/**/*.mdx',
  contentType: 'mdx',
  fields: sharedFields,
  computedFields,
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [ProPost, HobbyPost],
  mdx: mdxOptions as any,
})
