# Next.js JAMstack Learning Lab Manual

## Project Overview

This project is a complete Next.js + JAMstack learning lab designed to master core modern frontend development skills through hands-on practice. The project starts from scratch and progressively builds a fully functional static website with automated deployment.

**Lab Time:** 2025-08-27 11:44 - 17:46 (approximately 6 hours)  
**Tech Stack:** Next.js 15.5.2 + React 19 + TypeScript + Tailwind CSS + GitHub Actions

## Lab Objectives

### Primary Objectives
- Master basic usage of the Next.js framework
- Understand JAMstack architecture principles
- Learn static site generation techniques
- Master GitHub Actions CI/CD workflows
- Implement complete development to deployment process

### Secondary Objectives
- Understand modern frontend toolchain
- Master TypeScript type safety
- Learn responsive design
- Understand bundler principles

## Lab Environment

### Development Environment
- **Operating System:** Linux Ubuntu
- **Node.js Version:** 18.x
- **Package Manager:** npm
- **Editor:** VS Code
- **Git Version Control:** Configured

### Tech Stack Versions
- **Next.js:** 15.5.2
- **React:** 19.1.0
- **TypeScript:** ^5
- **Tailwind CSS:** ^4.1.12
- **ESLint:** ^9

## Lab Process Record

### Phase One: Project Initialization (11:44 - 12:00)

#### 1.1 Create Project Structure
```bash
# Create project directory
mkdir jams_next_study
cd jams_next_study

# Initialize Git repository
git init

# Create project documentation
touch study.md WORK_PLAN.md README.md CLAUDE.md .gitignore
```

#### 1.2 Configure Project Documentation
- **study.md:** Learning objectives and plans
- **WORK_PLAN.md:** Detailed work plan
- **README.md:** Project description document
- **CLAUDE.md:** Claude Code guidance file
- **.gitignore:** Git ignore file configuration

#### 1.3 Initial Commit
```bash
git add .
git commit -m "Initial project setup"
```

**Learning Points:**
- Understand standard project initialization workflow
- Master basic Git operations
- Learn project documentation writing

### Phase Two: Next.js Project Setup (12:00 - 12:15)

#### 2.1 Create Next.js Project
```bash
npx create-next-app@latest next-app --typescript --tailwind --app --src-dir --eslint --import-alias "@/*"
```

**Parameter Explanation:**
- `--typescript`: Use TypeScript
- `--tailwind`: Integrate Tailwind CSS
- `--app`: Use App Router
- `--src-dir`: Use src directory structure
- `--eslint`: Integrate ESLint
- `--import-alias "@/*"`: Set path alias

#### 2.2 Project Structure Analysis
```
next-app/
├── src/
│   ├── app/           # App Router pages
│   ├── components/    # React components
│   ├── lib/          # Utility functions
│   └── types/        # Type definitions
├── public/           # Static assets
├── package.json      # Project configuration
└── tsconfig.json     # TypeScript configuration
```

**Learning Points:**
- Understand Next.js project structure
- Master scaffolding tool usage
- Learn project configuration file interpretation

### Phase Three: Problem Solving and Optimization (12:15 - 12:30)

#### 3.1 Turbopack Font Loading Issue
**Problem Description:**
```bash
npm run dev --turbopack
# Font loading error occurred
Error while requesting resource
https://fonts.gstatic.com/s/geist/v3/...
```

**Solution:**
```json
// package.json
{
  "scripts": {
    "dev": "next dev",        // Remove --turbopack
    "build": "next build"    // Remove --turbopack
  }
}
```

#### 3.2 Font Configuration Optimization
```typescript
// src/app/layout.tsx
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
```

**Learning Points:**
- Understand Turbopack principles and limitations
- Learn font configuration and optimization
- Master problem troubleshooting and resolution

### Phase Four: React Component Development (12:30 - 13:00)

#### 4.1 Create Component Structure
```bash
mkdir -p src/components
mkdir -p src/lib
mkdir -p src/types
```

#### 4.2 Implement Header Component
```typescript
// src/components/Header.tsx
interface HeaderProps {
  title?: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ 
  title = "Next.js Learning Project", 
  subtitle = "JAMstack Static Site Development" 
}) => {
  return (
    <header className="text-center py-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {title}
        </h1>
        <p className="text-xl md:text-2xl opacity-90">
          {subtitle}
        </p>
      </div>
    </header>
  );
};
```

#### 4.3 Implement Navigation and Footer Components
```typescript
// src/components/Navigation.tsx
interface NavItem {
  label: string;
  href: string;
}

const Navigation: React.FC<NavigationProps> = ({ items }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b">
      {/* Navigation content */}
    </nav>
  );
};

// src/components/Footer.tsx
const Footer: React.FC<FooterProps> = ({ copyright }) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      {/* Footer content */}
    </footer>
  );
};
```

#### 4.4 Update Main Page
```typescript
// src/app/page.tsx
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        {/* Main content */}
      </main>
      <Footer />
    </div>
  );
}
```

**Learning Points:**
- Master React component-based development
- Understand TypeScript interface definitions
- Learn Tailwind CSS styling design
- Master component composition and reuse

### Phase Five: JAMstack Static Generation (13:00 - 13:30)

#### 5.1 Configure Static Export
```typescript
// next.config.ts
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};
```

#### 5.2 Test Static Build
```bash
npm run build
```

**Build Result Analysis:**
```
✓ Compiled successfully in 14.5s
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (5/5)
✓ Exporting (2/2)
✓ Finalizing page optimization
```

#### 5.3 Understand Build Output
```
.next/          # Next.js build intermediate files
├── server/       # Server-related files
├── static/       # Static assets
└── Configuration files

out/            # Final static files
├── index.html   # Main page
├── 404.html    # Error page
└── _next/      # Optimized assets
```

**Learning Points:**
- Understand JAMstack static generation principles
- Master Next.js static export configuration
- Learn build result analysis
- Understand static file structure

### Phase Six: GitHub Actions Configuration (13:30 - 14:00)

#### 6.1 Create Workflow File
```bash
mkdir -p .github/workflows
touch .github/workflows/deploy.yml
```

#### 6.2 Configure CI/CD Workflow
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        cache-dependency-path: next-app/package-lock.json
        
    - name: Install dependencies
      working-directory: ./next-app
      run: npm ci
      
    - name: Build static site
      working-directory: ./next-app
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/master'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./next-app/out
        no_jekyll: true
```

#### 6.3 GitHub Pages Configuration Optimization
```typescript
// next.config.ts
const isProd = process.env.NODE_ENV === 'production';
const repositoryName = 'jams_next_study';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? `/${repositoryName}` : '',
  assetPrefix: isProd ? `/${repositoryName}/` : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};
```

**Learning Points:**
- Master GitHub Actions workflow configuration
- Understand CI/CD automation processes
- Learn GitHub Pages deployment configuration
- Understand environment variables and path configuration

### Phase Seven: Deep Learning and Q&A (14:00 - 17:46)

#### 7.1 Core Concept Learning
- **Bundler Principles:** Webpack, Turbopack, Vite working mechanisms
- **Static Generation vs Server-Side Rendering:** JAMstack advantages and limitations
- **Client vs Server Code:** Execution environment and timing differentiation
- **Serverless Functions:** Serverless architecture and API design

#### 7.2 Technical Details Mastery
- **Tailwind CSS Syntax Recognition:** Utility classes, responsive prefixes, state classes
- **TypeScript Interface Design:** Props type definitions and default values
- **React Component Patterns:** Functional components, Hooks usage, component composition
- **Git Workflow:** Branch management, commit conventions, version control

## Core Knowledge Points Summary

### 1. Next.js Core Concepts

#### App Router Architecture
```
src/app/
├── layout.tsx    # Root layout component
├── page.tsx      # Main page component
└── globals.css   # Global styles
```

#### Static Generation Principles
- **Build-time Generation:** Pre-render HTML files
- **Client-side Enhancement:** JavaScript adds interactive functionality
- **CDN Deployment:** Global static file distribution

### 2. JAMstack Architecture

#### Three Core Elements
- **J (JavaScript):** Frontend frameworks and interactive logic
- **A (APIs):** Data services and dynamic functionality
- **M (Markup):** Pre-rendered HTML markup

#### Advantages and Features
- **Excellent Performance:** Pre-rendered files, fast loading
- **High Security:** No server-side code execution
- **Low Cost:** Static hosting is often free
- **Strong Scalability:** Dynamic functionality through APIs

### 3. Development Toolchain

#### Bundler Comparison
| Tool | Features | Use Cases |
|------|----------|-----------|
| Webpack | Mature, stable, rich ecosystem | Large projects |
| Turbopack | Extremely fast build, experimental | Development environment |
| Vite | Fast startup, excellent HMR | Modern projects |

#### Build Output Understanding
```
Development Code → Bundler → Optimized Files → Deployment Files
```

### 4. Deployment and Operations

#### GitHub Actions Workflow
```yaml
on: push              # Trigger condition
jobs:                 # Job definition
  build:              # Build job
    runs-on: ubuntu-latest
    steps:             # Execution steps
```

#### Static Hosting Platforms
- **GitHub Pages:** Free, simple, suitable for project showcases
- **Netlify:** Feature-rich, supports functions
- **Vercel:** Next.js official, excellent performance

## Lab Results

### Technical Results
1. **Complete Next.js Project:** Including components, styles, configuration
2. **JAMstack Static Site:** Deployable to any static hosting platform
3. **Automated CI/CD Workflow:** GitHub Actions automatic deployment
4. **Responsive Design:** Adaptable to various device sizes

### Learning Results
1. **Tech Stack Mastery:** Next.js, React, TypeScript, Tailwind CSS
2. **Architecture Understanding:** JAMstack, static generation, modern frontend architecture
3. **Toolchain Proficiency:** Bundlers, version control, CI/CD
4. **Best Practices:** Code organization, performance optimization, deployment strategies

### Project File Structure
```
jams_next_study/
├── .github/workflows/     # GitHub Actions configuration
├── next-app/              # Next.js project
│   ├── src/
│   │   ├── app/           # App Router
│   │   ├── components/    # React components
│   │   ├── lib/          # Utility functions
│   │   └── types/        # Type definitions
│   ├── out/              # Static export files
│   └── package.json      # Project configuration
├── WORK_PLAN.md          # Work plan
├── LEARNING_MANUAL.md    # This document
└── Other documentation files
```

## Problems Encountered and Solutions

### 1. Turbopack Font Loading Issue
**Problem:** Geist font failed to load, causing page errors
**Solution:** Disable Turbopack, use traditional Webpack, switch to Inter font

### 2. Static Export Configuration Issue
**Problem:** Didn't understand the difference between `.next/` and `out/` directories
**Solution:** Configure `output: 'export'`, understand build output structure

### 3. GitHub Pages Path Issue
**Problem:** Static asset paths were incorrect
**Solution:** Configure `basePath` and `assetPrefix`

### 4. Component Type Definition Issue
**Problem:** TypeScript interface design and default value setting
**Solution:** Learn React component Props patterns and TypeScript best practices

## Best Practices Summary

### 1. Project Organization
- **Clear Directory Structure:** Organize code by functional modules
- **Component-based Development:** Reusable, testable component design
- **Type Safety:** Complete TypeScript type definitions

### 2. Development Workflow
- **Git Version Control:** Frequent commits, clear commit messages
- **Code Standards:** ESLint checking, unified code style
- **Documentation Maintenance:** Timely documentation updates, record issues and solutions

### 3. Performance Optimization
- **Static Generation:** Pre-render pages to improve loading speed
- **Asset Optimization:** Image compression, code splitting
- **CDN Deployment:** Global content distribution

### 4. Deployment Strategies
- **Automated Deployment:** GitHub Actions CI/CD
- **Environment Configuration:** Differentiate development and production environments
- **Monitoring and Logging:** Error tracking, performance monitoring

## Future Learning Suggestions

### 1. Deep Learning
- **Next.js Advanced Features:** ISR, SSG, SSR combined usage
- **State Management:** Redux, Zustand, Jotai
- **Testing Frameworks:** Jest, Testing Library, Cypress

### 2. Project Extensions
- **Content Management:** Integrate CMS, Markdown processing
- **User Authentication:** NextAuth.js, authentication
- **Database Integration:** Prisma, Supabase, PlanetScale

### 3. Production Practices
- **Performance Monitoring:** Lighthouse, Web Vitals
- **Error Tracking:** Sentry, LogRocket
- **A/B Testing:** User experience optimization

## Summary

This lab successfully built a complete Next.js JAMstack project from scratch, mastering core modern frontend development skills. Through practice, we gained deep understanding of:

1. **Technical Principles:** Next.js, JAMstack, static generation underlying mechanisms
2. **Development Tools:** Bundlers, version control, CI/CD usage
3. **Best Practices:** Code organization, performance optimization, deployment strategies
4. **Problem Solving:** Debugging techniques, error troubleshooting, performance optimization

This project is not just a learning experiment but also a template that can be directly used in production environments. Through this project, we have established a complete knowledge system of modern frontend development, laying a solid foundation for further learning.

**Lab Completion Time:** 2025-08-27 17:46  
**Total Time:** Approximately 6 hours  
**Efficiency Improvement:** 1.5x faster than expected, demonstrating the advantages of modern development tools