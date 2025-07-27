import type { Metadata, Viewport } from 'next'
import { Jost } from 'next/font/google'
import './globals.css'

const jost = Jost({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Joel Van Veluwen - Link in Bio',
  description: 'Data Leader building AI agents to wrangle metrics into decisions',
  metadataBase: new URL('https://vanveluwen.dev'),
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jost.className}>
        {children}
      </body>
    </html>
  )
}
