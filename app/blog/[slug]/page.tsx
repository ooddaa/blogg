import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug, getAllPosts } from '@/lib/mdx'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import CodeBlock, { InlineCode } from '@/components/CodeBlock'

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  try {
    const post = getPostBySlug(slug)
    return {
      title: post.title,
      description: post.description,
    }
  } catch (error) {
    return {
      title: 'Post Not Found',
    }
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  let post
  
  try {
    post = getPostBySlug(slug)
  } catch (error) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/blog" className="text-slate-600 hover:text-slate-800 hover:underline mb-4 inline-block">
        ← Back to all posts
      </Link>
      
      <article className="prose prose-slate lg:prose-xl mx-auto">
        <header className="mb-8">
          <h1 className="mb-2">{post.title}</h1>
          <time className="text-sm text-slate-600">{post.date}</time>
          {post.tags && (
            <div className="flex gap-2 mt-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>
        
        <MDXRemote 
          source={post.content} 
          components={{
            code: ({ className, children, ...props }) => {
              // If className exists, it's a code block (from ```language)
              // If no className, it's inline code (from `text`)
              if (className) {
                return <CodeBlock className={className}>{children}</CodeBlock>
              }
              return <InlineCode>{children}</InlineCode>
            },
          }}
        />
      </article>
    </div>
  )
}