document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('[data-aw-social-share]');
    
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const url = button.getAttribute('data-aw-url');
        const text = button.getAttribute('data-aw-text');
        const platform = button.getAttribute('data-aw-social-share');
  
        let shareUrl;
  
        switch (platform) {
          case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
            break;
          case 'telegram':
            shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
            break;
          case 'instagram':
            alert('Instagram does not support direct sharing via URL. Please share manually.');
            return;
          case 'line':
            shareUrl = `https://line.me/R/msg/text/?${encodeURIComponent(text + ' ' + url)}`;
            break;
          default:
            return;
        }
  
        window.open(shareUrl, '_blank');
      });
    });
  });
  