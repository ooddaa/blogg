import { getPostsBySection, SECTIONS } from '@/lib/mdx'
import SectionPage from '@/components/SectionPage'

export default function ProductivityPage() {
  const posts = getPostsBySection(SECTIONS.PRODUCTIVITY)

  return <SectionPage section={SECTIONS.PRODUCTIVITY} posts={posts} />
}

export const metadata = {
  title: 'Developer Productivity - ooddaa.co',
  description: 'My journey to becoming a 10x developer',
}