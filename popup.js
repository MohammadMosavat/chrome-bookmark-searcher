const searchInput = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");

function getFavicon(url) {
  try {
    const u = new URL(url);
    return u.origin + "/favicon.ico";
  } catch {
    return "";
  }
}

searchInput.focus();
searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim();
  resultsDiv.innerHTML = "";

  if (!query) return;

  chrome.bookmarks.search({ query }, (bookmarks) => {
    bookmarks.forEach((b) => {
      if (!b.url) return; 

      const div = document.createElement("div");
      div.className = "bookmark";

      const img = document.createElement("img");
      img.src = getFavicon(b.url);
      img.onerror = () => {
        img.src = "default.png";
      };

      const span = document.createElement("span");
      span.textContent = b.title;

      const copyBtn = document.createElement("img");
      copyBtn.className = "copy-btn";
      copyBtn.src = "/public/copy.svg"; 
      copyBtn.alt = "Copy URL";
      copyBtn.title = "Copy URL";
      copyBtn.width = 16;
      copyBtn.height = 16;

      copyBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(b.url);
      });

      div.appendChild(img);
      div.appendChild(span);
      div.appendChild(copyBtn);

      div.addEventListener("click", () => {
        chrome.tabs.create({ url: b.url });
      });

      resultsDiv.appendChild(div);
    });
  });
});
