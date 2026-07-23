// Screenshot slots render as drop-in instructions until a real image exists at img/<name>.
document.querySelectorAll('.shot[data-img]').forEach((fig) => {
  const name = fig.dataset.img;
  const caption = fig.dataset.cap || '';
  const img = new Image();

  img.onload = () => {
    fig.innerHTML = '';
    img.alt = caption;
    fig.append(img);
    if (caption) {
      const fc = document.createElement('figcaption');
      fc.textContent = caption;
      fig.append(fc);
    }
  };

  img.onerror = () => {
    fig.innerHTML =
      '<div class="placeholder"><strong>Screenshot: ' + caption + '</strong>' +
      'Drop an image at <code>img/' + name + '</code> and it appears here.</div>';
  };

  img.src = 'img/' + name;
});

// Highlight the section currently in view in the sticky nav.
const links = [...document.querySelectorAll('.toc a')];
const byId = new Map(links.map((a) => [a.getAttribute('href').slice(1), a]));
const sections = [...document.querySelectorAll('main section[id]')];

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((a) => a.classList.remove('active'));
      byId.get(entry.target.id)?.classList.add('active');
    });
  },
  { rootMargin: '-15% 0px -75% 0px' }
);

sections.forEach((s) => observer.observe(s));
