/* Solbasium Theme JS */

// ── Mega Menu ──────────────────────────────────────────────────────────────
(function () {
  const trigger = document.querySelector('.shop-trigger');
  const mega = document.getElementById('mega-shop');
  const nav = document.querySelector('nav.top');
  if (!trigger || !mega || !nav) return;

  let hideTimer;
  function show() { clearTimeout(hideTimer); mega.classList.add('open'); }
  function hide() { hideTimer = setTimeout(() => mega.classList.remove('open'), 120); }

  trigger.addEventListener('mouseenter', show);
  trigger.addEventListener('focus', show);
  nav.addEventListener('mouseleave', hide);
  mega.addEventListener('mouseenter', show);
  mega.addEventListener('mouseleave', hide);
})();

// ── Filter Chips ──────────────────────────────────────────────────────────
(function () {
  const chips = document.querySelectorAll('.shop .chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('on'));
      chip.classList.add('on');
    });
  });
})();

// ── Newsletter / Contact form feedback ───────────────────────────────────
(function () {
  document.querySelectorAll('form[data-ajax]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.textContent = 'Sent ✓'; btn.disabled = true; }
    });
  });
})();
