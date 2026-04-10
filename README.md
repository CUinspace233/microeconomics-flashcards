# Economics Review Cards

A lightweight flashcard website for Chapter 1 microeconomics revision.

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
- Chapter 1 only
- 36 flashcards
- Emphasis on PPC, opportunity cost, comparative advantage, trade prices, and calculation habits

## Next suggested step
Expand the same structure to Chapters 2-10 and add spaced repetition scheduling.
