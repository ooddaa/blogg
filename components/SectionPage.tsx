import Link from 'next/link'
import { Post, Section, getSectionInfo } from '@/lib/mdx'

interface SectionPageProps {
  section: Section
  posts: Post[]
}

export default function SectionPage({ section, posts }: SectionPageProps) {
  const sectionInfo = getSectionInfo(section)

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to home
        </Link>
        
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">{sectionInfo.icon}</span>
          <h1 className="text-4xl font-bold">{sectionInfo.title}</h1>
        </div>
        <p className="text-xl text-slate-600">{sectionInfo.description}</p>
      </div>
      
      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-slate-500 text-lg">No posts yet in this section.</p>
          <p className="text-slate-400 mt-2">Check back soon for new content!</p>
        </div>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <article key={post.slug} className="border-b pb-6">
              <Link href={`/blog/${post.slug}`} className="group">
                <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-600">
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
      )}
    </div>
  )
}