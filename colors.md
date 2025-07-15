# Color Palette Reference

## Overview
This document provides a comprehensive guide to the color palette used in the CinMatch movie search application.

## Current Theme Configuration

The application now supports multiple themes with a Dark Fire theme as the default. Colors are organized into semantic groups for consistent usage across the application.

## Theme 1 (Default - Dark Fire Theme)

### Backgrounds
- **Primary Background**: `#ffffff` (`--bg-primary`) - White for main page backgrounds
- **Secondary Background**: `#000000` (`--bg-secondary`) - Pure black for contrast sections
- **Button Background**: `#1a0000` (`--bg-button`) - Very dark red for button backgrounds
- **Elevated Background**: `#0d0000` (`--bg-elevated`) - Darker red for elevated elements

### Text Colors
- **Primary Text**: `#ffffff` (`--text-primary`) - Pure white for maximum contrast
- **Secondary Text**: `#f0f0f0` (`--text-secondary`) - Light gray for secondary content
- **Muted Text**: `#cccccc` (`--text-muted`) - Medium gray for subtle text and placeholders

### Accent Colors
- **Primary Accent**: `#ff0000` (`--accent-primary`) - Electric red for primary actions
- **Secondary Accent**: `#ff3333` (`--accent-secondary`) - Bright red for secondary actions
- **Warm Accent**: `#ff6666` (`--accent-warm`) - Medium red for warm interactions
- **Hot Accent**: `#ff9999` (`--accent-hot`) - Light red for subtle highlights

### Borders
- **Default Border**: `#000000` (`--border-default`) - Black for standard borders
- **Focus Border**: `#ff0000` (`--border-focus`) - Electric red for focus states
- **Hover Border**: `#ff3333` (`--border-hover`) - Bright red for hover states

### Interactive States
- **Hover Overlay**: `rgba(255, 0, 0, 0.15)` (`--hover-overlay`) - Light red overlay for hover effects
- **Active Overlay**: `rgba(255, 0, 0, 0.25)` (`--active-overlay`) - Medium red overlay for active states

## Theme 2 (Alternative Dark Fire Theme)

### Backgrounds
- **Primary Background**: `#000000` (`--bg-primary`) - Pure black for main backgrounds
- **Secondary Background**: `#000000` (`--bg-secondary`) - Pure black consistency
- **Button Background**: `#1a0000` (`--bg-button`) - Very dark red for buttons
- **Elevated Background**: `#ffffff` (`--bg-elevated`) - White for maximum contrast elevation

### Text, Accent, Border, and Interactive Colors
- Same as Theme 1 for consistency across themes

## Semantic Color Classes

These colors are available as Tailwind CSS classes using the `@theme` configuration:

```css
/* Backgrounds */
semantic-background-primary: var(--bg-primary);      /* #ffffff (theme1) / #000000 (theme2) */
semantic-background-secondary: var(--bg-secondary);  /* #000000 for both themes */
semantic-background-button: var(--bg-button);        /* #1a0000 for both themes */
semantic-background-elevated: var(--bg-elevated);    /* #0d0000 (theme1) / #ffffff (theme2) */

/* Text Colors */
semantic-text-primary: var(--text-primary);      /* #ffffff for both themes */
semantic-text-secondary: var(--text-secondary);  /* #f0f0f0 for both themes */
semantic-text-muted: var(--text-muted);         /* #cccccc for both themes */

/* Accent Colors */
semantic-accent-primary: var(--accent-primary);     /* #ff0000 for both themes */
semantic-accent-secondary: var(--accent-secondary); /* #ff3333 for both themes */
semantic-accent-warm: var(--accent-warm);          /* #ff6666 for both themes */

/* Borders */
semantic-border-default: var(--border-default); /* #000000 for both themes */
semantic-border-focus: var(--border-focus);     /* #ff0000 for both themes */
```

## Cinematic Color Aliases

The system also provides cinematic-themed aliases that map to the core theme variables:

```css
/* Cinematic Backgrounds */
cinematic-deep-black: var(--bg-primary);
cinematic-midnight-blue: var(--bg-secondary);
cinematic-forest-green: var(--bg-card);      /* Note: --bg-card not defined in current themes */
cinematic-teal-dark: var(--bg-elevated);

/* Cinematic Text */
cinematic-warm-beige: var(--text-primary);
cinematic-sage-green: var(--text-secondary);
cinematic-muted-blue: var(--text-muted);

/* Cinematic Accents */
cinematic-rust-orange: var(--accent-primary);
cinematic-dark-brown: var(--accent-secondary);
cinematic-sandstone: var(--accent-warm);

/* Cinematic Borders */
cinematic-border-green: var(--border-default);
cinematic-border-sage: var(--border-focus);
```

## Usage Guidelines

### Theme Switching
- Themes can be switched by applying the class `theme1` or `theme2` to the `<html>` element
- Default theme (theme1) is applied to `:root` for fallback compatibility
- Both themes maintain consistent contrast ratios and accessibility standards

### Backgrounds
- Use `semantic-background-primary` for main page backgrounds and footer
- Use `semantic-background-secondary` for header and navigation sections with high contrast
- Use `semantic-background-button` for button backgrounds (very dark red)
- Use `semantic-background-elevated` for search inputs and elevated elements

### Text
- Use `semantic-text-primary` for primary text, headings, and important content (pure white)
- Use `semantic-text-secondary` for navigation links and secondary text (light gray)
- Use `semantic-text-muted` for placeholders and subtle text (medium gray)

### Interactive Elements
- Use `semantic-accent-primary` for primary buttons and call-to-action elements (electric red)
- Use `semantic-accent-secondary` for secondary buttons and hover states (bright red)
- Use `semantic-accent-warm` for warm interactions and medium emphasis (medium red)
- Use `semantic-accent-hot` for subtle highlights and low emphasis (light red)

### Borders
- Use `semantic-border-default` for standard borders and dividers (black)
- Use `semantic-border-focus` for focus borders and active states (electric red)
- Use `semantic-border-hover` for hover borders (bright red)

### Interactive States
- Use `--hover-overlay` for subtle hover effects with red tint
- Use `--active-overlay` for active state effects with stronger red tint

## Color Combinations

### High Contrast Combinations
- `semantic-text-primary` (#ffffff) text on `semantic-background-secondary` (#000000) background
- `semantic-text-primary` (#ffffff) text on `semantic-background-button` (#1a0000) background
- `semantic-text-primary` (#ffffff) text on `semantic-accent-primary` (#ff0000) background

### Medium Contrast Combinations
- `semantic-text-secondary` (#f0f0f0) text on `semantic-background-secondary` (#000000) background
- `semantic-text-secondary` (#f0f0f0) text on `semantic-background-button` (#1a0000) background
- `semantic-text-muted` (#cccccc) text on `semantic-background-elevated` background

### Theme-Specific Combinations
#### Theme 1
- `semantic-text-primary` (#ffffff) text on `semantic-background-primary` (#ffffff) - **Low contrast, avoid**
- `semantic-text-primary` (#ffffff) text on `semantic-background-elevated` (#0d0000) - **High contrast, excellent**

#### Theme 2
- `semantic-text-primary` (#ffffff) text on `semantic-background-primary` (#000000) - **High contrast, excellent**
- `semantic-text-primary` (#ffffff) text on `semantic-background-elevated` (#ffffff) - **Low contrast, avoid**

## Implementation Examples

### Theme Switcher
```tsx
// Switch to theme 2
document.documentElement.className = 'theme2';

// Switch back to theme 1 (default)
document.documentElement.className = 'theme1';
```

### Header
```tsx
<header className="bg-semantic-background-secondary border-b border-semantic-border-default">
  <h1 className="text-semantic-text-primary">CinMatch</h1>
  <nav className="text-semantic-text-secondary hover:text-semantic-text-primary">Navigation</nav>
</header>
```

### Search Input
```tsx
<input className="bg-semantic-background-elevated border-semantic-border-default text-semantic-text-primary placeholder-semantic-text-muted focus:border-semantic-border-focus" />
```

### Primary Button
```tsx
<button className="bg-semantic-accent-primary hover:bg-semantic-accent-secondary text-semantic-text-primary border border-semantic-border-default">
  Search Movies
</button>
```

### Secondary Button
```tsx
<button className="bg-semantic-background-button hover:bg-semantic-accent-warm text-semantic-text-primary border border-semantic-border-hover">
  Filter
</button>
```

### Movie Card
```tsx
<div className="bg-semantic-background-button border border-semantic-border-default hover:border-semantic-border-focus">
  <h3 className="text-semantic-text-primary">Movie Title</h3>
  <p className="text-semantic-text-secondary">Movie Description</p>
  <span className="text-semantic-text-muted">2024</span>
</div>
```

### Carousel Component
```tsx
<Carousel 
  items={dummyCarouselItems}
  className="w-full max-w-6xl mx-auto"
  height="h-80"
  autoPlay={true}
  showIndicators={true}
  showControls={true}
/>
```

### Footer
```tsx
<footer className="bg-semantic-background-primary border-t border-semantic-border-default">
  <p className="text-semantic-text-primary">Created by Samarth Shah</p>
  <a className="text-semantic-text-secondary hover:text-semantic-accent-primary">GitHub</a>
</footer>
```

## Accessibility Notes

- All color combinations have been chosen to provide adequate contrast ratios
- Primary text (#ffffff) on dark backgrounds provides excellent readability
- Electric red accents (#ff0000) provide strong visual hierarchy and focus indicators
- Focus states use high-contrast red borders for better accessibility
- Theme switching maintains consistent contrast across both themes
- Interactive overlays use appropriate opacity levels for visual feedback
- Consider testing with accessibility tools to ensure compliance with WCAG guidelines

## CSS Custom Properties Reference

The complete list of CSS custom properties defined in the theme system:

```css
/* Core Theme Variables */
--bg-primary: #ffffff | #000000;        /* Theme-dependent primary background */
--bg-secondary: #000000;                /* Consistent black secondary background */
--bg-button: #1a0000;                   /* Very dark red for buttons */
--bg-elevated: #0d0000 | #ffffff;       /* Theme-dependent elevated surfaces */

--text-primary: #ffffff;                /* Pure white primary text */
--text-secondary: #f0f0f0;              /* Light gray secondary text */
--text-muted: #cccccc;                  /* Medium gray muted text */

--accent-primary: #ff0000;              /* Electric red primary accent */
--accent-secondary: #ff3333;            /* Bright red secondary accent */
--accent-warm: #ff6666;                 /* Medium red warm accent */
--accent-hot: #ff9999;                  /* Light red hot accent */

--border-default: #000000;              /* Black default borders */
--border-focus: #ff0000;                /* Electric red focus borders */
--border-hover: #ff3333;                /* Bright red hover borders */

--hover-overlay: rgba(255, 0, 0, 0.15); /* Light red hover overlay */
--active-overlay: rgba(255, 0, 0, 0.25);/* Medium red active overlay */

/* Legacy Compatibility */
--background: var(--bg-primary);        /* Fallback background */
--foreground: var(--text-primary);      /* Fallback foreground */
```