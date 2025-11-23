# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ut.code(); Learn is a web technology learning platform built with Docusaurus. It provides educational materials for web development, covering HTML, CSS, JavaScript, Node.js, React, and more advanced topics. The content is written in MDX format and automatically generates a documentation website.

## Common Commands

### Development

```bash
npm ci                  # Install dependencies (preferred over npm install)
npm start              # Start development server with hot reload
npm run build          # Build production site
npm run serve          # Serve built site locally
```

### Code Quality

```bash
npm run format         # Format code with Prettier
npm run format:check   # Check code formatting
```

### Before Committing

Always run these commands before committing:

```bash
npm run format
npm run build
```

## Architecture

### Directory Structure

- `docs/` - Main content directory with MDX files
  - `1-trial-session/` - Beginner tutorials
  - `2-browser-apps/` - Browser-based applications
  - `3-web-servers/` - Server-side development
  - `4-advanced/` - Advanced topics (TypeScript, React, bundlers)
  - `5-team-development/` - Team development practices
  - `_samples/` - Code examples within each section
- `src/` - Docusaurus customizations
  - `components/` - Custom React components for MDX
  - `css/` - Custom styling
  - `pages/` - Static pages
  - `theme/` - Theme customizations
- `static/` - Static assets (images, etc.)

### Content Structure

- All content files are `index.mdx` within their respective directories
- Sidebar navigation is auto-generated based on directory structure
- Each section contains practical code samples in `_samples/` subdirectories

### Custom Components

The following custom components are available for use in MDX files:

- `<Term>` - Add popup explanations for technical terms
- `<Answer>` - Collapsible answer sections for exercises
- `<ViewSource>` - Buttons to view code on GitHub and CodeSandbox
- `<ExternalVideoPlayer>` - Embed external videos
- `<SlideShow>` - Create image slideshows

### Sample Code Organization

Code examples are organized in `_samples/` directories within each topic:

- Each sample has its own `package.json` with dependencies
- Samples are referenced from main content using `<ViewSource>` component
- Many samples are runnable Node.js or browser applications

## Development Notes

### Content Editing

- Edit `index.mdx` files in the appropriate `docs/` subdirectory
- Use MDX syntax (Markdown + JSX components)
- Math expressions supported via KaTeX (use `$$` for block math, `$` for inline)
- Mermaid diagrams supported
- Code highlighting with Prism.js

### Node Version

- Requires Node.js >= 18.0 (specified in `package.json`)
- Uses `.nvmrc` file for version management

### Formatting

- Uses Prettier for code formatting
- VSCode configured to use Prettier as default formatter
- Empty `.prettierrc.json` uses default Prettier settings
