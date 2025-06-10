# GitHub Pages Deployment Guide

This guide explains how to deploy your Greek Alphabet Flashcards app to GitHub Pages.

## Automatic Deployment (Recommended)

The repository includes a GitHub Actions workflow that automatically builds and deploys your app when you push to the main branch.

### Setup Steps

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin git@github.com:costinEEST/greek-alphabet-flashcards.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically run on the next push

3. **Access your app**:
   - Your app will be available at: `https://costinEEST.github.io/greek-alphabet-flashcards/`
   - The URL will be shown in the Pages settings after deployment

### How It Works

The `.github/workflows/deploy.yml` file:
- Triggers on pushes to main branch
- Installs Node.js and dependencies
- Runs `npm run build` to create the `dist/` folder
- Uploads and deploys the `dist/` contents to GitHub Pages

## Manual Deployment Alternative

If you prefer manual deployment, you can use the `gh-pages` package:

### Setup

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script to package.json**:
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

3. **Deploy manually**:
   ```bash
   npm run deploy
   ```

## Configuration

### Base Path Configuration

The app automatically configures the correct base path for GitHub Pages:

- **Development**: Serves from root (`/`)
- **GitHub Pages**: Serves from subdirectory (`/greek-alphabet-flashcards/`)

This is handled by the `GITHUB_PAGES` environment variable in the workflow.

### Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `dist/` folder during build
2. Configure your domain's DNS to point to GitHub Pages
3. Enable custom domain in repository settings

## Troubleshooting

### Build Fails
- Check that all dependencies are listed in `package.json`
- Ensure Node.js version compatibility (workflow uses Node 18)
- Verify the build script runs locally: `npm run build`

### Assets Not Loading
- Confirm the base path is correctly configured
- Check browser developer tools for 404 errors
- Ensure all asset paths are relative or absolute from base

### Service Worker Issues
- GitHub Pages serves over HTTPS, which is required for service workers
- Clear browser cache after deployment
- Check the service worker registration in browser dev tools

## Deployment Checklist

Before deploying:

- [ ] All source files committed to repository
- [ ] Dependencies properly listed in `package.json`
- [ ] Build script works locally (`npm run build`)
- [ ] GitHub Pages enabled in repository settings
- [ ] Repository is public (required for free GitHub Pages)

## Environment Differences

| Environment  | Base Path     | Service Worker        | Assets               |
| ------------ | ------------- | --------------------- | -------------------- |
| Development  | `/`           | Works with dev server | Served from root     |
| GitHub Pages | `/repo-name/` | Fully functional      | Optimized and cached |
| Local Build  | `/`           | Requires HTTPS server | Production optimized |

## Performance Notes

GitHub Pages deployment includes:
- Gzipped assets for faster loading
- Cached static files for repeat visits
- PWA functionality for offline use
- Service worker for instant loading

The app will work offline after the first visit, making it perfect for studying without internet access.