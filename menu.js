(function () {
  var btn = document.getElementById('menu-btn');
  var menu = document.getElementById('menu');
  var nav = document.getElementById('nav');
  if (!btn || !menu || !nav) return;

  function setOpen(open) {
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    menu.hidden = !open;
    nav.classList.toggle('open', open);
  }

  btn.addEventListener('click', function () {
    setOpen(menu.hidden);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !menu.hidden) {
      setOpen(false);
      btn.focus();
    }
  });

  document.addEventListener('click', function (e) {
    if (!menu.hidden && !nav.contains(e.target)) setOpen(false);
  });

  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });
})();
