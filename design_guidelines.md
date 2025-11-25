# Design Guidelines: Trampay Landing Page

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern fintech landing pages (Nubank, PicPay) combined with clean SaaS presentation (Stripe, Linear). The design must faithfully replicate the provided prototypes while maintaining professional polish and user engagement.

## Core Design Principles
- **Trust & Credibility**: Financial app requiring professional, polished aesthetic
- **Accessibility**: Clear hierarchy, readable text, high contrast
- **Brazilian Market Focus**: Portuguese language, local currency (R$), culturally relevant imagery

## Typography

**Font Family**: Poppins (Google Fonts)
- Headers (H1): 48px/bold on desktop, 32px on mobile
- Headers (H2): 36px/semibold on desktop, 28px on mobile  
- Headers (H3): 24px/semibold
- Body text: 16px/regular, line-height 1.6
- Small text/captions: 14px/regular

## Color Palette (From Prototype)
- Primary Dark Blue: #2C5F7C (headers, CTA backgrounds)
- Accent Yellow/Gold: #FDB913 (highlights, hover states, badges)
- Light Blue: #E8F4F8 (section backgrounds, cards)
- White: #FFFFFF (backgrounds, text on dark)
- Dark Text: #1A1A1A
- Gray Text: #666666 (secondary information)

## Layout System

**Spacing Units** (Tailwind-style):
- Section padding: py-20 (desktop), py-12 (mobile)
- Container max-width: 1200px
- Card spacing: gap-8 (desktop), gap-4 (mobile)
- Element margins: 4, 8, 12, 16, 24, 32 units

**Responsive Breakpoints**:
- Mobile: < 768px (single column)
- Tablet: 768px - 1024px (2 columns where appropriate)
- Desktop: > 1024px (multi-column layouts)

## Section Breakdown

### 1. Header/Navigation
- Fixed position on scroll with blur background
- Logo left-aligned, navigation menu right-aligned
- Menu items: Início, Sobre, Contato, Dúvidas
- Smooth scroll to anchored sections
- Hamburger menu on mobile

### 2. Hero Section
- Full viewport height (90vh)
- Two-column layout: Left (text/CTA), Right (phone mockup image)
- H1: "Gerencie suas finanças com facilidade"
- Subheading explaining app value proposition
- Primary CTA button: "Baixe o App" → https://linktr.ee/AplicativoTrampay
- Phone mockup image showing app interface

### 3. App Overview Carousel
- Horizontal scrolling carousel with 4-5 slides
- Each slide: Icon + Title + Description explaining app features
- Navigation dots below, arrow buttons on sides
- Auto-play with 5s interval, pausable on hover

### 4. Market Research Cards
- Four cards in grid (2x2 on mobile, 4x1 on desktop)
- Cards: "Demanda Validada", "Mercado Carente", "Modelo Rentável", "Solução Viável"
- Icon at top, title, short description
- Light blue background, white cards with subtle shadow

### 5. Pricing Table
- Two-column comparison table
- Column 1: Gratuito (R$ 0,00) with feature checkmarks
- Column 2: Freemium (R$ 24,90/mês) with extended features, highlighted
- Clear visual distinction (border, badge on recommended plan)

### 6. Testimonials Carousel
- Three testimonial cards visible on desktop, one on mobile
- Card structure: User photo placeholder, name, rating (5 stars), quote
- Smooth slide transition with navigation arrows
- Auto-rotate every 6 seconds

### 7. Quem Somos (Who We Are)
- Three cards: Missão, Visão, Valores
- Image placeholder at top of each card
- Icon overlays on images
- Text descriptions below

### 8. Nossa História (Our Story)
- Single-column text section
- Maximum width 800px for readability
- Extracted from monograph introduction
- Light background color

### 9. Nossos Diferenciais (Differentials)
- Pill/badge style elements in flexbox layout
- Yellow background badges with dark text
- Items: "Gestão Simplificada", "Precificação Inteligente", "IA Integrada", etc.

### 10. Contact Form
- Two-column layout: Form (left), Info/Map placeholder (right)
- Form fields: Nome, Email, Telefone, Mensagem (textarea)
- Submit button triggers email to trampayapp@gmail.com
- Success/error messages with animations
- Required field validation

### 11. FAQ Section
- Accordion-style questions (5-7 items)
- Click to expand/collapse with smooth animation
- Plus/minus icons toggle
- Questions about app functionality, pricing, support

### 12. Footer
- Three-column layout on desktop, stacked on mobile
- Column 1: Logo + tagline
- Column 2: Quick links (navigation items)
- Column 3: Contact info (email, Instagram link with icon)
- Social media icons with hover effects
- Copyright notice

## Animations & Interactions

**Hover Effects**:
- Buttons: Scale(1.05) + brightness increase
- Cards: Lift with box-shadow enhancement (translateY(-8px))
- Navigation links: Underline slide-in from left
- Images: Subtle zoom (scale 1.1) on container hover

**Scroll Animations**:
- Fade-in on scroll for sections (opacity 0→1, translateY 20px→0)
- Stagger animations for card grids (100ms delay between cards)

**Transitions**:
- All interactions: 300ms ease-in-out
- Carousel slides: 500ms ease-in-out
- Accordion expand: 400ms ease

## Component Library

**Buttons**:
- Primary: Yellow background, dark text, rounded-full, px-8 py-3
- Secondary: Transparent, yellow border, yellow text
- Hover: Transform + shadow elevation

**Cards**:
- White background, rounded-2xl, padding-6
- Box-shadow: 0 4px 6px rgba(0,0,0,0.1)
- Hover shadow: 0 10px 20px rgba(0,0,0,0.15)

**Form Inputs**:
- Border: 1px solid #E0E0E0, rounded-lg
- Focus: Yellow border, subtle glow
- Padding: 12px 16px

## Images Required

1. **Hero Phone Mockup**: Right side of hero, showing app interface
2. **Team/About Photos**: Three images for Mission/Vision/Values cards
3. **Testimonial Photos**: User profile photos (5-7 circular avatars)
4. **Logo**: Trampay branding (header and footer)
5. **App Screenshots**: For carousel explaining features
6. **Icon Set**: Custom icons for market research cards, differentials

All images have designated placeholder comments in HTML for easy insertion.

## Responsiveness Strategy

- Mobile-first CSS approach
- Navigation collapses to hamburger menu < 768px
- Hero switches to single column (text above mockup)
- All multi-column grids stack vertically on mobile
- Touch-friendly tap targets (min 44px)
- Carousel swipe gestures on mobile devices