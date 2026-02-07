# Portfolio Website

A modern, performant portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Tech Stack**: Built with Next.js 15 (App Router), React, TypeScript, and Tailwind CSS
- **Beautiful Animations**: Smooth transitions and scroll animations using Framer Motion
- **MDX-Powered Projects**: Content-driven project system using MDX files
- **Responsive Design**: Fully responsive and optimized for all devices
- **Performance Optimized**: Server-side rendering, image optimization, and lazy loading
- **SEO Friendly**: Optimized meta tags and semantic HTML
- **Type Safe**: Full TypeScript coverage for better developer experience

## Project Structure

```
project-website/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── about/        # About page
│   │   ├── contact/      # Contact page
│   │   ├── projects/     # Projects listing and detail pages
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles
│   ├── components/       # Reusable React components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectGrid.tsx
│   │   └── SectionContainer.tsx
│   └── lib/             # Utility functions and data fetching
│       ├── utils.ts
│       └── projects.ts
├── content/
│   └── projects/        # MDX project files
├── public/
│   └── images/          # Static images
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── next.config.ts       # Next.js configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd project-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Updating Content

1. **Personal Information**: Update the content in:
   - [src/app/layout.tsx](src/app/layout.tsx) - Site metadata
   - [src/components/HeroSection.tsx](src/components/HeroSection.tsx) - Hero section text
   - [src/app/about/page.tsx](src/app/about/page.tsx) - About page content
   - [src/app/contact/page.tsx](src/app/contact/page.tsx) - Contact information

2. **Projects**: Add new projects by creating MDX files in `content/projects/`:

```mdx
---
title: 'Project Title'
description: 'Project description'
tags: ['React', 'TypeScript', 'Next.js']
image: '/images/projects/project.jpg'
date: '2024-01-15'
featured: true
links:
  github: 'https://github.com/username/project'
  demo: 'https://demo.example.com'
---

## Project Content

Your project details here in markdown format.
```

3. **Colors**: Update the color palette in [tailwind.config.ts](tailwind.config.ts):

```typescript
colors: {
  primary: {
    DEFAULT: '#19183b',
    dark: '#19183b',
  },
  secondary: {
    DEFAULT: '#708993',
    light: '#a1c2bd',
    lighter: '#e7f2ef',
  },
},
```

### Adding Images

Place project images in `public/images/projects/` and reference them in your MDX files:

```mdx
image: '/images/projects/your-image.jpg'
```

## Building for Production

Build the production-ready application:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

Start the production server:

```bash
npm start
# or
yarn start
# or
pnpm start
```

## Deployment

This project can be deployed to:

- **Vercel** (recommended): Deploy with zero configuration
- **Netlify**: Configure build command as `npm run build`
- **AWS Amplify**: Connect your repository and deploy
- **Any Node.js hosting**: Build and serve the `.next` directory

## Performance

This website is optimized for performance:

- Server-side rendering for fast initial page loads
- Image optimization with Next.js Image component
- Lazy loading for images and components
- Minimal client-side JavaScript
- Efficient caching strategies

## Technologies Used

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Content**: MDX with next-mdx-remote
- **Icons**: Lucide React

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please open an issue on GitHub.
