# Your Modded 3DS — Owner's Guide

A single-page reference for a modded Nintendo 3DS: installing apps, custom
themes, and playing DS, GBA, SNES, Neo Geo, Game Boy, NES and Genesis games.

Written for someone with no prior homebrew knowledge.

## Hosting on GitHub Pages

No build step. Plain HTML, CSS and one small JS file.

1. **Settings → Pages**
2. **Source:** Deploy from a branch
3. **Branch:** `main`, folder `/ (root)`
4. Save. The site appears at `https://<user>.github.io/3ds-guide/`

## Adding screenshots

Every screenshot slot renders as a labelled placeholder until the image
exists, so the site is usable right away and improves as you add them.

Capture them on the console itself:

1. Open the thing you want to show
2. Press <kbd>L</kbd> + <kbd>Down</kbd> + <kbd>Select</kbd> for Rosalina
3. Choose **Take screenshot**
4. Images land in `/luma/screenshots/` on the SD card

Then copy the file into `img/` using the filename the placeholder names.

| Filename | Shows |
|---|---|
| `rosalina.png` | Rosalina menu open mid-game |
| `fbi-install.png` | FBI installing a CIA |
| `universal-updater.png` | Universal Updater app list |
| `3hs.png` | Browsing hShop in 3hs |
| `anemone.png` | Anemone3DS / Theme Plaza |
| `twilight.png` | TWiLight Menu++ game list |
| `open-agb-firm.png` | open_agb_firm file browser |
| `ftpd.png` | ftpd showing IP and port |

Rosalina writes two files per capture (top and bottom screen). Use whichever
is clearer, or crop them together. No resizing needed — the CSS scales them.

## Console this documents

Old 3DS · firmware 11.6.0-39U · Luma3DS v13.4 · boot9strap 1.4,
set up following [3ds.hacks.guide](https://3ds.hacks.guide/).

## Editing

`index.html` holds all content. Section order is the reading order, and the
sticky nav is generated from the same IDs — add a `<section id="…">` and a
matching link in `.toc` to add a topic.
