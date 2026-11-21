# The Midnight Star Cardlist

A static, responsive card gallery for **The Midnight Star**. It is built with HTML, CSS, and vanilla JavaScript; no build step or server-side code is required.

## Run locally

Open `index.html` in a browser. The page and all card images, thumbnails, fonts, and banner art are stored in this folder.

## Publish with GitHub Pages

1. Create a GitHub repository and upload the **contents of this folder** to its root. Include `assets/cards/` so every full-size card image is available.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select the `main` branch and `/ (root)`, then save.
4. GitHub Pages will show the published address in the Pages settings.

All site paths are relative, so the site works both at a repository subpath (for example, `username.github.io/repository/`) and at a custom domain.

## Project files

- `index.html` — page structure and dialogs
- `styles.css` — responsive layout and visual effects
- `cards.js` — card titles, stories, wishes, rarity, and image filenames
- `cardlist.js` — search, rarity filters, gallery paging, and detail dialogs
- `image-gestures.js` — image swipe and zoom interactions
- `assets/cards/` — 60 optimized WebP card images
- `assets/thumbnails/` — 60 optimized WebP gallery previews
- `assets/banner.jpg` — page banner
- `assets/fonts/` — locally hosted Noto Sans Thai font and its OFL license

The `archive/` folder contains earlier design files and is excluded from Git by `.gitignore`.
