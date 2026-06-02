# Coding Rules

## Project Scope

This project is a frontend interview handbook MVP.

Do not implement features outside the MVP scope unless explicitly requested.

## MVP Includes

- Home page
- Questions list page
- Question detail page
- AI Coding page
- Local mock data
- Search
- Category filter
- Level filter
- Frequency sort
- Copy oral answer

## MVP Excludes

- Login
- Backend
- Database
- Favorite
- Mastery status
- Quiz mode
- Statistics dashboard
- AI API integration

## Tech Stack

- React
- Vite
- TypeScript
- React Router
- Tailwind CSS
- Fuse.js
- lucide-react

## Code Style

- Use TypeScript strictly.
- Keep components small.
- Do not put all logic in App.tsx.
- Extract reusable UI components.
- Prefer clear names over clever abstractions.
- Run build before final response.

## Content Skill

when adding or modifying interview questions, always follow:

- `skills/interview-handbook-content.md`

Before changing `src/data/questions.ts`, read this skill first.

## Related Specs

When adding code for interview questions, also follow:

- `specs/08-code-answer-spec.md`
