# Your Modded 3DS: Owner's Guide

A small static site documenting a modded Nintendo 3DS: installing apps, custom
themes, online play, and playing DS, GBA, SNES, Neo Geo, Game Boy, NES and
Genesis games. Written for someone with no prior homebrew knowledge.

## Structure

A homepage that acts as a searchable launcher, plus one page per topic.

| Page | Covers |
|---|---|
| `index.html` | Search + topic cards + quick answers |
| `apps.html` | `.cia` vs `.3dsx`, FBI, Universal Updater |
| `games.html` | Per-system routing: DS, GBA, SNES, Neo Geo, GB, NES, Genesis |
| `menus.html` | Rosalina, Luma config, payload menu |
| `themes.html` | Anemone3DS, Theme Plaza |
| `files.html` | FTP from Android, SD card transfers |
| `hshop.html` | hShop and the 3hs client |
| `online.html` | Pretendo (Nimbus), NetPass |
| `safety.html` | NAND backup, Checkpoint, care rules |
| `links.html` | Guides, app pages, communities |

Search filters the topic cards on card text plus each card's `data-keywords`,
so typing a console or game name ("gba", "pokemon", "neo geo") finds the right
page without knowing what it's called. `/` focuses the search box.

## Hosting on GitHub Pages

No build step. Plain HTML, CSS and one JS file.

1. **Settings → Pages**
2. **Source:** Deploy from a branch
3. **Branch:** `main`, folder `/ (root)`
4. Save. The site appears at `https://<user>.github.io/3ds-guide/`

## Screenshots

Slots render as labelled placeholders until the image exists, so the site is
usable as-is and improves as images land in `img/`.

**Already filled**, sourced from [Universal-DB](https://db.universal-team.net/) (GPL-3.0):

| File | Shows |
|---|---|
| `universal-updater.png` | Universal Updater download list |
| `anemone.png` | Anemone3DS browsing Theme Plaza |
| `ftpd.png` | ftpd showing its IP and port |
| `snes9x.png` | Snes9x in-game with cheats menu |
| `nimbus.png` | Nimbus switching to Pretendo |

**Still placeholders**: no cleanly-licensed source exists, so capture these on
the console itself:

| File | Shows |
|---|---|
| `fbi-install.png` | FBI installing a CIA |
| `rosalina.png` | Rosalina menu open mid-game |
| `twilight.png` | TWiLight Menu++ game list |
| `open-agb-firm.png` | open_agb_firm file browser |
| `3hs.png` | Browsing hShop in 3hs |

To capture: open the thing you want to show, press
<kbd>L</kbd>+<kbd>Down</kbd>+<kbd>Select</kbd> for Rosalina, choose **Take
screenshot**. Images land in `/luma/screenshots/` on the SD card. Rosalina
writes one file per screen. The site's CSS expects the stacked 400×480 format
used by the existing images, so combine top and bottom, or just use whichever
screen is clearer. No resizing needed.

## Attribution

Screenshots are from [Universal-DB](https://github.com/Universal-Team/db),
GPL-3.0, credited in each page footer.

## Console this documents

Old 3DS · firmware 11.6.0-39U · Luma3DS v13.4 · boot9strap 1.4,
set up following [3ds.hacks.guide](https://3ds.hacks.guide/).

## Adding a topic

1. Copy any topic page as a starting point (they share `style.css` / `app.js`)
2. Add a `.topic` card to `index.html` with a `data-keywords` list covering
   what someone might actually type to find it
