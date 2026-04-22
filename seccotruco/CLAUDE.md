# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

**Secco Truco** — a React web app for playing/tracking the Brazilian card game Truco. It provides two scoreboards (one per regional variant), a rules reference, and an interactive card-ranking guide.

## Commands

```bash
npm run dev       # Start dev server (Vite HMR)
npm run build     # Production build
npm run preview   # Preview production build locally
npm run lint      # ESLint
```

No test suite is configured.

## Architecture

**Routing** is defined in [src/main.jsx](src/main.jsx): four routes (`/`, `/scoreboard-paulista`, `/scoreboard-mineiro`, `/how-to-play`, `/order-of-cards`) map to components in `src/pages/`.

**Game variants — Paulista vs. Mineiro:**
- Both scoreboards share the `Scoreboard` component ([src/components/Scoreboard.jsx](src/components/Scoreboard.jsx)), which changes its score-increment buttons based on the `type` prop: `"Paulista"` → `[+1, +3, +6, +9, -1, -3]`, `"Mineiro"` → `[+2, +4, +6, +8, -2, -4]`.
- Scoring goes 0–12; winning a round (reaching ≥12) increments wins. First team to 2 wins = game over.
- Paulista triggers an "11's Hand!" dialog at `score1 === 11 && score2 === 11`. Mineiro triggers a "10's Hand!" dialog at `score1 === 10 && score2 === 10`.

**Scoreboard pages** ([src/pages/ScoreboardPaulista.jsx](src/pages/ScoreboardPaulista.jsx) and [src/pages/ScoreboardMineiro.jsx](src/pages/ScoreboardMineiro.jsx)) own all game state (team names, scores, wins, dialog visibility). They pass callbacks down to `Scoreboard` and use `DialogBox` for round-won and game-over notifications.

**HowToPlay** ([src/pages/HowToPlay.jsx](src/pages/HowToPlay.jsx)) is purely presentational: it reads all content from [src/HowToPlay.json](src/HowToPlay.json) and renders it through small local components (`SectionTitle`, `InfoBox`, `VariationBox`, `WarningBox`, `ExampleRound`). To update rules text, edit the JSON.

**OrderOfCards** ([src/pages/OrderOfCards.jsx](src/pages/OrderOfCards.jsx)) renders static card rankings for both variants. For Paulista it also supports interactive vira selection: clicking a card marks it as the vira and dynamically computes which cards become manilhas (next rank, all four suits highlighted).

**Styling** — each component/page has a matching CSS file in `src/styles/`. The green felt "fabric" background and CSS variables (`--green1`, `--beige`) are shared across all pages via the `.fabric` class.