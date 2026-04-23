# Ernest & Bros Studio (Next.js)

This project is now migrated to **Next.js App Router** with local assets served from `public/images`.

## Local Run

Prerequisites: Node.js 20+ and npm.

1. Install dependencies:
   `npm install`
2. Start the dev server:
   `npm run dev`
3. Build for production:
   `npm run build`
4. Start production server:
   `npm run start`

## Project Notes

- App Router root is `src/app` (single router root).
- Pages:
  - `/`
  - `/work`
  - `/about`
  - `/contact`
- Static images are in `public/images`.
- Header logo, footer logo, and favicon are sourced from the local `images` folder content.

## Vercel Deployment

Use these settings in Vercel:

- Framework Preset: `Next.js`
- Root Directory: repository root
- Build Command: `npm run build`
- Install Command: `npm install`
- Output: default Next.js output

If Vercel keeps old artifacts after migration, redeploy with **Clear build cache** enabled.
