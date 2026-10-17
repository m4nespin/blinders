browser.storage.local.get().then((saved) => {
  for (const key of ["shorts", "members", "related", "notifications", "explore", "more", "premium"]) {
    const input = document.getElementById(key);
    input.checked = saved[key] ?? true;
    input.addEventListener("change", () => browser.storage.local.set({ [key]: input.checked }));
  }
});
