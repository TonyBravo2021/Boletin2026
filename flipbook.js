/* =====================================================================
   MOTOR DEL FLIPBOOK  ·  no requiere editarse para actualizar cifras
   Lee las páginas registradas en /datos mediante BOLETIN.add(...)
   ===================================================================== */
(function () {
  "use strict";
  var B = window.BOLETIN || { html: [], config: {} }, C = B.config || {};
  var $ = function (id) { return document.getElementById(id); };
  var book = $('book'), inner = $('bookInner'), info = $('pageInfo'), bar = $('progressBar'),
      inp = $('pageInput'), drawer = $('cajon');

  /* ---------- 1. Armar la lista de páginas ---------- */
  var host = document.createElement('div');
  host.innerHTML = B.html.join('\n');
  var raw = [].slice.call(host.querySelectorAll('.pg'));

  function sheet(cls) {
    var s = document.createElement('section');
    s.className = 'pg ' + cls; s.setAttribute('data-nofolio', '1'); return s;
  }
  var cover = raw.shift(), back = raw.pop();
  var pages = [cover, sheet('endpaper')].concat(raw);
  if (raw.length % 2) {                       // asegura número par de páginas
    var n = sheet('notas'); n.removeAttribute('data-nofolio');
    n.innerHTML = '<div class="kicker">Anotaciones</div><h2>Notas</h2><div class="rule"></div><div class="lines"></div>';
    pages.push(n);
  }
  pages.push(sheet('endpaper'), back);
  var TOTAL = pages.length, LAST = 0;
  pages.forEach(function (p, i) { if (!p.hasAttribute('data-nofolio')) LAST = i; });
  $('pageTotal').textContent = LAST;
  if (C.titulo) document.title = C.titulo;
  if (C.velocidadMs) book.style.setProperty('--flip', C.velocidadMs + 'ms');
  if (window.renderDonuts) window.renderDonuts(host);

  /* ---------- 2. Índice automático (atributo data-toc="num|texto") ---------- */
  var tocHtml = '';
  pages.forEach(function (p, i) {
    var t = p.getAttribute('data-toc'); if (!t) return;
    var a = t.split('|');
    tocHtml += '<li><a href="#" data-goto="' + i + '"><span class="t-num">' + a[0] +
      '</span><span class="t-txt">' + a[1] + '</span><span class="t-pg">' + i + '</span></a></li>';
  });
  pages.forEach(function (p) { var u = p.querySelector('ul.toc'); if (u) u.innerHTML = tocHtml; });
  $('cajonLista').innerHTML = tocHtml;

  /* ---------- 2b. Versión para imprimir / PDF (una hoja A5 por página) ---------- */
  var pr = $('impresion');
  pages.forEach(function (p, i) {
    if (p.classList.contains('endpaper') || p.classList.contains('notas')) return;
    var w = document.createElement('div'); w.className = 'hoja-pdf';
    w.appendChild(p.cloneNode(true));
    if (!p.hasAttribute('data-nofolio')) {
      var f = document.createElement('div'); f.className = 'folio'; f.textContent = i; w.appendChild(f);
    }
    pr.appendChild(w);
  });
  if (C.pdfArchivo) { var L = $('pdfLink'); L.href = C.pdfArchivo; L.hidden = false; }

  /* ---------- 3. Construcción del libro ---------- */
  var leaves = [], cur = 0, spread = true, busy = false, zoom = 1, timer = null;

  function face(p, side, i) {
    var f = document.createElement('div'); f.className = 'face ' + side;
    if (p) {
      f.appendChild(p);
      if (!p.hasAttribute('data-nofolio')) {
        var o = document.createElement('div'); o.className = 'folio'; o.textContent = i; f.appendChild(o);
      }
    }
    return f;
  }
  function idxNow() { return spread ? (cur === 0 ? 0 : (cur >= leaves.length ? TOTAL - 1 : 2 * cur)) : cur; }
  function lab(i) { return i === 0 ? 'Portada' : i === TOTAL - 1 ? 'Contraportada' : pages[i].hasAttribute('data-nofolio') ? 'Guarda' : i; }

  function size() {
    var vw = window.innerWidth, vh = window.innerHeight, avail = Math.max(300, vh - 150);
    var w = spread ? Math.min(1180, .96 * vw, 1.42 * avail) : Math.min(520, .94 * vw, avail / 1.42);
    w *= zoom;
    book.style.width = w + 'px';
    book.style.fontSize = (w / (spread ? 76 : 36)) + 'px';
  }

  function build() {
    var keep = idxNow();
    spread = window.innerWidth >= 880 && window.innerHeight >= 480;
    book.classList.toggle('single', !spread);
    [].slice.call(inner.querySelectorAll('.leaf')).forEach(function (l) { l.remove(); });
    pages.forEach(function (p) { if (p.parentNode) p.parentNode.removeChild(p); });
    leaves = [];
    var step = spread ? 2 : 1;
    for (var i = 0; i < TOTAL; i += step) {
      var leaf = document.createElement('div'); leaf.className = 'leaf';
      if (spread && (i === 0 || i === TOTAL - 2)) leaf.classList.add('board');   // tapa dura
      if (!spread && (i === 0 || i === TOTAL - 1)) leaf.classList.add('board');
      leaf.appendChild(face(pages[i], 'front', i));
      leaf.appendChild(face(spread ? pages[i + 1] : null, 'back', i + 1));
      inner.appendChild(leaf); leaves.push(leaf);
    }
    cur = 0; size(); apply(); jump(keep);
  }

  function apply() {
    leaves.forEach(function (l, i) {
      l.classList.toggle('flipped', i < cur);
      l.style.zIndex = i < cur ? 500 + i : leaves.length - i;
    });
    book.classList.toggle('at-start', spread && cur === 0);
    book.classList.toggle('at-end', spread && cur === leaves.length);
  }

  function update() {
    var l, r;
    if (spread) {
      if (cur === 0) info.textContent = 'Portada';
      else if (cur === leaves.length) info.textContent = 'Contraportada';
      else {
        l = 2 * cur - 1; r = 2 * cur;
        info.textContent = (isNaN(lab(l)) || isNaN(lab(r))) ? lab(l) + ' · ' + lab(r) : 'Págs. ' + l + '–' + r;
      }
    } else info.textContent = isNaN(lab(cur)) ? lab(cur) : 'Pág. ' + cur;
    var v = idxNow(); inp.value = Math.min(LAST, Math.max(1, v));
    $('bFirst').disabled = $('bPrev').disabled = cur === 0;
    $('bLast').disabled = $('bNext').disabled = cur === leaves.length;
    bar.style.width = (cur / leaves.length * 100) + '%';
    try { history.replaceState(null, '', '#pag=' + v); } catch (e) {}
  }

  function resetScroll() { pages.forEach(function (p) { p.scrollTop = 0; }); }

  function go(d) {
    if (busy) return;
    var t = cur + d; if (t < 0 || t > leaves.length) return;
    busy = true;
    var leaf = d > 0 ? leaves[cur] : leaves[cur - 1];
    leaf.style.zIndex = 9000; leaf.classList.add('turning');
    leaf.classList.toggle('flipped', d > 0);
    cur = t; book.classList.toggle('at-start', spread && cur === 0);
    book.classList.toggle('at-end', spread && cur === leaves.length);
    update(); resetScroll();
    setTimeout(function () {
      leaves.forEach(function (x, i) { x.classList.remove('turning'); x.style.zIndex = i < cur ? 500 + i : leaves.length - i; });
      busy = false;
    }, (C.velocidadMs || 950) + 40);
  }

  function jump(i) {
    i = Math.max(0, Math.min(TOTAL - 1, i));
    var t = spread ? Math.ceil(i / 2) : i;
    if (t !== cur) {
      cur = t; book.classList.add('no-anim'); apply(); resetScroll();
      requestAnimationFrame(function () { requestAnimationFrame(function () { book.classList.remove('no-anim'); }); });
    }
    update();
  }

  /* ---------- 4. Controles ---------- */
  function play(on) {
    if (on === undefined) on = !timer;
    clearInterval(timer); timer = null;
    if (on) timer = setInterval(function () { if (cur >= leaves.length) play(false); else go(1); }, (C.autoplaySeg || 7) * 1000);
    $('bPlay').classList.toggle('on', !!timer);
    $('bPlay').textContent = timer ? '❚❚' : '►';
  }
  function user(f) { return function () { play(false); f(); }; }
  function setZoom(z) {
    zoom = Math.max(.6, Math.min(1.8, Math.round(z * 10) / 10)); size();
    $('zoomLbl').textContent = Math.round(zoom * 100) + '%';
  }
  function toggleDrawer(o) { drawer.classList.toggle('open', o); }
  function fullscreen() {
    var d = document, e = d.documentElement;
    if (d.fullscreenElement) d.exitFullscreen(); else if (e.requestFullscreen) e.requestFullscreen();
  }

  $('bPrev').onclick = $('zPrev').onclick = user(function () { go(-1); });
  $('bNext').onclick = $('zNext').onclick = user(function () { go(1); });
  $('bFirst').onclick = user(function () { jump(0); });
  $('bLast').onclick = user(function () { jump(TOTAL - 1); });
  $('bPlay').onclick = function () { play(); };
  $('bToc').onclick = function () { toggleDrawer(true); };
  $('bCerrar').onclick = function () { toggleDrawer(false); };
  $('bZoomIn').onclick = function () { setZoom(zoom + .1); };
  $('bZoomOut').onclick = function () { setZoom(zoom - .1); };
  $('zoomLbl').onclick = function () { setZoom(1); };
  $('bFull').onclick = fullscreen;
  $('bPdf').onclick = function () { play(false); window.print(); };
  inp.addEventListener('change', user(function () {
    var n = parseInt(inp.value, 10); if (!isNaN(n)) jump(n <= 1 ? 0 : n); else update();
  }));
  $('progreso').addEventListener('click', user(function (e) {
    var r = this.getBoundingClientRect(); jump(Math.round((e.clientX - r.left) / r.width * (TOTAL - 1)));
  }));

  document.addEventListener('keydown', function (e) {
    if (e.target && e.target.tagName === 'INPUT') return;
    var k = e.key;
    if (k === 'ArrowLeft') user(function () { go(-1); })();
    else if (k === 'ArrowRight') user(function () { go(1); })();
    else if (k === 'Home') user(function () { jump(0); })();
    else if (k === 'End') user(function () { jump(TOTAL - 1); })();
    else if (k === '+' || k === '=') setZoom(zoom + .1);
    else if (k === '-') setZoom(zoom - .1);
    else if (k === '0') setZoom(1);
    else if (k === 'f' || k === 'F') fullscreen();
    else if (k === 'i' || k === 'I') toggleDrawer(!drawer.classList.contains('open'));
    else if (k === ' ') { e.preventDefault(); play(); }
    else if (k === 'Escape') toggleDrawer(false);
  });

  document.addEventListener('click', function (e) {          // índice (en página y en cajón)
    var a = e.target.closest ? e.target.closest('a[data-goto]') : null;
    if (!a) return;
    e.preventDefault(); play(false);
    jump(parseInt(a.dataset.goto, 10)); toggleDrawer(false);
  });

  var tx = 0, ty = 0, tr = false;                            // deslizar en pantallas táctiles
  book.addEventListener('touchstart', function (e) {
    if (e.touches.length !== 1) return;
    tx = e.touches[0].clientX; ty = e.touches[0].clientY; tr = true;
  }, { passive: true });
  book.addEventListener('touchend', function (e) {
    if (!tr) return; tr = false;
    var dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty;
    if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.4) user(function () { go(dx < 0 ? 1 : -1); })();
  }, { passive: true });

  var rz;
  window.addEventListener('resize', function () {
    clearTimeout(rz);
    rz = setTimeout(function () {
      var s = window.innerWidth >= 880 && window.innerHeight >= 480;
      if (s !== spread) build(); else size();
    }, 200);
  });

  /* ---------- 5. Inicio ---------- */
  var m = /pag=(\d+)/.exec(location.hash);
  build();
  if (m) jump(parseInt(m[1], 10) <= 1 ? 0 : parseInt(m[1], 10));
  if (C.autoplay) play(true);
})();
