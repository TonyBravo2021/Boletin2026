/* ===== DATOS · Capítulo II: Educación Técnico Productiva =====
   Edita aquí las cifras (tablas, KPI, textos y data-priv/data-pub de las donas).
   Cada BOLETIN.add(`...`) es UNA página. No quites las comillas invertidas. */

BOLETIN.add(`
<section data-toc="2|Educación Técnico Productiva (ETP)" class="pg">
    <div class="kicker">Capítulo II</div>
    <h2>Educación Técnico Productiva</h2>
    <div class="rule"></div>
    <p>La ETP es una modalidad orientada a fortalecer el desempeño laboral, la empleabilidad y el desarrollo
    personal. Su finalidad es la formación en competencias laborales y empresariales que faciliten la
    inserción, permanencia y mejora en el mercado de trabajo.</p>

    <div class="donuts-3">
      <div class="donut" data-priv="67.22" data-pub="32.78" data-center="67,2%" data-sub="Privada"></div>
      <div class="donut" data-priv="40.44" data-pub="59.56" data-center="59,6%" data-sub="Pública"></div>
      <div class="donut" data-priv="71.19" data-pub="28.81" data-center="71,2%" data-sub="Privada"></div>
    </div>
    <div class="legend" style="flex-direction:row;gap:1em;justify-content:space-between;font-size:.74em">
      <span>Matrícula · 7 484</span><span>Docentes · 319</span><span>CETPRO · 59</span>
    </div>
    <div class="legend" style="flex-direction:row;gap:1.2em;margin-top:.55em">
      <div class="li"><span class="dot" style="background:var(--azulino)"></span>Privada</div>
      <div class="li"><span class="dot" style="background:var(--rojizo)"></span>Pública</div>
    </div>

    <table style="margin-top:.8em">
      <thead><tr><th>Indicador ETP</th><th class="num">Privada</th><th class="num">Pública</th><th class="num">Total</th></tr></thead>
      <tbody>
        <tr><td>Estudiantes matriculados</td><td class="num">5 031</td><td class="num">2 453</td><td class="num">7 484</td></tr>
        <tr><td>Docentes</td><td class="num">129</td><td class="num">190</td><td class="num">319</td></tr>
        <tr><td>CETPRO</td><td class="num">42</td><td class="num">17</td><td class="num">59</td></tr>
      </tbody>
    </table>

    <div class="note">La matrícula y los docentes de ETP se conservan del boletín original porque DATA.md no
    incluye estudiantes de esta modalidad.</div>

    <div class="source">Fuentes: DATA.md para servicios y CETPRO; boletín original para matrícula y docentes de ETP.</div>
  </section>
`);

