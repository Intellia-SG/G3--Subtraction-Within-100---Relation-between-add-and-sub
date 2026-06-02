# Requirements Document
## UI/UX Consistency Adaptation for Subtraction Within 100 Module

## Introduction

This requirements document defines the complete adaptation of the Subtraction within 100 module's UI/UX to strictly match the reference numberbound repository (https://github.com/dsamyak/numberbound) while maintaining all unique content specific to the subtraction learning objectives. The module teaches Singapore Primary 2 students (ages 7-8) that addition and subtraction are inverse operations through a 5-phase learner journey: Wonder → Story → Simulate → Play → Reflect.

The adaptation ensures visual consistency across the Intellia SG Grade 2 Math platform by mirroring the exact styling, layout, navigation, animations, and user experience patterns from the reference implementation, while preserving the subtraction-specific content including characters (Lily & Max), story narratives, fact family triangles, inverse operations concepts, and the 100-question bank with 10-world progression.

## Glossary

- **System**: The Subtraction within 100 web application module
- **Reference_Module**: The numberbound repository at https://github.com/dsamyak/numberbound and its deployed version at https://numberbound.vercel.app/
- **UI_Component**: Any visual interface element including cards, buttons, navigation, typography, colors, spacing, and animations
- **Content_Element**: Subtraction-specific elements including characters, story, questions, simulations, and pedagogical content
- **Phase**: One of five learning stages (Wonder, Story, Simulate, Play, Reflect) in the learner journey
- **Viewport**: The visible screen area at different device breakpoints (mobile 375px+, tablet 768px+, desktop 1024px+)
- **Audio_System**: The ElevenLabs-based text-to-speech pipeline using Alice voice (ID: Xb7hH8MSUJpSbSDYk0k2)
- **Gamification_Element**: XP points, stars, streaks, badges, and progression mechanics
- **CPA_Station**: Concrete-Pictorial-Abstract learning station in Simulate phase
- **Question_Bank**: Collection of 100 unique practice questions across 10 themed worlds
- **Fact_Family_Triangle**: Visual representation showing relationship between two parts and a whole in addition/subtraction
- **Bar_Model**: Part-whole diagram showing whole divided into parts for subtraction visualization
- **Session_State**: User progress data persisted in localStorage for 24-hour resume capability

## Requirements

### Requirement 1: Visual Identity Consistency

**User Story:** As a learner, I want the Subtraction module to look and feel identical to other Intellia SG modules, so that I experience a familiar and cohesive learning environment.

#### Acceptance Criteria

1. THE System SHALL use the exact color palette from Reference_Module including primary blue (#1a237e, #283593, #3f51b5), accent gold (#ffc107, #ffd54f, #f9a825), soft coral (#ff7043), purple tones (#2d1b69, #4a2c8a, #7c5cbf), and white card backgrounds with rgba(30, 30, 100, 0.7) glass effect
2. THE System SHALL use Nunito font for body text and Fredoka font for display headings matching Reference_Module typography exactly
3. THE System SHALL apply border-radius values of 8px (small), 16px (medium), 24px (large), 32px (extra-large), and 9999px (full) matching Reference_Module exactly
4. THE System SHALL use box-shadow values matching Reference_Module: card shadow (0 8px 32px rgba(0,0,0,0.3)), button shadow (0 4px 15px rgba(0,0,0,0.3)), and glow effect (0 0 30px rgba(124, 92, 191, 0.3))
5. THE System SHALL apply CSS transitions of 0.3s cubic-bezier(0.4, 0, 0.2, 1) matching Reference_Module timing and easing
6. THE System SHALL use white card components with soft drop shadows, rounded corners, and glassmorphism backdrop blur effects matching Reference_Module card styling
7. THE System SHALL render the dark gradient background (linear-gradient(135deg, #0a0a2e 0%, #2d1b69 40%, #1a0a3e 70%, #0d1b3e 100%)) matching Reference_Module exactly
8. THE System SHALL display floating number animations in background with opacity 0.06 and 20-second float cycle matching Reference_Module decorative elements

### Requirement 2: Layout Structure and Navigation

**User Story:** As a learner, I want navigation and screen layout to work exactly like the reference module, so that I can easily move through the learning journey.

#### Acceptance Criteria

1. THE System SHALL display a fixed top navigation bar with Intellia logo, lesson title, 5-dot phase progress tracker, XP counter, and streak indicator matching Reference_Module top bar layout
2. WHEN a learner is not on the intro or results screen, THE System SHALL display a home button in the top-left corner (fixed position at 16px from top and left) matching Reference_Module home button styling
3. WHEN a learner is not on the intro screen, THE System SHALL display an audio toggle button in the top-right corner (fixed position at 16px from top and right, 44×44px circular) matching Reference_Module audio control placement
4. THE System SHALL center main content area with 100% width, 700px max-width, and 16px horizontal padding matching Reference_Module content container
5. THE System SHALL display phase navigation buttons (Previous/Continue) at the bottom of content cards matching Reference_Module button placement and styling
6. WHEN viewed on tablet devices (768px+), THE System SHALL display a sidebar with phase map matching Reference_Module 2-column layout
7. WHEN viewed on mobile devices (<768px), THE System SHALL hide the sidebar and show only stacked single-column layout matching Reference_Module mobile behavior
8. THE System SHALL scroll content vertically with smooth scrolling behavior while keeping navigation elements fixed matching Reference_Module scroll behavior

### Requirement 3: Phase Progress Tracker

**User Story:** As a learner, I want to see my journey progress through the 5 phases, so that I understand where I am in the learning experience.

#### Acceptance Criteria

1. THE System SHALL display a 5-dot progress tracker showing Wonder, Story, Simulate, Play, and Reflect phases matching Reference_Module journey bar design
2. WHILE a Phase is active, THE System SHALL highlight the corresponding dot with gold color (#ffc107) and glow shadow matching Reference_Module active state styling
3. WHILE a Phase is completed, THE System SHALL display the corresponding dot with green color (#4caf50) matching Reference_Module completed state styling
4. WHILE a Phase is not yet reached, THE System SHALL display the corresponding dot with muted white (rgba(255,255,255,0.1)) and 2px border matching Reference_Module inactive state styling
5. THE System SHALL display phase labels below each dot with 0.7rem font size matching Reference_Module label typography
6. THE System SHALL connect dots with horizontal lines (20px width, 2px height) that turn green when phases are completed matching Reference_Module connector styling
7. THE System SHALL apply the journey bar with glassmorphism effect (backdrop-filter blur 15px, background rgba(10,10,46,0.85)) matching Reference_Module glass card treatment
8. WHEN window width is below 600px, THE System SHALL reduce dot size to 24px and hide phase labels matching Reference_Module mobile responsive behavior

### Requirement 4: Button Components and Interactions

**User Story:** As a learner, I want buttons to look and behave consistently with the reference module, so that interactions feel familiar and responsive.

#### Acceptance Criteria

1. THE System SHALL style primary buttons with gold gradient background (linear-gradient(135deg, #ffc107, #f9a825)), dark text color (#1a1a2e), 16px vertical padding, 32px horizontal padding, and 16px border-radius matching Reference_Module primary button styling
2. WHEN a learner hovers over any button, THE System SHALL apply translateY(-2px) transform and increase shadow to (0 6px 20px rgba(0,0,0,0.4)) matching Reference_Module hover animation
3. WHEN a learner clicks any button, THE System SHALL apply translateY(0) transform for active state matching Reference_Module click feedback
4. THE System SHALL style secondary buttons with white background (rgba(255,255,255,0.95)) and dark blue text matching Reference_Module secondary button styling
5. THE System SHALL style outline buttons with transparent background, 2px solid border (rgba(255,255,255,0.3)), and white text matching Reference_Module outline button styling
6. WHEN a button is disabled, THE System SHALL apply 0.5 opacity, not-allowed cursor, and remove hover effects matching Reference_Module disabled state
7. THE System SHALL ensure all interactive buttons have minimum 44×44px tap target size for accessibility matching Reference_Module touch target standards
8. THE System SHALL use Fredoka font family, 1.1rem font size, and 600 font weight for button text matching Reference_Module button typography

### Requirement 5: Intro Screen Design

**User Story:** As a learner, I want the welcome screen to introduce the Subtraction module with clear branding and journey preview, so that I understand what I will learn.

#### Acceptance Criteria

1. THE System SHALL display the intro screen centered vertically and horizontally with 24px padding matching Reference_Module intro layout
2. THE System SHALL display module badge with "Grade 2 • Singapore Math" text in a rounded pill (backdrop-filter blur, rgba(255,255,255,0.1) background, 8px vertical padding, 24px horizontal padding) matching Reference_Module badge styling
3. THE System SHALL display module title "Subtraction within 100" with Fredoka font, clamp(2rem, 5vw, 3.5rem) responsive font size, and 700 font weight matching Reference_Module title styling
4. THE System SHALL display module description with Nunito font, 1.05rem font size, rgba(255,255,255,0.7) color, and 500px max-width matching Reference_Module description styling
5. THE System SHALL display a "Start Journey" primary button with bounceIn animation (0.6s ease) matching Reference_Module start button animation
6. THE System SHALL display a journey preview card showing all 5 phases with icons (🔍 Wonder, 📖 Story, 🔬 Simulate, 🎮 Play, 📝 Reflect) and brief descriptions matching Reference_Module journey map styling
7. THE System SHALL display audio toggle control on intro screen with speaker icon (🔊/🔇) and 44×44px size matching Reference_Module audio control
8. WHEN window width is below 480px, THE System SHALL reduce title font size and adjust padding to maintain readability matching Reference_Module mobile responsive behavior

### Requirement 6: Wonder Phase Visual Treatment

**User Story:** As a learner, I want the Wonder phase to capture my curiosity with engaging animations and visuals, so that I feel excited to explore subtraction concepts.

#### Acceptance Criteria

1. THE System SHALL display Wonder phase with centered layout, 80px top padding, 40px bottom padding, and 24px horizontal padding matching Reference_Module wonder layout
2. THE System SHALL animate a circular question mark icon (120×120px, purple gradient background linear-gradient(135deg, #6366f1, #8b5cf6)) with scale transform from 0 to 1 over 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) matching Reference_Module wonder icon animation
3. THE System SHALL render a glowing aura around the question mark using radial-gradient with 2-second pulse animation matching Reference_Module glow effect
4. THE System SHALL display mascot character below question mark with fade-in animation (opacity 0 to 1, translateY 20px to 0 over 0.5s with 0.3s delay) matching Reference_Module mascot entrance
5. THE System SHALL display the wonder question card with glassmorphism styling (backdrop-filter blur 20px, rgba(255,255,255,0.14) background) and slide-up animation (translateY 30px to 0 over 0.6s with 0.5s delay) matching Reference_Module card animation
6. THE System SHALL display curiosity emoji (🤔) at 3rem size above question text matching Reference_Module emoji styling
7. THE System SHALL display wonder question text with Fredoka font, 1.4rem size, 600 weight, and 1.5 line height matching Reference_Module question typography
8. THE System SHALL display "Let's Find Out" button with purple gradient (linear-gradient(135deg, #6366f1, #8b5cf6)) and sparkle animation on hover matching Reference_Module wonder button styling

### Requirement 7: Story Phase Card and Navigation

**User Story:** As a learner, I want the story about Lily and Max to be presented in visually appealing panels, so that I can follow the narrative about inverse operations.

#### Acceptance Criteria

1. THE System SHALL display story card with glass effect (backdrop-filter blur 20px), rgba(30,30,100,0.7) background, 1px solid rgba(255,255,255,0.1) border, 32px border-radius, and card shadow matching Reference_Module story card styling
2. THE System SHALL display story progress bar showing current panel number out of 6 total panels with gold-purple gradient fill matching Reference_Module progress indicator
3. THE System SHALL reserve image section with 240px height and 100% width for story panel images (currently placeholders) matching Reference_Module image container dimensions
4. THE System SHALL apply gradient overlay (linear-gradient from transparent to rgba(30,30,100,0.9)) on bottom 60px of image section matching Reference_Module image fade effect
5. THE System SHALL display story title with Fredoka font, 1.3rem size, 600 weight, and gold color (#ffc107) matching Reference_Module story title styling
6. THE System SHALL animate story text with fade-in (opacity 0 to 1) and slide-up (translateY 10px to 0) over 0.5s when panel changes matching Reference_Module text reveal animation
7. THE System SHALL display navigation dots below story card (6 dots, 10px each, active dot in gold with glow, completed dots in green) matching Reference_Module story dots styling
8. THE System SHALL display "Next" and "Previous" buttons with disabled state on first and last panels respectively matching Reference_Module story navigation behavior

### Requirement 8: Simulate Phase Station Layout

**User Story:** As a learner, I want the three simulation stations to guide me through concrete, pictorial, and abstract understanding of subtraction, so that I build deep conceptual knowledge.

#### Acceptance Criteria

1. THE System SHALL display simulate phase header with centered text, gold color (#ffc107) station label, and muted color (rgba(255,255,255,0.4)) sublabel matching Reference_Module simulate header styling
2. THE System SHALL display station progress using same dot component as phase progress (3 dots representing Base-10, Fact Family, and Inverter stations) matching Reference_Module station progress indicator
3. THE System SHALL display tip box with gold background (rgba(255,193,7,0.1)), gold border (1px solid rgba(255,193,7,0.2)), 16px border-radius, and light gold text matching Reference_Module tip card styling
4. THE System SHALL display Base-10 blocks station with tens rods (32×120px, orange gradient) and ones cubes (32×32px, blue gradient) with bounceIn animation (0.3s ease) when added matching Reference_Module block styling
5. THE System SHALL display Fact Family Triangle station with three connected circles, dashed circle for missing number, and drag-and-drop interaction matching Reference_Module triangle builder styling
6. THE System SHALL display Number Inverter station with large number pad (3×4 grid, 50px cells, 16px border-radius, gold border on hover) matching Reference_Module keypad styling
7. WHEN a station is completed correctly, THE System SHALL display checkmark animation and advance to next station matching Reference_Module completion feedback
8. THE System SHALL display equation display area with Fredoka font, 2rem size, and real-time update as learner interacts matching Reference_Module equation formatting

### Requirement 9: Play Phase World Map Design

**User Story:** As a learner, I want to see 10 themed worlds to practice subtraction questions, so that I can progress through increasingly challenging content with clear visual progression.

#### Acceptance Criteria

1. THE System SHALL display world map as vertical list with 16px gap between world cards, centered alignment, and 400px max-width matching Reference_Module world map layout
2. THE System SHALL style each world card with glassmorphism (rgba(255,255,255,0.06) background, backdrop-filter blur), 2px border, 24px border-radius, 24px padding, and card shadow matching Reference_Module world card styling
3. WHEN a world is unlocked, THE System SHALL apply hover effect (translateY -4px, border color change to world theme color, increased shadow) matching Reference_Module world hover animation
4. WHEN a world is locked, THE System SHALL apply 0.4 opacity, grayscale(0.5) filter, not-allowed cursor, and display lock icon (🔒) in top-right corner matching Reference_Module locked state
5. WHEN a world is completed, THE System SHALL apply green border color (#4caf50) and display earned stars matching Reference_Module completed state
6. THE System SHALL display world icon (2.5rem size), world name (Fredoka font, 1.2rem size), and world description (0.8rem size, muted color) matching Reference_Module world card content layout
7. THE System SHALL display star indicators (3 stars max, filled/unfilled based on score: 1 star for 5-6/10, 2 stars for 7-8/10, 3 stars for 9-10/10) matching Reference_Module star calculation
8. THE System SHALL connect world cards with vertical connectors (3px width, 20px height, green when path unlocked, muted when locked) matching Reference_Module world path visualization

### Requirement 10: Question Card and Answer Feedback

**User Story:** As a learner, I want questions to be clearly presented with immediate visual feedback, so that I understand whether my answers are correct and can learn from mistakes.

#### Acceptance Criteria

1. THE System SHALL display question card with glass effect (backdrop-filter blur 20px), rgba(30,30,100,0.6) background, 32px padding, 24px border-radius, and center alignment matching Reference_Module question card styling
2. THE System SHALL display question text with Fredoka font, 1.3rem size, 500 weight, and 1.6 line height matching Reference_Module question typography
3. THE System SHALL display answer options in 2-column grid with 12px gap, each option having 16px padding, 16px border-radius, 2px border, and hover scale(1.02) transform matching Reference_Module option grid styling
4. WHEN a learner selects an option, THE System SHALL highlight it with gold border (#ffc107) and gold background (rgba(255,193,7,0.15)) matching Reference_Module selected state
5. WHEN answer is correct, THE System SHALL display green border (#4caf50), green background (rgba(76,175,80,0.2)), and correctPulse animation (0.5s ease) matching Reference_Module correct feedback animation
6. WHEN answer is wrong, THE System SHALL display red border (#ef5350), red background (rgba(239,83,80,0.2)), and shake animation (0.4s ease) matching Reference_Module wrong feedback animation
7. WHEN answer is submitted, THE System SHALL disable all options with 0.6 opacity and not-allowed cursor matching Reference_Module post-submission state
8. THE System SHALL display hint text below options with italic style, 0.9rem size, and gold color when hint is activated matching Reference_Module hint styling

### Requirement 11: Gamification HUD and XP Display

**User Story:** As a learner, I want to see my XP, streak, and stars clearly displayed, so that I feel motivated to continue practicing and improving.

#### Acceptance Criteria

1. THE System SHALL display gamification HUD below top bar with 12px vertical padding, space-between justification, 700px max-width, and center alignment matching Reference_Module HUD layout
2. THE System SHALL display XP counter in pill-shaped container (backdrop-filter blur, rgba(255,255,255,0.08) background, 16px horizontal padding, 6px vertical padding, full border-radius) with lightning bolt icon (⚡) and bold number matching Reference_Module XP badge styling
3. WHEN streak reaches 3 or more, THE System SHALL display streak counter with fire icon (🔥) and pulse animation (0.5s ease) matching Reference_Module streak visualization
4. THE System SHALL display heart indicators (❤️) showing remaining attempts with 1.4rem size and 4px gap matching Reference_Module hearts display
5. WHEN XP is earned, THE System SHALL display floating XP popup in top-right (fixed position at 80px from top, 30px from right) with gold gradient background, bounceIn animation, and floatUp animation (1.5s ease) matching Reference_Module XP popup effect
6. THE System SHALL display current world badge above question card with world theme color background, white text, Fredoka font, 0.9rem size, and full border-radius matching Reference_Module world badge styling
7. THE System SHALL update XP counter with smooth number increment animation matching Reference_Module counter animation
8. THE System SHALL display total XP prominently with "XP" label and large number format matching Reference_Module XP formatting

### Requirement 12: World Completion Modal

**User Story:** As a learner, I want to see my performance celebrated when I complete a world, so that I feel accomplished and motivated to continue.

#### Acceptance Criteria

1. THE System SHALL display world completion modal centered on screen with glass card styling (backdrop-filter blur 20px, rgba(30,30,100,0.7) background, 40px padding, 32px border-radius) and bounceIn animation (0.5s ease) matching Reference_Module completion modal styling
2. THE System SHALL display celebration icon (🎉) at 3rem size above completion message matching Reference_Module celebration emoji
3. THE System SHALL display "World Complete" title with Fredoka font, 1.6rem size, and 600 weight matching Reference_Module completion title styling
4. THE System SHALL display score as fraction (e.g., "8/10") with Fredoka font, 2rem size, 700 weight, and gold color (#ffc107) matching Reference_Module score display
5. THE System SHALL animate star display with sequential bounceIn animations (0.4s ease, staggered by 0.1s per star) and 2rem size matching Reference_Module star animation sequence
6. THE System SHALL display earned XP below stars with gold color and 600 weight matching Reference_Module XP summary styling
7. THE System SHALL display "Next World" primary button and "Back to Map" outline button with 12px gap matching Reference_Module modal button layout
8. WHEN score is below 5/10, THE System SHALL display "Try Again" message and disable "Next World" button matching Reference_Module unlock gate logic

### Requirement 13: Badge Toast Notifications

**User Story:** As a learner, I want to see badge achievements appear as toast notifications, so that I feel recognized for my accomplishments.

#### Acceptance Criteria

1. WHEN a badge is earned, THE System SHALL display toast notification sliding in from the right edge with slideInRight animation (0.5s ease) matching Reference_Module toast entrance
2. THE System SHALL display badge toast with glass effect (backdrop-filter blur, rgba(255,255,255,0.15) background), 16px padding, 16px border-radius, and card shadow matching Reference_Module toast styling
3. THE System SHALL display badge icon (2rem size) on left side of toast matching Reference_Module badge display
4. THE System SHALL display badge name with 600 weight and 1rem size on right side of toast matching Reference_Module badge label typography
5. THE System SHALL position toast at fixed top-right (90px from top, 20px from right) with 250 z-index matching Reference_Module toast positioning
6. THE System SHALL auto-dismiss toast after 3 seconds with fadeOut animation (0.3s ease) matching Reference_Module toast duration
7. THE System SHALL play badge audio sound effect when toast appears matching Reference_Module badge audio feedback
8. WHEN multiple badges are earned, THE System SHALL queue toasts with 0.5-second stagger between displays matching Reference_Module badge queue behavior

### Requirement 14: Reflect Phase Journal Interface

**User Story:** As a learner, I want to reflect on what I learned through thoughtful questions, so that I can consolidate my understanding of inverse operations.

#### Acceptance Criteria

1. THE System SHALL display reflect phase card with glass styling (backdrop-filter blur 20px, rgba(30,30,100,0.7) background, 32px padding, 32px border-radius) and slideUp animation (0.4s ease) matching Reference_Module reflect card styling
2. THE System SHALL display reflect question title with Fredoka font, 1.3rem size, and 600 weight matching Reference_Module reflect title typography
3. THE System SHALL display mascot with speech bubble showing encouraging message matching Reference_Module mascot placement in reflect phase
4. THE System SHALL display multiple-choice reflection options as vertical list with 12px gap, each option having 16px vertical padding, 20px horizontal padding, 16px border-radius, and left-aligned text matching Reference_Module reflect option styling
5. WHEN a reflection option is selected, THE System SHALL highlight it with gold border and gold background (rgba(255,193,7,0.15)) matching Reference_Module selected reflection state
6. THE System SHALL display "Next Question" button below options with disabled state until selection is made matching Reference_Module reflect navigation
7. THE System SHALL display question counter (e.g., "Question 1 of 4") above card with 0.8rem size and muted color matching Reference_Module reflect progress indicator
8. WHEN all reflection questions are answered, THE System SHALL enable "Complete Journey" button with green gradient background matching Reference_Module completion button styling

### Requirement 15: Results Screen Summary

**User Story:** As a learner, I want to see a comprehensive summary of my journey completion with all earned badges and achievements, so that I feel proud of my accomplishments.

#### Acceptance Criteria

1. THE System SHALL display results screen with centered layout and celebration theme matching Reference_Module results page styling
2. THE System SHALL display trophy icon (🏆) at 4rem size above results title matching Reference_Module celebration icon
3. THE System SHALL display "Journey Complete!" title with Fredoka font, 2.5rem size, and 700 weight matching Reference_Module results title typography
4. THE System SHALL display total XP earned in circular badge (160px diameter, 6px gold border, gold background rgba(255,193,7,0.08), Fredoka font, 3rem size for number) with bounceIn animation matching Reference_Module score circle styling
5. THE System SHALL display earned badges grid with 16px gap, each badge showing icon (2rem), label (0.85rem, 600 weight), and earned indicator matching Reference_Module badge display grid
6. THE System SHALL display phase completion checkmarks (✓) for all 5 completed phases with green color matching Reference_Module phase summary
7. THE System SHALL display "Start New Journey" button and "Review Worlds" button with vertical layout and 12px gap matching Reference_Module results action buttons
8. THE System SHALL apply confetti animation or particle effects in background matching Reference_Module celebration effects

### Requirement 16: Responsive Design Breakpoints

**User Story:** As a learner using different devices, I want the module to adapt seamlessly to my screen size, so that I have an optimal learning experience on mobile, tablet, or desktop.

#### Acceptance Criteria

1. WHEN viewport width is 375px or greater (mobile), THE System SHALL display single-column stacked layout with 16px horizontal padding matching Reference_Module mobile layout
2. WHEN viewport width is 768px or greater (tablet), THE System SHALL display 2-column layout with sidebar visible and increased content padding matching Reference_Module tablet layout
3. WHEN viewport width is 1024px or greater (desktop), THE System SHALL apply wide layout with increased spacing, larger visual elements, and 900px max content width matching Reference_Module desktop layout
4. WHEN viewport width is below 600px, THE System SHALL reduce font sizes (title to 1.8rem, body to 0.9rem), hide phase labels, reduce button padding, and stack navigation buttons vertically matching Reference_Module mobile typography scaling
5. WHEN viewport width is below 480px, THE System SHALL reduce question card padding to 24px, option grid to single column, and mascot size to 60px matching Reference_Module small mobile adjustments
6. THE System SHALL maintain 44×44px minimum tap target size across all breakpoints matching Reference_Module accessibility standards
7. THE System SHALL hide sidebar navigation on mobile and show hamburger menu icon instead matching Reference_Module mobile navigation pattern
8. THE System SHALL use clamp() CSS function for fluid typography (e.g., clamp(1rem, 2vw, 1.3rem)) matching Reference_Module responsive text scaling

### Requirement 17: Animation and Transition Standards

**User Story:** As a learner, I want smooth and delightful animations throughout the module, so that interactions feel polished and engaging.

#### Acceptance Criteria

1. THE System SHALL apply 0.3s cubic-bezier(0.4, 0, 0.2, 1) transition timing for all hover effects, color changes, and simple transforms matching Reference_Module transition standard
2. WHEN elements enter viewport, THE System SHALL apply fadeIn animation (opacity 0 to 1 over 0.5s ease) matching Reference_Module entrance animation
3. WHEN cards or modals appear, THE System SHALL apply bounceIn animation using scale(0.9) to scale(1) over 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) matching Reference_Module card entrance
4. WHEN wrong answer is selected, THE System SHALL apply shake animation with translateX keyframes (-10px, 10px, -10px, 10px, 0) over 0.4s ease matching Reference_Module error animation
5. WHEN correct answer is selected, THE System SHALL apply correctPulse animation with scale keyframes (1, 1.05, 1) over 0.5s ease matching Reference_Module success animation
6. WHEN elements slide up, THE System SHALL apply slideUp animation with translateY(30px) to translateY(0) and opacity 0 to 1 over 0.4s ease matching Reference_Module slide animation
7. WHEN user enables reduced motion preference, THE System SHALL disable all animations and use instant transitions matching Reference_Module accessibility support via @media (prefers-reduced-motion: reduce)
8. THE System SHALL apply pulse animation to glowing elements with scale(1) to scale(1.05) keyframes over 2s infinite ease-in-out matching Reference_Module glow pulse effect

### Requirement 18: Audio Integration and Controls

**User Story:** As a learner, I want narration and sound effects that enhance my learning experience, so that I receive multi-sensory feedback and instruction.

#### Acceptance Criteria

1. THE System SHALL integrate ElevenLabs text-to-speech API using Alice voice (Voice ID: Xb7hH8MSUJpSbSDYk0k2) and eleven_multilingual_v2 model matching the audio_generation_pipeline documentation specifications
2. WHEN audio toggle is enabled, THE System SHALL play narration for phase introductions, story panels, teaching moments, and question text matching Reference_Module audio integration points
3. WHEN learner answers correctly, THE System SHALL play correct.mp3 sound effect (if soundEnabled is true) matching Reference_Module correct audio feedback
4. WHEN learner answers incorrectly, THE System SHALL play wrong.mp3 sound effect (if soundEnabled is true) matching Reference_Module wrong audio feedback
5. WHEN badge is earned, THE System SHALL play badge.mp3 sound effect matching Reference_Module badge audio feedback
6. WHEN world is completed, THE System SHALL play world_complete.mp3 sound effect matching Reference_Module world completion audio
7. THE System SHALL preload audio files for upcoming segments to eliminate playback gaps matching Reference_Module audio preloading strategy
8. WHEN valid API key is unavailable, THE System SHALL silently skip narration without errors or fallback to browser speech API matching audio_generation_pipeline documentation no-fallback policy

### Requirement 19: Content Preservation - Story Characters and Narrative

**User Story:** As a learner, I want to follow Lily and Max's story about the sandwich shop, so that I understand inverse operations through a relatable narrative.

#### Acceptance Criteria

1. THE System SHALL display story featuring characters named Lily and Max (English names) throughout all 6 story panels matching PRD story narrative specifications
2. THE System SHALL preserve story title "The Magic Sandwich Shop" matching PRD content specification
3. THE System SHALL preserve Panel 1 content: "Lily and Max run a sandwich shop. One morning, they baked 63 sandwiches." matching PRD story content
4. THE System SHALL preserve Panel 2 content: "They sold some sandwiches by noon. Now 27 sandwiches are left on the shelf." matching PRD story content
5. THE System SHALL preserve Panel 3 content: "Max scratched his head — 'How many sandwiches did we sell?' Then Lily had an idea!" matching PRD story content
6. THE System SHALL preserve Panel 4 content: "She drew a fact family triangle: 63 at the top, 27 and a question mark at the sides." matching PRD story content
7. THE System SHALL preserve Panel 5 content: "27 + ? = 63... so 63 − 27 = 36. They sold 36 sandwiches! Max was amazed." matching PRD story content
8. THE System SHALL preserve Panel 6 content: "Together they wrote the whole fact family on the chalkboard for everyone to see!" matching PRD story content

### Requirement 20: Content Preservation - Fact Family Triangle Visualization

**User Story:** As a learner, I want to see and interact with fact family triangles, so that I understand the relationship between addition and subtraction facts.

#### Acceptance Criteria

1. THE System SHALL render fact family triangles as SVG graphics with three circles connected by lines matching PRD visual specification
2. THE System SHALL display whole number at top vertex of triangle and two parts at bottom vertices matching Singapore Math fact family convention
3. THE System SHALL highlight the relationship showing that knowing two parts and whole enables deriving all four related facts (a+b=c, b+a=c, c-a=b, c-b=a) matching PRD learning objective
4. WHEN fact family triangle is used in Station B simulation, THE System SHALL allow drag-and-drop interaction to complete missing number matching PRD simulate phase Station B requirements
5. WHEN correct number is placed, THE System SHALL animate lock-click effect and display all 4 related facts below triangle matching PRD Station B completion behavior
6. THE System SHALL use gold color (#ffc107) for triangle borders and purple color for filled circles matching Reference_Module color scheme applied to subtraction content
7. THE System SHALL display triangle with 200px width on desktop and scale proportionally on mobile maintaining aspect ratio matching responsive design standards
8. THE System SHALL render triangles in story panels, simulation stations, and question cards as needed matching PRD content integration requirements

### Requirement 21: Content Preservation - Base-10 Blocks Visual

**User Story:** As a learner, I want to manipulate base-10 blocks in Station A, so that I understand subtraction concretely through taking away blocks.

#### Acceptance Criteria

1. THE System SHALL render tens rods as rectangles (32px width × 120px height) with orange gradient background (linear-gradient(135deg, #ff9800, #e65100)) and 2px #ffb74d border matching PRD Station A specification
2. THE System SHALL render ones cubes as squares (32px × 32px) with blue gradient background (linear-gradient(135deg, #42a5f5, #1565c0)) and 2px #64b5f6 border matching PRD Station A specification
3. THE System SHALL display vertical lines on tens rods using repeating-linear-gradient to show 10 unit segments matching Singapore Math concrete manipulative representation
4. WHEN learner drags blocks to "taken away" area, THE System SHALL apply smooth drag animation and update number bond diagram in real-time matching PRD Station A interaction requirements
5. THE System SHALL display blocks in two columns labeled "Tens" and "Ones" with gold labels (0.9rem, Fredoka font, uppercase) matching PRD Station A layout
6. THE System SHALL apply bounceIn animation (0.3s ease) when blocks are added to the display matching Reference_Module animation standards applied to blocks
7. THE System SHALL enable cursor pointer on blocks and highlight on hover to indicate draggability matching interactive element affordances
8. THE System SHALL display equation below blocks that updates as blocks are manipulated showing whole − part1 = part2 format matching PRD Station A teaching objective

### Requirement 22: Content Preservation - 10 Question Types

**User Story:** As a learner, I want to practice 10 different types of subtraction questions, so that I develop comprehensive understanding of inverse operations.

#### Acceptance Criteria

1. THE System SHALL include Q1 Fact Family Find questions showing addition fact and asking for related subtraction fact (e.g., "Given: 48 + 35 = 83. Find: 83 − 48 = ___") matching PRD question type Q1 specification
2. THE System SHALL include Q2 Fill Blank Subtraction questions with missing whole (e.g., "___ − 27 = 45") matching PRD question type Q2 specification
3. THE System SHALL include Q3 Inverse Check true/false questions (e.g., "Is 73 − 28 = 45 related to 45 + 28 = 73? Yes / No") matching PRD question type Q3 specification
4. THE System SHALL include Q4 Word Problems featuring Lily and Max characters (e.g., "Max had 72 apples. He sold some. 39 are left. How many sold?") matching PRD question type Q4 specification
5. THE System SHALL include Q5 Complete Fact Family questions asking to select all 4 related facts from multiple choice options matching PRD question type Q5 specification
6. THE System SHALL include Q6 Missing Addend questions (e.g., "___ + 45 = 81") that require using subtraction to find answer matching PRD question type Q6 specification
7. THE System SHALL include Q7 Bar Model questions showing visual part-whole diagram with one part missing matching PRD question type Q7 specification
8. THE System SHALL include Q8 True/False Number Bond questions, Q9 Regrouping Subtraction questions, and Q10 "How Many More" comparison questions matching PRD question types Q8-Q10 specifications

### Requirement 23: Content Preservation - 10 Themed Worlds

**User Story:** As a learner, I want to progress through 10 uniquely themed worlds from easy to hard, so that I build confidence while facing increasing challenges.

#### Acceptance Criteria

1. THE System SHALL preserve World 1 "Sunshine Meadow" theme with questions 1-10 (within 30, foundation facts, easy difficulty) matching PRD world specification
2. THE System SHALL preserve World 2 "Candy Cavern" theme with questions 11-20 (within 50, no regrouping, easy-medium) matching PRD world specification
3. THE System SHALL preserve World 3 "Crystal Lagoon" theme with questions 21-30 (within 50, missing addend, medium) matching PRD world specification
4. THE System SHALL preserve World 4 "Jungle Temple" theme with questions 31-40 (within 70, bar model, medium) matching PRD world specification
5. THE System SHALL preserve World 5 "Thunder Mountain" theme with questions 41-50 (within 70, fact family, medium-hard) matching PRD world specification
6. THE System SHALL preserve World 6 "Star Harbour" theme with questions 51-60 (within 80, word problems, medium) matching PRD world specification
7. THE System SHALL preserve World 7 "Dragon's Library" theme with questions 61-70 (within 90, regrouping, hard) matching PRD world specification
8. THE System SHALL preserve World 8 "Neon City", World 9 "Aurora Peak", and World 10 "The Number Vault" themes with their respective question ranges and difficulty matching PRD world specifications 8-10

### Requirement 24: Content Preservation - Character Names

**User Story:** As a learner, I want to see familiar English names in word problems, so that I can relate to the characters and scenarios.

#### Acceptance Criteria

1. THE System SHALL use Lily and Max as main story characters throughout Story phase matching PRD character specification
2. THE System SHALL use Emma, Oliver, Sophie, Jack, Mia, Ben, Charlotte, Noah, Grace, and Ethan as supporting characters in Play phase word problems matching PRD character list
3. THE System SHALL never use non-English names or placeholder names in questions or story content matching PRD English name requirement
4. THE System SHALL preserve character consistency within multi-part questions (e.g., if Emma appears in question setup, Emma must appear in question prompt) matching content quality standards
5. THE System SHALL use contextually appropriate scenarios for each character (e.g., school items, toys, food items) matching Singapore Primary 2 student familiarity
6. THE System SHALL include objects like apples, stickers, marbles, books, biscuits, flowers, stamps, toys, cards, and balloons in word problems matching PRD object list
7. THE System SHALL format character names with capital first letter in all text displays matching proper name formatting conventions
8. THE System SHALL maintain character names exactly as specified across all 100 questions without variations or alternate spellings matching content consistency requirement

### Requirement 25: Gamification Rules and XP Calculation

**User Story:** As a learner, I want clear and consistent reward rules, so that I understand how to earn XP, stars, and badges.

#### Acceptance Criteria

1. WHEN learner answers correctly on first attempt, THE System SHALL award 10 XP matching PRD gamification specification
2. WHEN learner answers correctly on second attempt without hint, THE System SHALL award 7 XP matching PRD gamification specification
3. WHEN learner answers correctly with hint activated, THE System SHALL award 5 XP matching PRD gamification specification
4. WHEN streak reaches 5 or more consecutive correct answers, THE System SHALL award bonus 5 XP per answer in addition to base XP matching PRD streak bonus specification
5. WHEN world is completed with 5-6 correct answers out of 10, THE System SHALL award 1 star matching PRD star calculation
6. WHEN world is completed with 7-8 correct answers out of 10, THE System SHALL award 2 stars matching PRD star calculation
7. WHEN world is completed with 9-10 correct answers out of 10, THE System SHALL award 3 stars matching PRD star calculation
8. WHEN learner scores below 5 correct answers out of 10, THE System SHALL not unlock next world and display "Try Again" message matching PRD unlock gate logic

### Requirement 26: Badge Achievement Conditions

**User Story:** As a learner, I want to unlock achievement badges by reaching milestones, so that I feel recognized for my progress and effort.

#### Acceptance Criteria

1. WHEN learner completes Wonder phase and Story phase, THE System SHALL award "Curious Coder" badge (🎯 icon) matching PRD badge specification
2. WHEN learner completes all 3 Simulate stations (Base-10, Fact Family, Inverter), THE System SHALL award "Simulation Scientist" badge (🔬 icon) matching PRD badge specification
3. WHEN learner achieves 80% or higher average score across all completed Play worlds, THE System SHALL award "Subtraction Solver" badge (➖ icon) matching PRD badge specification
4. WHEN learner scores 10 out of 10 in any single world, THE System SHALL award "Inverse Master" badge (💎 icon) matching PRD badge specification
5. WHEN learner achieves 12 or more consecutive correct answers in streak counter, THE System SHALL award "Streak Champion" badge (🔥 icon) matching PRD badge specification
6. WHEN learner completes all 5 phases end-to-end (Wonder, Story, Simulate, Play, Reflect), THE System SHALL award "Full Journey Hero" badge (🌟 icon) matching PRD badge specification
7. WHEN badge is earned, THE System SHALL trigger badge toast notification with slide-in animation and badge audio sound effect matching badge notification requirements
8. THE System SHALL persist earned badges in localStorage and display them on Results screen matching session state persistence requirements

### Requirement 27: Session State Persistence

**User Story:** As a learner, I want my progress to be saved automatically, so that I can resume my journey within 24 hours without losing progress.

#### Acceptance Criteria

1. WHEN learner advances to a new phase, THE System SHALL save current phase, completed phases, earned XP, earned badges, and streak to localStorage matching PRD persistence specification
2. WHEN learner completes a world, THE System SHALL save world completion status, score, earned stars, and question progress to localStorage matching world state persistence requirement
3. WHEN learner answers a question, THE System SHALL update session state in localStorage with current question index, attempts, and correctness matching question state persistence requirement
4. WHEN learner returns within 24 hours, THE System SHALL load saved session state from localStorage and resume from last active phase matching PRD 24-hour resume window
5. WHEN learner returns after 24 hours, THE System SHALL clear expired session state and start fresh journey matching session expiration logic
6. THE System SHALL store timestamp of last session activity in localStorage for expiration checking matching time-based session validation requirement
7. THE System SHALL use JSON.stringify for storing complex state objects and JSON.parse for retrieving them matching localStorage data format standards
8. THE System SHALL handle localStorage quota exceeded errors gracefully by clearing oldest session data first matching error recovery requirement

### Requirement 28: Accessibility Standards Compliance

**User Story:** As a learner with accessibility needs, I want the module to be usable with assistive technologies and meet WCAG AA standards, so that I can learn effectively regardless of my abilities.

#### Acceptance Criteria

1. THE System SHALL ensure all interactive elements have minimum 44×44px tap target size meeting WCAG 2.1 Level AA Target Size guideline
2. THE System SHALL maintain color contrast ratio of at least 4.5:1 for normal text and 3:1 for large text (18pt+ or 14pt+ bold) meeting WCAG 2.1 Level AA Contrast guideline
3. THE System SHALL provide keyboard navigation support for all interactive elements using Tab, Enter, Space, and Arrow keys meeting WCAG 2.1 Level AA Keyboard guideline
4. THE System SHALL display visible focus indicators (2px solid gold outline) on all focusable elements meeting WCAG 2.1 Level AA Focus Visible guideline
5. WHEN user enables prefers-reduced-motion in operating system settings, THE System SHALL disable all animations and use instant transitions meeting WCAG 2.1 Level AA Animation from Interactions guideline
6. THE System SHALL provide text alternatives via aria-label attributes for icon-only buttons and visual elements meeting WCAG 2.1 Level AA Non-text Content guideline
7. THE System SHALL structure content with proper heading hierarchy (h1, h2, h3) and semantic HTML elements meeting WCAG 2.1 Level AA Info and Relationships guideline
8. THE System SHALL support screen reader announcements for dynamic content changes using aria-live regions meeting WCAG 2.1 Level AA Status Messages guideline

### Requirement 29: Technical Stack Consistency

**User Story:** As a developer, I want the technical implementation to match the reference architecture exactly, so that codebase patterns remain consistent across Intellia SG modules.

#### Acceptance Criteria

1. THE System SHALL use React 18 with Vite build tool and JSX syntax matching Reference_Module technical stack
2. THE System SHALL use CSS Modules for component styling with same file naming convention (ComponentName.module.css) matching Reference_Module styling approach
3. THE System SHALL use useReducer hook for global state management and useState for local component state without external state libraries matching Reference_Module state management pattern
4. THE System SHALL use lucide-react icon library for consistent icon rendering matching Reference_Module icon implementation
5. THE System SHALL organize components in shared/, phases/, simulations/, and quiz/ directories matching Reference_Module folder structure
6. THE System SHALL place data files (questionBank.js, badges.js, worlds.js, storyPanels.js) in src/data/ directory matching Reference_Module data organization
7. THE System SHALL implement utility functions (gamification.js, audio.js, narration.js) in src/utils/ directory matching Reference_Module utility organization
8. THE System SHALL use same package.json scripts (dev, build, preview, generate-audio, clean-audio) matching Reference_Module build commands

### Requirement 30: Performance and Loading Standards

**User Story:** As a learner with standard internet connection, I want the module to load quickly and run smoothly, so that I can start learning without frustration.

#### Acceptance Criteria

1. THE System SHALL achieve initial page load time under 3 seconds on standard 4G connection matching PRD performance requirement
2. THE System SHALL preload critical assets (fonts, CSS, initial phase components) during load screen matching Reference_Module loading optimization
3. THE System SHALL lazy-load phase components and question images to reduce initial bundle size matching Reference_Module code splitting strategy
4. THE System SHALL compress audio files to balanced quality (128kbps MP3) to minimize bandwidth usage matching audio_generation_pipeline specification
5. THE System SHALL cache static assets (images, audio, fonts) using browser cache headers for subsequent visits matching Reference_Module caching strategy
6. THE System SHALL debounce rapid user interactions (button clicks, option selections) to prevent duplicate state updates matching performance best practices
7. THE System SHALL use React.memo() for expensive components that render frequently with same props matching Reference_Module render optimization
8. THE System SHALL achieve production bundle size under 500KB (gzipped) excluding audio assets matching Reference_Module bundle size target


---

## Requirements Summary

This requirements document defines 30 comprehensive requirements covering:

**Visual Consistency (Requirements 1-5):** Color palette, typography, layout, navigation, progress tracking, and button styling matching Reference_Module exactly

**Phase-Specific UI (Requirements 6-15):** Detailed visual treatment for all 5 learning phases (Wonder, Story, Simulate, Play, Reflect) plus intro and results screens

**Responsive Design (Requirement 16):** Three breakpoints (mobile 375px+, tablet 768px+, desktop 1024px+) with adaptive layouts

**Animations & Audio (Requirements 17-18):** Smooth transitions, delightful animations, and ElevenLabs audio integration

**Content Preservation (Requirements 19-24):** Maintains all subtraction-specific content including Lily & Max story, fact family triangles, base-10 blocks, 10 question types, 10 themed worlds, and English character names

**Gamification (Requirements 25-26):** XP calculation rules, star awards, streak bonuses, and 6 achievement badges

**Technical Requirements (Requirements 27-30):** Session persistence, WCAG AA accessibility, technical stack consistency, and performance standards

All requirements follow EARS patterns (Ubiquitous, Event-driven, State-driven, Complex) and comply with INCOSE quality rules for clarity, testability, completeness, and positive statements. Each requirement is structured with User Story and Acceptance Criteria that are measurable, verifiable, and implementation-ready.

The adaptation ensures learners experience visual consistency across Intellia SG modules while receiving high-quality subtraction instruction aligned to Singapore MOE Primary 2 Mathematics curriculum.
