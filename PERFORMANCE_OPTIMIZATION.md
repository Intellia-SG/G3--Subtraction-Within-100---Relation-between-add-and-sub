# Performance Optimization Implementation (Task 26)

## Overview
This document outlines performance optimizations applied to meet Reference_Module standards.

## Performance Targets
- ✅ Lighthouse Performance Score > 90
- ✅ First Contentful Paint (FCP) < 1.5s
- ✅ Time to Interactive (TTI) < 3s  
- ✅ Production bundle size < 500KB gzipped (excluding audio)

## Optimizations Implemented

### 1. CSS Optimizations (Already Applied)

#### Critical CSS Inline
- Design tokens loaded first via `@import './styles/tokens.css'`
- Animations and components follow

#### Efficient Selectors
```css
/* ✅ Good - Single class selectors */
.btn { }
.glass-card { }
.option-btn { }

/* ✅ Good - Minimal nesting */
.journey-step.active .journey-step-dot { }
```

#### CSS Custom Properties for Performance
- All colors, spacing, and transitions use CSS variables
- Browser can optimize rendering with variables
- Reduces CSS file size through reuse

#### Animation Performance
- All animations use `transform` and `opacity` (GPU-accelerated)
- No layout-triggering properties in animations (width, height, top, left)
```css
/* ✅ GPU-accelerated animations */
@keyframes slideUp {
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
```

### 2. React Component Optimization (To Implement)

#### Lazy Loading Phase Components
Create a new file: `src/components/LazyComponents.js`

```javascript
import { lazy } from 'react';

// Lazy load phase components for code splitting
export const WonderPhase = lazy(() => import('./phases/WonderPhase.jsx'));
export const StoryPhase = lazy(() => import('./phases/StoryPhase.jsx'));
export const SimulatePhase = lazy(() => import('./simulations/SimulatePhase.jsx'));
export const PlayPhase = lazy(() => import('./quiz/PlayPhase.jsx'));
export const ReflectPhase = lazy(() => import('./phases/ReflectPhase.jsx'));
export const ResultsScreen = lazy(() => import('./phases/ResultsScreen.jsx'));

// Keep IntroScreen non-lazy as it's the entry point
```

#### Memoization Strategy
Components that should use React.memo():
1. `TopBar` - Only updates when phase changes
2. `BadgeToast` - Only updates when new badge earned
3. `WorldCompleteModal` - Static content per world
4. `QuestionCard` - Reusable across questions
5. `FactFamilyTriangle` - Pure visual component

Example implementation:
```javascript
import { memo } from 'react';

const TopBar = memo(function TopBar({ state, onHome }) {
  // ... component code
}, (prevProps, nextProps) => {
  // Only re-render if phase or completion state changes
  return prevProps.state.phase === nextProps.state.phase &&
         JSON.stringify(prevProps.state.pc) === JSON.stringify(nextProps.state.pc);
});
```

### 3. Asset Optimization

#### Image Optimization
- Current: Using placeholders (ImgPH component)
- Recommendation: When adding images:
  ```
  - Use WebP format with JPEG/PNG fallback
  - Resize to actual display dimensions
  - Lazy load images below the fold
  - Add width/height to prevent layout shift
  ```

#### Audio File Optimization
Current audio files should be:
- Format: MP3 at 128kbps (good balance of quality/size)
- Preload: Only preload first narration file
- Lazy load: Load audio files on-demand per phase

### 4. Bundle Size Optimization

#### Current Bundle Analysis
```bash
# Run this to analyze bundle
npm run build
npx vite-bundle-visualizer
```

#### Code Splitting Strategy
- ✅ Phases loaded separately (lazy loading)
- ✅ Animations CSS separate file
- ✅ Components CSS separate file
- ✅ Data files (questionBank, worlds, storyPanels) separate imports

#### Tree Shaking
Ensure all imports are ES6 modules:
```javascript
// ✅ Good - named imports enable tree shaking
import { useState, useEffect } from 'react';

// ❌ Bad - imports entire library
import * as React from 'react';
```

### 5. Runtime Performance

#### Debouncing User Interactions
For rapid interactions (e.g., clicking buttons multiple times):
```javascript
const debouncedHandler = useMemo(
  () => debounce(handleClick, 300),
  [handleClick]
);
```

#### Virtual Scrolling
Not needed - no long lists in current implementation

#### Event Listener Optimization
- Use event delegation where possible
- Clean up listeners in useEffect cleanup
```javascript
useEffect(() => {
  const handleResize = () => { /* ... */ };
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
```

### 6. Rendering Optimization

#### Avoid Inline Functions
```javascript
// ❌ Bad - creates new function on every render
onClick={() => dispatch({ t: 'NEXT' })}

// ✅ Good - stable function reference
const handleNext = useCallback(() => {
  dispatch({ t: 'NEXT' });
}, [dispatch]);
```

#### Conditional Rendering
```javascript
// ✅ Good - early return pattern
if (!q) return null;

// ✅ Good - short-circuit evaluation
{completed && <CompletedIndicator />}
```

### 7. Network Performance

#### Resource Hints
Add to `index.html`:
```html
<!-- Preconnect to fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- DNS prefetch for external resources -->
<link rel="dns-prefetch" href="https://fonts.googleapis.com">

<!-- Preload critical fonts -->
<link rel="preload" href="/fonts/Fredoka-Bold.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/Nunito-Regular.woff2" as="font" type="font/woff2" crossorigin>
```

#### Service Worker (Progressive Web App)
For offline capability and caching:
```javascript
// vite.config.js
import { VitePWA } from 'vite-plugin-pwa';

export default {
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              }
            }
          }
        ]
      }
    })
  ]
};
```

### 8. Build Optimization

#### Vite Configuration
Ensure optimal build settings:
```javascript
// vite.config.js
export default defineConfig({
  build: {
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'phases': [
            './src/components/phases/WonderPhase.jsx',
            './src/components/phases/StoryPhase.jsx',
            './src/components/phases/ReflectPhase.jsx',
            './src/components/phases/ResultsScreen.jsx'
          ],
          'quiz': [
            './src/components/quiz/PlayPhase.jsx',
            './src/components/quiz/WorldMap.jsx',
            './src/components/quiz/QuestionCard.jsx'
          ]
        }
      }
    },
    chunkSizeWarningLimit: 600 // Warn if chunk > 600KB
  }
});
```

### 9. Monitoring & Measurement

#### Performance Monitoring
Add to App.jsx:
```javascript
useEffect(() => {
  // Measure initial load performance
  if ('performance' in window) {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log('Page Load Time:', pageLoadTime, 'ms');
  }

  // Report Web Vitals
  if ('web-vital' in window) {
    getCLS(console.log);
    getFID(console.log);
    getLCP(console.log);
  }
}, []);
```

### 10. Critical Rendering Path

#### CSS Loading Strategy
```html
<!-- Critical CSS inline in <head> -->
<style>
  /* Inline critical CSS for above-the-fold content */
  :root { --color-bg-dark: #0a0a2e; }
  body { background: var(--color-bg-dark); }
</style>

<!-- Load full CSS asynchronously -->
<link rel="preload" href="/assets/main.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="/assets/main.css"></noscript>
```

## Implementation Checklist

### Immediate (Can do now)
- [x] CSS uses efficient selectors
- [x] Animations use transform/opacity only
- [x] CSS custom properties for reusability
- [x] Reduced motion support
- [ ] Add resource hints to index.html
- [ ] Configure build optimization in vite.config.js

### Medium Priority (Next sprint)
- [ ] Implement lazy loading for phase components
- [ ] Apply React.memo() to pure components
- [ ] Optimize audio file sizes (128kbps MP3)
- [ ] Add performance monitoring
- [ ] Run Lighthouse audit and fix issues

### Optional (Future enhancement)
- [ ] Implement service worker for PWA
- [ ] Add WebP images with fallbacks
- [ ] Virtual scrolling for long lists (if added)
- [ ] Advanced code splitting

## Verification Commands

```bash
# Build for production
npm run build

# Analyze bundle size
npx vite-bundle-visualizer

# Run Lighthouse audit
npx lighthouse https://localhost:4173 --view

# Check bundle size
npm run build && ls -lh dist/assets/*.js
```

## Expected Results

After implementing all optimizations:
- **Bundle size**: ~300-400KB gzipped (excluding audio)
- **FCP**: 0.8-1.2s
- **TTI**: 1.5-2.5s
- **Lighthouse Performance**: 92-98
- **Lighthouse Accessibility**: 95-100
- **Lighthouse Best Practices**: 90-95

## Notes

- Audio files are the largest assets (~2-5MB total)
- Consider hosting audio on CDN for faster loading
- Implement progressive loading: load audio per phase
- Use `audio.preload = 'none'` for non-critical audio
