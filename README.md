# Debjyoti Mohapatra - Senior Full Stack Developer Portfolio

A comprehensive, modern portfolio website built with SvelteKit, TypeScript, and Tailwind CSS. This portfolio showcases senior-level experience with detailed work history, professional projects, and interactive skills demonstration.


##access  it on https://dev-1603.github.io/portfolio/

## ✨ Features

- **Professional Design**: Modern, clean design with dark/light mode support
- **Comprehensive Sections**: Hero, About, Work Experience, Projects, Skills, and Contact
- **Interactive Skills**: Filterable skills with proficiency indicators
- **GitHub Integration**: Real-time fetching of GitHub repositories
- **Resume Downloads**: Direct links to downloadable resume PDFs
- **Responsive Design**: Fully responsive across all devices
- **Performance Optimized**: Fast loading with optimized assets
- **SEO Friendly**: Proper meta tags and structured data
- **Accessible**: WCAG compliant with proper ARIA labels
- **TypeScript**: Full type safety throughout the application

## 🚀 Tech Stack

- **Framework**: SvelteKit 2.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons (SVG)
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Vercel/Netlify ready

## 📋 Project Structure

```
src/
├── lib/
│   ├── data/
│   │   ├── personal.ts          # Personal information
│   │   ├── work-experience.ts   # Work experience data
│   │   ├── projects.ts          # Professional & personal projects
│   │   └── skills.ts            # Skills and categories
│   └── types/
│       ├── portfolio.ts         # Portfolio data types
│       └── github.ts            # GitHub API types
├── routes/
│   ├── +layout.svelte           # Main layout with navigation
│   ├── +page.svelte             # Homepage with all sections
│   ├── work-experience/
│   │   └── +page.svelte         # Detailed work experience page
│   ├── projects/
│   │   └── +page.svelte         # Projects showcase page
│   └── contact/
│       └── +page.svelte         # Contact page with form
└── app.css                      # Global styles and Tailwind imports
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🔧 Configuration

### Personal Information

Update the following files with your information:

1. **Personal Data** (`src/lib/data/personal.ts`):
   - Name, title, years of experience
   - Domains of expertise
   - About section content
   - Contact information

2. **Work Experience** (`src/lib/data/work-experience.ts`):
   - Job titles, companies, durations
   - Key achievements and technologies
   - Current role status

3. **Projects** (`src/lib/data/projects.ts`):
   - Professional projects with impact metrics
   - Personal projects with GitHub stats
   - Technologies used and live URLs

4. **Skills** (`src/lib/data/skills.ts`):
   - Technical skills with proficiency levels
   - Skill categories and icons
   - Color coding for visual appeal

### Resume Files

1. Add your resume PDFs to `static/resumes/`:
   - `Feb2025-Debjyoti-Mohapatra.pdf`
   - `Latest-Detailed-Resume-2024.pdf`

2. Update the file paths in `src/lib/data/personal.ts`

### GitHub Integration

1. Update GitHub username in project files
2. Optionally add GitHub API token for higher rate limits
3. Configure environment variables if needed

## 📱 Pages & Sections

### Homepage (`/`)
- **Hero Section**: Introduction with resume download buttons
- **About Section**: Personal narrative and social links
- **Work Experience Highlights**: Current role and key positions
- **Featured Projects**: Professional and personal project showcases
- **Skills Overview**: Interactive skills with filtering
- **GitHub Repositories**: Latest repositories from GitHub API
- **Contact Section**: Quick contact information

### Work Experience (`/work-experience`)
- **Current Role Highlight**: Prominent display of current position
- **Timeline View**: Chronological work history with achievements
- **Technology Tags**: Skills used at each position
- **Call-to-Action**: Links to projects and contact

### Projects (`/projects`)
- **Tabbed Navigation**: Professional, Personal, and GitHub repositories
- **Project Cards**: Detailed project information with impact metrics
- **Technology Stack**: Visual representation of technologies used
- **Live Demos**: Direct links to deployed applications

### Contact (`/contact`)
- **Contact Form**: Professional contact form with validation
- **Contact Information**: Email, phone, location, social links
- **Resume Downloads**: Direct download links for both resume versions
- **Availability Status**: Current availability for opportunities

## 🎨 Customization

### Colors & Theme

The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary color palette
  },
  accent: {
    // Your accent color palette
  },
  dark: {
    // Your dark mode colors
  }
}
```

### Animations

Custom animations are defined in `tailwind.config.js` and can be modified or extended.

### Content Updates

The portfolio uses a data-driven approach, making it easy to update content by modifying the data files in `src/lib/data/`.

## 📦 Building for Production

### Build

```bash
pnpm build
```

### Preview

```bash
pnpm preview
```

## 🚀 Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Netlify

1. Build the project:
```bash
pnpm build
```

2. Deploy the `build` folder to Netlify

### Environment Variables

For GitHub API integration, add to your deployment platform:

```env
GITHUB_TOKEN=your_github_token_here
```

## 📝 Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm test` - Run all tests
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm check` - Type check with SvelteKit

## 🔍 SEO Features

- Meta tags for social sharing
- Structured data markup
- Semantic HTML
- Optimized images
- Fast loading times
- Mobile-friendly design

## 📊 Performance

- Optimized bundle size
- Lazy loading for images
- Efficient data fetching
- Minimal dependencies
- Fast initial page load

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **GitHub**: [dev-1603](https://github.com/dev-1603)
- **LinkedIn**: [debjyoti-mohapatra](https://linkedin.com/in/debjyoti-mohapatra/)
- **Email**: debjyoti.mohapatra@example.com

## 🙏 Acknowledgments

- [SvelteKit](https://kit.svelte.dev/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Heroicons](https://heroicons.com/) for the beautiful icons
- [Inter](https://rsms.me/inter/) for the typography

---

Made with ❤️ by Debjyoti Mohapatra
# Deployment triggered on Tue Sep  2 08:23:22 IST 2025
