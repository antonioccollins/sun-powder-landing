/* ═══════════════════════════════════════════════
   SUN POWDER LANDING PAGE — JS
   ═══════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Hero Variant Switching ───────────────── */
  // Default: variant 1. Use ?hero=2 or ?hero=3 in URL to switch.
  const params = new URLSearchParams(window.location.search);
  const heroParam = params.get('hero');
  if (heroParam) {
    const variants = document.querySelectorAll('.hero__variant');
    const target = document.querySelector(`[data-hero="${heroParam}"]`);
    if (target) {
      variants.forEach(v => v.classList.remove('active'));
      target.classList.add('active');
    }
  }

  /* ── Nav Scroll Shadow ────────────────────── */
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', function () {
    nav.classList.toggle('nav--scrolled', window.scrollY > 10);
  }, { passive: true });

  /* ── Smooth Scroll for Anchor Links ───────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var offset = 70; // nav height
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  /* ── Buy Module: Flavor Selector ──────────── */
  var flavors = document.querySelectorAll('.buy__flavor');
  flavors.forEach(function (btn) {
    btn.addEventListener('click', function () {
      flavors.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
    });
  });

  /* ── Buy Module: Quantity Selector ────────── */
  var quantities = document.querySelectorAll('.buy__quantity');
  quantities.forEach(function (btn) {
    btn.addEventListener('click', function () {
      quantities.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      updatePrices();
    });
  });

  /* ── Buy Module: Purchase Type ────────────── */
  var purchaseTypes = document.querySelectorAll('.buy__purchase-type');
  purchaseTypes.forEach(function (label) {
    label.addEventListener('click', function () {
      purchaseTypes.forEach(function (l) { l.classList.remove('active'); });
      label.classList.add('active');
      label.querySelector('input').checked = true;
    });
  });

  /* ── Buy Module: Price Updates ────────────── */
  function updatePrices() {
    var activeQty = document.querySelector('.buy__quantity.active');
    if (!activeQty) return;
    var priceOne = activeQty.getAttribute('data-price-one');
    var priceSub = activeQty.getAttribute('data-price-sub');
    var qty = activeQty.getAttribute('data-qty');
    var period = qty === '30' ? '/month' : '';

    document.getElementById('sub-price').textContent = '$' + priceSub + period;
    document.getElementById('one-price').textContent = '$' + priceOne;
  }

  /* ── Buy Module: Image Thumbnails ─────────── */
  var thumbs = document.querySelectorAll('.buy__thumb');
  var heroImage = document.getElementById('buy-product-image');
  thumbs.forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      thumbs.forEach(function (t) { t.classList.remove('active'); });
      thumb.classList.add('active');
      heroImage.src = thumb.getAttribute('data-full');
    });
  });

  /* ── Cross-Domain Query Parameter Passthrough ─
     When a visitor arrives from a Meta ad, the URL contains tracking
     params like ?fbclid=abc123. This snippet forwards those params to
     every drinksunpowder.com CTA link so Meta attribution isn't lost
     when the user crosses domains. Runs on DOMContentLoaded so all
     links are in the DOM before we patch them. */
  document.addEventListener('DOMContentLoaded', function () {
    var search = window.location.search;
    if (!search) return; // no params on this page — nothing to forward

    var links = document.querySelectorAll('a[href*="drinksunpowder.com"]');
    links.forEach(function (link) {
      var href = link.getAttribute('href');
      // Merge: if destination already has params use &, otherwise use ?
      var separator = href.indexOf('?') !== -1 ? '&' : '?';
      link.setAttribute('href', href + separator + search.slice(1));
    });
  });

})();
