# Predatory Journal Detector

A browser extension for Chrome and Firefox that displays a warning banner if the current domain matches one of the domains in the 2025 Predatory Journal list.

## Installation

### For Chrome/Chromium browsers:
1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" using the toggle in the top-right corner
4. Click "Load unpacked" and select the extension folder
5. The extension is now active and will warn you when visiting predatory journal websites

### For Firefox:
1. Download or clone this repository
2. Open Firefox and navigate to `about:debugging#/runtime/this-firefox`
3. Click "Load Temporary Add-on..."
4. Select the `manifest.json` file from the extension folder
5. The extension is now active and will warn you when visiting predatory journal websites

## Features

- Displays a prominent red warning banner when visiting a predatory journal domain
- Banner can be dismissed by clicking the "Dismiss" button
- Uses an up-to-date list of predatory journal domains (2025)

## Files

- `manifest.json` - Extension configuration
- `content.js` - Main script that checks domains and displays warnings
- `styles.css` - Styling for the warning banner
- `domains.csv` - List of predatory journal domains

## License

See [LICENSE](LICENSE) for details.

