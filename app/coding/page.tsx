import { getPostsBySection, SECTIONS } from '@/lib/mdx'
import SectionPage from '@/components/SectionPage'

export default function CodingPage() {
  const posts = getPostsBySection(SECTIONS.CODING)

  return <SectionPage section={SECTIONS.CODING} posts={posts} />
}

export const metadata = {
  title: 'Coding Challenges - ooddaa.co',
  description: 'Lessons learned from AoC, LeetCode, and other puzzles',
}
