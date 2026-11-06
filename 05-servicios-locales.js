/* ===== DATOS · Capítulos 1.3 y 1.4: servicios educativos y locales escolares =====
   Edita aquí las cifras (tablas, KPI, textos y data-priv/data-pub de las donas).
   Cada BOLETIN.add(`...`) es UNA página. No quites las comillas invertidas. */

BOLETIN.add(`
<section data-toc="1.3|Servicios educativos de la Educación Básica" class="pg">
    <div class="kicker">Capítulo 1.3</div>
    <h2>Servicios educativos de la Educación Básica</h2>
    <div class="rule"></div>
    <p>La UGEL 07 – San Borja registra <strong>1 689 servicios educativos activos</strong>, incluyendo ETP y
    PRONOEI, de los cuales el <strong>71,8 % (1 213)</strong> pertenecen al sector privado y el
    <strong>28,2 % (476)</strong> al sector público.</p>

    <div class="donut-block">
      <div class="donut" data-priv="71.82" data-pub="28.18" data-center="71,8%" data-sub="Privada"></div>
      <div class="legend">
        <div class="li"><span class="dot" style="background:var(--azulino)"></span>Privada — <b>1 213</b> · 71,82 %</div>
        <div class="li"><span class="dot" style="background:var(--rojizo)"></span>Pública — <b>476</b> · 28,18 %</div>
        <div class="li" style="margin-top:.4em;color:#8a94a3">Total servicios <b>1 689</b></div>
      </div>
    </div>

    <table>
      <thead>
        <tr><th>Nivel / Modalidad</th><th class="num">Privada</th><th class="num">Pública</th><th class="num">Total</th></tr>
      </thead>
      <tbody>
        <tr><td>EBA</td><td class="num">39</td><td class="num">36</td><td class="num">75</td></tr>
        <tr><td>EBE</td><td class="num">22</td><td class="num">23</td><td class="num">45</td></tr>
        <tr><td>EBR</td><td class="num">1 110</td><td class="num">400</td><td class="num">1 510</td></tr>
        <tr><td>ETP</td><td class="num">42</td><td class="num">17</td><td class="num">59</td></tr>
        <tr class="total"><td>Total general</td><td class="num">1 213</td><td class="num">476</td><td class="num">1 689</td></tr>
      </tbody>
    </table>

    <div class="note">Incluye IIEE activas escolarizadas y no escolarizadas; incluye CETPRO y PRONOEI. Si se
    excluye ETP, la Educación Básica concentra 1 630 servicios: 1 171 privados y 459 públicos.</div>

    <div class="source">Fuente: DATA.md – Recuento de servicios educativos.</div>
  </section>
`);

BOLETIN.add(`
<section data-toc="1.3|Servicios educativos EBR por nivel" class="pg">
    <div class="kicker">Capítulo 1.3</div>
    <h2>Servicios educativos EBR por nivel</h2>
    <div class="rule"></div>
    <p>En la Educación Básica Regular se registraron <strong>1 510 servicios educativos</strong>, predominando
    ampliamente las instituciones privadas con el <strong>73,5 % (1 110)</strong>, mientras que las públicas
    representaron el <strong>26,5 % (400)</strong>.</p>

    <table>
      <thead>
        <tr><th>Nivel / Programa</th><th class="num">Privada</th><th class="num">Pública</th><th class="num">Total</th><th class="num">% Priv.</th></tr>
      </thead>
      <tbody>
        <tr><td>Inicial</td><td class="num">545</td><td class="num">95</td><td class="num">640</td><td class="num">85,16 %</td></tr>
        <tr><td>Primaria</td><td class="num">338</td><td class="num">80</td><td class="num">418</td><td class="num">80,86 %</td></tr>
        <tr><td>Secundaria</td><td class="num">227</td><td class="num">58</td><td class="num">285</td><td class="num">79,65 %</td></tr>
        <tr><td>PRONOEI</td><td class="num">0</td><td class="num">167</td><td class="num">167</td><td class="num">0,00 %</td></tr>
        <tr class="total"><td>Total EBR</td><td class="num">1 110</td><td class="num">400</td><td class="num">1 510</td><td class="num">73,51 %</td></tr>
      </tbody>
    </table>

    <div class="bar-line">
      <div class="bl-head"><span>Inicial</span><span>85,2 % privada</span></div>
      <div class="bar-track">
        <div class="bar-seg priv" style="width:85.16%"></div><div class="bar-seg pub" style="width:14.84%"></div>
      </div>
    </div>
    <div class="bar-line">
      <div class="bl-head"><span>Primaria</span><span>80,9 % privada</span></div>
      <div class="bar-track">
        <div class="bar-seg priv" style="width:80.86%"></div><div class="bar-seg pub" style="width:19.14%"></div>
      </div>
    </div>
    <div class="bar-line">
      <div class="bl-head"><span>Secundaria</span><span>79,7 % privada</span></div>
      <div class="bar-track">
        <div class="bar-seg priv" style="width:79.65%"></div><div class="bar-seg pub" style="width:20.35%"></div>
      </div>
    </div>

    <div class="legend" style="flex-direction:row;gap:1.2em;margin-top:.6em">
      <div class="li"><span class="dot" style="background:var(--azulino)"></span>Privada</div>
      <div class="li"><span class="dot" style="background:var(--rojizo)"></span>Pública</div>
    </div>

    <div class="source">Fuente: DATA.md – Servicios educativos detallado por subniveles.</div>
  </section>
`);

BOLETIN.add(`
<section data-toc="1.3|Servicios educativos por distrito" class="pg">
    <div class="kicker">Capítulo 1.3</div>
    <h2>Servicios educativos por distrito</h2>
    <div class="rule"></div>
    <p>Chorrillos es el distrito con mayor número de servicios (<strong>596</strong>), seguido de Santiago de
    Surco (<strong>506</strong>). Miraflores presenta la mayor participación relativa del sector privado
    (<strong>83,9 %</strong>), mientras que Barranco es el distrito con mayor equilibrio entre gestión privada
    y pública.</p>

    <table>
      <thead>
        <tr><th>Distrito</th><th class="num">Privada</th><th class="num">Pública</th><th class="num">Total</th><th class="num">% Priv.</th></tr>
      </thead>
      <tbody>
        <tr><td>Barranco</td><td class="num">45</td><td class="num">42</td><td class="num">87</td><td class="num">51,72 %</td></tr>
        <tr><td>Chorrillos</td><td class="num">407</td><td class="num">189</td><td class="num">596</td><td class="num">68,29 %</td></tr>
        <tr><td>Miraflores</td><td class="num">120</td><td class="num">23</td><td class="num">143</td><td class="num">83,92 %</td></tr>
        <tr><td>San Borja</td><td class="num">100</td><td class="num">27</td><td class="num">127</td><td class="num">78,74 %</td></tr>
        <tr><td>San Luis</td><td class="num">74</td><td class="num">51</td><td class="num">125</td><td class="num">59,20 %</td></tr>
        <tr><td>Santiago de Surco</td><td class="num">397</td><td class="num">109</td><td class="num">506</td><td class="num">78,46 %</td></tr>
        <tr><td>Surquillo</td><td class="num">70</td><td class="num">35</td><td class="num">105</td><td class="num">66,67 %</td></tr>
        <tr class="total"><td>Total</td><td class="num">1 213</td><td class="num">476</td><td class="num">1 689</td><td class="num">71,82 %</td></tr>
      </tbody>
    </table>

    <div class="note">DATA.md no desagrega servicios por distrito y modalidad simultáneamente; se presenta el
    total distrital incluyendo EBA, EBE, EBR, ETP y PRONOEI.</div>

    <div class="source">Fuente: DATA.md – Recuento de servicios educativos por distrito.</div>
  </section>
`);

BOLETIN.add(`
<section data-toc="1.4|Locales escolares" class="pg">
    <div class="kicker">Capítulo 1.4</div>
    <h2>Locales escolares</h2>
    <div class="rule"></div>
    <p>La UGEL N.º 07 – San Borja cuenta con un total de <strong>1 052 locales educativos activos</strong>, de
    los cuales <strong>723 corresponden a la gestión privada (68,7 %)</strong> y <strong>330 a la gestión
    pública (31,3 %)</strong>. Este indicador incluye ETP y PRONOEI.</p>

    <div class="donut-block">
      <div class="donut" data-priv="68.73" data-pub="31.27" data-center="68,7%" data-sub="Privada"></div>
      <div class="legend">
        <div class="li"><span class="dot" style="background:var(--azulino)"></span>Privada — <b>723</b> · 68,73 %</div>
        <div class="li"><span class="dot" style="background:var(--rojizo)"></span>Pública — <b>330</b> · 31,27 %</div>
        <div class="li" style="margin-top:.4em;color:#8a94a3">Total locales <b>1 052</b></div>
      </div>
    </div>

    <table>
      <thead>
        <tr><th>Nivel / Modalidad</th><th class="num">Privada</th><th class="num">Pública</th><th class="num">Total</th></tr>
      </thead>
      <tbody>
        <tr><td>EBA</td><td class="num">24</td><td class="num">18</td><td class="num">42</td></tr>
        <tr><td>EBE</td><td class="num">13</td><td class="num">12</td><td class="num">25</td></tr>
        <tr><td>EBR</td><td class="num">660</td><td class="num">308</td><td class="num">968</td></tr>
        <tr><td>ETP</td><td class="num">42</td><td class="num">17</td><td class="num">59</td></tr>
        <tr class="total"><td>Total general</td><td class="num">723</td><td class="num">330</td><td class="num">1 052</td></tr>
      </tbody>
    </table>

    <div class="note">Si se excluye Educación Técnico Productiva, la Educación Básica concentra 993 locales:
    681 privados y 313 públicos.</div>

    <div class="source">Fuente: DATA.md – Recuento distinto de locales escolares.</div>
  </section>
`);

BOLETIN.add(`
<section data-toc="1.4|Locales escolares por nivel y distrito" class="pg">
    <div class="kicker">Capítulo 1.4</div>
    <h2>Locales por nivel y distrito</h2>
    <div class="rule"></div>

    <h3>Educación Básica Regular por nivel</h3>
    <table>
      <thead>
        <tr><th>Nivel / Programa</th><th class="num">Privada</th><th class="num">Pública</th><th class="num">Total</th></tr>
      </thead>
      <tbody>
        <tr><td>Inicial</td><td class="num">545</td><td class="num">94</td><td class="num">639</td></tr>
        <tr><td>Primaria</td><td class="num">338</td><td class="num">79</td><td class="num">417</td></tr>
        <tr><td>Secundaria</td><td class="num">227</td><td class="num">57</td><td class="num">284</td></tr>
        <tr><td>PRONOEI</td><td class="num">0</td><td class="num">167</td><td class="num">167</td></tr>
        <tr class="total"><td>Total EBR</td><td class="num">660</td><td class="num">308</td><td class="num">968</td></tr>
      </tbody>
    </table>

    <h3>Locales por distrito</h3>
    <table>
      <thead>
        <tr><th>Distrito</th><th class="num">Privada</th><th class="num">Pública</th><th class="num">Total</th><th class="num">% Priv.</th></tr>
      </thead>
      <tbody>
        <tr><td>Barranco</td><td class="num">23</td><td class="num">23</td><td class="num">46</td><td class="num">50,00 %</td></tr>
        <tr><td>Chorrillos</td><td class="num">227</td><td class="num">136</td><td class="num">362</td><td class="num">62,71 %</td></tr>
        <tr><td>Miraflores</td><td class="num">80</td><td class="num">14</td><td class="num">94</td><td class="num">85,11 %</td></tr>
        <tr><td>San Borja</td><td class="num">67</td><td class="num">14</td><td class="num">81</td><td class="num">82,72 %</td></tr>
        <tr><td>San Luis</td><td class="num">42</td><td class="num">37</td><td class="num">79</td><td class="num">53,16 %</td></tr>
        <tr><td>Santiago de Surco</td><td class="num">237</td><td class="num">82</td><td class="num">319</td><td class="num">74,30 %</td></tr>
        <tr><td>Surquillo</td><td class="num">47</td><td class="num">24</td><td class="num">71</td><td class="num">66,20 %</td></tr>
        <tr class="total"><td>Total</td><td class="num">723</td><td class="num">330</td><td class="num">1 052</td><td class="num">68,73 %</td></tr>
      </tbody>
    </table>

    <div class="source">Fuente: DATA.md – Recuento distinto de locales escolares por nivel y distrito.</div>
  </section>
`);

