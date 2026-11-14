(function () {
  var nav = document.getElementById('nav');
  var bar = document.getElementById('bar');
  var hero = document.querySelector('.hero');
  var contact = document.getElementById('contact');

  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 8);
    var past = hero.getBoundingClientRect().bottom < 0;
    var atContact = contact.getBoundingClientRect().top < window.innerHeight * 0.6;
    bar.classList.toggle('show', past && !atContact);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }
})();
