# JJ Family Foundation — Website Build Brief
**For: Conductor (Development)**
**Prepared by: Koren | Cutbox.ai**
**Version: 1.0 — March 2026**

---

## 1. The One-Line Brief

Build a beautiful, fast, static 5-page website for a family-led nonprofit. Warm, faith-centered, trustworthy. Set-and-forget. No backend, no CMS, no complexity.

---

## 2. Tech Stack — Non-Negotiable

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js 14+ (App Router) | `output: 'export'` in next.config.js from day one |
| Styling | Tailwind CSS | Utility-first, no CSS-in-JS |
| Hosting | Vercel | Free tier, connect to GitHub repo, auto-deploy on push |
| Forms | Formspree | Free tier endpoint, no server needed |
| Fonts | Google Fonts via `next/font` | Playfair Display (headings) + DM Serif Display or Cormorant Garamond as fallback option — see design section |
| Images | `next/image` | WebP, lazy load, descriptive alt text on everything |
| Analytics | Vercel Analytics | Enable on deploy, no cookie banner needed |
| Donations | External link only | No in-site payment processing in V1 |

**Do not use:** Rails, Elixir, Laravel, any server-side framework, any database, any CMS, any serverless functions.

---

## 3. Repo & Deploy Setup

1. Create Next.js project: `npx create-next-app@latest jj-family-foundation --typescript --tailwind --app`
2. Add to GitHub private repo
3. Connect repo to Vercel — auto-deploy on push to `main`
4. Wire custom domain when client provides it (SSL auto-provisioned by Vercel)
5. Enable Vercel Analytics in dashboard post-deploy

---

## 4. Sitemap

```
/                   → Home
/about              → About the Foundation
/focus-areas        → All 5 Focus Areas
/global-outreach    → Brazil, India, Uganda
/contact            → Partner inquiry form + Donate CTA
```

---

## 5. Design System

### Color Palette — Soft Serve (Warm Earth Tones)

```css
:root {
  --brown-dark:   #5C3D2E;  /* Primary — headings, nav bg, CTA strip */
  --brown-mid:    #8B5E3C;  /* Secondary — subheadings, accents, hover */
  --terracotta:   #C9956C;  /* Accent — CTA buttons, highlights, labels */
  --cream:        #F2E8D9;  /* Surface — card backgrounds, alternating sections */
  --cream-light:  #FAF5EE;  /* Background — page bg, hero */
  --divider:      #D4B896;  /* Borders, rules, card outlines */
  --text-dark:    #2C1A0E;  /* All body text */
  --white:        #FFFFFF;  /* Text on dark backgrounds */
}
```

### Typography

| Role | Font | Weight | Size (desktop) | Color |
|---|---|---|---|---|
| Display / H1 | Playfair Display | Bold | 56–72px | `--brown-dark` |
| H2 | Playfair Display | SemiBold | 36–44px | `--brown-mid` |
| H3 | Cormorant Garamond or DM Serif | Medium | 24–28px | `--brown-dark` |
| Body | Lato or Nunito | Regular | 17–18px | `--text-dark` |
| Label / Eyebrow | Lato | Bold | 12px | `--terracotta` |
| Body line-height | — | — | 1.75 | — |
| Label letter-spacing | — | — | 0.08em | — |
| Labels always | — | — | UPPERCASE | — |

> **Note:** Do not use Inter, Roboto, or Arial. The warmth of the brand depends on a humanist serif for display and a clean humanist sans for body.

### Buttons

```
Primary:    bg-[#C9956C]  text-white     rounded-lg  px-8 py-3  hover:bg-[#B07D55]
Secondary:  border-2 border-[#C9956C]  text-[#C9956C]  transparent  hover:bg-[#C9956C] hover:text-white
Inverse:    border-2 border-[#FAF5EE]  text-[#FAF5EE]  transparent  hover:bg-[#FAF5EE] hover:text-[#5C3D2E]
            (Use Inverse buttons on dark brown backgrounds only)
```

### Cards

```
bg-white or bg-[#F2E8D9]
rounded-xl
shadow-sm hover:shadow-md transition-shadow
border-t-4 border-[#C9956C]   ← terracotta top accent
p-6
```

### Spacing

- Section padding: `py-20` desktop / `py-12` mobile
- Consistent vertical rhythm throughout
- Generous whitespace — this brand breathes

### Image Placeholders

All image slots use:
```html
<div class="bg-[#F2E8D9] rounded-xl flex items-center justify-center aspect-video">
  <span class="text-[#C9956C] text-sm font-semibold uppercase tracking-widest">Photo Coming Soon</span>
</div>
```
Never use broken `<img>` tags or gray boxes.

---

## 6. Navigation

**Desktop:**
- Sticky top nav, white background, drops `shadow-sm` on scroll
- Left: Logo (SVG placeholder until asset delivered — use foundation name in Playfair Display as text fallback)
- Center-right: `Home · About · Focus Areas · Global Outreach · Contact`
- Far right: `Partner With Us` → primary button → `/contact`
- Active page: terracotta underline on nav link

**Mobile:**
- Hamburger icon (right side)
- Full-screen overlay menu, cream background
- Links stacked vertically, large touch targets (min 48px)
- Close button top-right

---

## 7. Footer

```
Logo + tagline: "Building Generational Self Sufficiency."
Nav links: Home · About · Focus Areas · Global Outreach · Contact
Social icons: placeholder slots (Instagram, Facebook) — link to # until client provides
Divider line in --divider color
© 2026 JJ Family Foundation. All rights reserved.
Background: --brown-dark  |  Text: --cream-light
```

---

## 8. Page Specifications

### 8.1 Home Page `/`

#### Hero
```
Background:     Linen cream (#FAF5EE) — full viewport height — subtle warm grain texture overlay optional
Headline:       "Building Generational Self Sufficiency."
                Font: Playfair Display Bold — 64px desktop / 40px mobile — color: --brown-dark
Subheading:     "Stronger families create stronger futures."
                Font: Playfair Display Italic — 28px — color: --brown-mid
Body:           "Through education, advocacy, and meaningful community connection, we help families
                 build stability, resilience, and opportunity that extends beyond a single generation.
                 We do not reinvent solutions. We strengthen what already works and bring people
                 together to create lasting, sustainable impact."
                Font: body — max-w-2xl
CTA Primary:    "Learn More About Our Projects"  →  /focus-areas
CTA Secondary:  "Partner With Us"  →  /contact
Layout:         Text left (60%) — image placeholder right (40%) — centered on mobile
```

#### Our Approach
```
Section label:  "OUR APPROACH"  (eyebrow style)
Heading:        "Lasting Change Starts With Strengthening What Works"
Intro:          Full intro paragraph from copy brief
Layout:         3-column card grid (stacks to 1-col mobile)

Card 1 — Education
  Icon: book or lightbulb (Lucide or Heroicons)
  Title: "Education"
  Body: "We believe informed families are empowered families..."

Card 2 — Connection
  Icon: users or link
  Title: "Connection"
  Body: "Strong communities are built through strong relationships..."

Card 3 — Strengthening What Works
  Icon: layers or puzzle
  Title: "Strengthening What Works"
  Body: "We do not seek to replace existing solutions..."

Closing line:   "When knowledge and connection come together, generational change becomes possible."
                Centered — Playfair Display Italic — --brown-mid — max-w-xl mx-auto
```

#### Focus Areas Preview
```
Section label:  "OUR FOCUS AREAS"
Heading:        "Where We Invest Our Energy"
Layout:         3-col grid desktop (rows of 3+2 centered) — horizontal scroll on mobile
Each card:      Icon + Title + 1-sentence teaser + "Learn More →" text link → /focus-areas
CTA:            "See All Focus Areas" button → /focus-areas — centered below grid

Areas:
  1. Financial Literacy & Economic Self Sufficiency
  2. Education & Entrepreneurship
  3. Family Stability & Faith-Based Support
  4. Addiction Recovery & Restoration
  5. Community Leadership Development
```

#### Global Outreach Teaser
```
Background:     --cream (#F2E8D9)
Section label:  "GLOBAL OUTREACH"
Heading:        "Building Self Sufficiency Across Borders"
Layout:         3-column — each column: image placeholder + country name + 1-line descriptor
Countries:      Brazil · India · Uganda
CTA:            "View Our Global Impact" → /global-outreach
```

#### Bottom CTA Strip
```
Background:     --brown-dark (#5C3D2E)
Headline:       "Ready to Make a Generational Difference?"
Subtext:        "Partner with us or support the work we're doing in communities around the world."
Buttons:        "Partner With Us" (inverse button) + "Donate" (terracotta filled) — side by side
                Donate button links to external donation URL (use # placeholder)
```

---

### 8.2 About Page `/about`

```
Hero:
  Page eyebrow:   "ABOUT US"
  Headline:       "A Family Committed to Generational Change"
  Background:     --cream-light

Foundation Story (50/50 split — text left, image right on desktop):
  Full about copy from brief — 3 paragraphs
  Image placeholder right side

Mission Statement Blockquote:
  Background:     --cream (#F2E8D9)
  Left border:    4px solid --terracotta
  Font:           Playfair Display Italic — 20px
  Text:           "We believe knowledge is the first step toward lasting change. Through education,
                   advocacy, and meaningful connection, we empower families and communities to become
                   self-sufficient and resilient."

Gardner Family:
  Eyebrow:        "THE FAMILY"
  Names:          Jeff & Janeen Gardner (Founders) — Ellie, Addison, Paisley, Jules (Daughters)
  Layout:         6 image placeholders in a 3+3 grid — name + role label beneath each
  No bios needed in V1

Values Strip:
  3 pills or icon+text items:
  Education · Advocacy · Meaningful Connection
  Background: --brown-dark, text: --cream-light
```

---

### 8.3 Focus Areas Page `/focus-areas`

```
Hero:
  Eyebrow:    "FOCUS AREAS"
  Headline:   "Where We Strengthen Communities"
  Intro:      "We strengthen families and communities by investing in education, leadership, and
               long term economic stability. Through strategic partnerships and faith centered
               collaboration, we expand the reach of programs that are already making a
               meaningful difference."

Layout: Alternating full-width sections (image left / text right, then text left / image right)
Each section:
  - Large image placeholder (aspect-video, rounded-xl)
  - Eyebrow label (area number: "01", "02", etc.)
  - Title
  - Full description paragraph
  - Alternating background: white / --cream

Focus Areas (in order):
  01 — Financial Literacy & Economic Self Sufficiency
  02 — Education & Entrepreneurship
  03 — Family Stability & Faith-Based Support
  04 — Addiction Recovery & Restoration
  05 — Community Leadership Development

Closing quote (centered, italic):
  "By strengthening what already works and connecting people to the right resources,
   we help communities build lasting generational change."
```

---

### 8.4 Global Outreach Page `/global-outreach`

```
Hero:
  Eyebrow:    "GLOBAL OUTREACH"
  Headline:   "Impact Across Borders"
  Intro:      "Building generational self sufficiency requires collaboration across borders.
               Through international outreach, we support trusted organizations that are already
               creating meaningful change within their communities."

Countries — full-width alternating sections (same pattern as Focus Areas):

  Brazil:
    Image placeholder left
    Title: "Brazil"
    Partners: Mission Guadalupe (family stability + community) +
              Men's Rehabilitation Clinic (recovery + restoration)
    Full copy from brief
    External link: "Visit Mission Guadalupe →" (href="#" placeholder)

  India:
    Image placeholder right
    Title: "India"
    Partner: Rising Star Outreach
    Full copy from brief
    External link: "Visit Rising Star Outreach →" (href="#" placeholder)

  Uganda:
    Image placeholder left
    Title: "Uganda"
    Partner: Children's HopeChest
    Full copy from brief
    External link: "Visit Children's HopeChest →" (href="#" placeholder)

Section backgrounds alternate: --cream-light / --cream
```

---

### 8.5 Contact Page `/contact`

```
Hero:
  Eyebrow:    "GET IN TOUCH"
  Headline:   "Partner With Us"
  Subhead:    "Whether you represent an organization, a church, or simply want to get
               involved — we want to hear from you."

Layout: 2-column desktop (form left, info right) — stacks on mobile

Form (left — 60% width):
  Fields:
    Full Name*          → text input
    Email Address*      → email input
    Organization        → text input (optional)
    How would you like to partner?  → textarea (4 rows)
    Submit button:      "Send Message"  →  primary button, full width

  Form handler: Formspree
    - POST to https://formspree.io/f/[ENDPOINT] (create free Formspree account, get endpoint)
    - Success state: replace form with warm success message:
      "Thank you! We'll be in touch soon." — center, Playfair Display, --brown-mid
    - Loading state: spinner on button, disable inputs
    - Error state: inline field validation messages in --terracotta

Info sidebar (right — 40% width):
  Foundation name
  Tagline
  Brief "why partner" statement
  -----
  Donate card:
    Background: --brown-dark
    Title: "Support the Work"
    Body: "Your support helps strengthen families and communities around the world."
    Button: "Donate Now" (inverse button) → external link (placeholder #)
```

---

## 9. Functional Requirements

| Requirement | Spec |
|---|---|
| Responsive | 375px / 768px / 1280px+ — no horizontal scroll at any breakpoint |
| Performance | Core Web Vitals >= 90 on Lighthouse — static export makes this easy |
| Accessibility | WCAG 2.1 AA — semantic HTML, ARIA labels, keyboard navigable, color contrast compliant |
| SEO | Unique `<title>` and `<meta description>` per page — OG tags — `sitemap.xml` — `robots.txt` — semantic heading hierarchy |
| Images | All via `next/image` — WebP — lazy load — descriptive `alt` text — never empty alt on meaningful images |
| Forms | Formspree endpoint — no page reload on submit — success/error/loading states handled |
| No broken states | Every image slot has a warm placeholder — no broken imgs, no gray boxes, no lorem ipsum |
| Fonts | Loaded via `next/font` — no FOUT (flash of unstyled text) |
| Animations | Subtle fade-in on section entry (Intersection Observer or Framer Motion) — nothing flashy |
| Static export | `output: 'export'` in `next.config.js` — zero serverless functions — pure static HTML/CSS/JS |

---

## 10. next.config.js

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig
```

---

## 11. File Structure

```
jj-family-foundation/
├── app/
│   ├── layout.tsx          ← Root layout — nav + footer
│   ├── page.tsx            ← Home /
│   ├── about/
│   │   └── page.tsx
│   ├── focus-areas/
│   │   └── page.tsx
│   ├── global-outreach/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── Nav.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── SectionLabel.tsx    ← Reusable eyebrow label
│   ├── ImagePlaceholder.tsx
│   ├── CTAStrip.tsx
│   └── ContactForm.tsx
├── lib/
│   └── constants.ts        ← Colors, copy strings, nav links
├── public/
│   └── images/             ← Drop real photos here when delivered
├── next.config.js
├── tailwind.config.ts
└── package.json
```

---

## 12. Assets Awaiting From Client

Build everything with placeholders. These swap in after launch — no rebuild needed.

| Asset | Status | Notes |
|---|---|---|
| Logo | Pending | SVG preferred, hi-res PNG on transparent bg accepted. Use foundation name in Playfair Display as text fallback until delivered. |
| Hero photo | Pending | Warm family/community lifestyle image. Placeholder: cream bg + label. |
| Focus Area images | Pending | 1 per section (5 total). Use royalty-free stock from Unsplash if client approves to unblock launch. |
| Country photos | Pending | Brazil, India, Uganda (3 total). |
| Family photos | Pending | Jeff, Janeen + 4 daughters (6 total) for About page. |
| Donation URL | Pending | PayPal Giving Fund or equivalent. Use `href="#"` placeholder. |
| Social handles | Pending | Instagram, Facebook. Use `href="#"` placeholder. |
| Domain name | Pending | Point to Vercel when registered. |
| Formspree endpoint | Action needed | Create free account at formspree.io, get form endpoint URL, wire into ContactForm.tsx |

---

## 13. All Website Copy

All copy is final and approved. Use verbatim.

### Global
- **Tagline:** Building Generational Self Sufficiency.
- **Mission:** We believe knowledge is the first step toward lasting change. Through education, advocacy, and meaningful connection, we empower families and communities to become self-sufficient and resilient. We do not reinvent what already works. Instead, we bring people together, strengthen existing resources, and create sustainable impact that lasts for generations.

### Home — Hero
- **Headline:** Building Generational Self Sufficiency.
- **Subheading:** Stronger families create stronger futures.
- **Body:** Through education, advocacy, and meaningful community connection, we help families build stability, resilience, and opportunity that extends beyond a single generation. We do not reinvent solutions. We strengthen what already works and bring people together to create lasting, sustainable impact.
- **CTA Primary:** Learn More About Our Projects
- **CTA Secondary:** Partner With Us

### Home — Our Approach
- **Intro:** Lasting change does not come from starting over. It comes from strengthening what already works. At JJ Family Foundation, we focus on education, connection, and collaboration to help families and communities build sustainable self sufficiency that endures for generations.
- **Education:** We believe informed families are empowered families. By increasing awareness and understanding around critical issues, we equip communities with the knowledge needed to make confident, forward thinking decisions.
- **Connection:** Strong communities are built through strong relationships. We connect individuals, organizations, and trusted resources so families do not have to navigate challenges alone.
- **Strengthening What Works:** We do not seek to replace existing solutions. We support and expand proven programs and local leadership, helping bridge gaps and increase long term stability.
- **Closing:** When knowledge and connection come together, generational change becomes possible.

### Home — Focus Areas Intro
We strengthen families and communities by investing in education, leadership, and long term economic stability. Through strategic partnerships and faith centered collaboration, we expand the reach of programs that are already making a meaningful difference.

### Focus Areas — Full Copy

**Financial Literacy & Economic Self Sufficiency**
We support initiatives that equip individuals and families with the tools needed to build financial stability. From budgeting and debt management to long term wealth building, economic confidence forms the foundation of generational self sufficiency.

**Education & Entrepreneurship**
Education creates opportunity. We support programs that expand access to learning, mentorship, and entrepreneurial development. By encouraging both academic growth and small business innovation, we help families build sustainable and independent futures.

**Family Stability & Faith-Based Support**
Strong families are the cornerstone of thriving communities. We support faith centered organizations and community leaders who strengthen relationships, encourage accountability, and foster long term family resilience.

**Addiction Recovery & Restoration**
Recovery restores more than individuals. It restores families. We support programs that provide guidance, structure, and long term recovery pathways that create stability for generations.

**Community Leadership Development**
Sustainable impact begins within the community. We invest in leadership initiatives that empower individuals to serve, guide, and uplift others in their own neighborhoods and nations.

**Closing:** By strengthening what already works and connecting people to the right resources, we help communities build lasting generational change.

### Global Outreach

**Intro:** Building generational self sufficiency requires collaboration across borders. Through international outreach, we support trusted organizations that are already creating meaningful change within their communities. Our role is to strengthen local leadership and expand the impact of programs that transform families.

**Brazil:** In Brazil, we support Mission Guadalupe, a local foundation dedicated to serving families and strengthening communities. Through sponsorship and ongoing support, we help advance initiatives focused on family stability, faith centered development, and long term community growth. We also support a men's rehabilitation clinic in Brazil, contributing to recovery and restoration programs that rebuild lives and strengthen families for generations.

**India:** Through our support of Rising Star Outreach, we contribute to initiatives serving individuals and families living in leprosy colonies. By strengthening education access, community development, and economic empowerment efforts, these programs provide dignity, opportunity, and sustainable pathways forward.

**Uganda:** Through our support of Children's HopeChest, we invest in child focused and community driven development programs. By strengthening education, leadership, and family support systems, we help create opportunities that extend far beyond a single generation.

### About Page
JJ Family Foundation was founded by the Gardner family with a shared commitment to building generational self sufficiency. Led by Jeff and Janeen Gardner and their four daughters, Ellie, Addison, Paisley, and Jules, the foundation reflects their belief that strong families are the foundation of thriving communities.

As a family centered organization, our mission is rooted in education, advocacy, and meaningful connection. We believe lasting change is achieved by strengthening what already works. By supporting trusted organizations, empowering local leadership, and investing in sustainable initiatives, we help communities build resilience that extends far beyond a single generation.

Our work focuses on financial literacy, education access, entrepreneurship, family stability, addiction recovery, and community leadership development. Through both local and international outreach, we remain committed to equipping families with the knowledge, opportunity, and support needed to become self sufficient and resilient.

At JJ Family Foundation, service is not simply an initiative. It is a family commitment. Together, we seek to create impact that is sustainable, measurable, and generational.

---

## 14. Launch Checklist

- [ ] `next.config.js` has `output: 'export'` and `images: { unoptimized: true }`
- [ ] All 5 pages render correctly on desktop, tablet (768px), and mobile (375px)
- [ ] No horizontal scroll on any breakpoint
- [ ] Nav sticky + shadow on scroll works
- [ ] Mobile hamburger menu opens and closes correctly
- [ ] Contact form submits to Formspree — success/error/loading states all tested
- [ ] All external links open in new tab
- [ ] All image placeholders render (no broken imgs)
- [ ] Meta titles + descriptions set per page
- [ ] OG tags set (at minimum: title, description, image)
- [ ] `sitemap.xml` generated
- [ ] `robots.txt` present
- [ ] Lighthouse score >= 90 on Performance, Accessibility, SEO, Best Practices
- [ ] Deployed to Vercel — auto-deploy from GitHub confirmed
- [ ] Custom domain connected (when client provides)
- [ ] Vercel Analytics enabled

---

*JJ Family Foundation — Website Build Brief — V1.0 — March 2026*
*Prepared by Koren | Cutbox.ai — All copy approved and final*
