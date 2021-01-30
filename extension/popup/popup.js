chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
    // Get current tab's url
    const url = tabs[0].url;

    // Validate url length
    if (url.length > 900) {
        document.querySelector('#qr-code-image').setAttribute('title', 'Cannot generate QR Code');
        document.querySelector('.status-message').textContent = 'This url is too big and a QR Code cannot be generated';
        return;
    }

    // Show QR Code
    document.querySelector('#qr-code-image').src = `http://api.qrserver.com/v1/create-qr-code/?data=${escape(url)}&size=200x200`
    document.querySelector('#qr-code-image').setAttribute('title', url);
    document.querySelector('.status-message').textContent = 'Your QR Code is ready!';
});