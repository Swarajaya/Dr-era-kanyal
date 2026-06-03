# Dr. Era Kanyal Negi — Premium Healthcare Website

A production-ready Next.js 15 website for Dr. Era Kanyal Negi, CAPPA (US) Certified Child Birth Educator & Lactation Consultant.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open browser
open http://localhost:3000
```

---

## 📁 Project Structure

```
dr-era-website/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles + Tailwind
│   │   ├── layout.tsx           # Root layout + SEO + Schema
│   │   ├── page.tsx             # Main page with lazy loading
│   │   └── sitemap.ts           # Auto sitemap
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Sticky nav + dark mode
│   │   │   └── Footer.tsx       # Footer with links
│   │   ├── sections/
│   │   │   ├── Hero.tsx         # Full-screen hero + 3D
│   │   │   ├── About.tsx        # Profile + timeline
│   │   │   ├── Services.tsx     # 4 service categories
│   │   │   ├── WhyChoose.tsx    # Stats + feature cards
│   │   │   ├── Testimonials.tsx # Carousel testimonials
│   │   │   ├── Process.tsx      # 4-step process
│   │   │   ├── Gallery.tsx      # Masonry gallery
│   │   │   ├── FAQ.tsx          # Accordion FAQ
│   │   │   └── Contact.tsx      # Form + map + contact
│   │   ├── three/
│   │   │   └── HeroScene.tsx    # Lightweight 3D blobs
│   │   └── ui/
│   │       ├── CustomCursor.tsx # Premium cursor
│   │       ├── PageLoader.tsx   # Animated page loader
│   │       ├── ScrollProgress.tsx # Scroll bar
│   │       └── WhatsAppButton.tsx # Floating WhatsApp
│   ├── hooks/
│   │   └── useAnimateOnScroll.ts
│   └── lib/
│       └── utils.ts             # Helpers + contact info
├── public/
│   ├── images/                  # 👇 Add your images here
│   │   ├── dr-era-profile.jpg   # Profile photo
│   │   ├── og-image.jpg         # 1200×630 OG image
│   │   └── gallery/             # Gallery images
│   ├── icons/                   # PWA icons
│   ├── favicon.ico
│   └── manifest.json
├── next.config.ts
├── tailwind.config.ts
├── vercel.json
└── package.json
```

---

## 🖼️ How to Replace Images

### 1. Profile Photo
- Place your photo at: `public/images/dr-era-profile.jpg`
- Recommended: `800×1000px`, WebP or JPG
- Open `src/components/sections/About.tsx`
- Find the comment `{/* Replace this div with <Image> */}`
- Replace the placeholder `<div>` with:

```tsx
import Image from "next/image";

<Image
  src="/images/dr-era-profile.jpg"
  alt="Dr. Era Kanyal Negi"
  fill
  className="object-cover"
  priority
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### 2. Gallery Images
- Place images in: `public/images/gallery/gallery-1.jpg` through `gallery-9.jpg`
- Open `src/components/sections/Gallery.tsx`
- Replace each `<div>` placeholder with:

```tsx
import Image from "next/image";

<Image
  src={`/images/gallery/gallery-${item.id}.jpg`}
  alt={item.alt}
  fill
  className="object-cover"
  loading="lazy"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>
```

### 3. OG Image (Social sharing)
- Place at: `public/og-image.jpg`
- Recommended: exactly `1200×630px`

---

## 💬 How to Add Testimonials

Open `src/components/sections/Testimonials.tsx` and add to the `testimonials` array:

```ts
{
  name: "Client Name",
  role: "Role (e.g. New Mother)",
  text: "Their testimonial text here...",
  stars: 5,
},
```

---

## 📝 How to Add Blog Posts (CMS Ready)

The architecture is ready for a blog. To enable:

1. **Create the blog route:**
   ```
   src/app/blog/page.tsx        — Blog listing
   src/app/blog/[slug]/page.tsx — Individual post
   ```

2. **Choose a CMS (recommended):**
   - **Sanity.io** (free tier, excellent)
   - **Contentful**
   - **Notion as CMS** (via notion-client)
   - **Markdown files** in `/content/blog/`

3. **Simple markdown approach:**
   ```bash
   npm install gray-matter next-mdx-remote
   mkdir content/blog
   ```
   Then create `.mdx` files in `content/blog/`.

---

## 🗺️ Google Maps Integration

In `src/components/sections/Contact.tsx`, find the map placeholder and replace with your embed:

```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1dYOUR_COORDS!..."
  width="100%"
  height="100%"
  style={{ border: 0, minHeight: "280px" }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Dr. Era Kanyal Negi Location"
/>
```

Get your embed URL from [Google Maps](https://maps.google.com) → Share → Embed a map.

---

## 📧 Contact Form Integration

The form currently simulates submission. To make it real, choose one:

### Option A: EmailJS (No backend needed)
```bash
npm install @emailjs/browser
```
```ts
import emailjs from '@emailjs/browser';

await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  { from_name: form.name, message: form.message, ... },
  'YOUR_PUBLIC_KEY'
);
```

### Option B: Resend (Modern email API)
```bash
npm install resend
```
Create `src/app/api/contact/route.ts` and send via Resend.

### Option C: Formspree (Simplest)
Replace form action: `<form action="https://formspree.io/f/YOUR_ID" method="POST">`

---

## 🌙 Dark Mode

Dark mode is automatically toggled via the moon/sun icon in the navbar. The preference is saved to `localStorage`. The system preference is respected on first visit.

---

## ☁️ Deploying to Vercel

### Method 1: Vercel CLI (Fastest)
```bash
npm i -g vercel
vercel login
vercel --prod
```

### Method 2: GitHub + Vercel Dashboard
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Framework: **Next.js** (auto-detected)
5. Click **Deploy**

### Environment Variables (if needed)
In Vercel Dashboard → Settings → Environment Variables:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## 🔧 Performance Optimizations Applied

| Technique | Implementation |
|-----------|---------------|
| Dynamic imports | All sections lazy loaded |
| 3D performance | DPR capped at 1.5, no antialiasing |
| Image optimization | Next.js Image + AVIF/WebP |
| Font loading | `display=swap` + preconnect |
| Animations | `triggerOnce: true` on all scroll animations |
| GPU reduction | `will-change` used sparingly |
| Bundle splitting | Automatic via Next.js |
| CSS | Purged unused styles via Tailwind |
| Caching | 30-day immutable cache on static assets |

---

## 🎨 Customizing Colors

Edit `tailwind.config.ts` → `theme.extend.colors`:

```ts
primary: { DEFAULT: "#DDAAA5" },   // Main pink
secondary: { DEFAULT: "#F4ECE7" }, // Warm cream
accent: { DEFAULT: "#8C6E63" },    // Rich brown
background: { DEFAULT: "#FAF7F5" } // Soft white
```

---

## 📞 Updating Contact Information

Edit `src/lib/utils.ts`:
```ts
export const CONTACT = {
  phone: "+91 9560011192",
  email: "erakanyalnegi@gmail.com",
  whatsapp: "https://wa.me/919560011192",
  phoneRaw: "+919560011192",
};
```

---

## 🔒 Security Headers

Already configured in `next.config.ts`:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`

---

## 📱 PWA Icons

Add these files to `public/icons/`:
- `icon-192.png` — 192×192px
- `icon-512.png` — 512×512px

Use [RealFaviconGenerator](https://realfavicongenerator.net/) to generate all sizes.

---

## 🆘 Support

For any issues:
- Open an issue on GitHub
- Check [Next.js docs](https://nextjs.org/docs)
- Check [Vercel docs](https://vercel.com/docs)

---

**Built with ❤️ for Dr. Era Kanyal Negi and every family she guides.**
