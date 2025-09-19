const searchInput = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");

// Favicon URL helper
function getFavicon(url) {
  try {
    const u = new URL(url);
    return u.origin + "/favicon.ico";
  } catch {
    return "";
  }
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim();
  resultsDiv.innerHTML = "";

  if (!query) return;

  chrome.bookmarks.search({ query }, (bookmarks) => {
    bookmarks.forEach((b) => {
      if (!b.url) return; // skip folders

      const div = document.createElement("div");
      div.className = "bookmark";

      const img = document.createElement("img");
      img.src = getFavicon(b.url);
      img.onerror = () => {
        img.src = "default.png";
      }; // fallback icon if no favicon

      const span = document.createElement("span");
      span.textContent = b.title;

      div.appendChild(img);
      div.appendChild(span);

      // Open bookmark in a new tab when clicked
      div.addEventListener("click", () => {
        chrome.tabs.create({ url: b.url });
      });

      resultsDiv.appendChild(div);
    });
  });
});
