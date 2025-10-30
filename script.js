document.getElementById('year').textContent = new Date().getFullYear();

// تأثير بسيط عند تمرير الصفحة
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.background = '#0f172a';
    header.style.transition = '0.4s';
  } else {
    header.style.background = '#1e293b';
  }
});

// تأثير ضغط على الصور (Lightbox بسيط)
const galleryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.innerHTML = `<img src=\"${img.src}\" alt=\"preview\" />`;
    document.body.appendChild(overlay);
    overlay.addEventListener('click', () => overlay.remove());
  });
});
