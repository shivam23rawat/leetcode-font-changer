(async function () {
  try {
    const manifest = chrome.runtime.getManifest();
    document.getElementById('version').textContent = manifest.version || '1.0.0';

    const res = await fetch(chrome.runtime.getURL('metadata.json'));
    const meta = await res.json();
    document.getElementById('creator').textContent = meta.creator || 'Unknown';
  } catch (err) {
    console.error('Failed to load metadata:', err);
  }
})();
