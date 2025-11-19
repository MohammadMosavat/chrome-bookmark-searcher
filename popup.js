const searchInput = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");

let currentIndex = -1;
let bookmarksList = [];
let allBookmarks = [];
let searchTimer = null;

function getFavicon(url) {
  try {
    const u = new URL(url);
    return u.origin + "/favicon.ico";
  } catch {
    return "";
  }
}

function renderBookmarks(bookmarks) {
  resultsDiv.innerHTML = "";
  bookmarksList = bookmarks.filter((b) => b.url);

  const fragment = document.createDocumentFragment();

  bookmarksList.forEach((b, i) => {
    const div = document.createElement("div");
    div.className = "bookmark";
    div.dataset.index = i;

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

    fragment.appendChild(div);
  });

  resultsDiv.appendChild(fragment);
  currentIndex = -1;
}

chrome.bookmarks.getTree((tree) => {
  const children = tree[0].children[0]?.children || [];
  renderBookmarks(allBookmarks);
});

searchInput.focus();
searchInput.addEventListener("input", () => {
  clearTimeout(searchTimer);

  searchTimer = setTimeout(() => {
    const query = searchInput.value.trim();

    if (!query) {
      renderBookmarks(allBookmarks);
      return;
    }

    chrome.bookmarks.search(query, (results) => {
      renderBookmarks(results);
    });
  }, 200);
});

searchInput.addEventListener("keydown", (e) => {
  const items = resultsDiv.querySelectorAll(".bookmark");
  if (items.length === 0) return;

  if (e.key === "ArrowDown") {
    e.preventDefault();
    currentIndex = (currentIndex + 1) % items.length;
    updateHighlight(items);
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateHighlight(items);
  } else if (e.key === "Enter") {
    e.preventDefault();
    if (currentIndex >= 0 && currentIndex < bookmarksList.length) {
      chrome.tabs.create({ url: bookmarksList[currentIndex].url });
    }
  }
});

function updateHighlight(items) {
  items.forEach((item) => item.classList.remove("selected"));
  if (currentIndex >= 0 && items[currentIndex]) {
    items[currentIndex].classList.add("selected");
    items[currentIndex].scrollIntoView({
      block: "nearest",
      behavior: "smooth",
    });
  }
}
