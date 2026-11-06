/* ===== DATOS · Capítulo 1.2: docentes =====
   Edita aquí las cifras (tablas, KPI, textos y data-priv/data-pub de las donas).
   Cada BOLETIN.add(`...`) es UNA página. No quites las comillas invertidas. */

BOLETIN.add(`
<section data-toc="1.2|Docentes en la Educación Básica" class="pg">
    <div class="kicker">Capítulo 1.2</div>
    <h2>Docentes en la Educación Básica</h2>
    <div class="rule"></div>
    <p>La UGEL 07 cuenta con una población docente de <strong>16 151 profesionales en actividad</strong>.</p>
    <p>Se observa un marcado predominio del sector privado, que concentra al <strong>63 %</strong> de la fuerza
    docente de la jurisdicción con <strong>10 214 maestros</strong>. Por su parte, la escuela pública alberga
    al <strong>37 %</strong> restante, equivalente a <strong>5 937 docentes</strong> en servicio activo.</p>

    <div class="donut-block">
      <div class="donut" data-priv="63.24" data-pub="36.76" data-center="63,2%" data-sub="Privada"></div>
      <div class="legend">
        <div class="li"><span class="dot" style="background:var(--azulino)"></span>Privada — <b>10 214</b> · 63,24 %</div>
        <div class="li"><span class="dot" style="background:var(--rojizo)"></span>Pública — <b>5 937</b> · 36,76 %</div>
        <div class="li" style="margin-top:.4em;color:#8a94a3">Total docentes EB <b>16 151</b></div>
      </div>
    </div>

    <div class="note">Corresponde a la suma del número de personas que desempeñan labor docente, directiva o en
    el aula, en cada institución educativa, sin diferenciar si la jornada es de tiempo completo o parcial.</div>

    <div class="source">Fuente: Boletín UGEL 07 2026 / Ministerio de Educación – ESCALE.</div>
  </section>
`);

BOLETIN.add(`
<section data-toc="1.2|Docentes por modalidad y gestión" class="pg">
    <div class="kicker">Capítulo 1.2</div>
    <h2>Docentes por modalidad y gestión</h2>
    <div class="rule"></div>
    <p>La mayor proporción de personal docente corresponde a la Educación Básica Regular, con
    <strong>15 404 docentes</strong>. La Educación Básica Especial cuenta con <strong>364 docentes</strong> y
    la Educación Básica Alternativa con <strong>413 docentes</strong>.</p>

    <table>
      <thead>
        <tr><th>Modalidad</th><th class="num">Privada</th><th class="num">Pública</th><th class="num">Total</th></tr>
      </thead>
      <tbody>
        <tr><td>EBR</td><td class="num">9 982</td><td class="num">5 422</td><td class="num">15 404</td></tr>
        <tr><td>EBE</td><td class="num">98</td><td class="num">266</td><td class="num">364</td></tr>
        <tr><td>EBA</td><td class="num">139</td><td class="num">274</td><td class="num">413</td></tr>
        <tr class="total"><td>Total Educación Básica</td><td class="num">10 214</td><td class="num">5 937</td><td class="num">16 151</td></tr>
      </tbody>
    </table>

    <h3>Detalle por nivel / ciclo</h3>
    <ul class="small">
      <li><strong>EBR:</strong> secundaria 60 % privada / 40 % pública; primaria 65 % / 35 %; inicial 71 % / 29 %.</li>
      <li><strong>EBE:</strong> inicial 28 % privada / 72 % pública; primaria 27 % / 73 %.</li>
      <li><strong>EBA:</strong> ciclo Inicial–Intermedio 44 % privada / 56 % pública; ciclo Avanzado 31 % / 69 %.</li>
    </ul>

    <div class="note">1/ Excluye promotoras educativas comunitarias a cargo de programas no escolarizados.</div>
    <div class="source">Fuente: Boletín UGEL 07 2026 / ESCALE – Magnitudes de la Educación.</div>
  </section>
`);

