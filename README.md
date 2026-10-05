# OmniEd Integrated Platform

An integrated educational platform built with Next.js 14 and TypeScript, featuring Vercel Speed Insights for performance monitoring.

## Features

- ⚡ **Next.js 14** with App Router
- 📊 **Vercel Speed Insights** for real-time performance monitoring
- 🎨 **Tailwind CSS** for styling
- 🔒 **TypeScript** for type safety
- ✅ **ESLint** for code quality

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
npm run start
```

## Vercel Speed Insights

This project includes Vercel Speed Insights for monitoring Core Web Vitals and performance metrics. The `<SpeedInsights />` component is integrated into the root layout (`src/app/layout.tsx`).

### How It Works

- Automatically collects performance data when deployed to Vercel
- Tracks Core Web Vitals (LCP, FID, CLS, FCP, TTFB, INP)
- Provides real-time performance insights in your Vercel dashboard
- No additional configuration required

To view Speed Insights data:
1. Deploy your application to Vercel
2. Navigate to your project dashboard
3. Select "Speed Insights" from the sidebar

## Project Structure

```
.
├── src/
│   └── app/
│       ├── layout.tsx       # Root layout with Speed Insights
│       ├── page.tsx          # Home page
│       └── globals.css       # Global styles
├── public/                   # Static assets
├── package.json
├── tsconfig.json
├── next.config.mjs
└── tailwind.config.ts
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Speed Insights](https://vercel.com/docs/speed-insights)
- [Tailwind CSS](https://tailwindcss.com/docs)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
