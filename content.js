const root = document.documentElement;

// Missing keys default to on, so a fresh install hides everything.
function apply({ shorts = true, members = true, related = true, notifications = true }) {
  root.toggleAttribute("data-blinders-shorts", shorts);
  root.toggleAttribute("data-blinders-members", members);
  root.toggleAttribute("data-blinders-related", related);
  root.toggleAttribute("data-blinders-notifications", notifications);
  redirectShorts();
}

// Opening a Short directly plays it in the regular player instead.
function redirectShorts() {
  const id = location.pathname.match(/^\/shorts\/([\w-]+)/)?.[1];
  if (id && root.hasAttribute("data-blinders-shorts")) location.replace(`/watch?v=${id}`);
}

// Filter chips ("All · Shorts · Videos") have no stable attribute, only their label.
// YouTube recycles chip elements, so re-check the label on every DOM change.
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
}).observe(root, { childList: true, subtree: true });

apply({});
browser.storage.local.get().then(apply);
browser.storage.onChanged.addListener(() => browser.storage.local.get().then(apply));
document.addEventListener("yt-navigate-finish", redirectShorts);
