# Chrome Bookmark Searcher

A lightweight and fast Chrome extension that helps you quickly search and access your bookmarks with a clean, modern interface.

![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-blue?logo=googlechrome)
![Manifest V3](https://img.shields.io/badge/Manifest-V3-green)
![License](https://img.shields.io/badge/license-MIT-blue)

## ✨ Features

- 🔍 **Instant Search**: Real-time bookmark search as you type
- 🎨 **Modern UI**: Clean, minimalist design with smooth animations
- 🚀 **Fast Access**: Click any bookmark to open it in a new tab
- 📋 **Copy URLs**: Quickly copy bookmark URLs to clipboard with one click
- 🌐 **Favicon Display**: Shows website favicons for easy visual identification
- ⌨️ **Keyboard Friendly**: Auto-focuses search input for immediate typing

## 📸 Screenshots

<img width="617" height="356" alt="Screenshot 2025-10-19 131630" src="https://github.com/user-attachments/assets/ccfb3248-8d12-4ab7-b502-12e27439e000" />
<!-- Add screenshots here when available -->

## 🚀 Installation

### From Source (Developer Mode)

1. **Clone the repository**
   ```bash
   git clone https://github.com/MohammadMosavat/chrome-bookmark-searcher.git
   cd chrome-bookmark-searcher
   ```

2. **Load the extension in Chrome**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable **Developer mode** (toggle in the top right corner)
   - Click **Load unpacked**
   - Select the `chrome-bookmark-searcher` folder

3. **Start using**
   - Click the extension icon in your Chrome toolbar
   - Start searching your bookmarks!

## 📖 How to Use

1. **Open the Extension**
   - Click the Bookmarks Searcher icon in your Chrome toolbar
   - Or use the keyboard shortcut (if configured)

2. **Search Your Bookmarks**
   - The search input is automatically focused
   - Start typing to search through your bookmark titles and URLs
   - Results appear instantly as you type

3. **Access Bookmarks**
   - **Click** on any bookmark to open it in a new tab
   - **Click the copy icon** to copy the URL to your clipboard

4. **Navigate Results**
   - Hover over bookmarks to see the hover effect
   - All results show the website's favicon for easy recognition

## 🛠️ Project Structure

```
chrome-bookmark-searcher/
├── manifest.json          # Extension configuration
├── index.html            # Popup UI
├── popup.js              # Search and UI logic
├── background.js         # Background service worker
└── public/
    └── copy.svg          # Copy icon asset
```

## 🔧 Technical Details

- **Manifest Version**: 3 (latest Chrome extension standard)
- **Permissions**: Only requires `bookmarks` permission
- **Architecture**: 
  - Service worker for background tasks
  - Popup interface for user interaction
  - Chrome Bookmarks API for data access

## 🎨 Customization

You can customize the extension by modifying:

- **Colors & Styling**: Edit the `<style>` section in `index.html`
- **Search Behavior**: Modify `popup.js` to change search logic
- **Popup Size**: Adjust the `width` property in the body styles

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Create a Pull Request

## 📝 Future Enhancements

- [ ] Add keyboard navigation for search results
- [ ] Implement bookmark folders view
- [ ] Add sorting options (alphabetical, recently added, etc.)
- [ ] Support for bookmark tags
- [ ] Dark mode toggle
- [ ] Export/import bookmark lists
- [ ] Advanced search filters

## 🐛 Known Issues

- Favicon fallback may not work for all websites
- Search is case-sensitive (can be improved)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Mohammad Mosavat**

- GitHub: [@MohammadMosavat](https://github.com/MohammadMosavat)

## 🙏 Acknowledgments

- Built with Chrome Extension Manifest V3
- Icons from SVG Repo

## 💬 Support

If you have any questions or run into issues, please open an issue on GitHub.

---

⭐ If you find this extension useful, please consider giving it a star on GitHub!

