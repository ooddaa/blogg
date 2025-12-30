import { getPostsBySection, SECTIONS } from '@/lib/mdx'
import SectionPage from '@/components/SectionPage'

export default function MusingsPage() {
  const posts = getPostsBySection(SECTIONS.MUSINGS)

  return <SectionPage section={SECTIONS.MUSINGS} posts={posts} />
}

export const metadata = {
  title: 'Musings - ooddaa.co',
  description: 'Random thoughts and experiments',
}