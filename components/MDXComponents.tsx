import Image from 'next/image'
import Link from 'next/link'

const MDXComponents = {
  Image,
  a: ({ href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    if (href?.startsWith('/')) {
      return <Link href={href} {...props} />
    }
    return <a href={href} target="_blank" rel="noopener noreferrer" {...props} />
  },
}

export default MDXComponents
