# Color Palette Reference

## Overview
This document provides a comprehensive guide to the color palette used in the CinMatch movie search application.

## Color Palette

### Backgrounds
- **Primary Background**: `#070a09` (`semantic-background-primary`) - Deep black-green for main backgrounds
- **Secondary Background**: `#0c222d` (`semantic-background-secondary`) - Dark blue for header/elevated sections
- **Card Background**: `#1f3530` (`semantic-background-card`) - Dark forest green for content cards
- **Elevated Background**: `#1a3f4d` (`semantic-background-elevated`) - Dark teal for search inputs and elevated elements

### Text Colors
- **Primary Text**: `#b49e77` (`semantic-text-primary`) - Warm beige for main text and headings
- **Secondary Text**: `#729487` (`semantic-text-secondary`) - Sage green for navigation and secondary text
- **Muted Text**: `#63838d` (`semantic-text-muted`) - Blue-gray for placeholders and subtle text

### Accent Colors
- **Primary Accent**: `#8c3e05` (`semantic-accent-primary`) - Rust orange for buttons and call-to-action
- **Secondary Accent**: `#563116` (`semantic-accent-secondary`) - Dark brown for hover states and secondary buttons

### Borders
- **Default Border**: `#495d50` (`semantic-border-default`) - Medium green for standard borders
- **Focus Border**: `#729487` (`semantic-border-focus`) - Sage green for focus states

## Semantic Color Classes

These colors are available as Tailwind CSS classes using the `@theme` configuration:

```css
/* Backgrounds */
semantic-background-primary: #070a09;
semantic-background-secondary: #0c222d;
semantic-background-card: #1f3530;
semantic-background-elevated: #1a3f4d;

/* Text Colors */
semantic-text-primary: #b49e77;
semantic-text-secondary: #729487;
semantic-text-muted: #63838d;

/* Accent Colors */
semantic-accent-primary: #8c3e05;
semantic-accent-secondary: #563116;

/* Borders */
semantic-border-default: #495d50;
semantic-border-focus: #729487;
```

## Usage Guidelines

### Backgrounds
- Use `semantic-background-primary` for main page backgrounds and footer
- Use `semantic-background-secondary` for header and navigation sections
- Use `semantic-background-card` for movie cards and content containers
- Use `semantic-background-elevated` for search inputs and elevated elements

### Text
- Use `semantic-text-primary` for primary text, headings, and important content
- Use `semantic-text-secondary` for navigation links and secondary text
- Use `semantic-text-muted` for placeholders and subtle text

### Interactive Elements
- Use `semantic-accent-primary` for primary buttons and call-to-action elements
- Use `semantic-accent-secondary` for button hover states
- Use `semantic-border-focus` for focus rings and active states

### Borders
- Use `semantic-border-default` for standard borders and dividers
- Use `semantic-border-focus` for focus borders and active states

## Color Combinations

### High Contrast Combinations
- `semantic-text-primary` text on `semantic-background-primary` background
- `semantic-text-primary` text on `semantic-background-secondary` background
- `semantic-text-primary` text on `semantic-accent-primary` background

### Medium Contrast Combinations
- `semantic-text-secondary` text on `semantic-background-primary` background
- `semantic-text-secondary` text on `semantic-background-card` background
- `semantic-text-muted` text on `semantic-background-elevated` background

## Implementation Examples

### Header
```tsx
<header className="bg-semantic-background-secondary border-b border-semantic-border-default">
  <h1 className="text-semantic-text-primary">CinMatch</h1>
  <nav className="text-semantic-text-secondary hover:text-semantic-text-primary">Navigation</nav>
</header>
```

### Search Input
```tsx
<input className="bg-semantic-background-elevated border-semantic-border-default text-semantic-text-primary placeholder-semantic-text-muted focus:ring-semantic-border-focus" />
```

### Button
```tsx
<button className="bg-semantic-accent-primary hover:bg-semantic-accent-secondary text-semantic-text-primary">
  Search
</button>
```

### Movie Card
```tsx
<div className="bg-semantic-background-card border-semantic-border-default">
  <h3 className="text-semantic-text-primary">Movie Title</h3>
  <p className="text-semantic-text-secondary">Movie Description</p>
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
- Primary text (#b49e77) on dark backgrounds provides excellent readability
- Focus states use high-contrast colors for better accessibility
- Consider testing with accessibility tools to ensure compliance with WCAG guidelines