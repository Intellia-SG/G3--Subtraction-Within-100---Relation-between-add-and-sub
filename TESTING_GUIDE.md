# Testing Guide (Tasks 27-30)

This document provides comprehensive testing procedures for verifying the UI/UX consistency implementation.

---

## Task 27: Cross-Browser Testing

### Browsers to Test
- ✅ Chrome 100+ (primary development browser)
- ✅ Firefox 100+
- ✅ Safari 15+ (macOS/iOS)
- ✅ Edge 100+

### Testing Checklist

#### Chrome Testing
```bash
# Test in Chrome
1. Open Chrome DevTools (F12)
2. Check Console for errors
3. Test all phases (Intro → Wonder → Story → Simulate → Play → Reflect → Results)
4. Verify animations are smooth
5. Test responsive design (Device Toolbar)
6. Run Lighthouse audit
```

#### Firefox Testing
- **Glassmorphism**: Check `backdrop-filter` support
- **CSS Grid**: Verify options-grid layout
- **Animations**: Test all keyframe animations
- **Audio**: Verify audio playback works
- **Known issues**: Older Firefox may not support backdrop-filter

**Fallback for no backdrop-filter support:**
```css
@supports not (backdrop-filter: blur(20px)) {
  .glass-card {
    background: rgba(30, 30, 100, 0.95); /* More opaque fallback */
  }
}
```

#### Safari Testing
- **iOS Safari**: Test touch interactions
- **Backdrop filter**: Needs `-webkit-` prefix (already added)
- **Flexbox gaps**: Check `gap` property support
- **Audio autoplay**: iOS restricts autoplay (verify user interaction triggers audio)

**iOS-specific considerations:**
```css
/* Safari-specific fixes already in place */
.glass-card {
  -webkit-backdrop-filter: var(--glass-blur); /* ✅ Already included */
}
```

#### Edge Testing
- Modern Edge (Chromium-based) should match Chrome behavior
- Test on Windows 10/11
- Verify touch interactions on Surface devices

### Browser-Specific Issues Documentation

Create a file tracking known issues:
```markdown
# Known Browser Limitations

## Safari 15
- ✅ backdrop-filter works with -webkit- prefix
- ⚠️ Audio autoplay requires user interaction
- ✅ All animations work correctly

## Firefox 100+
- ✅ Most features work
- ⚠️ backdrop-filter may have performance impact on older hardware
- ✅ Fallback provided

## Mobile Browsers
- ✅ Touch targets meet 44×44px minimum
- ✅ Responsive design works on all screen sizes
- ⚠️ Landscape mode on small phones (<600px height) may need scrolling
```

### Cross-Browser Testing Tools
```bash
# Use BrowserStack or similar for real device testing
# Free alternatives:
# - Firefox Developer Edition
# - Safari Technology Preview
# - Chrome Canary

# For automated testing:
npm install --save-dev @playwright/test
```

---

## Task 28: Visual Regression Testing

### Manual Visual Comparison

#### Reference Module Screenshots
Take screenshots of numberbound reference at these breakpoints:
- Mobile: 375px width
- Tablet: 768px width
- Desktop: 1024px width

#### Comparison Points
For each phase, verify:
1. **Colors match exactly** (use color picker tool)
2. **Font sizes match** (inspect computed styles)
3. **Spacing matches** (measure padding/margins)
4. **Border radius matches** (check all rounded corners)
5. **Shadows match** (compare box-shadow values)
6. **Animations match** (timing and easing)

### Visual Comparison Checklist

#### IntroScreen
- [ ] Module badge matches (background, border, text)
- [ ] Title font size and weight correct
- [ ] Journey preview grid layout matches
- [ ] Learning objectives box styling correct
- [ ] Start button gradient matches

#### WonderPhase
- [ ] Purple gradient icon (120×120px)
- [ ] Glow effect visible and pulsing
- [ ] Question mark icon correct size
- [ ] Card glassmorphism matches
- [ ] Progress dots match reference

#### StoryPhase
- [ ] Progress bar gradient matches
- [ ] Image section height (240px)
- [ ] Gradient overlay on image bottom
- [ ] Story title gold color correct
- [ ] Navigation dots styling matches

#### SimulatePhase
- [ ] Station progress dots match journey bar style
- [ ] Tip box gold background/border correct
- [ ] Base-10 blocks colors match (orange/blue gradients)
- [ ] Equation display styling correct

#### PlayPhase
- [ ] World cards glassmorphism matches
- [ ] Hover effects correct
- [ ] Locked state opacity (0.4) and grayscale
- [ ] Question card layout matches
- [ ] Option buttons 2-column grid
- [ ] Feedback animations (shake, correctPulse)

#### ReflectPhase
- [ ] Reflection card glassmorphism
- [ ] Stats box styling matches
- [ ] Radio buttons with gold selected state
- [ ] Option hover effect (translateX 4px)

#### ResultsScreen
- [ ] Trophy icon size (4rem)
- [ ] XP circle (160px, 6px gold border)
- [ ] Stats grid 3 columns on desktop
- [ ] Badges grid layout correct
- [ ] Phase checkmarks green theme

### Automated Visual Testing (Optional)

```javascript
// Using Playwright for visual regression
const { test, expect } = require('@playwright/test');

test('IntroScreen matches reference', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await expect(page).toHaveScreenshot('intro-screen.png', {
    maxDiffPixels: 100
  });
});

test('WonderPhase matches reference', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.click('text=Start Journey');
  await expect(page).toHaveScreenshot('wonder-phase.png', {
    maxDiffPixels: 100
  });
});
```

### Color Verification Tool

```javascript
// DevTools console helper
function verifyColors() {
  const checks = [
    { selector: '.btn-p', property: 'background', expected: 'linear-gradient(135deg, #ffc107, #f9a825)' },
    { selector: '.glass-card', property: 'background', expected: 'rgba(30, 30, 100, 0.7)' },
    { selector: '.journey-step.active .journey-step-dot', property: 'background', expected: '#ffc107' }
  ];
  
  checks.forEach(check => {
    const el = document.querySelector(check.selector);
    if (el) {
      const computed = getComputedStyle(el)[check.property];
      console.log(`${check.selector}: ${computed === check.expected ? '✅' : '❌'} ${computed}`);
    }
  });
}
```

---

## Task 29: Content Preservation Verification

### Critical Content Verification

#### Question Bank Integrity
```javascript
// Verify question count
import { QUESTIONS } from './src/data/questionBank.js';
console.assert(QUESTIONS.length === 100, '❌ Expected 100 questions');
console.log('✅ 100 questions verified');

// Verify question structure
const sampleQuestion = QUESTIONS[0];
console.assert(sampleQuestion.q, '❌ Question missing');
console.assert(sampleQuestion.ans, '❌ Answer missing');
console.assert(Array.isArray(sampleQuestion.opts), '❌ Options missing');
console.log('✅ Question structure valid');
```

#### Story Content Verification
```javascript
import { PANELS } from './src/data/storyPanels.js';
console.assert(PANELS.length === 6, '❌ Expected 6 story panels');
console.log('✅ 6 story panels verified (Lily & Max)');

// Verify all panels have required fields
PANELS.forEach((panel, i) => {
  console.assert(panel.nar, `❌ Panel ${i} missing narration`);
  console.assert(panel.img, `❌ Panel ${i} missing image`);
});
console.log('✅ All story panels have required content');
```

#### Worlds Verification
```javascript
import { WORLDS } from './src/data/worlds.js';
console.assert(WORLDS.length === 10, '❌ Expected 10 worlds');
console.log('✅ 10 themed worlds verified');

// Verify world properties
WORLDS.forEach((world, i) => {
  console.assert(world.name, `❌ World ${i} missing name`);
  console.assert(world.emoji, `❌ World ${i} missing emoji`);
  console.assert(world.range, `❌ World ${i} missing question range`);
});
console.log('✅ All worlds have required properties');
```

#### Badge System Verification
```javascript
import { BADGES } from './src/data/badges.js';
console.assert(BADGES.length === 6, '❌ Expected 6 badges');
console.log('✅ 6 badges verified');

// Verify badge structure
BADGES.forEach((badge, i) => {
  console.assert(badge.id, `❌ Badge ${i} missing id`);
  console.assert(badge.label, `❌ Badge ${i} missing label`);
  console.assert(badge.desc, `❌ Badge ${i} missing description`);
});
console.log('✅ All badges have required properties');
```

#### Gamification Rules Verification
```javascript
// Test XP calculation
import { calcXP } from './src/utils/gamification.js';
const xp1 = calcXP(true, 1); // correct answer, streak 1
console.assert(xp1 === 10, '❌ Base XP should be 10');
const xp3 = calcXP(true, 3); // correct answer, streak 3+
console.assert(xp3 === 15, '❌ Streak bonus should give 15 XP');
console.log('✅ XP calculation correct');

// Test star calculation
import { calcStars } from './src/utils/gamification.js';
console.assert(calcStars(5) === 1, '❌ 5/10 should give 1 star');
console.assert(calcStars(7) === 2, '❌ 7/10 should give 2 stars');
console.assert(calcStars(9) === 3, '❌ 9/10 should give 3 stars');
console.log('✅ Star calculation correct');
```

### Fact Family Triangle Logic
```javascript
// Verify inverse operation logic
const whole = 83, part1 = 48, part2 = 35;
console.assert(part1 + part2 === whole, '❌ Addition fact incorrect');
console.assert(whole - part1 === part2, '❌ Subtraction fact 1 incorrect');
console.assert(whole - part2 === part1, '❌ Subtraction fact 2 incorrect');
console.log('✅ Fact family triangle logic preserved');
```

### Base-10 Blocks Interaction
```javascript
// Verify block manipulation
// Test in Station A component
// 1. Start with 47 blocks
// 2. Remove 23 blocks
// 3. Result should be 24
// ✅ Visual: Orange tens rods (4 → 2), blue ones cubes (7 → 4)
```

### Session State Persistence
```javascript
// Test localStorage save/resume
localStorage.setItem('subtraction-progress', JSON.stringify({
  phase: 'wonder',
  timestamp: Date.now()
}));

// Reload page
// ✅ Should resume at Wonder phase
// ✅ Should clear after 24 hours

// Test 24-hour expiry
const oldState = {
  phase: 'story',
  timestamp: Date.now() - (25 * 60 * 60 * 1000) // 25 hours ago
};
localStorage.setItem('subtraction-progress', JSON.stringify(oldState));
// Reload page
// ✅ Should start fresh at IntroScreen
```

---

## Task 30: End-to-End Testing & Deployment Prep

### Complete User Journey Test

#### Full Journey Walkthrough
```
1. IntroScreen
   ✅ Click "Start Journey" button
   
2. WonderPhase (3 steps)
   ✅ See purple gradient icon with glow
   ✅ Click "Next" through 3 wonder steps
   ✅ See fact family triangle
   ✅ Click "Let's Find Out"
   
3. StoryPhase (6 panels)
   ✅ See Lily & Max story
   ✅ Progress bar fills as you advance
   ✅ Navigate through all 6 panels
   ✅ Click "Simulate!"
   
4. SimulatePhase (3 stations)
   Station A: Base-10 Blocks
   ✅ Remove 23 blocks from 47
   ✅ See equation update: 47 - 23 = 24
   ✅ Click "Next Station"
   
   Station B: Fact Family Triangle
   ✅ Complete triangle with missing number
   ✅ See 4 related facts
   ✅ Click "Next Station"
   
   Station C: Number Inverter
   ✅ Use number pad to find inverse
   ✅ Complete all 3 problems
   ✅ Advance to Play phase
   
5. PlayPhase (10 worlds)
   World 1:
   ✅ Answer 10 questions
   ✅ See correct/wrong feedback (correctPulse/shake)
   ✅ Earn XP (see floating popup)
   ✅ Complete world (score ≥ 5/10)
   ✅ See WorldCompleteModal with stars
   ✅ Click "Continue"
   
   ✅ Unlock World 2 (if scored ≥ 5)
   ✅ Complete remaining worlds
   ✅ Earn badges
   ✅ See BadgeToast notifications
   
6. ReflectPhase
   ✅ See journey stats (XP, stars, streak)
   ✅ Answer 4 reflection questions
   ✅ See radio buttons with gold selection
   ✅ Click "Complete My Journey"
   
7. ResultsScreen
   ✅ See trophy icon with bounceIn
   ✅ See XP circle badge
   ✅ See stats grid (stars, worlds, streak, etc.)
   ✅ See earned badges
   ✅ See phase completion checkmarks
   ✅ See key takeaway box
   ✅ Click "Start New Journey" to restart
```

### Audio Integration Testing
```
✅ Narration plays on phase entry (if audio enabled)
✅ Sound effects play for:
   - Correct answer (ding)
   - Wrong answer (buzz)
   - Badge earned (chime)
   - World complete (fanfare)
✅ Audio toggle button works
✅ Audio state persists across phases
```

### Session Persistence Testing
```
1. Start journey, reach Story phase
2. Refresh page
✅ Should resume at Story phase
✅ Should preserve: phase, world progress, XP, badges

3. Wait 25 hours (or modify timestamp)
4. Refresh page
✅ Should start fresh at IntroScreen
```

### Error Handling Testing
```
✅ Handle missing audio files gracefully
✅ Handle localStorage full/unavailable
✅ Handle invalid question data
✅ Handle network errors (if using external resources)
```

### Accessibility Testing with Keyboard
```
1. Tab through all interactive elements
✅ All buttons have visible focus indicator (gold outline)
✅ Tab order is logical (top to bottom, left to right)

2. Test keyboard navigation
✅ Enter key activates buttons
✅ Arrow keys navigate options (if implemented)
✅ Esc key closes modals

3. Screen reader testing
✅ All icons have aria-labels
✅ Phase progress has aria-current
✅ Live regions announce XP/badge changes
✅ Modals have role="dialog" and aria-modal
```

### Performance Testing
```bash
# Run Lighthouse audit
1. Build for production
npm run build

2. Serve production build
npm run preview

3. Run Lighthouse in Chrome DevTools
✅ Performance > 90
✅ Accessibility > 95
✅ Best Practices > 90
✅ SEO > 90

# Verify metrics
✅ FCP < 1.5s
✅ TTI < 3s
✅ LCP < 2.5s
✅ CLS < 0.1
```

### Deployment Checklist

#### Pre-Deployment
- [ ] All tests passing
- [ ] No console errors
- [ ] Lighthouse scores acceptable
- [ ] Accessibility audit passing
- [ ] Cross-browser testing complete
- [ ] Visual regression testing complete
- [ ] Content preservation verified
- [ ] Audio files optimized
- [ ] Images optimized (when added)

#### Build Configuration
```bash
# Create production build
npm run build

# Check bundle size
ls -lh dist/assets/

# Expected sizes (gzipped):
# - JavaScript: ~250-350 KB
# - CSS: ~30-50 KB
# - HTML: ~5 KB
# Total (excluding audio): < 500 KB ✅
```

#### Deployment Steps
```bash
# 1. Build
npm run build

# 2. Test production build locally
npm run preview
# Visit http://localhost:4173

# 3. Deploy to hosting (choose one)

# Option A: Vercel
npx vercel --prod

# Option B: Netlify
npx netlify deploy --prod

# Option C: GitHub Pages
npm run build
git add dist -f
git commit -m "Deploy"
git subtree push --prefix dist origin gh-pages

# Option D: Firebase
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

#### Post-Deployment Verification
```
✅ Visit production URL
✅ Test complete user journey
✅ Verify all assets load
✅ Check audio playback
✅ Test on mobile device
✅ Run Lighthouse on production URL
✅ Monitor error logs
✅ Verify analytics (if configured)
```

### Monitoring Setup (Post-Deployment)

```javascript
// Add error monitoring
window.addEventListener('error', (event) => {
  // Log to monitoring service (e.g., Sentry)
  console.error('Global error:', event.error);
});

// Add performance monitoring
window.addEventListener('load', () => {
  if ('performance' in window) {
    const perfData = performance.timing;
    const loadTime = perfData.loadEventEnd - perfData.navigationStart;
    
    // Send to analytics
    console.log('Page load time:', loadTime, 'ms');
  }
});
```

### Documentation for Stakeholders
Create a handoff document with:
- [ ] Deployment URL
- [ ] Admin access credentials (if applicable)
- [ ] Analytics dashboard link
- [ ] Known limitations
- [ ] Browser support matrix
- [ ] Maintenance procedures
- [ ] Contact information

---

## Success Criteria Summary

### Task 27: Cross-Browser Testing ✅
- [ ] Works on Chrome 100+
- [ ] Works on Firefox 100+
- [ ] Works on Safari 15+
- [ ] Works on Edge 100+
- [ ] Documented known issues
- [ ] Provided fallbacks

### Task 28: Visual Regression ✅
- [ ] All colors match Reference_Module
- [ ] All font sizes match
- [ ] All spacing matches
- [ ] All shadows match
- [ ] All animations match
- [ ] Screenshots taken and compared

### Task 29: Content Preservation ✅
- [ ] 100 questions intact
- [ ] 6 story panels (Lily & Max) intact
- [ ] 10 themed worlds intact
- [ ] 6 badges intact
- [ ] Fact family logic works
- [ ] Base-10 blocks work
- [ ] Gamification rules unchanged
- [ ] Session persistence works

### Task 30: End-to-End Testing ✅
- [ ] Complete journey tested
- [ ] All phases work correctly
- [ ] Audio integration works
- [ ] Session persistence works
- [ ] Error handling works
- [ ] Keyboard navigation works
- [ ] Lighthouse audit passing
- [ ] Production build deployed
- [ ] Post-deployment verified
- [ ] Stakeholder approval obtained
