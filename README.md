# ZenShe Bloom

ZENSHE SPA — REDESIGN PROMPT FOR LLM CODE GENERATION

## Context

- Website: ZenShe Spa — Women's Intimate Wellness Haven

- Type: Full frontend redesign

- Stack: React + React-Bootstrap + Framer Motion

- Languages: FR/AR/EN with RTL support

- Tech: Custom CSS (no Tailwind), CSS variables, react-icons

## Current Design (what to avoid)

- Primary green: #2e4d4c, Secondary: #5a7c7a, Accent: #4a6b69, Light: #7a9a98, Soft: #e8f0ef, Dark: #1a3332

- Heavy 135deg linear-gradient from primary to accent applied everywhere: navbar, buttons, modals, tables, footer, CTAs, scrollbars

- Pill-shaped buttons (border-radius: 25px), hover: translateY(-2px), shadow rgba(46,77,76,0.3)

- Cards: white bg, soft-green border, 20px radius, subtle shadow

- Navbar: gradient green with white text, compact height (~55px)

- Font: Poppins (300-700 weights)

- Icons: react-icons (FaLeaf, FaSeedling, FaSpa, FaGem, FaStar, FaHeart, etc.)

- Background: linear-gradient(135deg, soft-green, white) on body

- Service cards, testimonial cards, gallery all look identical

- Section alternation: bg-light vs bg-soft-green

## Redesign Goals

Maintain the earthy deep green wellness/spa theme but make it feel **fresh and different**. Prioritize visual variety, sophistication, and restraint over coverage.

## Color Direction

Use a similar earthy deep green family but REIMAGINE the application:

- Option A: Dark forest green (#1B3A2D or similar) as primary, with warm cream/off-white backgrounds, sage accents

- Option B: Muted moss/sage palette with paper/linen-textured backgrounds, charcoal text

- Option C: Deep green + terracotta/warm coral accent contrasts, earthy neutrals

- Keep accessibility in mind: sufficient contrast ratios

- Body background: avoid the 135deg gradient; use flat soft tones, subtle textures, or very gentle radial gradients instead

## Typography

- Retain Poppins or use a complementary font pairing: one clean sans-serif for body (Inter, DM Sans), one elegant serif for headings (Cormorant Garamond, Playfair Display)

- Stronger typographic hierarchy than current

- Consider italic accents for quotes/testimonials

## Component Styling Direction

- Buttons: Different shape (softer corners? geometric? full-width on mobile?) — avoid the current pill + shadow + translateY pattern. Maybe flat, minimal, or with a distinctive border treatment

- Cards: Different from the current soft-green-bordered white card. Could be: full-bleed image cards, bordered with green outline only, cards with colored top strip, transparent glass-morphism, or minimal with icon + text only

- Navbar: Different treatment — could be transparent over hero, full-height with logo centered, sidebar navigation, or clean top bar with distinctive hover states

- Forms: Different focus states, border treatments, label placements

- Tables (admin): Different from gradient-green headers — could be flat, zebra-striped, bordered, or card-based

- Modals: Different open animation or border treatment

- Footer: Different layout — could be multi-column with icons, or minimal with centered content

## Layout Patterns

- Avoid repeating the same card design across Services, Testimonials, Gallery sections

- Vary card layouts per section: grid vs list, horizontal vs vertical, image-top vs image-left

- Use whitespace strategically — don't fill every section with content

- Consider asymmetric layouts, full-width sections, alternating content alignment

## Animations

- Keep Framer Motion for page transitions (already in place)

- Vary hover effects: scale, border reveal, color shift, shadow lift — but avoid the same translateY(-2px) on everything

- Consider subtle entrance animations per section type

## Imagery & Icons

- Icons: Consider line-art, outlined style, or custom SVG plant/botanical illustrations instead of react-icons defaults

- Hero section: Needs a strong visual anchor different from the current floating logo circle with blur backdrop

## Key Pages to Redesign

1. **HomePage** — Hero, Featured Services, New Services, Gallery, Testimonials, CTA

2. **Navbar** — Navigation + user dropdown + cart + language switcher + book button

3. **Footer** — Links, social, description, logo

4. **ServicesPage / BookingPage** — Service cards, category headers, booking form

5. **StorePage** — Product grid, filters

6. **MembershipsPage** — Tier cards (silver/gold/platinum/VIP)

7. **Auth pages** — Login, Signup, Profile

8. **Admin pages** — Dashboard, tables, forms, sidebar

## Output Requested

Provide complete redesigned CSS (index.css + any component-specific .css files) and updated JSX components for the pages above. Prioritize the client-facing frontend. Maintain RTL support for Arabic. Keep the existing API integration and routing intact. Focus on visual redesign only — don't refactor logic.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://zen-garden-refresh.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/fcbb6c3f-d2e9-4742-b326-2274fa32e4d8).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
