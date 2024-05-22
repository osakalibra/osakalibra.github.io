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
          shareUrl = `https://telegram.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
          break;
        case 'line':
          shareUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`;
          break;
        default:
          return;
      }

      window.open(shareUrl, '_blank');
    });
  });
});

  