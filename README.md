# Greek Alphabet Flashcards

A modern Progressive Web App (PWA) for learning the Greek alphabet with interactive flashcards, pronunciation features, and offline support.

## Features

- 📚 Interactive flashcards for all 24 Greek letters
- 🔊 Text-to-speech pronunciation using browser's Greek voice
- 📱 Progressive Web App - installable on mobile and desktop
- 🌐 Works offline after first load
- ♿ Fully accessible with keyboard navigation and screen reader support
- 🎯 Click-to-pronounce alphabet reference table
- 🔀 Shuffle and reset card order
- ⌨️ Keyboard shortcuts (Space to flip, Arrow keys to navigate)

## Technology Stack

- **Vite** - Modern build tool and development server
- **Vanilla JavaScript** - No frameworks, pure web standards
- **PWA** - Service worker for offline functionality
- **Web Speech API** - Browser-native text-to-speech
- **CSS Grid & Flexbox** - Responsive design
- **WCAG 2.1** - Accessibility compliance

## Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or higher)
- npm (comes with Node.js)

## Getting Started

### 1. Clone and Install

```bash
# Clone the repository
git clone git@github.com:costinEEST/greek-alphabet-flashcards.git
cd greek-alphabet-flashcards

# Install dependencies
npm install
```

### 2. Generate Assets

Generate the favicon and PWA icons:

```bash
npm run setup
```

This command runs:
- `npm run generate-icons` - Creates PWA icons (192x192, 512x512)
- `npm run generate-favicon` - Creates favicon files (SVG, ICO)

### 3. Development

Start the development server with hot reload:

```bash
npm run dev
```

The app will be available at:
- **Local**: http://localhost:5000/
- **Network**: Available on your local network for mobile testing

The development server includes:
- ⚡ Instant hot module replacement
- 🔧 Source maps for debugging
- 🌐 Network access for mobile testing

## Building for Production

### 1. Build the Static App

Create an optimized production build:

```bash
npm run build
```

This generates:
- Minified JavaScript and CSS
- Optimized assets and images
- Service worker for offline functionality
- PWA manifest for installability
- All files in the `dist/` directory

### 2. Preview Production Build

Test the production build locally:

```bash
npm run preview
# or
npm run serve
```

Both serve the built app at http://localhost:5000/

### 3. Deploy Static Files

The `dist/` folder contains all files needed for deployment. Upload the entire contents to any static hosting service:

- **GitHub Pages**: Automatic deployment via GitHub Actions (see DEPLOYMENT.md)
- **Netlify**: Drag and drop the `dist/` folder
- **Vercel**: Connect your repository or upload the folder
- **Any web server**: Copy files to your web root directory

### GitHub Pages Deployment

For GitHub Pages, the repository includes automatic deployment:

1. Push your code to GitHub
2. Enable GitHub Pages in repository settings (Source: GitHub Actions)
3. The app deploys automatically on every push to main branch

See [`DEPLOYMENT.md`](./DEPLOYMENT.md) for detailed GitHub Pages setup instructions and troubleshooting.

## Project Structure

```
greek-alphabet-flashcards/
├── scripts/               # Build utilities
│   ├── generateFavicon.js # Favicon generation
│   └── generateIcons.js   # PWA icon generation
├── dist/                  # Built files (created by npm run build)
├── index.html            # Main HTML file
├── script.js             # Application logic
├── styles.css            # Styling
├── sw.js                 # Service worker source (processed during build)
├── favicon.ico           # Generated browser favicon
├── favicon.svg           # Generated vector favicon  
├── favicon-16.svg        # Generated small favicon
├── icon-192.png          # Generated PWA icon (192x192)
├── icon-512.png          # Generated PWA icon (512x512)
├── vite.config.js        # Vite configuration
└── package.json          # Dependencies and scripts
```

## Available Scripts

| Command                    | Purpose                                  |
| -------------------------- | ---------------------------------------- |
| `npm run dev`              | Start development server with hot reload |
| `npm run build`            | Build optimized production files         |
| `npm run preview`          | Serve production build locally           |
| `npm run serve`            | Serve production build on port 5000      |
| `npm run setup`            | Generate all icons and favicons          |
| `npm run generate-icons`   | Generate PWA icons only                  |
| `npm run generate-favicon` | Generate favicon files only              |

## Deployment

This project includes automated deployment configuration for various hosting platforms:

- **GitHub Pages**: Automatic deployment via GitHub Actions workflow (`.github/workflows/deploy.yml`)
- **Static Hosting**: Manual upload of `dist/` folder contents
- **Custom Servers**: Copy built files to web server directory

For comprehensive deployment instructions including GitHub Pages setup, manual deployment options, troubleshooting, and platform-specific configurations, see [**`DEPLOYMENT.md`**](./DEPLOYMENT.md).

## PWA Features

### Installation
- Users can install the app on mobile/desktop
- Appears in app drawer/start menu
- Runs in standalone window

### Offline Support
- Service worker caches all resources
- Full functionality without internet
- Updates automatically when online

### Mobile Optimization
- Responsive design for all screen sizes
- Touch-friendly interface
- Proper viewport configuration

## Browser Support

- **Modern browsers** with ES6+ support
- **Speech Synthesis** requires browsers with Web Speech API
- **PWA features** require HTTPS in production
- **Offline functionality** requires service worker support

Tested on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Development Tips

### Hot Reload
Changes to HTML, CSS, and JavaScript automatically refresh the browser during development.

### Mobile Testing
The development server is accessible on your local network. Check the console output for the network URL to test on mobile devices.

### Asset Generation
Icons and favicons are generated programmatically. Modify the scripts in the [`scripts/`](./scripts/) folder to customize the design.

### PWA Testing
Use Chrome DevTools → Application → Service Workers to test offline functionality and cache management.

## License

MIT License - feel free to use this project for learning and educational purposes.