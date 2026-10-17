const root = document.documentElement;
const KEYS = ["shorts", "members", "related", "notifications", "explore", "more", "premium"];

// Missing keys default to on, so a fresh install hides everything.
function apply(saved) {
  for (const key of KEYS) root.toggleAttribute(`data-blinders-${key}`, saved[key] ?? true);
}

// Opening a Short directly plays it in the regular player instead.
function redirectShorts() {
  const id = location.pathname.match(/^\/shorts\/([\w-]+)/)?.[1];
  if (id && root.hasAttribute("data-blinders-shorts")) location.replace(`/watch?v=${id}`);
}

// Filter chips ("All · Shorts · Videos") have no stable attribute, only their label.
// YouTube recycles chip elements and rewrites their text in place, so re-check on every DOM change.
// shortcut: matches the English label only, add translations if non-English users report it.
let queued = false;
function tagChips() {
  queued = false;
  for (const chip of document.querySelectorAll("yt-chip-cloud-chip-renderer, chip-view-model")) {
    chip.toggleAttribute("data-blinders-shorts-chip", chip.textContent.trim() === "Shorts");
  }
}
new MutationObserver(() => {
  if (!queued) {
    queued = true;
    requestAnimationFrame(tagChips);
  }
}).observe(root, { childList: true, subtree: true, characterData: true });

// Hide with defaults right away; redirect only once the saved switches are known.
apply({});
const load = () => browser.storage.local.get().then(apply).then(redirectShorts);
load();
browser.storage.onChanged.addListener(load);
document.addEventListener("yt-navigate-finish", redirectShorts); // www.youtube.com
window.addEventListener("state-navigateend", redirectShorts); // m.youtube.com
