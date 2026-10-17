const root = document.documentElement;

// Missing keys default to on, so a fresh install hides everything.
function apply({ shorts = true, members = true }) {
  root.toggleAttribute("data-blinders-shorts", shorts);
  root.toggleAttribute("data-blinders-members", members);
}

apply({});
browser.storage.local.get().then(apply);
browser.storage.onChanged.addListener(() => browser.storage.local.get().then(apply));
