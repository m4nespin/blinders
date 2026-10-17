# Blinders: Focus Mode for YouTube

Firefox extension (also works in Zen and other Firefox-based browsers) that hides YouTube Shorts, members-only videos, watch-page recommendations, the notification bell, the sidebar's Explore and More from YouTube sections, and YouTube Premium features. Everything is hidden by default after install; click the toolbar icon to switch each one on or off, and changes apply to open YouTube tabs instantly.

**Privacy:** collects no data and makes no network requests. Only permissions: youtube.com and `storage` (to remember the switches locally).

## What gets hidden

- **Shorts:** home/search/subscription shelves, Shorts cards in grids, search results, the watch-page sidebar and notifications, the Shorts entry in both the full and collapsed sidebar menu, the "Shorts" search/feed filter chip and the channel "Shorts" tab. Opening a Shorts link directly plays it in the regular player instead.
- **Members-only:** any video card with a "Members only" badge (home, channel, search, sidebar).
- **Recommendations:** the suggested-videos column next to the player (and its filter chips). Playlist and live-chat panels stay.
- **Notifications:** the bell in the top bar, with its unread count and dropdown.
- **Explore:** the "Explore" section of the sidebar menu (Music, Gaming, Learning…).
- **More from YouTube:** the "More from YouTube" section of the sidebar menu (Premium, Music, Kids).
- **Premium features:** the Download button, "Download" in video menus and the sidebar Downloads entry; "Premium" quality options (e.g. 1080p Premium) and Premium badges in the player's settings; Premium promo banners; and "YouTube Premium" links in the sidebar and account menu.

On the mobile site (m.youtube.com, e.g. Firefox for Android) only Shorts, members-only and recommendations are hidden; the other switches target the desktop layout. Shorts menu entries, the channel tab and the filter chip are matched by their English label.

## Install

Get it from [Firefox Add-ons](https://addons.mozilla.org/firefox/addon/blinders-focus-mode-for-youtube/). Requires Firefox 140+ or Firefox for Android 142+.

## Run from source

Temporary (removed when the browser restarts):

1. Open `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on…** and pick `manifest.json` from this folder.

## License

[MIT](LICENSE)
