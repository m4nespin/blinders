# Blinders: Focus Mode for YouTube

Zen/Firefox extension that hides YouTube Shorts and members-only videos. Click the toolbar icon to switch each one on or off; changes apply to open YouTube tabs instantly. Only permissions: youtube.com and `storage` (to remember the switches).

## What gets hidden

- **Shorts:** home/search/subscription shelves, Shorts cards in grids, search results and the watch-page sidebar, the Shorts entry in the side guide and the channel "Shorts" tab.
- **Members-only:** any video card with a "Members only" badge (home, channel, search, sidebar).

## Install in Zen

Temporary (removed when Zen restarts):

1. Open `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on…** and pick `manifest.json` from this folder.

Permanent: sign it as an unlisted add-on on [addons.mozilla.org](https://addons.mozilla.org/developers/) (free, automated), or run `npx web-ext sign --channel=unlisted` with AMO API keys, then install the resulting `.xpi`.

## Maintenance

YouTube renames its markup often. All selectors live in `blinders.css`; if something reappears, inspect the card and adjust there. `content.js` only flips `data-blinders-shorts` / `data-blinders-members` on `<html>` to match the popup switches.
