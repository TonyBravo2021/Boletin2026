/* ===== DATOS · Capítulo 1.1: matrícula (gestión, evolución, modalidad, nivel, EBE, EBA, sexo y distrito) =====
   Edita aquí las cifras (tablas, KPI, textos y data-priv/data-pub de las donas).
   Cada BOLETIN.add(`...`) es UNA página. No quites las comillas invertidas. */

BOLETIN.add(`
<section data-toc="1|Educación Básica · matrícula por gestión" class="pg">
    <div class="kicker">Capítulo 1 · Educación Básica</div>
    <h2>Matrícula según gestión</h2>
    <div class="rule"></div>
    <p>En la jurisdicción de la UGEL 07 se registró un total de <strong>214 779 estudiantes matriculados</strong>
    en Educación Básica. De esta cantidad, <strong>112 414 estudiantes (52,3 %)</strong> optaron por
    instituciones de gestión privada, mientras que <strong>102 365 (47,7 %)</strong> se matricularon en
    instituciones públicas.</p>

    <div class="donut-block">
      <div class="donut" data-priv="52.34" data-pub="47.66" data-center="52,3%" data-sub="Privada"></div>
      <div class="legend">
        <div class="li"><span class="dot" style="background:var(--azulino)"></span>Privada — <b>112 414</b> · 52,34 %</div>
        <div class="li"><span class="dot" style="background:var(--rojizo)"></span>Pública — <b>102 365</b> · 47,66 %</div>
        <div class="li" style="margin-top:.4em;color:#8a94a3">Total Educación Básica <b>214 779</b></div>
      </div>
    </div>

    <table>
      <thead><tr><th>Gestión</th><th class="num">Estudiantes</th><th class="num">Participación</th></tr></thead>
      <tbody>
        <tr><td>Privada</td><td class="num">112 414</td><td class="num">52,34 %</td></tr>
        <tr><td>Pública</td><td class="num">102 365</td><td class="num">47,66 %</td></tr>
        <tr class="total"><td>Total</td><td class="num">214 779</td><td class="num">100,00 %</td></tr>
      </tbody>
    </table>

    <p class="small">Si bien la diferencia porcentual es pequeña, se observa una mayor concentración en el
    sector privado, lo que constituye una característica distintiva de esta jurisdicción en comparación con la
    tendencia nacional, donde predomina la matrícula pública.</p>

    <div class="source">Fuente: DATA.md / Ministerio de Educación – ESCALE – Padrón de Instituciones Educativas, 2026.</div>
  </section>
`);

BOLETIN.add(`
<section data-toc="1.1|Evolución histórica de la matrícula" class="pg">
    <div class="kicker">Capítulo 1.1</div>
    <h2>Evolución histórica de la matrícula</h2>
    <div class="rule"></div>
    <p>El comportamiento histórico de la matrícula evidencia una reconfiguración estructural, influenciada por
    la heterogeneidad socioeconómica y urbana de los distritos que conforman la jurisdicción.</p>

    <p>Durante el periodo <strong>2007-2014</strong>, el sistema educativo local experimentó un traslado
    sostenido de estudiantes hacia instituciones de gestión privada, asociado a la rápida expansión de una
    oferta privada altamente diversificada en el territorio. En consecuencia, el sector privado alcanzó en
    2014 su máxima participación histórica, con <strong>57,1 %</strong> de la matrícula.</p>

    <div class="kpis" style="grid-template-columns:1fr 1fr">
      <div class="kpi" style="border-left-color:#8a94a3">
        <div class="k-label">Máximo histórico privado · 2014</div>
        <div class="k-value">57,1 %</div>
        <div class="k-sub">Punto más crítico de la escuela pública</div>
      </div>
      <div class="kpi">
        <div class="k-label">Participación privada · 2026</div>
        <div class="k-value">52,3 %</div>
        <div class="k-sub">Recuperación pública de 4,8 p.p.</div>
      </div>
    </div>

    <div class="bar-line"><div class="bl-head"><span>2014 · Privada / Pública</span><span>57,1 % / 42,9 %</span></div>
<div class="bar-track"><div class="bar-seg priv" style="width:57.1%"></div><div class="bar-seg pub" style="width:42.9%"></div></div></div>
<div class="bar-line"><div class="bl-head"><span>2026 · Privada / Pública</span><span>52,3 % / 47,7 %</span></div>
<div class="bar-track"><div class="bar-seg priv" style="width:52.3%"></div><div class="bar-seg pub" style="width:47.7%"></div></div></div>
<div class="leyenda-pp"><span><i class="dot-priv"></i>Privada</span><span><i class="dot-pub"></i>Pública</span></div>

    <p>A partir de 2015, la gestión pública inició una recuperación progresiva, impulsada por intervenciones
    orientadas a la mejora y modernización de la infraestructura. Posteriormente, este cambio de tendencia se
    aceleró a raíz del impacto de la pandemia del COVID-19: la contracción económica afectó a los sectores
    medios urbanos y detonó un proceso de migración escolar desde colegios privados hacia instituciones
    educativas públicas.</p>

    <p>Para el año 2026, una vez estabilizados los niveles pospandemia, la oferta estatal concentra el
    <strong>47,7 %</strong> de la matrícula total de Educación Básica. Este avance representa una recuperación
    directa de <strong>4,8 puntos porcentuales</strong> respecto al nivel más bajo registrado en 2014.</p>

    <div class="source">Fuente: Boletín UGEL 07 2026 · ESCALE – Magnitudes de la Educación.</div>
  </section>
`);

BOLETIN.add(`
<section data-toc="1.1|Matrícula por modalidad educativa" class="pg">
    <div class="kicker">Capítulo 1.1</div>
    <h2>Matrícula por modalidad educativa</h2>
    <div class="rule"></div>
    <p>Del total de <strong>214 779 estudiantes</strong> identificados en el territorio, la gran mayoría se
    concentra en la EBR con <strong>206 937 estudiantes (96,3 %)</strong>; le sigue la EBA con
    <strong>5 896 (2,7 %)</strong> y la EBE con <strong>1 946 (0,9 %)</strong>.</p>

    <div class="bar-line">
      <div class="bl-head"><span>EBR — Educación Básica Regular</span><span>96,35 %</span></div>
      <div class="bar-track"><div class="bar-seg priv" style="width:51.59%"></div><div class="bar-seg pub" style="width:44.76%"></div></div>
    </div>
    <div class="bar-line">
      <div class="bl-head"><span>EBA — Educación Básica Alternativa</span><span>2,74 %</span></div>
      <div class="bar-track"><div class="bar-seg priv" style="width:0.59%"></div><div class="bar-seg pub" style="width:2.16%"></div></div>
    </div>
    <div class="bar-line">
      <div class="bl-head"><span>EBE — Educación Básica Especial</span><span>0,91 %</span></div>
      <div class="bar-track"><div class="bar-seg priv" style="width:0.16%"></div><div class="bar-seg pub" style="width:0.74%"></div></div>
    </div>

    <div class="leyenda-pp"><span><i class="dot-priv"></i>Privada</span><span><i class="dot-pub"></i>Pública</span></div>
    <table style="margin-top:.9em">
      <thead>
        <tr><th>Modalidad</th><th class="num">Privada</th><th class="num">Pública</th><th class="num">Total</th><th class="num">% EB</th></tr>
      </thead>
      <tbody>
        <tr><td>EBR</td><td class="num">110 806</td><td class="num">96 131</td><td class="num">206 937</td><td class="num">96,35 %</td></tr>
        <tr><td>EBA</td><td class="num">1 258</td><td class="num">4 638</td><td class="num">5 896</td><td class="num">2,74 %</td></tr>
        <tr><td>EBE</td><td class="num">350</td><td class="num">1 596</td><td class="num">1 946</td><td class="num">0,91 %</td></tr>
        <tr class="total"><td>Total</td><td class="num">112 414</td><td class="num">102 365</td><td class="num">214 779</td><td class="num">100,00 %</td></tr>
      </tbody>
    </table>

    <div class="note">En EBR la distribución es cercana al equilibrio (53,6 % privada / 46,4 % pública). En EBA
    y EBE predomina ampliamente el sector público: 78,7 % y 82,0 % respectivamente.</div>

    <div class="source">Fuente: DATA.md – Estudiantes por modalidad y gestión.</div>
  </section>
`);

BOLETIN.add(`
<section data-toc="1.1|Educación Básica Regular por nivel" class="pg">
    <div class="kicker">Capítulo 1.1</div>
    <h2>Educación Básica Regular por nivel</h2>
    <div class="rule"></div>
    <p>La mayor población estudiantil se concentra en <strong>primaria</strong>, con
    <strong>88 233 estudiantes</strong>; seguida de <strong>secundaria</strong>, con
    <strong>79 804</strong>; mientras que en <strong>inicial</strong> la cifra asciende a
    <strong>38 900</strong>, incluyendo PRONOEI.</p>

    <div class="donuts-3">
      <div class="donut" data-priv="52.04" data-pub="47.96" data-center="52,0%" data-sub="Privada"></div>
      <div class="donut" data-priv="53.96" data-pub="46.04" data-center="54,0%" data-sub="Privada"></div>
      <div class="donut" data-priv="53.82" data-pub="46.18" data-center="53,8%" data-sub="Privada"></div>
    </div>
    <div class="legend" style="flex-direction:row;gap:1em;justify-content:space-between;font-size:.74em">
      <span>Inicial · 38 900</span><span>Primaria · 88 233</span><span>Secundaria · 79 804</span>
    </div>
    <div class="legend" style="flex-direction:row;gap:1.2em;margin-top:.55em">
      <div class="li"><span class="dot" style="background:var(--azulino)"></span>Privada</div>
      <div class="li"><span class="dot" style="background:var(--rojizo)"></span>Pública</div>
    </div>

    <table style="margin-top:.7em">
      <thead>
        <tr><th>Nivel / Programa</th><th class="num">Privada</th><th class="num">Pública</th><th class="num">Total</th><th class="num">% Priv.</th></tr>
      </thead>
      <tbody>
        <tr><td>Inicial – Cuna-Jardín</td><td class="num">8 294</td><td class="num">7 914</td><td class="num">16 208</td><td class="num">51,17 %</td></tr>
        <tr><td>Inicial – Jardín</td><td class="num">11 949</td><td class="num">9 128</td><td class="num">21 077</td><td class="num">56,69 %</td></tr>
        <tr><td>PRONOEI</td><td class="num">0</td><td class="num">1 615</td><td class="num">1 615</td><td class="num">0,00 %</td></tr>
        <tr><td>Primaria</td><td class="num">47 614</td><td class="num">40 619</td><td class="num">88 233</td><td class="num">53,96 %</td></tr>
        <tr><td>Secundaria</td><td class="num">42 949</td><td class="num">36 855</td><td class="num">79 804</td><td class="num">53,82 %</td></tr>
        <tr class="total"><td>Total EBR</td><td class="num">110 806</td><td class="num">96 131</td><td class="num">206 937</td><td class="num">53,55 %</td></tr>
      </tbody>
    </table>

    <div class="source">Fuente: DATA.md – Estudiantes por modalidad, gestión y subnivel.</div>
  </section>
`);

BOLETIN.add(`
<section data-toc="1.1|Educación Básica Especial" class="pg">
    <div class="kicker">Capítulo 1.1</div>
    <h2>Educación Básica Especial</h2>
    <div class="rule"></div>
    <p>En la Educación Básica Especial la matrícula total asciende a <strong>1 946 estudiantes</strong>.
    EBE Inicial concentra <strong>319 estudiantes</strong>, EBE Primaria <strong>1 364</strong> y los
    Programas de Intervención Temprana (PRITE) atienden a <strong>263</strong> estudiantes.</p>

    <div class="donut-block">
      <div class="donut" data-priv="17.99" data-pub="82.01" data-center="82,0%" data-sub="Pública"></div>
      <div class="legend">
        <div class="li"><span class="dot" style="background:var(--azulino)"></span>Privada — <b>350</b> · 17,99 %</div>
        <div class="li"><span class="dot" style="background:var(--rojizo)"></span>Pública — <b>1 596</b> · 82,01 %</div>
        <div class="li" style="margin-top:.4em;color:#8a94a3">Total EBE <b>1 946</b></div>
      </div>
    </div>

    <table>
      <thead>
        <tr><th>Nivel / Programa</th><th class="num">Privada</th><th class="num">Pública</th><th class="num">Total</th></tr>
      </thead>
      <tbody>
        <tr><td>EBE Inicial</td><td class="num">72</td><td class="num">247</td><td class="num">319</td></tr>
        <tr><td>EBE Primaria</td><td class="num">278</td><td class="num">1 086</td><td class="num">1 364</td></tr>
        <tr><td>PRITE</td><td class="num">0</td><td class="num">263</td><td class="num">263</td></tr>
        <tr class="total"><td>Total EBE</td><td class="num">350</td><td class="num">1 596</td><td class="num">1 946</td></tr>
      </tbody>
    </table>

    <p class="small">Los PRITE atienden su matrícula de manera exclusiva en instituciones de gestión pública,
    lo que refuerza el rol del Estado en la atención temprana de la primera infancia con discapacidad.</p>

    <div class="source">Fuente: DATA.md – Estudiantes por modalidad, gestión y subnivel.</div>
  </section>
`);

BOLETIN.add(`
<section data-toc="1.1|Educación Básica Alternativa" class="pg">
    <div class="kicker">Capítulo 1.1</div>
    <h2>Educación Básica Alternativa</h2>
    <div class="rule"></div>
    <p>La EBA representa una forma de inclusión y continuidad educativa, atendiendo a un total de
    <strong>5 896 estudiantes</strong>. El ciclo <strong>Avanzado</strong> alberga a
    <strong>5 468 matriculados (92,7 %)</strong>, mientras que el ciclo <strong>Inicial–Intermedio</strong>
    registra <strong>428 participantes (7,3 %)</strong>.</p>

    <div class="donut-block">
      <div class="donut" data-priv="21.34" data-pub="78.66" data-center="78,7%" data-sub="Pública"></div>
      <div class="legend">
        <div class="li"><span class="dot" style="background:var(--azulino)"></span>Privada — <b>1 258</b> · 21,34 %</div>
        <div class="li"><span class="dot" style="background:var(--rojizo)"></span>Pública — <b>4 638</b> · 78,66 %</div>
        <div class="li" style="margin-top:.4em;color:#8a94a3">Total EBA <b>5 896</b></div>
      </div>
    </div>

    <table>
      <thead>
        <tr><th>Ciclo</th><th class="num">Privada</th><th class="num">Pública</th><th class="num">Total</th><th class="num">% Púb.</th></tr>
      </thead>
      <tbody>
        <tr><td>Avanzado</td><td class="num">1 247</td><td class="num">4 221</td><td class="num">5 468</td><td class="num">77,19 %</td></tr>
        <tr><td>Inicial e Intermedio</td><td class="num">11</td><td class="num">417</td><td class="num">428</td><td class="num">97,43 %</td></tr>
        <tr class="total"><td>Total EBA</td><td class="num">1 258</td><td class="num">4 638</td><td class="num">5 896</td><td class="num">78,66 %</td></tr>
      </tbody>
    </table>

    <div class="note">El sector público asume una mayoría en ambos ciclos, alcanzando el 97,4 % en el ciclo
    Inicial–Intermedio, orientado a la alfabetización y consolidación de competencias básicas.</div>

    <div class="source">Fuente: DATA.md – Estudiantes por modalidad, gestión y subnivel.</div>
  </section>
`);

BOLETIN.add(`
<section data-toc="1.1|Matrícula por sexo y distrito" class="pg">
    <div class="kicker">Capítulo 1.1</div>
    <h2>Matrícula por sexo y distrito</h2>
    <div class="rule"></div>
    <p>La distribución por sexo es prácticamente equilibrada: <strong>107 624 hombres (50,1 %)</strong> y
    <strong>107 155 mujeres (49,9 %)</strong>.</p>

    <div class="bar-line">
      <div class="bl-head"><span>Hombres</span><span>50,1 %</span></div>
      <div class="bar-track"><div class="bar-seg" style="width:50.1%;background:var(--azulino)"></div></div>
    </div>
    <div class="bar-line">
      <div class="bl-head"><span>Mujeres</span><span>49,9 %</span></div>
      <div class="bar-track"><div class="bar-seg" style="width:49.9%;background:var(--rojizo)"></div></div>
    </div>

    <table style="margin-top:.8em">
      <thead>
        <tr><th>Distrito</th><th class="num">Hombre</th><th class="num">Mujer</th><th class="num">Total</th><th class="num">% del total</th></tr>
      </thead>
      <tbody>
        <tr><td>Barranco</td><td class="num">7 040</td><td class="num">8 066</td><td class="num">15 106</td><td class="num">7,03 %</td></tr>
        <tr><td>Chorrillos</td><td class="num">38 590</td><td class="num">36 922</td><td class="num">75 512</td><td class="num">35,16 %</td></tr>
        <tr><td>Miraflores</td><td class="num">9 662</td><td class="num">12 993</td><td class="num">22 655</td><td class="num">10,55 %</td></tr>
        <tr><td>San Borja</td><td class="num">7 658</td><td class="num">7 314</td><td class="num">14 972</td><td class="num">6,97 %</td></tr>
        <tr><td>San Luis</td><td class="num">6 700</td><td class="num">6 421</td><td class="num">13 121</td><td class="num">6,11 %</td></tr>
        <tr><td>Santiago de Surco</td><td class="num">31 739</td><td class="num">29 502</td><td class="num">61 241</td><td class="num">28,51 %</td></tr>
        <tr><td>Surquillo</td><td class="num">6 235</td><td class="num">5 937</td><td class="num">12 172</td><td class="num">5,67 %</td></tr>
        <tr class="total"><td>Total</td><td class="num">107 624</td><td class="num">107 155</td><td class="num">214 779</td><td class="num">100,00 %</td></tr>
      </tbody>
    </table>

    <div class="source">Fuente: DATA.md – Estudiantes por distrito y género.</div>
  </section>
`);

