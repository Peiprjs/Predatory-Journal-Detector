(async function() {
  console.log("Predatory Journal Detector: Script loaded successfully.");

  // Use chrome.runtime for Chrome or browser.runtime for Firefox
  const browserAPI = typeof browser !== 'undefined' ? browser : chrome;

  async function init() {
    try {
      const csvUrl = browserAPI.runtime.getURL("domains.csv");
      console.log("Predatory Journal Detector: Fetching CSV from", csvUrl);

      const response = await fetch(csvUrl);
      if (!response.ok) {
        console.error("Predatory Journal Detector: Failed to load domains.csv");
        return;
      }
      const text = await response.text();
      console.log("Predatory Journal Detector: Domain list loaded. Length:", text.length);

      const domains = text
        .split('\n')
        .map(line => line.trim().toLowerCase())
        .filter(line => line.length > 0 && !line.startsWith('#'));

      const currentHostname = window.location.hostname.toLowerCase();

      const isMatch = domains.some(domain => {
        return currentHostname === domain || currentHostname.endsWith('.' + domain);
      });

      if (isMatch) {
        console.log("Predatory Journal Detector: Predatory Journal detected! Showing warning.");
        showWarning(currentHostname);
      }

    } catch (error) {
      console.error("Predatory Journal Detector Error:", error);
    }
  }

  function showWarning(hostname) {
    if (document.getElementById('csv-domain-warning-banner-container')) return;

    const banner = document.createElement('div');
    banner.id = 'csv-domain-warning-banner-container';

    banner.innerHTML = `
      <span>
        <strong>Warning:</strong> The domain "${hostname}" is on the predatory journals list. Tread with care.
      </span>
      <button id="csv-domain-warning-close-btn">Dismiss</button>
    `;

    document.body.prepend(banner);

    document.getElementById('csv-domain-warning-close-btn').addEventListener('click', () => {
      banner.remove();
    });
  }

  init();
})();
