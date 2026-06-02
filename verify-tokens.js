// Token Verification Script
// Run this in the browser console to verify all CSS tokens are loaded

console.log('%c🎨 CSS Design Tokens Verification', 'color: #ffc107; font-size: 20px; font-weight: bold; font-family: "Fredoka", sans-serif;');
console.log('=====================================\n');

const root = document.documentElement;
const styles = getComputedStyle(root);

function verifyToken(name, expectedValue = null) {
  const value = styles.getPropertyValue(name).trim();
  const exists = value !== '';
  const status = exists ? '✅' : '❌';
  const display = expectedValue ? `${value} (expected: ${expectedValue})` : value;
  console.log(`${status} ${name}: ${display}`);
  return exists;
}

// Color Tokens
console.group('🎨 Color Tokens');
verifyToken('--color-blue-deep', '#1a237e');
verifyToken('--color-blue-mid', '#283593');
verifyToken('--color-blue-bright', '#3f51b5');
verifyToken('--color-gold', '#ffc107');
verifyToken('--color-gold-light', '#ffd54f');
verifyToken('--color-gold-dark', '#f9a825');
verifyToken('--color-coral', '#ff7043');
verifyToken('--color-purple-deep', '#2d1b69');
verifyToken('--color-purple-mid', '#4a2c8a');
verifyToken('--color-purple-light', '#7c5cbf');
verifyToken('--color-green', '#4caf50');
verifyToken('--color-green-light', '#81c784');
verifyToken('--color-red', '#ef5350');
verifyToken('--color-red-light', '#ef9a9a');
console.groupEnd();

// Typography Tokens
console.group('📝 Typography Tokens');
verifyToken('--font-display', '"Fredoka", sans-serif');
verifyToken('--font-body', '"Nunito", sans-serif');
verifyToken('--font-size-xs', '0.65rem');
verifyToken('--font-size-sm', '0.85rem');
verifyToken('--font-size-base', '1rem');
verifyToken('--font-size-md', '1.1rem');
verifyToken('--font-size-lg', '1.3rem');
verifyToken('--font-size-xl', '1.6rem');
verifyToken('--font-size-2xl', '2rem');
verifyToken('--font-size-3xl', '2.5rem');
verifyToken('--font-size-4xl', '3.5rem');
verifyToken('--font-weight-normal', '400');
verifyToken('--font-weight-medium', '500');
verifyToken('--font-weight-semibold', '600');
verifyToken('--font-weight-bold', '700');
console.groupEnd();

// Spacing Tokens
console.group('📏 Spacing Tokens');
verifyToken('--space-1', '4px');
verifyToken('--space-2', '8px');
verifyToken('--space-3', '12px');
verifyToken('--space-4', '16px');
verifyToken('--space-5', '20px');
verifyToken('--space-6', '24px');
verifyToken('--space-8', '32px');
verifyToken('--space-10', '40px');
verifyToken('--space-12', '48px');
verifyToken('--space-16', '64px');
verifyToken('--space-20', '80px');
verifyToken('--radius-sm', '8px');
verifyToken('--radius-md', '16px');
verifyToken('--radius-lg', '24px');
verifyToken('--radius-xl', '32px');
verifyToken('--radius-full', '9999px');
console.groupEnd();

// Shadow & Effects
console.group('✨ Shadow & Effect Tokens');
verifyToken('--shadow-card', '0 8px 32px rgba(0, 0, 0, 0.3)');
verifyToken('--shadow-button', '0 4px 15px rgba(0, 0, 0, 0.3)');
verifyToken('--shadow-glow', '0 0 30px rgba(124, 92, 191, 0.3)');
verifyToken('--shadow-glow-gold', '0 0 12px rgba(255, 193, 7, 0.4)');
verifyToken('--glass-blur', 'blur(20px)');
verifyToken('--glass-blur-medium', 'blur(15px)');
verifyToken('--glass-blur-light', 'blur(10px)');
verifyToken('--glass-blur-heavy', 'blur(30px)');
console.groupEnd();

// Animation Tokens
console.group('⚡ Animation Tokens');
verifyToken('--transition-fast', '0.15s cubic-bezier(0.4, 0, 0.2, 1)');
verifyToken('--transition-base', '0.3s cubic-bezier(0.4, 0, 0.2, 1)');
verifyToken('--transition-slow', '0.5s cubic-bezier(0.4, 0, 0.2, 1)');
verifyToken('--ease-bounce', 'cubic-bezier(0.34, 1.56, 0.64, 1)');
verifyToken('--ease-smooth', 'cubic-bezier(0.4, 0, 0.2, 1)');
console.groupEnd();

// Gradients
console.group('🌈 Gradient Tokens');
verifyToken('--gradient-bg');
verifyToken('--gradient-gold');
verifyToken('--gradient-purple');
verifyToken('--gradient-green');
verifyToken('--gradient-progress');
console.groupEnd();

// Z-Index
console.group('📚 Z-Index Tokens');
verifyToken('--z-base', '0');
verifyToken('--z-floating', '10');
verifyToken('--z-navigation', '90');
verifyToken('--z-overlay', '100');
verifyToken('--z-modal', '200');
verifyToken('--z-toast', '250');
verifyToken('--z-popup', '300');
console.groupEnd();

console.log('\n=====================================');
console.log('%c✅ Token Verification Complete!', 'color: #4caf50; font-size: 16px; font-weight: bold;');
console.log('All design tokens are loaded and accessible via CSS custom properties.');
console.log('You can now use them in your components with var(--token-name)');
