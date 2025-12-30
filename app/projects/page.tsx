import { getPostsBySection, SECTIONS } from '@/lib/mdx'
import SectionPage from '@/components/SectionPage'

export default function ProjectsPage() {
  const posts = getPostsBySection(SECTIONS.PROJECTS)

  return <SectionPage section={SECTIONS.PROJECTS} posts={posts} />
}

export const metadata = {
  title: 'Projects - ooddaa.co',
  description: 'Things I\'ve built and keep iterating on',
}