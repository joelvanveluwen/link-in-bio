'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function MicroblogPage() {
  const [gradientPosition, setGradientPosition] = useState(0)

  // Slow, fluid gradient animation
  useEffect(() => {
    const interval = setInterval(() => {
      setGradientPosition(prev => (prev + 0.5) % 360)
    }, 200)
    return () => clearInterval(interval)
  }, [])

  const containerStyle = {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
    background: `linear-gradient(${gradientPosition}deg, #3b82f6, #60a5fa, #93c5fd, #ffffff)`
  }

  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(10px)',
    borderRadius: '24px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    padding: '64px 32px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '600px',
    textAlign: 'center' as const
  }

  const backButtonStyle = {
    display: 'inline-block',
    padding: '12px 24px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    color: '#1f2937',
    fontWeight: '300',
    textDecoration: 'none',
    marginTop: '32px',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'inherit'
  }

  const footerStyle = {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '14px',
    textAlign: 'center' as const,
    marginTop: '32px',
    fontFamily: '"Bitcount Prop Single", system-ui',
  }

  const footerLinkStyle = {
    color: 'rgba(255, 255, 255, 0.95)',
    textDecoration: 'underline'
  }

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={{
          fontSize: '72px',
          fontWeight: '400',
          color: '#111827',
          marginBottom: '24px',
          lineHeight: '1.1',
          fontFamily: 'inherit'
        }}>
          Coming Soon
        </h1>
        
        <p style={{
          fontSize: '24px',
          color: '#374151',
          marginBottom: '16px',
          lineHeight: '1.4',
          fontWeight: '400',
          fontFamily: 'inherit'
        }}>
          Microblog
        </p>

        <p style={{
          fontSize: '18px',
          color: '#6b7280',
          marginBottom: '32px',
          lineHeight: '1.6',
          fontWeight: '300',
          fontFamily: 'inherit'
        }}>
          Short thoughts, quick updates, and digital breadcrumbs from the journey.
        </p>

        <Link 
          href="/"
          style={backButtonStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 1)'
            e.currentTarget.style.transform = 'scale(1.02)'
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)'
          }}
        >
          ← Back to Home
        </Link>
      </div>

      {/* Footer */}
      <div style={footerStyle}>
        <p style={{ 
          fontFamily: '"Bitcount Prop Single", system-ui',
          fontWeight: '400',
        }}>
          🛠️ by Joel, helped by Robots, to the tunes of{' '}
          <a 
            href="https://open.spotify.com/playlist/3NNewboKoq32me4F27biPi?si=ab474ed191344f44" 
            target="_blank" 
            rel="noopener noreferrer"
            style={footerLinkStyle}
          >
            Civil War Ext
          </a>
        </p>
      </div>
    </div>
  )
}