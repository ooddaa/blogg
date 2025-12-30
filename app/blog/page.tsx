import Link from 'next/link'
import { getAllPosts } from '@/lib/mdx'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link href="/" className="text-slate-600 hover:text-slate-800 hover:underline mb-4 inline-block">
        ← Back to home
      </Link>
      <h1 className="text-4xl font-bold mb-8">All Posts</h1>

      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.slug} className="border-b pb-6">
            <Link href={`/blog/${post.slug}`} className="group">
              <h2 className="text-2xl font-semibold mb-2 group-hover:text-slate-700">
                {post.title}
              </h2>
              <time className="text-sm text-slate-600">{post.date}</time>
              {post.description && (
                <p className="mt-2 text-slate-700">{post.description}</p>
              )}
              {post.tags && (
                <div className="flex gap-2 mt-2">
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
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
