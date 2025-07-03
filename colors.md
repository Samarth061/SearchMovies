# Color Palette Reference

## Overview
This document provides a comprehensive guide to the color palette used in the CinMatch movie search application.

## Color Palette

### Backgrounds
- **Primary Background**: `#070a09` - Deep black-green for main backgrounds
- **Secondary Background**: `#0c222d` - Dark blue for header/elevated sections
- **Card Background**: `#1f3530` - Dark forest green for content cards
- **Elevated Background**: `#1a3f4d` - Dark teal for search inputs and elevated elements

### Text Colors
- **Primary Text**: `#b49e77` - Warm beige for main text and headings
- **Secondary Text**: `#729487` - Sage green for navigation and secondary text
- **Muted Text**: `#63838d` - Blue-gray for placeholders and subtle text

### Accent Colors
- **Primary Accent**: `#8c3e05` - Rust orange for buttons and call-to-action
- **Secondary Accent**: `#563116` - Dark brown for hover states and secondary buttons
- **Warm Accent**: `#b49e77` - Warm beige for highlights and ratings

### Borders
- **Default Border**: `#495d50` - Medium green for standard borders
- **Focus Border**: `#729487` - Sage green for focus states

## CSS Custom Properties

These colors are available as CSS custom properties in `app/globals.css`:

```css
/* Backgrounds */
--bg-primary: #070a09;
--bg-secondary: #0c222d;
--bg-card: #1f3530;
--bg-elevated: #1a3f4d;

/* Text Colors */
--text-primary: #b49e77;
--text-secondary: #729487;
--text-muted: #63838d;

/* Accent Colors */
--accent-primary: #8c3e05;
--accent-secondary: #563116;
--accent-warm: #b49e77;

/* Borders */
--border-default: #495d50;
--border-focus: #729487;
```

## Usage Guidelines

### Backgrounds
- Use `#070a09` for main page backgrounds and footer
- Use `#0c222d` for header and navigation sections
- Use `#1f3530` for movie cards and content containers
- Use `#1a3f4d` for search inputs and elevated elements

### Text
- Use `#b49e77` for primary text, headings, and important content
- Use `#729487` for navigation links and secondary text
- Use `#63838d` for placeholders and subtle text

### Interactive Elements
- Use `#8c3e05` for primary buttons and call-to-action elements
- Use `#563116` for button hover states
- Use `#729487` for focus rings and active states

### Borders
- Use `#495d50` for standard borders and dividers
- Use `#729487` for focus borders and active states

## Color Combinations

### High Contrast Combinations
- `#b49e77` text on `#070a09` background
- `#b49e77` text on `#0c222d` background
- `#b49e77` text on `#8c3e05` background

### Medium Contrast Combinations
- `#729487` text on `#070a09` background
- `#729487` text on `#1f3530` background
- `#63838d` text on `#1a3f4d` background

## Implementation Examples

### Header
```tsx
<header className="bg-[#0c222d] border-b border-[#495d50]">
  <h1 className="text-[#b49e77]">CinMatch</h1>
  <nav className="text-[#729487] hover:text-[#b49e77]">Navigation</nav>
</header>
```

### Search Input
```tsx
<input className="bg-[#1a3f4d] border-[#495d50] text-[#b49e77] placeholder-[#63838d] focus:ring-[#729487]" />
```

### Button
```tsx
<button className="bg-[#8c3e05] hover:bg-[#563116] text-[#b49e77]">
  Search
</button>
```

### Movie Card
```tsx
<div className="bg-[#1f3530] border-[#495d50]">
  <h3 className="text-[#b49e77]">Movie Title</h3>
  <p className="text-[#729487]">Movie Description</p>
</div>
```

## Accessibility Notes

- All color combinations have been chosen to provide adequate contrast ratios
- Primary text (#b49e77) on dark backgrounds provides excellent readability
- Focus states use high-contrast colors for better accessibility
- Consider testing with accessibility tools to ensure compliance with WCAG guidelines