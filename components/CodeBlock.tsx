import { codeToHtml } from 'shiki'

interface CodeBlockProps {
  children: string
  className?: string
}

interface InlineCodeProps {
  children: string
}

// For code blocks (triple backticks)
export default async function CodeBlock({ children, className }: CodeBlockProps) {
  // Extract language from className (format: "language-go")
  const language = className?.replace('language-', '') || 'text'
  
  const html = await codeToHtml(children.trim(), {
    lang: language,
    theme: 'github-dark',
  })
  
  return (
    <div 
      className="my-6 [&>pre]:!rounded-lg [&>pre]:!text-sm"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

// For inline code (single backticks)
export function InlineCode({ children }: InlineCodeProps) {
  return (
    <code className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs font-mono font-medium">
      {children}
    </code>
  )
}
