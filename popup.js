// Each switch's id is its storage key; content.js keeps the same list.
browser.storage.local.get().then((saved) => {
  for (const input of document.querySelectorAll('input[role="switch"]')) {
    input.checked = saved[input.id] ?? true;
    input.addEventListener("change", () => browser.storage.local.set({ [input.id]: input.checked }));
  }
});
