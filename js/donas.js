/* =====================================================================
   GRÁFICOS AUTOMÁTICOS (se redibujan solos al cambiar los datos)
   · .donut[data-priv][data-pub]  → dona privada / pública
   · table con columnas "Privada" y "Pública" → barra de distribución por fila + leyenda
   · .cover-chart[data-series]    → columnas apiladas "Etiqueta:privada:pública;..."
   ===================================================================== */
(function () {
  "use strict";
  function f1(n) { return n.toFixed(1).replace('.', ','); }
  function miles(n) { return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '\u00a0'); }
  function num(t) { var v = parseFloat(String(t).replace(/[^\d,.-]/g, '').replace(',', '.')); return isNaN(v) ? null : v; }

  function donuts(root) {
    root.querySelectorAll('.donut[data-priv]').forEach(function (el) {
      var priv = parseFloat(el.dataset.priv) || 0, pub = parseFloat(el.dataset.pub) || 0;
      var C = 2 * Math.PI * 78, aP = C * priv / 100, aU = C * pub / 100;
      var center = el.dataset.center || (f1(priv) + '%'), sub = el.dataset.sub || 'Privada';
      var c1 = el.dataset.c1 || 'var(--azulino)', c2 = el.dataset.c2 || 'var(--rojizo)', tr = el.dataset.track || '#eceef1';
      el.innerHTML =
        '<svg viewBox="0 0 200 200" role="img" aria-label="' + center + ' ' + sub + '">' +
        '<circle cx="100" cy="100" r="78" fill="none" stroke="' + tr + '" stroke-width="24"/>' +
        '<circle cx="100" cy="100" r="78" fill="none" stroke="' + c1 + '" stroke-width="24" stroke-dasharray="' + aP + ' ' + (C - aP) + '" stroke-dashoffset="0" transform="rotate(-90 100 100)"/>' +
        '<circle cx="100" cy="100" r="78" fill="none" stroke="' + c2 + '" stroke-width="24" stroke-dasharray="' + aU + ' ' + (C - aU) + '" stroke-dashoffset="' + (-aP) + '" transform="rotate(-90 100 100)"/>' +
        '<text class="d-center" x="100" y="97" text-anchor="middle">' + center + '</text>' +
        '<text class="d-sub" x="100" y="122" text-anchor="middle">' + sub + '</text></svg>';
    });
  }

  function tables(root) {
    root.querySelectorAll('.pg table').forEach(function (t) {
      var ip = -1, iu = -1;
      [].slice.call(t.querySelectorAll('thead th')).forEach(function (th, i) {
        var x = th.textContent.trim();
        if (x === 'Privada') { ip = i; th.classList.add('th-priv'); }
        if (x === 'Pública') { iu = i; th.classList.add('th-pub'); }
      });
      if (ip < 0 || iu < 0) return;
      var h = document.createElement('th'); h.className = 'chart-col'; h.textContent = 'Priv. / Púb.';
      t.querySelector('thead tr').appendChild(h);
      [].slice.call(t.querySelectorAll('tbody tr')).forEach(function (tr) {
        var a = num(tr.children[ip].textContent), b = num(tr.children[iu].textContent);
        var td = document.createElement('td'); td.className = 'mini';
        if (a !== null && b !== null && a + b > 0) {
          var p = a / (a + b) * 100;
          td.innerHTML = '<div class="bar-track" title="Privada ' + f1(p) + ' % · Pública ' + f1(100 - p) + ' %">' +
            '<div class="bar-seg priv" style="width:' + p + '%"></div><div class="bar-seg pub" style="width:' + (100 - p) + '%"></div></div>';
        }
        tr.appendChild(td);
      });
      var lg = document.createElement('div'); lg.className = 'leyenda-pp';
      lg.innerHTML = '<span><i class="dot-priv"></i>Privada</span><span><i class="dot-pub"></i>Pública</span>';
      t.parentNode.insertBefore(lg, t.nextSibling);
    });
  }

  function coverChart(root) {
    root.querySelectorAll('.cover-chart[data-series]').forEach(function (el) {
      var rows = el.dataset.series.split(';').map(function (s) { var a = s.split(':'); return { l: a[0], p: +a[1], u: +a[2] }; });
      var max = Math.max.apply(null, rows.map(function (r) { return r.p + r.u; }));
      el.innerHTML = (el.dataset.title ? '<div class="cc-title">' + el.dataset.title + '</div>' : '') +
        '<div class="cc-cols">' + rows.map(function (r) {
          var tot = r.p + r.u, h = tot / max * 100;
          return '<div class="cc-col"><div class="cc-plot"><div class="cc-val" style="bottom:' + h + '%">' + miles(tot) + '</div>' +
            '<div class="cc-stack" style="height:' + h + '%"><i class="priv" style="height:' + (r.p / tot * 100) + '%"></i>' +
            '<i class="pub" style="height:' + (r.u / tot * 100) + '%"></i></div></div><div class="cc-lab">' + r.l + '</div></div>';
        }).join('') + '</div>';
    });
  }

  window.renderDonuts = function (root) { donuts(root); tables(root); coverChart(root); };
})();
