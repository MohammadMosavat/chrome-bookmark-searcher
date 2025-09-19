
chrome.bookmarks.getTree((tree) => {
  console.log("Bookmarks tree:", tree[0].children[0].children );
});

// search bookmarks by title or URL
chrome.bookmarks.search({ query: "Stack" }, (results) => {
  console.log("Search results:", results);
});

// listen for creation/removal/changes
chrome.bookmarks.onCreated.addListener((id, node) => {
  console.log("Created", id, node);
});
chrome.bookmarks.onRemoved.addListener((id, removeInfo) => {
  console.log("Removed", id, removeInfo);
});

