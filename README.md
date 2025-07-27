# Link in Bio App

A minimal, elegant "link in bio" page built with Next.js 15 and Tailwind CSS. Perfect for social media profiles, this mobile-first app features a fluid dynamic blue-to-white gradient background and clean, centered design.

## Features

- **Mobile-first design** with responsive desktop layout
- **Dynamic gradient background** that smoothly transitions
- **Minimal centered layout** with blue-to-white gradient
- **Organized categories** (Work, Creative, Other)
- **Simple social icons** for Instagram, LinkedIn, and GitHub
- **Optimized performance** with Next.js 15 App Router
- **TypeScript support** for better development experience
- **Tailwind CSS** for utility-first styling

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information
Edit `src/app/page.tsx` to update:
- Your name and bio text
- Social media links (Instagram, LinkedIn, GitHub)
- Links and categories

### Links Configuration
Update the `links` object in `src/app/page.tsx`:

```typescript
const workLinks = [
  { title: 'Portfolio', url: 'https://yourportfolio.com' },
  { title: 'Resume', url: 'https://yourresume.com' },
  { title: 'Email', url: 'mailto:your@email.com' }
]

const creativeLinks = [
  { title: 'Photography', url: 'https://yourphotos.com' },
  { title: 'Blog', url: 'https://yourblog.com' }
]

const otherLinks = [
  { title: 'Newsletter', url: 'https://yournewsletter.com' },
  { title: 'Store', url: 'https://yourstore.com' }
]
```

### Styling
- Dynamic gradient animation can be customized in `src/app/page.tsx`
- Global styles are in `src/app/globals.css`
- Tailwind configuration is in `tailwind.config.js`
- Simple emoji icons for social links

## Tech Stack

- **Next.js 15** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **CSS Animations** - Dynamic gradient transitions

## Build and Deploy

Build for production:
```bash
npm run build
```

The app is optimized for static hosting and can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- GitHub Pages
- Any static hosting service

## Project Structure

```
link-in-bio/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Performance

- **Static generation** for optimal loading speed
- **Minimal JavaScript bundle** (~101KB total)
- **Smooth gradient animations** 
- **Clean, centered layout** optimized for mobile

## License

MIT License - feel free to use this for your own link in bio page!