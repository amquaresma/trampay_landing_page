# Trampay - Financial Management Landing Page

## Overview

Trampay is a financial management application landing page built for autonomous workers and micro-entrepreneurs in the Brazilian market. The application is a single-page marketing site with a contact form that sends inquiries via email. It features a modern, fintech-inspired design with smooth scrolling navigation, responsive layouts, and Portuguese language content.

The project uses a full-stack TypeScript architecture with React on the frontend and Express on the backend, following a monorepo structure that separates client and server code while sharing common schemas.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- React 18 with TypeScript for the UI layer
- Vite as the build tool and development server
- Wouter for client-side routing (lightweight alternative to React Router)
- TanStack Query (React Query) for server state management
- Tailwind CSS for styling with custom design system

**UI Component System:**
- Shadcn/ui components based on Radix UI primitives
- Custom design tokens defined in CSS variables for consistent theming
- "New York" style variant with neutral color scheme as base
- Poppins font family from Google Fonts for all typography

**Design System:**
- Primary color: Dark Blue (#2C5F7C) for headers and CTAs
- Accent color: Yellow/Gold (#FDB913) for highlights and interactive states
- Light Blue (#E8F4F8) for section backgrounds
- Responsive breakpoints: Mobile (<768px), Tablet (768-1024px), Desktop (>1024px)
- Spacing system follows Tailwind conventions (4, 8, 12, 16, 24, 32 units)

**Rationale:** The component-based architecture with Shadcn/ui provides flexibility and customization while maintaining accessibility. Vite offers fast development experience. The design system is specifically tailored for the Brazilian fintech market with trust-building aesthetics.

### Backend Architecture

**Technology Stack:**
- Node.js with Express for the HTTP server
- TypeScript for type safety across the stack
- Separate entry points for development (`index-dev.ts`) and production (`index-prod.ts`)

**Development vs Production:**
- **Development:** Integrates Vite middleware for hot module replacement, includes Replit-specific plugins for runtime error overlays and dev tools
- **Production:** Serves pre-built static assets from the `dist/public` directory, uses esbuild for server bundling

**API Structure:**
- RESTful endpoint at `/api/contact` for handling contact form submissions
- Request validation using Zod schemas shared between client and server
- JSON request/response format with proper error handling

**Rationale:** The dual-mode server setup optimizes for both development experience (with HMR) and production performance (with static asset serving). Express provides a minimal, well-understood foundation for the simple API needs.

### Data Layer

**Database Configuration:**
- Drizzle ORM configured for PostgreSQL via `@neondatabase/serverless`
- Schema definitions in shared directory for type safety
- Migration files generated in `/migrations` directory
- Database URL expected via `DATABASE_URL` environment variable

**Current Schema:**
- Users table with username/password authentication fields
- Contact message schema for form validation (name, email, message)

**In-Memory Fallback:**
- `MemStorage` class implements storage interface for development/testing
- Provides CRUD operations for users without database dependency

**Rationale:** Drizzle provides type-safe database access with PostgreSQL. The abstracted storage interface allows running without a database during initial development. Shared schemas ensure consistency between validation, storage, and client-side types.

### State Management

**Client-Side State:**
- React Query manages server state and API calls
- Custom hooks for mobile detection (`useIsMobile`)
- Toast notifications via Radix UI primitives
- Local component state with React hooks

**API Integration:**
- Centralized API client in `lib/queryClient.ts`
- Generic `apiRequest` function handles fetch with credentials
- Configurable 401 unauthorized behavior (return null or throw)
- Query client configured for no automatic refetching (manual control)

**Rationale:** React Query eliminates the need for Redux or similar state management by handling server state, caching, and synchronization. The centralized API client ensures consistent error handling and credential management.

### Build and Deployment

**Build Process:**
1. Vite builds the React client to `dist/public`
2. esbuild bundles the Express server to `dist/index.js`
3. Server serves static files from the built client directory

**Scripts:**
- `dev`: Runs development server with Vite integration
- `build`: Production build of both client and server
- `start`: Runs production server from built artifacts
- `check`: TypeScript type checking
- `db:push`: Pushes Drizzle schema changes to database

**Environment Variables:**
- `DATABASE_URL`: PostgreSQL connection string
- `EMAIL_USER`: Gmail account for sending contact form emails
- `EMAIL_PASS`: Gmail app password for authentication
- `NODE_ENV`: Environment mode (development/production)

**Rationale:** Separate build processes for client and server allow optimization of each. Vite's modern bundling for the client provides optimal performance. The build system supports Replit deployment with appropriate environment detection.

## External Dependencies

### Email Service Integration

**Nodemailer Configuration:**
- Gmail SMTP service for outbound email
- Contact form submissions sent to `trampayapp@gmail.com`
- HTML-formatted email templates with brand styling
- Graceful degradation when credentials are not configured (console logging)

**Rationale:** Gmail provides reliable email delivery for a landing page contact form. Nodemailer is the de facto standard for Node.js email sending. The fallback behavior allows development without email credentials.

### Third-Party UI Libraries

**Radix UI Primitives:**
- Extensive set of accessible, unstyled components (accordion, dialog, dropdown, etc.)
- Foundation for the Shadcn/ui component system
- Handles accessibility, keyboard navigation, and ARIA attributes

**Supporting Libraries:**
- `class-variance-authority`: Type-safe component variant system
- `clsx` + `tailwind-merge`: Utility for merging Tailwind classes
- `cmdk`: Command palette component
- `lucide-react`: Icon library
- `react-icons`: Additional icons (Instagram, Apple, Google Play)
- `date-fns`: Date manipulation utilities
- `embla-carousel-react`: Carousel/slider functionality
- `vaul`: Drawer component

**Rationale:** Radix UI provides production-ready accessible primitives that are highly customizable. This approach avoids the rigidity of pre-styled component libraries while ensuring accessibility compliance.

### Database Service

**Neon PostgreSQL:**
- Serverless PostgreSQL via `@neondatabase/serverless`
- Connection pooling with `connect-pg-simple` for session storage
- Drizzle ORM for type-safe queries and migrations

**Rationale:** Neon provides a modern, serverless PostgreSQL solution ideal for Replit deployment. The serverless driver supports edge environments and provides automatic connection management.

### Development Tools

**Replit-Specific:**
- `@replit/vite-plugin-runtime-error-modal`: Error overlay in development
- `@replit/vite-plugin-cartographer`: Code mapping for better debugging
- `@replit/vite-plugin-dev-banner`: Development environment indicator

**Rationale:** These plugins enhance the Replit development experience with better error reporting and debugging capabilities, only loaded in development mode.

### Form Validation

**Zod Integration:**
- `drizzle-zod`: Generates Zod schemas from Drizzle table definitions
- `@hookform/resolvers`: Connects Zod validation to React Hook Form
- Shared schemas ensure validation consistency across client and server

**Rationale:** Zod provides runtime type checking that complements TypeScript's compile-time checking. Integration with Drizzle eliminates schema duplication between database and validation layers.