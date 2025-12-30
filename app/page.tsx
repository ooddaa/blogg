import Link from 'next/link'
import { getLatestFromEachSection, getSectionInfo, SECTIONS } from '@/lib/mdx'

export default function Home() {
  const latestPosts = getLatestFromEachSection()
  const sections = Object.values(SECTIONS)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <main className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Dmitry Vikhorev
          </h1>

          {/* Bio Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
              Father
            </span>
            <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
              Senior Software Engineer
            </span>
            <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
              Jiu-Jitsu Purple Belt
            </span>
            <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
              Musician
            </span>
          </div>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Developer, learner, builder. Documenting my journey through code, puzzles, and projects.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors"
          >
            📚 View All Posts
          </Link>
        </div>

        {/* Section Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {sections.map((section) => {
            const sectionInfo = getSectionInfo(section)
            const latestPost = latestPosts[section]

            return (
              <Link
                key={section}
                href={`/${section}`}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-slate-200 hover:border-slate-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{sectionInfo.icon}</span>
                    <h2 className="text-xl font-semibold group-hover:text-slate-700 transition-colors">
                      {sectionInfo.title}
                    </h2>
                  </div>
                  <div className="text-slate-400 group-hover:text-slate-600 transition-colors">
                    →
                  </div>
                </div>

                <p className="text-slate-600 text-sm mb-4">
                  {sectionInfo.description}
                </p>

                {latestPost ? (
                  <div className="border-t pt-4">
                    <h3 className="font-medium text-sm text-slate-900 mb-1">
                      Latest: {latestPost.title}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {latestPost.date}
                    </p>
                  </div>
                ) : (
                  <div className="border-t pt-4">
                    <p className="text-xs text-slate-400 italic">
                      No posts yet - coming soon!
                    </p>
                  </div>
                )}
              </Link>
            )
          })}
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-slate-500 text-sm">
            Built with Next.js, MDX, and lots of ☕
          </p>
        </div>
      </main>
    </div>
  )
}
