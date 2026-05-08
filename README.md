# Swathi G — Portfolio

A world-class, visually stunning developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Premium Design**: Glassmorphism, gradients, and smooth animations inspired by Linear, Vercel, and Stripe
- **Fully Responsive**: Mobile-first design that looks perfect on all devices
- **Interactive Effects**: Custom cursor glow, particle background, scroll progress indicator
- **Real Projects**: All 6 projects with live demos and GitHub links
- **Performance**: Fast loading with optimized animations and lazy loading
- **SEO Optimized**: Meta tags, semantic HTML, and proper structure

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository on [Vercel](https://vercel.com)
3. Deploy automatically

### Netlify

1. Push code to GitHub
2. Import repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages

```bash
npm run build
# Upload dist/ folder to gh-pages branch
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Hero.jsx        # Hero section with typewriter
│   ├── About.jsx       # About section
│   ├── Skills.jsx      # Skills grid
│   ├── Projects.jsx    # Project cards with modal
│   ├── Experience.jsx  # Timeline
│   ├── Achievements.jsx # Achievement cards
│   ├── Contact.jsx     # Contact form
│   ├── Footer.jsx      # Footer
│   ├── Navbar.jsx      # Navigation
│   ├── LoadingScreen.jsx
│   ├── CursorGlow.jsx
│   ├── ScrollProgress.jsx
│   └── ParticleBackground.jsx
├── data/
│   └── portfolio.js    # All content data
├── hooks/
│   └── useScroll.js    # Custom hooks
├── App.jsx             # Main app
├── main.jsx            # Entry point
└── index.css           # Global styles

public/
└── resume.pdf          # Resume file
```

## ✏️ Customization

All content is centralized in `src/data/portfolio.js`:

```javascript
export const personalInfo = {
  name: "Your Name",
  email: "your@email.com",
  github: "https://github.com/yourusername",
  // ... update all fields
};

export const projects = [
  {
    title: "Project Name",
    shortDesc: "Short description",
    longDesc: "Detailed description",
    tags: ["React", "Python"],
    live: "https://...",
    github: "https://...",
    // ...
  },
];

// Update skills, experience, achievements similarly
```

## 🎨 Color Scheme

- **Background**: `#020408` (Deep dark blue)
- **Surface**: `#0a0f1a` (Dark blue-gray)
- **Accent Blue**: `#3b82f6`
- **Accent Purple**: `#8b5cf6`
- **Accent Cyan**: `#06b6d4`
- **Text**: `#e2e8f0` (Light gray)

## 🔧 Key Components

### Hero Section
- Animated typewriter effect
- Social links
- CTA buttons
- Stats grid

### Projects
- Filterable project grid
- Modal with detailed view
- Live demo & GitHub links
- Technology badges

### Skills
- 6 skill categories
- Animated cards with hover effects
- Gradient accents

### Experience
- Timeline layout
- Type badges (AI Engineering, Data Analytics, Security, Development)
- Highlight bullets

### Contact
- Working contact form
- Social links
- Availability status

## 📱 Responsive Breakpoints

- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `> 1024px`

## ⚡ Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Bundle size: ~387KB (gzipped: 118KB)

## 🐛 Known Issues

None currently. Report issues on GitHub.

## 📄 License

MIT License - feel free to use this portfolio as a template for your own!

## 🙏 Credits

Design inspired by:
- [Linear](https://linear.app)
- [Vercel](https://vercel.com)
- [Stripe](https://stripe.com)
- [Supabase](https://supabase.com)

Built with ❤️ by Swathi G
