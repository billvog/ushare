chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    // Get current tab url
    const url = tabs[0].url;

    // Validate url length
    if (url.length > 900) {
        document.querySelector('.status-message').textContent = 'This url is too big and a Qr Code cannot be generated';
        return;
    }

    // Show qr code
    document.querySelector('#qr-code-image').src = `http://api.qrserver.com/v1/create-qr-code/?data=${url}&size=200x200`
    document.querySelector('.status-message').textContent = 'Your Qr Code is ready!';
});