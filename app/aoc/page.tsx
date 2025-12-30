import { getPostsBySection, SECTIONS } from '@/lib/mdx'
import SectionPage from '@/components/SectionPage'

export default function AoCPage() {
  const posts = getPostsBySection(SECTIONS.AOC)

  return <SectionPage section={SECTIONS.AOC} posts={posts} />
}

export const metadata = {
  title: 'Advent of Code - ooddaa.co',
  description: 'Learning from coding puzzle mistakes',
}