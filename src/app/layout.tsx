import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Joel Van Veluwen - Link in Bio',
  description: 'Building Hurdle to help sales people make better decisions with data',
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
      <body>{children}</body>
    </html>
  )
}
