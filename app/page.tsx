import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex flex-col items-center gap-8 text-center px-4">
        <h1 className="text-4xl font-bold">
          Advent of Code Blog
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl">
          Welcome to my coding journey! Here I share lessons learned while solving Advent of Code puzzles.
        </p>
        <Link 
          href="/blog"
          className="bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors"
        >
          Read Blog Posts
        </Link>
      </main>
    </div>
  )
}
