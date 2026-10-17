# Blinders: Focus Mode for YouTube

Zen/Firefox extension that hides YouTube Shorts, members-only videos, watch-page recommendations, the notification bell and the sidebar's Explore and More from YouTube sections. Click the toolbar icon to switch each one on or off; changes apply to open YouTube tabs instantly. Only permissions: youtube.com and `storage` (to remember the switches).

## What gets hidden

- **Shorts:** home/search/subscription shelves, Shorts cards in grids, search results, the watch-page sidebar and notifications, the Shorts entry in both the full and collapsed sidebar menu, the "Shorts" search/feed filter chip and the channel "Shorts" tab. Opening a Shorts link directly plays it in the regular player instead.
- **Members-only:** any video card with a "Members only" badge (home, channel, search, sidebar).
- **Recommendations:** the suggested-videos column next to the player (and its filter chips). Playlist and live-chat panels stay.
- **Notifications:** the bell in the top bar, with its unread count and dropdown.
- **Explore:** the "Explore" section of the sidebar menu (Music, Gaming, Learning…).
- **More from YouTube:** the "More from YouTube" section of the sidebar menu (Premium, Music, Kids).

## Install in Zen

Temporary (removed when Zen restarts):

1. Open `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on…** and pick `manifest.json` from this folder.

Permanent: sign it as an unlisted add-on on [addons.mozilla.org](https://addons.mozilla.org/developers/) (free, automated), or run `npx web-ext sign --channel=unlisted` with AMO API keys, then install the resulting `.xpi`.

## Maintenance

YouTube renames its markup often. All selectors live in `blinders.css`; if something reappears, inspect the card and adjust there. `content.js` only flips `data-blinders-shorts` / `data-blinders-members` on `<html>` to match the popup switches.
