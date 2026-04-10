# Microeconomics Review Cards

A lightweight flashcard website for chapter-based microeconomics revision.

## Included
- English flashcards only
- Extra formula and calculation-focused cards
- Topic filters
- Formula-only review mode
- Local progress saving with `localStorage`
- Real review scheduling: `Again / Hard / Good / Easy` now changes both next-review timing and how quickly a card reappears in the current session

## Files
- `index.html`
- `styles.css`
- `app.js`
- `data/chapter1-cards.js`
- `data/chapter2-cards.js`
- `output/chapter1_sample/` for extracted Chapter 1 notes and sample data

## Run locally
Because the page loads local JS data, the safest option is to run a small local server:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Current scope
- Chapters 1-2 loaded
- Chapter filter + topic filter
- Emphasis on PPC, opportunity cost, comparative advantage, supply, profit, shutdown rules, and elasticity
- Built-in review scheduling with spaced repetition behaviour

## Next suggested step
Expand the same structure to Chapters 3-10.
