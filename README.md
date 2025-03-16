# Way to Growth - Professional Coaching Website

A modern, responsive coaching website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🌍 Bilingual support (Dutch/English)
- 📱 Fully responsive design
- ⚡ Optimized performance
- 🎨 Modern UI with animations
- 🔍 SEO optimized

## Prerequisites

- Node.js >= 18.18.0
- npm or yarn

## Getting Started

1. Clone the repository:
   ```bash
   git clone [your-repo-url]
   cd coaching-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Build for Production

```bash
npm run build
```

The optimized production build will be created in the `.next` directory.

### Deploy to Vercel (Recommended)

The easiest way to deploy is to use the [Vercel Platform](https://vercel.com):

1. Push your code to a Git repository
2. Import your project to Vercel
3. Vercel will detect Next.js and automatically configure the build settings

### Deploy to Other Platforms

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm run start
   ```

## Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Project Structure

- `/app` - Application source code
  - `/components` - React components
  - `/context` - Context providers
  - `/translations` - Language files
- `/public` - Static assets
  - `/images` - Image files
- `/scripts` - Utility scripts

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or support, please contact:
- Email: info@waytogrowth.nl
- Phone: +31652345285
