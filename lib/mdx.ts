import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface Post {
  slug: string
  title: string
  date: string
  description?: string
  tags?: string[]
}

export interface PostWithContent extends Post {
  content: string
}

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      
      return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
        tags: data.tags,
      }
    })

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) return 1
    else return -1
  })
}

export function getPostBySlug(slug: string): PostWithContent {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description,
    tags: data.tags,
    content,
  }
}

// Define the main sections
export const SECTIONS = {
  PRODUCTIVITY: 'productivity',
  AOC: 'aoc',
  PROJECTS: 'projects',
  MUSINGS: 'musings',
} as const

export type Section = typeof SECTIONS[keyof typeof SECTIONS]

// Get posts filtered by section
export function getPostsBySection(section: Section): Post[] {
  const allPosts = getAllPosts()
  return allPosts.filter(post => {
    if (!post.tags) return false
    
    // Special handling for AoC section - match any tag starting with "AoC:"
    if (section === SECTIONS.AOC) {
      return post.tags.some(tag => tag.startsWith('AoC:'))
    }
    
    // For other sections, match exact tag
    return post.tags.includes(section)
  })
}

// Get latest post from each section for homepage
export function getLatestFromEachSection(): Record<Section, Post | null> {
  const sections = Object.values(SECTIONS)
  const result: Record<Section, Post | null> = {} as Record<Section, Post | null>
  
  sections.forEach(section => {
    const sectionPosts = getPostsBySection(section)
    result[section] = sectionPosts.length > 0 ? sectionPosts[0] : null
  })
  
  return result
}

// Get section metadata
export function getSectionInfo(section: Section) {
  const sectionMap = {
    [SECTIONS.PRODUCTIVITY]: {
      title: 'Developer Productivity',
      description: 'My journey to becoming a 10x developer',
      icon: '🚀'
    },
    [SECTIONS.AOC]: {
      title: 'Advent of Code',
      description: 'Learning from coding puzzle mistakes',
      icon: '🎄'
    },
    [SECTIONS.PROJECTS]: {
      title: 'Projects',
      description: 'Things I\'ve built and keep iterating on',
      icon: '⚡'
    },
    [SECTIONS.MUSINGS]: {
      title: 'Musings',
      description: 'Random thoughts and experiments',
      icon: '💭'
    },
  }
  
  return sectionMap[section]
}
