/* Tombol tema: Standar <-> Kosmos. Pilihan diingat di perangkat ini. */
(function () {
  'use strict';
  var KEY = 'soal-tema', root = document.documentElement;
  function isK() { return root.getAttribute('data-theme') === 'kosmos'; }
  try { if (localStorage.getItem(KEY) === 'kosmos') root.setAttribute('data-theme', 'kosmos'); } catch (e) {}

  function sync() {
    var btn = document.getElementById('btn-tema');
    var meta = document.querySelector('meta[name="theme-color"]');
    if (btn) btn.setAttribute('aria-pressed', isK() ? 'true' : 'false');
    if (meta) meta.setAttribute('content', isK() ? '#181b20' : '#233a8f');
  }

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('btn-tema');
    sync();
    if (!btn) return;
    btn.addEventListener('click', function () {
      if (isK()) root.removeAttribute('data-theme'); else root.setAttribute('data-theme', 'kosmos');
      try { if (isK()) localStorage.setItem(KEY, 'kosmos'); else localStorage.removeItem(KEY); } catch (e) {}
      sync();
    });
  });
})();
