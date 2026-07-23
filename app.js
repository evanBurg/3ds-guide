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

const search = document.getElementById('search');

if (search) {
  const cards = [...document.querySelectorAll('.topic')];
  const hint = document.getElementById('hint');
  const noresults = document.getElementById('noresults');

  // Each card matches on its visible text plus data-keywords, so searching a
  // console or game name lands on the right topic without naming the page.
  const haystacks = cards.map((card) =>
    (card.textContent + ' ' + (card.dataset.keywords || '')).toLowerCase()
  );

  const apply = (raw) => {
    const terms = raw.toLowerCase().split(/\s+/).filter(Boolean);
    let shown = 0;

    cards.forEach((card, i) => {
      const match = terms.every((t) => haystacks[i].includes(t));
      card.hidden = !match;
      if (match) shown++;
    });

    noresults.hidden = shown > 0;
    hint.textContent = terms.length
      ? shown + (shown === 1 ? ' topic matches' : ' topics match')
      : cards.length + ' topics';
  };

  search.addEventListener('input', () => apply(search.value));

  noresults.querySelectorAll('[data-q]').forEach((btn) => {
    btn.addEventListener('click', () => {
      search.value = btn.dataset.q;
      apply(search.value);
      search.focus();
    });
  });

  // "/" focuses search, matching the convention on docs sites.
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== search) {
      e.preventDefault();
      search.focus();
    }
  });
}
