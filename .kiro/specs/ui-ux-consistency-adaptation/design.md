# Design Document
## UI/UX Consistency Adaptation for Subtraction Within 100 Module

## Introduction

This design document provides the technical architecture and implementation plan for adapting the Subtraction within 100 module's UI/UX to match the reference numberbound repository (https://github.com/dsamyak/numberbound). The design ensures visual consistency across the Intellia SG Grade 2 Math platform while preserving all subtraction-specific content.

The implementation leverages the existing React 18 + Vite architecture, maintains the current state management patterns, and applies the reference module's exact styling through CSS design tokens and component refinement.

## High-Level Architecture

### System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     Application Layer                        │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐           │
│  │   App.jsx  │─▶│  Reducer   │─▶│ LocalStore │           │
│  └────────────┘  └────────────┘  └────────────┘           │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                  Design System Layer                         │
│  ┌──────────────────────────────────────────────────────┐  │
│  │           tokens.css (Design Tokens)                  │  │
│  │  • Colors  • Typography  • Spacing                    │  │
│  │  • Shadows • Transitions • Animations                 │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │          components.css (Reusable Styles)             │  │
│  │  • Glass Cards  • Buttons  • Progress                 │  │
│  │  • Feedback    • Badges   • Modals                    │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │         animations.css (Keyframes & Effects)          │  │
│  │  • Entrance  • Exit  • Feedback                       │  │
│  │  • Glow      • Float  • Pulse                         │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                   Component Layer                            │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                 │
│  │ Shared/  │  │ Phases/  │  │ Quiz/    │                 │
│  │ TopBar   │  │ Wonder   │  │ Question │                 │
│  │ Button   │  │ Story    │  │ WorldMap │                 │
│  │ Card     │  │ Simulate │  │ Complete │                 │
│  │ Toast    │  │ Reflect  │  │          │                 │
│  └──────────┘  └──────────┘  └──────────┘                 │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                    Content Layer                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              Subtraction Content                      │  │
│  │  • Lily & Max Story  • Fact Families                  │  │
│  │  • Base-10 Blocks    • 100 Questions                  │  │
│  │  • 10 Worlds         • Badges                         │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### Design Principles

1. **Separation of Concerns**: Design tokens separate from component styles, component styles separate from layout
2. **Progressive Enhancement**: Base styles work everywhere, enhanced animations for modern browsers
3. **Mobile-First**: Core styles target mobile, enhanced for tablet/desktop
4. **Accessibility-First**: WCAG AA compliance built into design tokens
5. **Content Preservation**: UI changes never affect subtraction-specific content

## Design Token System

### Token Architecture

Design tokens are defined in `tokens.css` as CSS custom properties and organized into logical categories. This approach ensures consistency, enables theme flexibility, and provides a single source of truth for design values.


### Color Tokens

```css
:root {
  /* Primary Colors */
  --color-blue-deep: #1a237e;
  --color-blue-mid: #283593;
  --color-blue-bright: #3f51b5;
  
  /* Accent Colors */
  --color-gold: #ffc107;
  --color-gold-light: #ffd54f;
  --color-gold-dark: #f9a825;
  --color-coral: #ff7043;
  
  /* Purple Tones */
  --color-purple-deep: #2d1b69;
  --color-purple-mid: #4a2c8a;
  --color-purple-light: #7c5cbf;
  
  /* Feedback Colors */
  --color-green: #4caf50;
  --color-green-light: #81c784;
  --color-red: #ef5350;
  --color-red-light: #ef9a9a;
  
  /* Surface Colors */
  --color-bg-dark: #0a0a2e;
  --color-bg-card: rgba(30, 30, 100, 0.7);
  --color-bg-glass: rgba(255, 255, 255, 0.06);
  
  /* Text Colors */
  --color-text-primary: #ffffff;
  --color-text-secondary: rgba(255, 255, 255, 0.7);
  --color-text-muted: rgba(255, 255, 255, 0.4);
  --color-text-dark: #1a1a2e;
}
```

### Typography Tokens

```css
:root {
  /* Font Families */
  --font-display: "Fredoka", sans-serif;
  --font-body: "Nunito", sans-serif;
  
  /* Font Sizes */
  --font-size-xs: 0.65rem;
  --font-size-sm: 0.85rem;
  --font-size-base: 1rem;
  --font-size-md: 1.1rem;
  --font-size-lg: 1.3rem;
  --font-size-xl: 1.6rem;
  --font-size-2xl: 2rem;
  --font-size-3xl: 2.5rem;
  --font-size-4xl: 3.5rem;
  
  /* Font Weights */
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  /* Line Heights */
  --line-height-tight: 1.2;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.6;
  --line-height-loose: 1.7;
}
```

### Spacing Tokens

```css
:root {
  /* Spacing Scale */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  
  /* Border Radius */
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-xl: 32px;
  --radius-full: 9999px;
}
```

### Shadow & Effect Tokens

```css
:root {
  /* Shadows */
  --shadow-card: 0 8px 32px rgba(0, 0, 0, 0.3);
  --shadow-button: 0 4px 15px rgba(0, 0, 0, 0.3);
  --shadow-glow: 0 0 30px rgba(124, 92, 191, 0.3);
  --shadow-glow-gold: 0 0 12px rgba(255, 193, 7, 0.4);
  
  /* Glassmorphism */
  --glass-blur: blur(20px);
  --glass-blur-heavy: blur(30px);
  --glass-bg: rgba(255, 255, 255, 0.06);
  --glass-border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### Transition & Animation Tokens

```css
:root {
  /* Transitions */
  --transition-fast: 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-base: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Easing Curves */
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
}
```

## Component Specifications

### 1. Glass Card Component

**Purpose**: Reusable card container with glassmorphism effect matching Reference_Module

**Visual Properties**:
- Background: `rgba(30, 30, 100, 0.7)` with `backdrop-filter: blur(20px)`
- Border: `1px solid rgba(255, 255, 255, 0.1)`
- Border Radius: `var(--radius-lg)` or `var(--radius-xl)` depending on use case
- Box Shadow: `var(--shadow-card)`
- Padding: `32px` (desktop), `24px` (mobile)

**CSS Implementation**:
```css
.glass-card {
  background: var(--color-bg-card);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: var(--glass-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  padding: var(--space-8);
  transition: var(--transition-base);
}

@media (max-width: 768px) {
  .glass-card {
    padding: var(--space-6);
  }
}
```

**Variants**:
- `.glass-card-xl`: Uses `border-radius: var(--radius-xl)`
- `.glass-card-light`: Uses `rgba(255, 255, 255, 0.14)` background
- `.glass-card-compact`: Reduced padding `20px`

**Usage Locations**: Wonder phase question card, Story phase card, Simulate phase stations, Reflect phase card, World completion modal

### 2. Button Components

**Primary Button** (Gold Gradient):
- Background: `linear-gradient(135deg, #ffc107, #f9a825)`
- Color: `#1a1a2e`
- Padding: `16px 32px`
- Border Radius: `var(--radius-md)`
- Font: `var(--font-display)`, `1.1rem`, `600` weight
- Shadow: `var(--shadow-button)`
- Hover: `translateY(-2px)`, shadow increase
- Active: `translateY(0)`
- Disabled: `opacity: 0.5`, `cursor: not-allowed`

**CSS Implementation**:
```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 32px;
  border: none;
  border-radius: var(--radius-md);
  font-family: var(--font-display);
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
  transition: var(--transition-base);
  box-shadow: var(--shadow-button);
  min-width: 160px;
  min-height: 44px; /* WCAG AA touch target */
}

.btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
}

.btn:active:not(:disabled) {
  transform: translateY(0);
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-primary {
  background: linear-gradient(135deg, var(--color-gold), var(--color-gold-dark));
  color: var(--color-text-dark);
}
```

**Button Variants**:


1. **Secondary Button**: White background `rgba(255,255,255,0.95)`, dark blue text
2. **Outline Button**: Transparent background, `2px solid rgba(255,255,255,0.3)` border, white text
3. **Green Button**: Green gradient `linear-gradient(135deg, #4caf50, #2e7d32)`, white text
4. **Purple Button** (Wonder phase): Purple gradient `linear-gradient(135deg, #6366f1, #8b5cf6)`, white text
5. **Small Button**: Reduced padding `10px 20px`, font size `0.9rem`
6. **Large Button**: Increased padding `20px 48px`, font size `1.3rem`

### 3. Phase Progress Tracker (Journey Bar)

**Visual Structure**:
```
Fixed top bar with:
├── 5 dots (Wonder, Story, Simulate, Play, Reflect)
├── Connecting lines between dots
├── Phase labels below dots (hidden on mobile <600px)
└── Glassmorphism background
```

**Dot States**:
1. **Active**: Gold background `#ffc107`, gold glow shadow, dark text `#1a1a2e`
2. **Completed**: Green background `#4caf50`, white text
3. **Inactive**: Muted white `rgba(255,255,255,0.1)`, `2px` border, muted text

**CSS Implementation**:
```css
.journey-bar {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 90;
  display: flex;
  align-items: center;
  gap: 0;
  padding: 10px 24px;
  background: rgba(10, 10, 46, 0.85);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-radius: 0 0 var(--radius-lg) var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-top: none;
}

.journey-step {
  display: flex;
  align-items: center;
  gap: 6px;
}

.journey-step-dot {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--color-text-muted);
  transition: var(--transition-base);
}

.journey-step.active .journey-step-dot {
  background: var(--color-gold);
  border-color: var(--color-gold);
  color: var(--color-text-dark);
  box-shadow: var(--shadow-glow-gold);
}

.journey-step.completed .journey-step-dot {
  background: var(--color-green);
  border-color: var(--color-green);
  color: white;
}

.journey-connector {
  width: 20px;
  height: 2px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 4px;
}

.journey-connector.filled {
  background: var(--color-green);
}

@media (max-width: 600px) {
  .journey-step-dot {
    width: 24px;
    height: 24px;
    font-size: 0.6rem;
  }
  
  .journey-step-label {
    display: none;
  }
}
```

### 4. Question Card & Answer Options

**Question Card Structure**:
- Background: `rgba(30, 30, 100, 0.6)` with `backdrop-filter: blur(20px)`
- Padding: `32px` (desktop), `24px` (mobile <480px)
- Border Radius: `var(--radius-lg)`
- Text Alignment: Center

**Question Text**:
- Font: `var(--font-display)`
- Size: `1.3rem`
- Weight: `500`
- Line Height: `1.6`

**Answer Options Grid**:
- Layout: 2-column grid, `12px` gap
- Mobile <480px: Single column

**Option Button States**:
1. **Default**: `2px solid rgba(255,255,255,0.1)` border, `rgba(255,255,255,0.05)` background
2. **Hover**: Gold border, gold background `rgba(255,193,7,0.1)`, `scale(1.02)` transform
3. **Selected**: Gold border `#ffc107`, gold background `rgba(255,193,7,0.15)`
4. **Correct**: Green border `#4caf50`, green background `rgba(76,175,80,0.2)`, `correctPulse` animation
5. **Wrong**: Red border `#ef5350`, red background `rgba(239,83,80,0.2)`, `shake` animation
6. **Disabled**: `opacity: 0.6`, `pointer-events: none`

**CSS Implementation**:
```css
.question-card {
  background: rgba(30, 30, 100, 0.6);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  text-align: center;
}

.question-text {
  font-family: var(--font-display);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  margin: 16px 0 24px;
}

.options-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 16px;
}

@media (max-width: 480px) {
  .options-grid {
    grid-template-columns: 1fr;
  }
  
  .question-card {
    padding: var(--space-6);
  }
}
```

### 5. Gamification HUD

**Layout Structure**:

```
Horizontal flex container with space-between:
├── XP Counter (⚡ icon + number)
├── Streak Counter (🔥 icon + number, visible when streak >= 3)
└── Hearts (❤️ × remaining attempts)
```

**XP Counter Styling**:
- Container: Pill shape `border-radius: 9999px`
- Background: `rgba(255, 255, 255, 0.08)` with `backdrop-filter: blur(10px)`
- Padding: `6px 16px`
- Icon: Lightning bolt ⚡ at `1rem` size
- Number: Bold font, `1rem` size

**Floating XP Popup**:
- Position: Fixed at `top: 80px, right: 30px`
- Background: Gold gradient `linear-gradient(135deg, #ffc107, #f9a825)`
- Animation: `bounceIn` entrance + `floatUp` (translateY 0 to -50px, opacity 1 to 0 over 1.5s)
- Z-index: 300

**CSS Implementation**:
```css
.hud {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 700px;
  padding: 12px 0;
  margin-bottom: 8px;
}

.hud-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 16px;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  font-weight: 700;
  font-size: 1rem;
}

.hearts {
  display: flex;
  gap: 4px;
  font-size: 1.4rem;
}

.xp-popup {
  position: fixed;
  top: 80px;
  right: 30px;
  z-index: 300;
  padding: 10px 20px;
  border-radius: var(--radius-full);
  background: linear-gradient(135deg, var(--color-gold), var(--color-gold-dark));
  color: var(--color-text-dark);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.1rem;
  animation: bounceIn 0.4s ease, floatUp 1.5s ease forwards;
  box-shadow: 0 4px 15px rgba(255, 193, 7, 0.4);
}
```

### 6. World Map Cards

**World Card Visual Structure**:
```
Vertical list layout:
├── World Icon (2.5rem emoji)
├── World Name (Fredoka, 1.2rem, 600 weight)
├── World Description (0.8rem, muted color)
├── Star Indicators (3 stars max, filled based on score)
└── Play/Lock indicator
```

**World Card States**:
1. **Unlocked**: Hoverable, `translateY(-4px)` on hover, border color changes to world theme
2. **Locked**: `opacity: 0.4`, `grayscale(0.5)` filter, lock icon 🔒 in top-right
3. **Completed**: Green border `#4caf50`, earned stars displayed

**World Connectors**:
- Vertical lines between cards: `3px` width, `20px` height
- Green when path unlocked, muted when locked

**CSS Implementation**:
```css
.world-map {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 400px;
}

.world-card {
  position: relative;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: var(--transition-base);
}

.world-card.unlocked:hover {
  transform: translateY(-4px);
  border-color: var(--world-theme-color);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}

.world-card.locked {
  opacity: 0.4;
  cursor: not-allowed;
  filter: grayscale(0.5);
}

.world-card.completed {
  border-color: var(--color-green);
}
```

### 7. World Completion Modal

**Modal Structure**:

```
Centered modal with glass card:
├── Celebration Icon 🎉 (3rem size)
├── "World Complete!" Title (Fredoka, 1.6rem, 600 weight)
├── Score Display (fraction format "8/10", 2rem, 700 weight, gold color)
├── Star Animation (3 stars, sequential bounceIn with 0.1s stagger)
├── XP Earned Display (gold color, 600 weight)
└── Action Buttons (Next World / Back to Map)
```

**Visual Properties**:
- Background: `rgba(30, 30, 100, 0.7)` with `backdrop-filter: blur(20px)`
- Padding: `40px`
- Border Radius: `var(--radius-xl)`
- Entrance Animation: `bounceIn 0.5s ease`

**Star Animation Sequence**:
1. Star 1: `animation-delay: 0s`
2. Star 2: `animation-delay: 0.1s`
3. Star 3: `animation-delay: 0.2s`

**Unlock Gate Logic**:
- If score < 5/10: Show "Try Again" message, disable "Next World" button

**CSS Implementation**:
```css
.world-complete-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 200;
  animation: fadeIn 0.3s ease;
}

.world-complete-card {
  background: var(--color-bg-card);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-xl);
  padding: var(--space-10);
  text-align: center;
  max-width: 450px;
  width: 100%;
  animation: bounceIn 0.5s ease;
  box-shadow: var(--shadow-card);
}

.world-complete-stars {
  display: flex;
  justify-content: center;
  gap: 8px;
  font-size: 2rem;
  margin: 16px 0;
}

.world-star {
  opacity: 0.2;
  transition: var(--transition-base);
}

.world-star.earned {
  opacity: 1;
  animation: bounceIn 0.4s ease backwards;
}

.world-star.earned:nth-child(1) {
  animation-delay: 0s;
}

.world-star.earned:nth-child(2) {
  animation-delay: 0.1s;
}

.world-star.earned:nth-child(3) {
  animation-delay: 0.2s;
}
```

### 8. Badge Toast Notifications

**Toast Structure**:
```
Slide-in from right edge:
├── Badge Icon (2rem size)
└── Badge Name (1rem size, 600 weight)
```

**Visual Properties**:
- Position: Fixed at `top: 90px, right: 20px`
- Background: `rgba(255, 255, 255, 0.15)` with `backdrop-filter: blur(10px)`
- Padding: `16px`
- Border Radius: `var(--radius-md)`
- Shadow: `var(--shadow-card)`
- Z-index: 250

**Animation Sequence**:
1. **Entrance**: `slideInRight` (translateX 100% to 0) over 0.5s ease
2. **Display**: Visible for 3 seconds
3. **Exit**: `fadeOut` (opacity 1 to 0) over 0.3s ease

**Queue Behavior**:
- When multiple badges earned, stagger displays by 0.5s

**CSS Implementation**:
```css
.badge-toast {
  position: fixed;
  top: 90px;
  right: 20px;
  z-index: 250;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: var(--space-4);
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: var(--shadow-card);
  animation: slideInRight 0.5s ease;
}

.badge-toast.exiting {
  animation: fadeOut 0.3s ease forwards;
}

.badge-icon {
  font-size: 2rem;
}

.badge-name {
  font-size: 1rem;
  font-weight: 600;
}
```

## Animation Specifications

### Core Keyframe Animations

**1. fadeIn**:
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

**2. bounceIn**:
```css
@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  50% {
    transform: scale(1.03);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
```

**3. slideUp**:
```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**4. shake** (error feedback):
```css
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-10px); }
  50% { transform: translateX(10px); }
  75% { transform: translateX(-10px); }
}
```

**5. correctPulse** (success feedback):
```css
@keyframes correctPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
```

**6. pulse** (glow effect):
```css
@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.8; }
}
```

**7. floatUp** (XP popup):

```css
@keyframes floatUp {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-50px);
    opacity: 0;
  }
}
```

**8. slideInRight** (toast notification):
```css
@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
```

**9. fadeOut**:
```css
@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}
```

**10. floatAround** (floating background numbers):
```css
@keyframes floatAround {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-20px) rotate(5deg);
  }
  50% {
    transform: translateY(-10px) rotate(-5deg);
  }
  75% {
    transform: translateY(-30px) rotate(3deg);
  }
}
```

### Reduced Motion Support

**Accessibility Requirement**: Disable all animations for users with `prefers-reduced-motion` preference.

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Responsive Design Strategy

### Breakpoint System

```css
/* Mobile First Approach */
/* Base: 375px+ (mobile) */
/* Tablet: 768px+ */
/* Desktop: 1024px+ */

:root {
  --breakpoint-sm: 480px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
}
```

### Mobile (<768px)

**Layout Adjustments**:
- Single-column stacked layout
- Sidebar hidden
- Horizontal padding: `16px`
- Question options: Single column grid
- Reduced button padding: `12px 24px`
- Stack navigation buttons vertically

**Typography Scaling**:
- Title: `1.8rem` → down from `2.5rem`
- Body: `0.9rem` → down from `1rem`
- Phase labels: Hidden when width < 600px
- Mascot size: `60px` → down from `80px`

**Example Media Queries**:
```css
@media (max-width: 768px) {
  .journey-bar {
    padding: 8px 16px;
  }
  
  .glass-card {
    padding: var(--space-6);
  }
  
  .btn {
    padding: 12px 24px;
    font-size: 0.95rem;
  }
  
  .story-card,
  .question-card {
    max-width: 100%;
  }
}

@media (max-width: 600px) {
  .journey-step-label {
    display: none;
  }
  
  .journey-step-dot {
    width: 24px;
    height: 24px;
  }
}

@media (max-width: 480px) {
  .question-card {
    padding: var(--space-6);
  }
  
  .options-grid {
    grid-template-columns: 1fr;
  }
  
  .mascot {
    width: 60px;
    height: 60px;
    font-size: 1.8rem;
  }
  
  .intro-title {
    font-size: clamp(1.5rem, 5vw, 2rem);
  }
}
```

### Tablet (768px - 1023px)

**Layout Adjustments**:
- 2-column layout enabled
- Sidebar visible with phase map
- Increased content padding
- Question options: 2-column grid maintained
- Larger interactive elements

### Desktop (1024px+)

**Layout Adjustments**:
- Wide layout with increased spacing
- Max content width: `900px`
- Larger visual elements
- Enhanced animations
- Increased hover effects

**Typography Scaling**:
- Fluid typography using `clamp()`
- Example: `font-size: clamp(1rem, 2vw, 1.3rem)`

## Phase-Specific Design Details

### Wonder Phase

**Visual Treatment**:
- Centered layout
- Padding: `80px 24px 40px`
- Purple gradient question mark icon: `120×120px`, `linear-gradient(135deg, #6366f1, #8b5cf6)`
- Glowing aura: `radial-gradient` with 2s pulse animation
- Mascot entrance: fade-in + translateY animation (0.5s, 0.3s delay)
- Question card: Glassmorphism + slide-up animation (0.6s, 0.5s delay)
- Curiosity emoji: 🤔 at `3rem` size
- "Let's Find Out" button: Purple gradient with sparkle animation on hover

**Animation Sequence**:
1. Question mark scales from 0 to 1 (0.6s, bounce ease)
2. Mascot fades in from below (0.5s, 0.3s delay)
3. Question card slides up (0.6s, 0.5s delay)
4. Button becomes visible (0.5s)

### Story Phase

**Visual Treatment**:
- Story card with glass effect
- Progress bar: Gold-purple gradient fill
- Image section: `240px` height, gradient overlay on bottom `60px`
- Story title: Fredoka, `1.3rem`, `600` weight, gold color
- Story text animation: fade-in + slide-up (0.5s) on panel change
- Navigation dots: 6 dots (active in gold, completed in green)
- Panel transition: Flip animation (opacity + scale)

**Story Panels**: 6 total featuring Lily & Max at sandwich shop

### Simulate Phase

**Station Progress**:
- 3-dot indicator (Base-10, Fact Family, Inverter)
- Same styling as journey bar dots

**Tip Box**:
- Gold background: `rgba(255,193,7,0.1)`
- Gold border: `1px solid rgba(255,193,7,0.2)`
- Border radius: `16px`
- Light gold text

**Station A (Base-10 Blocks)**:
- Tens rods: `32×120px`, orange gradient, 2px `#ffb74d` border
- Ones cubes: `32×32px`, blue gradient, 2px `#64b5f6` border
- BounceIn animation when added

**Station B (Fact Family Triangle)**:
- Three connected circles
- Dashed circle for missing number
- Drag-and-drop interaction

**Station C (Number Inverter)**:
- Number pad: 3×4 grid
- Cells: `50px` each, `16px` border-radius
- Gold border on hover

### Play Phase

**World Map Layout**:
- Vertical list, `16px` gap
- Max width: `400px`
- Centered alignment

**World Theme Colors** (10 worlds):
1. Sunshine Meadow: `#ffd54f`
2. Candy Cavern: `#ff7043`
3. Crystal Lagoon: `#42a5f5`
4. Jungle Temple: `#66bb6a`
5. Thunder Mountain: `#7e57c2`
6. Star Harbour: `#ffa726`
7. Dragon's Library: `#ef5350`
8. Neon City: `#26c6da`
9. Aurora Peak: `#ab47bc`
10. The Number Vault: `#ffc107`

### Reflect Phase

**Visual Treatment**:
- Glass card with slideUp animation
- Mascot with speech bubble
- Multiple-choice options: Vertical list, `12px` gap
- Option padding: `16px 20px`
- Selected option: Gold border + gold background
- Question counter: "Question 1 of 4" format
- "Complete Journey" button: Green gradient when all answered

### Results Screen

**Visual Treatment**:
- Centered layout with celebration theme
- Trophy icon: 🏆 at `4rem` size
- "Journey Complete!" title: Fredoka, `2.5rem`, `700` weight
- XP circle badge: `160px` diameter, `6px` gold border
- Earned badges grid: `16px` gap
- Phase completion checkmarks: Green color
- Confetti/particle effects in background

## CSS Architecture & File Organization

### Proposed File Structure

```
src/
├── styles/
│   ├── tokens.css          # Design tokens (colors, typography, spacing)
│   ├── reset.css           # CSS reset & base styles
│   ├── components.css      # Reusable component styles
│   ├── animations.css      # Keyframe animations
│   ├── layout.css          # Layout utilities & grid
│   └── responsive.css      # Media queries & breakpoints
├── components/
│   ├── shared/
│   │   ├── Button.jsx
│   │   ├── Button.module.css
│   │   ├── GlassCard.jsx
│   │   ├── GlassCard.module.css
│   │   ├── TopBar.jsx
│   │   ├── TopBar.module.css
│   │   ├── BadgeToast.jsx
│   │   ├── FloatingNumbers.jsx
│   │   └── ...
│   ├── phases/
│   │   ├── IntroScreen.jsx
│   │   ├── WonderPhase.jsx
│   │   ├── StoryPhase.jsx
│   │   ├── ReflectPhase.jsx
│   │   ├── ResultsScreen.jsx
│   │   └── ...
│   ├── quiz/
│   │   ├── PlayPhase.jsx
│   │   ├── QuestionCard.jsx
│   │   ├── WorldMap.jsx
│   │   ├── WorldCompleteModal.jsx
│   │   └── ...
│   └── simulations/
│       ├── SimulatePhase.jsx
│       ├── StationA.jsx
│       ├── StationB.jsx
│       ├── StationC.jsx
│       └── ...
└── App.css                 # Global styles & imports
```

### CSS Import Strategy

**App.css** serves as the main entry point:
```css
/* Design System */
@import './styles/tokens.css';
@import './styles/reset.css';

/* Core Styles */
@import './styles/animations.css';
@import './styles/components.css';
@import './styles/layout.css';
@import './styles/responsive.css';

/* Global Overrides */
/* ... */
```

### Component-Specific CSS

Use CSS Modules for component-specific styles to avoid global namespace pollution:
- `Button.module.css`
- `GlassCard.module.css`
- `TopBar.module.css`
- etc.

**Benefits**:
- Scoped styles prevent conflicts
- Better tree-shaking in production
- Clear component ownership
- Easier to maintain

## Integration Strategy

### Phase 1: Design Token Setup
1. Create `src/styles/tokens.css` with all design tokens
2. Create `src/styles/animations.css` with keyframe animations
3. Update `App.css` to import token files
4. Test token availability in browser DevTools

### Phase 2: Global Component Refactor
1. Extract reusable button styles into `src/styles/components.css`
2. Extract glass card styles into shared component
3. Refactor existing components to use design tokens
4. Replace hard-coded values with CSS variables

### Phase 3: Component-by-Component Migration
**Priority Order**:
1. TopBar / Journey Bar
2. Buttons (Primary, Secondary, Outline)
3. GlassCard wrapper
4. IntroScreen
5. WonderPhase
6. StoryPhase
7. SimulatePhase stations
8. PlayPhase (WorldMap, QuestionCard)
9. World Completion Modal
10. Badge Toast
11. ReflectPhase
12. ResultsScreen

### Phase 4: Responsive Design Application
1. Add mobile-specific media queries
2. Test on real devices (iOS Safari, Android Chrome)
3. Adjust touch targets to meet WCAG AA (44×44px minimum)
4. Test keyboard navigation

### Phase 5: Animation Polish
1. Apply entrance animations to phase transitions
2. Add feedback animations to interactions
3. Test performance (60fps target)
4. Implement reduced-motion support

### Phase 6: Accessibility Audit
1. Run axe DevTools audit
2. Test with screen readers (NVDA, JAWS, VoiceOver)
3. Test keyboard-only navigation
4. Verify color contrast ratios
5. Add ARIA labels where needed

## Testing & Validation

### Visual Regression Testing
- Compare screenshots with Reference_Module
- Use tools like Percy or Chromatic for automated visual diffs
- Test across browsers (Chrome, Firefox, Safari, Edge)

### Responsive Testing
- Test on physical devices:
  - iPhone SE (375px)
  - iPad (768px)
  - Desktop (1024px+, 1920px)
- Use Chrome DevTools device emulation
- Test landscape and portrait orientations

### Accessibility Testing
- Automated: axe DevTools, Lighthouse
- Manual: Keyboard navigation, screen reader testing
- Color contrast: WebAIM Contrast Checker
- Touch target size: Manual measurement

### Performance Testing
- Lighthouse performance score: Target 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Bundle size: < 500KB gzipped (excluding audio)

### Cross-Browser Testing
- Chrome 100+
- Firefox 100+
- Safari 15+
- Edge 100+

## Implementation Notes

### Existing Code Preservation
- Do NOT modify subtraction-specific content in `src/data/`
- Do NOT change state management logic in `src/store/reducer.js`
- Do NOT alter audio integration hooks in `src/hooks/useAudio.js`
- Preserve all question types, worlds, story panels, badges

### Gradual Migration
- Apply new design system incrementally
- Test each component after migration
- Maintain backward compatibility during transition
- Use feature flags if needed for A/B testing

### Code Quality Standards
- Follow existing React patterns (hooks, functional components)
- Maintain consistent naming conventions
- Add PropTypes or TypeScript types
- Write component-level documentation
- Keep CSS specificity low (avoid `!important`)

### Performance Considerations
- Lazy-load phase components using `React.lazy()`
- Preload critical assets (fonts, initial CSS)
- Optimize images (WebP format, responsive images)
- Debounce rapid interactions
- Use `React.memo()` for expensive renders

## Success Criteria

### Visual Consistency
✓ Color palette matches Reference_Module exactly  
✓ Typography (fonts, sizes, weights) matches Reference_Module  
✓ Border radius values match Reference_Module  
✓ Shadow values match Reference_Module  
✓ Animations match Reference_Module timing and easing  
✓ Layout structure matches Reference_Module  

### Responsive Design
✓ Mobile layout (375px+) matches Reference_Module  
✓ Tablet layout (768px+) matches Reference_Module  
✓ Desktop layout (1024px+) matches Reference_Module  
✓ Touch targets meet 44×44px minimum  

### Accessibility
✓ WCAG AA contrast ratios achieved  
✓ Keyboard navigation functional  
✓ Screen reader compatible  
✓ Reduced motion support implemented  
✓ Semantic HTML structure maintained  

### Performance
✓ Initial load time < 3s on 4G  
✓ Lighthouse score > 90  
✓ Bundle size < 500KB gzipped  
✓ 60fps animation performance  

### Content Preservation
✓ All 100 questions preserved  
✓ Lily & Max story intact  
✓ 10 themed worlds unchanged  
✓ Fact family triangles functional  
✓ Base-10 blocks interactive  
✓ Badge system operational  
✓ Gamification rules unchanged  

## Conclusion

This design document provides a comprehensive blueprint for adapting the Subtraction within 100 module's UI/UX to match the reference numberbound repository. By following the design token system, component specifications, animation standards, and responsive design strategy outlined here, the implementation will achieve visual consistency across the Intellia SG Grade 2 Math platform while preserving all subtraction-specific educational content.

The phased integration strategy ensures a smooth migration with minimal risk, while the testing and validation criteria guarantee quality and accessibility compliance. The design maintains the existing React architecture and state management patterns, requiring only CSS and component-level refactoring without fundamental architectural changes.

