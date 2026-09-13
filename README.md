# Paly Animation Club

Website for the Paly Animation Club at Palo Alto High School.

## Structure

- `index.html` — single-page site (about, goals, activities, join, officers, contact)
- `css/style.css` — styling
- `js/main.js` — mobile nav toggle

## Running locally

This is a static site with no build step. Open `index.html` directly in a
browser, or serve the folder:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploying

Any static host works (GitHub Pages, Netlify, Vercel). For GitHub Pages,
enable Pages on this repo pointing at the root of the default branch.
