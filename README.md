# Anjan Diyora - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a dynamic theme system with automatic day/night switching and manual override capabilities.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS
- **Dynamic Theming**: Auto day/night theme switching with localStorage persistence
- **Responsive Design**: Mobile-first approach with beautiful UI
- **Performance Optimized**: Static generation, image optimization, and code splitting
- **SEO Friendly**: Meta tags, structured data, and semantic HTML
- **Accessibility**: WCAG compliant with proper ARIA labels

## 📋 Pages

- **Home**: Personal introduction, contact info, and core skills
- **Education & Skills**: Academic background and technical competencies
- **Experience**: Professional work history and achievements
- **Projects**: Portfolio of AI/ML, Software, and Network projects
- **Achievements & Certifications**: Professional recognition and credentials
- **Thoughts**: Philosophical reflections and insights

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.17
- **Icons**: React Icons
- **Animations**: Framer Motion
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd folio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build & Deploy

### Local Build

```bash
npm run build
npm start
```

### Vercel Deployment

1. **Connect to Vercel**
   - Push your code to GitHub/GitLab
   - Connect your repository to Vercel
   - Vercel will automatically detect Next.js and configure the build

2. **Environment Variables** (if needed)
   - Add any environment variables in Vercel dashboard
   - No environment variables required for basic functionality

3. **Deploy**
   - Vercel will automatically deploy on every push to main branch
   - Preview deployments for pull requests

### Manual Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts to configure your project
```

## 📁 Project Structure

```
folio/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── page.tsx        # Home page
│   │   ├── education/      # Education & Skills page
│   │   ├── experience/     # Experience page
│   │   ├── projects/       # Projects page
│   │   ├── achievements/   # Achievements & Certifications page
│   │   ├── thoughts/       # Thoughts page
│   │   ├── layout.tsx      # Root layout
│   │   └── globals.css     # Global styles
│   ├── components/         # Reusable components
│   │   ├── Navigation.tsx  # Navigation bar
│   │   └── Footer.tsx      # Footer component
│   ├── data/              # Data files
│   │   ├── portfolioData.ts # Portfolio content
│   │   └── portfolio.ts    # TypeScript interfaces
│   └── context/           # React contexts
│       └── ThemeContext.tsx # Theme management
├── public/                # Static assets
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── vercel.json           # Vercel deployment configuration
└── package.json          # Dependencies and scripts
```

## 🎨 Customization

### Content Updates

1. **Personal Information**: Edit `src/data/portfolioData.ts`
2. **Styling**: Modify `src/app/globals.css` and Tailwind classes
3. **Theme**: Update `src/context/ThemeContext.tsx`

### Adding New Pages

1. Create new directory in `src/app/`
2. Add `page.tsx` file
3. Update navigation in `src/components/Navigation.tsx`

## 🔧 Configuration Files

### `next.config.js`
- Image optimization settings
- Performance optimizations
- Security headers
- Bundle optimization

### `vercel.json`
- Deployment configuration
- Route handling
- Security headers
- Function timeouts

### `tailwind.config.ts`
- Custom theme configuration
- Dark mode settings
- Custom utilities

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🌙 Theme System

- **Automatic**: Day (6 AM - 6 PM) = Light mode, Night (6 PM - 6 AM) = Dark mode
- **Manual Override**: User can toggle theme manually
- **Persistence**: Theme preference saved in localStorage
- **Smooth Transitions**: CSS transitions for theme switching

## 🚀 Performance Features

- **Static Generation**: All pages pre-rendered at build time
- **Image Optimization**: Next.js Image component with WebP/AVIF support
- **Code Splitting**: Automatic route-based code splitting
- **Bundle Optimization**: Vendor chunk splitting and tree shaking
- **Caching**: Aggressive caching for static assets

## 🔒 Security

- **Security Headers**: XSS protection, content type options
- **HTTPS Only**: All external links use HTTPS
- **Input Sanitization**: All user inputs properly sanitized

## 📊 SEO Optimization

- **Meta Tags**: Dynamic meta tags for each page
- **Structured Data**: JSON-LD schema markup
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

- **Name**: Anjan Diyora
- **Email**: adiyora@ncsu.edu
- **Phone**: (919) 527-4100
- **Location**: Raleigh, NC

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
