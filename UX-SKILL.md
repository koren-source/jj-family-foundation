---
name: "website-ux-ui"
built_at: "2026-03-04T16:15:39.801Z"
model: "claude-sonnet-4-5"
creator: "Kole Jain"
creator_slug: "@kole-jain"
topic: "website-ux-ui"
last_updated: "2026-03-04T16:15:39.801Z"
source_videos:
  - url: "https://youtu.be/HE4rLEQpiXY?si=w-AlPIax8bzdj-aI"
    date: "2026-03-04T16:15:39.801Z"
---

# website-ux-ui

> This video teaches UI/UX designers to prioritize user intent and functionality over aesthetics. It emphasizes starting with user goals, respecting web layout conventions built over 30+ years, structuring content for scanning, using animations only when they add clarity, and building design systems that match team maturity.

**Source:** Kole Jain — How to think like a GENIUS UI/UX designer  
**Built:** March 4, 2026 | **Model:** claude-sonnet-4-5

---

## Frameworks

### User Intent-Driven Design

Design process that starts with identifying user goals before creating UI elements

1. Identify the primary user intent (e.g., search for vacation rentals)
2. Design the minimum UI to serve that intent (e.g., search bar with destination/dates)
3. Identify secondary intents (e.g., browsing without specific destination)
4. Add features to serve secondary intents (e.g., listing cards with filters)
5. Only expand functionality as user intent expands
6. Apply aesthetics (fonts, colors, icons) last, as they affect look but not core function

### Two-Step Content Structure

Framework for deciding what content to show and how to structure it

1. Step 1: Decide which content to display based on user interaction patterns (e.g., show scannable specifics like location/rating/price, hide long descriptions until user clicks)
2. Step 2: Structure the content to handle imperfect data (e.g., truncate long names, add contrast circles to icons on bright images)
3. Test for unintended consequences with edge cases (very long text, low contrast scenarios)

### Progressive Disclosure

Show users what they need to see and reveal more as required

1. Identify primary content users need immediately
2. Consolidate secondary content into expandable menus or click-to-reveal patterns
3. Use animations to reveal/hide content (e.g., search bar that reduces and expands on click)
4. Prefer 'load more' buttons over infinite scroll to give users control and access to footer

## Tactics

### Respect Layout Conventions

After 30+ years of websites, users expect information to flow top-to-bottom and left-to-right, with navigation at the top and clear call-to-actions

**When to use:** For most web designs, especially when building user flows that need to feel intuitive. Only break conventions with intention when it serves the user better.

### Content for Scanning

Display specific, scannable information (location, rating, price) before detailed content (long descriptions)

**When to use:** When users need to quickly compare options or make decisions based on key criteria before diving into details.

### Purposeful Animations

Buttons should almost always have small animations; scrolljacking effects should be used very sparingly. Animations should add clarity or functionality, not just visual flair.

**When to use:** Use animations when they serve a purpose (e.g., menu expanding to save space, search bar animating in when clicked). Avoid animations that exist only to impress other designers.

### Load More vs Infinite Scroll

Load more buttons give users control and let them reach the footer; infinite scroll often makes footers impossible to access

**When to use:** Prefer load more buttons as the default. Only use infinite scroll if the context strongly favors continuous browsing with no need for footer access.

### Design Systems Matched to Team Maturity

Lean startups need lightweight, flexible systems that are quick to update and easy to scrap. Large companies (like Google) need massive, deeply defined systems spanning dozens of products and billions of users.

**When to use:** Scale the complexity of your design system to match team size, product scope, and rate of change. The process of defining rules is often more critical than the design itself.

## Key Numbers

- **30+ years of websites**: Users have developed strong layout expectations (top-to-bottom, left-to-right flow, nav at top) that designers should respect unless there's a compelling reason to break them.

## Key Quotes

> "Think of web design not as art, but as a story, and not every story needs 3D graphics or buttery smooth scrolling."
> — Emphasizing that design should serve user goals, not impress other designers with visual complexity.

> "Genius designers focus on making things work brilliantly for the user."
> — Contrasting genius designers (function-focused) with most designers (aesthetics-focused).

> "Only as the user intent expands do we expand the functionality of our designs."
> — Explaining when to add features: not because you can, but because user needs demand it.

> "You don't break the system by accident. You break it with intention."
> — On design systems: knowing when to bend the rules requires mastery, like any language.

## For Your Agent

When helping users with UI/UX design, always start by identifying user intent before proposing UI elements. Ask 'what is the user trying to accomplish?' before 'what should this look like?'. Challenge designs that prioritize visual complexity over function. Recommend layouts that respect web conventions (nav at top, info flows top-to-bottom and left-to-right) unless there's a user-serving reason to break them. Structure content for scanning by showing key specifics (location, price, rating) before long descriptions. Only suggest animations that add clarity or functionality, not visual flair. Propose progressive disclosure patterns (show what's needed, reveal more on demand) like collapsible menus and load-more buttons. When recommending design systems, match complexity to team maturity: lightweight and flexible for startups, comprehensive and deeply defined for large products. Emphasize that the process of defining design rules is often more valuable than the rules themselves.
