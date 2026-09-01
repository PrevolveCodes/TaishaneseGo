# TaishaneseGo

A static, GitHub Pages-ready language-learning website for **Taishanese / Hoisanese / Toisanese (台山話)**. It uses HTML, CSS, and JavaScript only, with progress stored locally through `localStorage`.

## Accuracy policy

This project intentionally does **not invent Taishanese words, tones, grammar, or pronunciation**. Starter language entries are marked **Needs verification** until they can be checked against reliable Taishanese sources. Do not substitute Mandarin or Cantonese merely because a Taishanese form is unavailable.

Before publishing language material:
1. Verify the Taishanese form against reliable linguistic or community sources.
2. Record the source and editorial notes.
3. Choose one documented romanization system and use it consistently.
4. Clearly identify regional variants.
5. Add only genuine Taishanese audio with known provenance.

## Run locally

Clone or download the repository and open `index.html`. A simple static server, such as VS Code Live Server, is recommended for testing.

## Deploy with GitHub Pages

1. Push the project to GitHub.
2. Open **Settings → Pages**.
3. Select **Deploy from a branch**.
4. Choose `main` and `/(root)`.
5. Save and wait for GitHub Pages to publish the site.

## Structure

- `index.html` — application entry point
- `css/style.css` — responsive styling and dark mode
- `js/app.js` — navigation, lessons, progress, flashcards, settings
- `data/vocabulary.js` — vocabulary records
- `data/lessons.js` — lesson/exercise data
- `data/phrases.js` — phrasebook records
- `data/pronunciation.js` — pronunciation framework

## Adding vocabulary

Add a stable ID, category, Taishanese form, romanization, English meaning, example, verification status, and optional audio path to `data/vocabulary.js`. Keep placeholders clearly labeled until verified.

## Adding lessons

Add lesson objects in `data/lessons.js`. The application automatically handles ordered unlocking and local completion tracking.

## Adding audio

Create an `audio/` directory and add verified audio files. Reference them from the language data. Do not use automatically generated Mandarin or Cantonese speech as Taishanese pronunciation.

## Privacy

No account, backend, database, or paid API is required. XP, completed lessons, favorites, difficult cards, streaks, and settings remain in the user's browser.
