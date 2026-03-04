# JJ Family Foundation — Full Website UI/UX Redesign

**Live site:** https://jj-family-foundation.vercel.app/  
**Objective:** Redesign the typography, spacing, and visual polish across all pages. Keep all copy exactly as written. Keep all colors exactly as they are. Only change fonts, sizing, spacing, and layout refinements.

---

## ⚠️ HARD RULES — DO NOT CHANGE

1. **All copy stays exactly as written** — do not rephrase, shorten, or rewrite any text
2. **Color palette stays the same:**
   - Background (main): `#F5EDE0` (warm off-white/beige)
   - Background (alt sections): `#EDE5D8` (slightly darker sand)
   - Background (dark footer/CTA): `#4A2818` (deep brown)
   - Text (primary): `#2C1810` (dark brown/charcoal)
   - Accent/links: `#8B5E3C` (warm terracotta-brown)
   - Button fill: `#B07A50` (warm tan-brown)
3. **Site structure stays the same** — same pages, same sections, same nav
4. **All links and functionality stay the same**

---

## 🔤 Typography System (Apply Globally)

### Font Imports — Add to global CSS / layout head:
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap" rel="stylesheet">
```

### CSS Variables — Add to `:root`:
```css
:root {
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body: 'DM Sans', system-ui, sans-serif;
}
```

### Global Type Scale:
```css
/* Eyebrow labels (e.g. "OUR APPROACH", "ABOUT US") */
.eyebrow, [class*="eyebrow"], .label-sm {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

/* H1 — Page/section hero headlines */
h1 {
  font-family: var(--font-display);
  font-size: clamp(48px, 7vw, 80px);
  font-weight: 300;
  line-height: 1.1;
  letter-spacing: -0.01em;
}

/* H2 — Section titles */
h2 {
  font-family: var(--font-display);
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 300;
  line-height: 1.15;
  letter-spacing: -0.01em;
}

/* H3 — Card titles, sub-section headers */
h3 {
  font-family: var(--font-display);
  font-size: clamp(22px, 3vw, 30px);
  font-weight: 400;
  line-height: 1.25;
}

/* Body copy */
p, li {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 300;
  line-height: 1.8;
  color: #3D2515;
}

/* Links (inline) */
a {
  font-family: var(--font-body);
  font-weight: 400;
}

/* Nav links */
nav a {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 400;
}

/* Pull quotes / italic highlight text */
blockquote, .quote, em.large {
  font-family: var(--font-display);
  font-style: italic;
  font-size: clamp(20px, 3vw, 28px);
  font-weight: 300;
  line-height: 1.5;
}
```

### Button Styles:
```css
.btn-primary, button[type="submit"], a.btn {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 14px 32px;
  border-radius: 4px;
}
```

---

## 📐 Spacing — Apply Globally

```css
/* Section vertical breathing room */
section {
  padding-top: 100px;
  padding-bottom: 100px;
}

@media (max-width: 768px) {
  section {
    padding-top: 64px;
    padding-bottom: 64px;
  }
  
  h1 { font-size: 44px; }
  h2 { font-size: 34px; }
  h3 { font-size: 22px; }
}

/* Content max-width */
.container, .content-wrap {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Card internal padding */
.card, [class*="card"] {
  padding: 32px;
  border-radius: 10px;
}
```

---

## 📄 Page-by-Page Instructions

---

### PAGE 1: Home (`/`)

**Sections (top to bottom):**

#### Nav
- Logo "JJ Family Foundation" → `font-family: var(--font-display); font-weight: 400; font-size: 18px;`
- Nav links → DM Sans 14px/400
- "Partner With Us" button → apply btn-primary style above

#### Hero Section
- **H1:** "Building Generational Self Sufficiency." → Cormorant Garamond 300, ~72px, dark brown, NOT bold
- **Subtitle:** "Stronger families create stronger futures." → Cormorant Garamond italic 300, 22px, accent color
- **Body text below subtitle** → DM Sans 300, 16px, line-height 1.8
- **Photo placeholder box** → keep warm beige color, add `border-radius: 8px`
- **Buttons:** "Learn More About Our Projects" and "Partner With Us" → apply btn styles

#### "Our Approach" Section (tan background)
- Eyebrow: "OUR APPROACH" → keep, apply eyebrow style
- H2: "Lasting Change Starts With Strengthening What Works" → Cormorant Garamond 300
- Body paragraph → DM Sans 300, 16px, max-width 620px, centered
- **3 cards (Education, Connection, Strengthening What Works):**
  - Card titles (H3) → Cormorant Garamond 400, 26px
  - Card body → DM Sans 300, 15px, line-height 1.75
  - Increase gap between cards to `32px`
  - Add `padding: 28px` inside each card

#### Pull Quote
- "When knowledge and connection come together..." → Cormorant Garamond italic 300, 26px, centered
- Add `padding: 60px 0`, thin horizontal rule above and below (`1px solid #D4B896`)

#### Focus Areas Section (tan background)
- Eyebrow: "OUR FOCUS AREAS" → eyebrow style
- H2: "Where We Invest Our Energy" → Cormorant Garamond 300
- Focus area cards → same card treatment as above, card title in Cormorant Garamond
- "Learn More →" links → DM Sans 13px, 400, accent color. Make arrow `→` the Cormorant Garamond italic style

#### Global Outreach Section
- Eyebrow: "GLOBAL OUTREACH" → eyebrow style
- H2: "Building Self Sufficiency Across Borders" → Cormorant Garamond 300
- Photo placeholders → `border-radius: 8px`
- Country names (Brazil, India, Uganda) → Cormorant Garamond 400, 24px

#### CTA Footer Section (dark brown background)
- H2: "Ready to Make a Generational Difference?" → Cormorant Garamond 300, white, ~52px
- Sub-text → DM Sans 300, white
- Both buttons → outlined white style on dark bg

#### Footer (dark brown)
- "JJ Family Foundation" → Cormorant Garamond 400
- "Building Generational Self Sufficiency." → DM Sans 300, small, muted white
- Footer links → DM Sans 13px, 400

---

### PAGE 2: About (`/about`)

#### Hero
- Eyebrow: "ABOUT US" → eyebrow style
- H1: "A Family Committed to Generational Change" → Cormorant Garamond 300, centered, ~68px. Currently too bold/heavy.

#### Body + Photo 2-col section
- 3 paragraphs of body copy → DM Sans 300, 16px, line-height 1.8, max-width 520px
- Photo placeholder → `border-radius: 8px`
- Increase vertical spacing between paragraphs (`margin-bottom: 1.4em`)

#### Pull Quote (tan background)
- `"We believe knowledge is the first step..."` → Cormorant Garamond italic 300, 26px, centered
- Wider left/right padding on mobile

#### Italic Statement Section
- `"At JJ Family Foundation, service is not simply an initiative..."` → Cormorant Garamond italic 300, 24px, centered, max-width 700px

#### The Gardner Family Section
- Eyebrow: "THE FAMILY" → eyebrow style
- H2: "The Gardner Family" → Cormorant Garamond 300
- 6 family member cards in 3-col grid:
  - Photo placeholder → `border-radius: 8px`, `aspect-ratio: 3/4`
  - Name → Cormorant Garamond 400, 18px
  - Role (e.g. "Co-Founder", "Daughter") → DM Sans 300, 12px, uppercase, letter-spacing
  - Increase gap between cards to `24px`

#### Bottom CTA strip (dark brown)
- Pill-style tags (Education, Advocacy, Meaningful Connection) → DM Sans 400, 13px, outlined white style
- Verify these are consistent

---

### PAGE 3: Focus Areas (`/focus-areas`)

#### Hero
- Eyebrow: "FOCUS AREAS" → eyebrow style
- H1: "Where We Strengthen Communities" → Cormorant Garamond 300, centered, ~68px. Currently too bold.
- Body subtitle → DM Sans 300, 16px, centered, max-width 580px

#### 5 Focus Area Sections (alternating image/text layout)
Each section has: photo (left or right) + title + body + numbered label

Apply to all 5 (Financial Literacy, Education & Entrepreneurship, Family Stability, Addiction Recovery, Community Leadership):
- **Number label** (01, 02, etc.) → DM Sans 400, 12px, uppercase, muted accent color
- **Section title (H2):** → Cormorant Garamond 300, ~44px. Currently inconsistent weight.
- **Body copy** → DM Sans 300, 16px, line-height 1.8, max-width 480px
- Photo placeholder → `border-radius: 8px`
- Increase section vertical padding to `100px` — each section currently feels cramped

#### Bottom Pull Quote
- `"By strengthening what already works..."` → Cormorant Garamond italic 300, 26px, centered
- Keep tan background, add vertical padding `60px`

---

### PAGE 4: Global Outreach (`/global-outreach`)

#### Hero
- Eyebrow: "GLOBAL OUTREACH" → eyebrow style
- H1: "Impact Across Borders" → Cormorant Garamond 300, centered, ~72px. Currently too heavy/bold.
- Body subtitle → DM Sans 300, 16px, centered, max-width 560px

#### 3 Country Sections (Brazil, India, Uganda) — alternating layout

Apply to all 3:
- **Country name (H2)** → Cormorant Garamond 400, ~44px. Keep the weight — it works well here, just ensure it's not bold.
- **Sub-label** (e.g. "MISSION GUADALUPE & MEN'S REHABILITATION CLINIC") → DM Sans 500, 11px, uppercase, letter-spacing 0.12em, accent color
- **Body copy** → DM Sans 300, 16px, line-height 1.8
- **"Visit __ →" link** → DM Sans 13px, 400, accent color, italic Cormorant arrow
- Photo placeholder → `border-radius: 8px`
- Alternating backgrounds (white/tan) are good — keep them, just increase vertical padding to `100px`

---

### PAGE 5: Contact (`/contact`)

#### Hero
- Eyebrow: "GET IN TOUCH" → eyebrow style
- H1: "Partner With Us" → Cormorant Garamond 300, centered, ~68px. Currently too bold.
- Subtitle → DM Sans 300, 16px, centered, max-width 500px

#### Form (left column)
- Form field labels → DM Sans 400, 13px, letter-spacing 0.02em
- Input fields → keep warm beige border, add `border-radius: 6px`, `padding: 12px 16px`
- Textarea → same treatment, min-height 120px
- "Send Message" button → apply btn-primary, full width on mobile only

#### Sidebar (right column)
- "JJ Family Foundation" → Cormorant Garamond 400, 22px
- Tagline → Cormorant Garamond italic 300, 16px, accent color
- Body text → DM Sans 300, 15px, line-height 1.75
- **"Support the Work" dark card:**
  - Title → Cormorant Garamond 400, 20px, white
  - Body → DM Sans 300, 14px, white
  - "Donate Now" button → outlined white btn style, centered

---

## 🧩 Global Components

### Navigation (applies to ALL pages)
```css
/* Logo */
.nav-logo {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 400;
  color: #2C1810;
  text-decoration: none;
}

/* Nav links */
.nav-link {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 400;
  color: #2C1810;
}

/* Active nav link — keep the underline, that's good */
.nav-link.active {
  text-decoration: underline;
  text-underline-offset: 4px;
}

/* CTA button in nav */
.nav-cta {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: #B07A50;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
}
```

### Footer (applies to ALL pages)
```css
.footer-logo {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 400;
  color: white;
}
.footer-tagline {
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 300;
  color: rgba(255,255,255,0.65);
}
.footer-link {
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 400;
  color: rgba(255,255,255,0.8);
}
```

---

## ✅ Final QA Checklist

Before marking complete, verify:
- [ ] All headings use Cormorant Garamond (not bold)
- [ ] All body copy uses DM Sans 300 at 16px with line-height 1.8
- [ ] All eyebrow labels are DM Sans uppercase with letter-spacing
- [ ] All buttons are DM Sans 500 uppercase with proper padding
- [ ] Section padding is at least 100px top/bottom on desktop
- [ ] Pull quotes and italic statements use Cormorant Garamond italic 300
- [ ] No copy has been changed
- [ ] Color palette is unchanged
- [ ] Site works on mobile — all font sizes scale down appropriately
- [ ] Form inputs have rounded corners and comfortable padding
- [ ] Footer looks consistent across all 5 pages
