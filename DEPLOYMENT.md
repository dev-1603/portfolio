# Deployment Guide

This guide will help you deploy your portfolio website to various platforms.

## 🚀 Quick Deploy Options

### Vercel (Recommended)

1. **Connect to GitHub**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your `portfolio` repository

2. **Configure Build Settings**:
   - Framework Preset: `SvelteKit`
   - Build Command: `pnpm build`
   - Output Directory: `build`
   - Install Command: `pnpm install`

3. **Environment Variables** (Optional):
   - Add `GITHUB_TOKEN` if you want higher GitHub API rate limits

4. **Deploy**:
   - Click "Deploy"
   - Your site will be live at `https://portfolio-username.vercel.app`

### Netlify

1. **Connect to GitHub**:
   - Go to [netlify.com](https://netlify.com)
   - Sign in with GitHub
   - Click "New site from Git"
   - Choose your `portfolio` repository

2. **Configure Build Settings**:
   - Build command: `pnpm build`
   - Publish directory: `build`
   - Node version: `18` (or higher)

3. **Deploy**:
   - Click "Deploy site"
   - Your site will be live at `https://random-name.netlify.app`

### GitHub Pages

1. **Add Static Adapter**:
   ```bash
   pnpm add -D @sveltejs/adapter-static
   ```

2. **Update `svelte.config.js`**:
   ```javascript
   import adapter from '@sveltejs/adapter-static';
   
   export default {
     kit: {
       adapter: adapter({
         pages: 'build',
         assets: 'build',
         fallback: 'index.html',
         precompress: false,
         strict: true
       })
     }
   };
   ```

3. **Create GitHub Action**:
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [main]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
         - run: npm install -g pnpm
         - run: pnpm install
         - run: pnpm build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./build
   ```

## 🔧 Environment Variables

### GitHub API Token (Optional)

For higher rate limits when fetching GitHub repositories:

1. **Create GitHub token**:
   - Go to GitHub Settings > Developer settings > Personal access tokens
   - Generate new token with `public_repo` scope

2. **Add to deployment platform**:

   **Vercel**:
   - Go to project settings > Environment Variables
   - Add `GITHUB_TOKEN` with your token value

   **Netlify**:
   - Go to Site settings > Environment variables
   - Add `GITHUB_TOKEN` with your token value

## 📝 Pre-deployment Checklist

- [ ] Update personal information in `src/lib/data/personal.ts`
- [ ] Update work experience in `src/lib/data/work-experience.ts`
- [ ] Update projects in `src/lib/data/projects.ts`
- [ ] Update skills in `src/lib/data/skills.ts`
- [ ] Add resume PDFs to `static/resumes/`
- [ ] Update GitHub username in project files
- [ ] Test locally with `pnpm dev`
- [ ] Build and test with `pnpm build && pnpm preview`
- [ ] Check all links work correctly
- [ ] Test responsive design on mobile
- [ ] Verify dark/light mode toggle works

## 🎨 Customization Before Deployment

### Update Personal Information

1. **Personal Data** (`src/lib/data/personal.ts`):
   ```typescript
   export const personalInfo: PersonalInfo = {
     name: 'Your Name',
     title: 'Your Title',
     yearsOfExperience: 5,
     domains: ['Your', 'Domains'],
     // ... update all fields
   };
   ```

2. **Contact Information**:
   ```typescript
   export const contactInfo: ContactInfo = {
     email: 'your.email@example.com',
     phone: '+1 (555) 123-4567',
     // ... update all fields
   };
   ```

3. **Resume Files**:
   - Add your actual PDF resumes to `static/resumes/`
   - Ensure filenames match: `Feb2025-Debjyoti-Mohapatra.pdf` and `Latest-Detailed-Resume-2024.pdf`

### Custom Domain Setup

1. **Purchase domain** (if not already owned)
2. **Configure DNS**:
   - Add CNAME record pointing to your deployment URL
   - Or configure A records for root domain

3. **Platform-specific setup**:
   - **Vercel**: Add domain in project settings
   - **Netlify**: Add custom domain in site settings

## 🔍 Post-deployment Verification

- [ ] Website loads correctly
- [ ] All sections display properly
- [ ] GitHub repositories load
- [ ] Contact links work
- [ ] Dark/light mode toggle functions
- [ ] Mobile responsiveness
- [ ] Page load speed (use Lighthouse)
- [ ] SEO meta tags are present
- [ ] Social media previews work
- [ ] Resume downloads work

## 🚨 Troubleshooting

### Build Errors

1. **Check Node.js version**: Ensure you're using Node.js 18+
2. **Clear cache**: `rm -rf node_modules pnpm-lock.yaml && pnpm install`
3. **Check dependencies**: Ensure all required packages are installed

### GitHub API Issues

1. **Rate limiting**: Add GitHub token for higher limits
2. **Username errors**: Verify GitHub username is correct
3. **Network issues**: Check internet connection

### Deployment Issues

1. **Build failures**: Check build logs for specific errors
2. **Environment variables**: Ensure all required env vars are set
3. **Domain issues**: Verify DNS configuration

## 📊 Performance Optimization

### Before Deployment

1. **Optimize images**: Use WebP format and appropriate sizes
2. **Minimize bundle size**: Check for unused dependencies
3. **Enable compression**: Configure gzip/brotli compression
4. **Set up caching**: Configure appropriate cache headers

### Monitoring

1. **Set up analytics**: Google Analytics, Plausible, or similar
2. **Monitor performance**: Use Lighthouse CI or similar tools
3. **Error tracking**: Set up error monitoring (Sentry, etc.)

## 🔄 Continuous Deployment

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install -g pnpm
      - run: pnpm install
      - run: pnpm build
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 📞 Support

If you encounter issues during deployment:

1. Check the platform's documentation
2. Review error logs carefully
3. Test locally first
4. Consider using the platform's support channels

## 🎯 Next Steps After Deployment

1. **Update Content**: Replace placeholder content with your real information
2. **Add Resume Files**: Upload your actual resume PDFs
3. **Test All Features**: Ensure everything works as expected
4. **Share Your Portfolio**: Add to your LinkedIn, GitHub profile, etc.
5. **Monitor Performance**: Set up analytics and performance monitoring
6. **Regular Updates**: Keep content and projects up to date

---

**Happy Deploying! 🎉**

Your portfolio website is now ready to showcase your skills and experience to the world!
