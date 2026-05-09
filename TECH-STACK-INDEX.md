# Tech Stack Reference Index

Short reference of the technologies and patterns currently used in this app.

## Stack Snapshot
- Framework: Next.js (App Router)
- UI Library: React
- Styling: Tailwind CSS
- Language: JavaScript (JSX)

## CSS Utilities Used
- Layout/display: `flex`, `hidden`, `fixed`, `absolute`, `relative`, `inset-0`, `left-1/2`, `top-[70%]`, `z-10`, `z-20`, `z-50`
- Direction/alignment: `flex-col`, `items-center`, `justify-center`, `justify-between`, `flex-shrink-0`, `min-w-0`
- Sizing: `w-full`, `w-8`, `w-100`, `h-full`, `h-screen`, `h-8`, `h-24`, `h-50`, `min-h-full`, `min-h-screen`, `max-w-sm`, `max-w-5xl`, `max-w-7xl`, `flex-1`, `flex-[7]`, `flex-[3]`
- Spacing: `mx-auto`, `mx-4`, `mt-4`, `mb-4`, `mb-6`, `p-8`, `px-4`, `px-6`, `py-2`, `py-3`, `py-12`, `gap-2`, `gap-4`, `gap-8`, `gap-10`, `md:px-8`, `md:gap-8`
- Typography: `text-sm`, `text-lg`, `text-2xl`, `text-4xl`, `font-medium`, `font-semibold`, `font-bold`, `tracking-tight`
- Colors/backgrounds: `bg-white`, `bg-cyan`, `bg-cyan-100`, `bg-cyan-500`, `bg-red-500`, `bg-opacity-50`, `text-white`, `text-gray-600`, `text-gray-700`, `text-gray-800`, `text-gray-900`, `border-cyan-500`, `border-r-transparent`
- Borders/radius/effects: `border-2`, `border-[5px]`, `rounded-lg`, `rounded-xl`, `rounded-full`, `shadow-2xl`
- State/responsive: `transition`, `hover:bg-blue-700`, `hover:bg-cyan-500`, `hover:bg-red-600`, `hover:text-cyan-500`, `hover:text-white`, `md:flex`, `md:text-lg`, `md:text-4xl`, `md:h-10`, `md:w-10`
- Transform/misc: `rotate-45`, `-translate-x-1/2`, `-translate-y-1/2`, `antialiased`

Key files: `src/app/nav.js`, `src/app/body.js`, `src/app/popup.js`, `src/app/features/page.js`, `src/app/layout.js`, `src/app/page.js`, `src/app/globals.css`

## HTML/JSX Tags Used
- Structural: `html`, `body`, `header`, `main`, `nav`, `div`, `span`
- Content: `h1`, `h2`, `h6`, `p`, `img`
- Interactive: `a`, `button`

## React and Next.js Concepts Used
- React components: function components (`export default function ...`)
- Hooks: `useState`, `useContext`
- Context API: `createContext`, Provider pattern, custom hook (`useTheme`)
- Client components: `"use client"` for state/context-enabled components
- Next routing: App Router conventions with `layout.js` and `page.js`
- Next navigation: `next/link` (`<Link />`)
- Next fonts: `next/font/google`
- Next image API: `next/image` (import present in `src/app/page.js`)
- Metadata: `export const metadata` in root layout

Key files: `src/app/context/ThemeContext.js`, `src/app/layout.js`, `src/app/nav.js`, `src/app/popup.js`, `src/app/page.js`, `src/app/features/page.js`
