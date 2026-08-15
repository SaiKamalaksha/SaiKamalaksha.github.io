# Personal Portfolio

This project is a lightweight React + Vite portfolio for showcasing your academic, research, and project work.

## Local development

```bash
npm install
npm run dev
```

The app is configured to run on `0.0.0.0`, so it can be previewed locally in the browser.

## Content you can edit

Most of the content is in `src/App.tsx`.

### Main sections
- `NAV_ITEMS` controls the top bar tabs
- `experiences` contains your work history
- `projects` contains your featured projects
- `HomeSection` contains your hero section and intro
- `ExperienceSection` contains your timeline and education
- `ResearchSection` contains your research focus
- `ProjectsSection` contains project cards and skills

### Styling

The design system is mainly controlled in `src/index.css`.

You can update:
- background color
- accent colors
- typography
- spacing
- borders and card styling

## Resume

Your resume PDF is stored in:

`src/imports/Kamalaksha_Resume-1.pdf`

You can replace it with a new file if needed, keeping the same filename or updating the import path in `src/App.tsx`.

## Useful notes

- Keep the app content in plain arrays and objects for easy editing.
- Update text, links, dates, and project details directly in `src/App.tsx`.
- If you want to change the visual theme, edit the CSS variables at the top of `src/index.css`.

## Build check

```bash
npm run build
```

This confirms the site compiles successfully before publishing or sharing.
