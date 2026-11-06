/* ===== DATOS · Portada, créditos, índice e introducción =====
   Edita aquí las cifras (tablas, KPI, textos y data-priv/data-pub de las donas).
   Cada BOLETIN.add(`...`) es UNA página. No quites las comillas invertidas. */

BOLETIN.add(`
<section class="pg cover-pg" data-nofolio="1">
    <div class="cover-wrap">
      <div class="cover-top">
        <div class="cover-mark">UGEL 07</div>
        <div class="cover-year">2026</div>
      </div>
      <div class="cover-center">
        <div class="cover-eyebrow">Boletín Estadístico</div>
        <h1>Sistema Educativo<br>UGEL 07 · San Borja</h1>
        <div class="cover-line"></div>
        <p class="cover-sub">Cifras actualizadas del servicio educativo en la jurisdicción. Educación Básica, docentes, servicios, locales escolares y Educación Técnico Productiva.</p>
      </div>
      <div class="cover-data">
        <div class="cover-stats">
          <div class="donut" data-priv="52.34" data-pub="47.66" data-center="52,3%" data-sub="Privada" data-c1="#8ec0f2" data-c2="#f2a7b2" data-track="rgba(255,255,255,.14)"></div>
          <div class="cs-kpis">
            <div><b>214 779</b><span>Estudiantes</span></div>
            <div><b>1 689</b><span>Servicios educativos</span></div>
            <div><b>16 151</b><span>Docentes</span></div>
          </div>
        </div>
        <div class="cover-chart" data-title="Matrícula por nivel y gestión" data-series="Inicial:20243:18657;Primaria:47614:40619;Secundaria:42949:36855;EBE:350:1596;EBA:1258:4638"></div>
        <div class="cover-leyenda"><span><i class="dot-priv"></i>Privada</span><span><i class="dot-pub"></i>Pública</span></div>
      </div>
      <div class="cover-foot">
        <span>Unidad de Gestión Educativa Local N.º 07</span>
        <span>Área de Planificación y Presupuesto</span>
      </div>
    </div>
  </section>
`);

BOLETIN.add(`
<section class="pg">
    <div class="kicker">Publicación institucional</div>
    <h2>Créditos</h2>
    <div class="rule"></div>

    <h3>Dirección</h3>
    <p class="lead"><strong>Ana Julia Enciso Trujillo</strong><br>
    Directora de la Unidad de Gestión Educativa Local N.º 07</p>

    <h3>Área responsable de la publicación</h3>
    <p class="lead">Área de Planificación y Presupuesto</p>

    <h3>Dirección de Sistema Administrativo II</h3>
    <p class="lead">Econ. John Walter Trujillo Valderrama</p>

    <h3>Equipo de Estadística y Monitoreo</h3>
    <p class="lead">Mercy Gamboa Ricalde · Nancy Valverde Cribillero · Nathali Falcón Chambilla<br>
    Godofredo Meza Alpaca · Felipe López Poma · Ronald Tony Bravo Castillo</p>

    <div class="note">
      <strong>Criterio de actualización:</strong> las cifras de estudiantes de Educación Básica, servicios
      educativos y locales escolares fueron actualizadas conforme al archivo <strong>DATA.md</strong>. Se
      conservaron los datos de docentes, evolución histórica, población proyectada, matrícula de ETP y
      docentes de ETP.
    </div>

    <div class="source">Fuente: Ministerio de Educación – ESCALE · INEI · DATA.md</div>
  </section>
`);

BOLETIN.add(`
<section class="pg">
    <div class="kicker">Contenido</div>
    <h2>Índice</h2>
    <div class="rule"></div>
    <ul class="toc"><!-- se genera solo --></ul>
  </section>
`);

BOLETIN.add(`
<section data-toc="—|Introducción" class="pg">
    <div class="kicker">Presentación</div>
    <h2>Introducción</h2>
    <div class="rule"></div>
    <p class="lead">Esta publicación es elaborada anualmente por el Equipo de Estadística y Monitoreo de la
    Unidad de Gestión Educativa Local 07 – San Borja (UGEL 07), con el propósito de poner a disposición de la
    comunidad educativa y de la ciudadanía en general un compendio de información confiable y actualizada
    sobre la situación del servicio educativo en la jurisdicción.</p>

    <p>El boletín contiene como eje central los indicadores educativos de la jurisdicción, organizados y
    presentados bajo diversos criterios de desagregación (nivel educativo, modalidad, gestión, distrito, entre
    otros). Si bien se pone especial énfasis en el año 2026, también se incluye un análisis de la evolución
    histórica de variables clave, lo que permite observar tendencias, avances y desafíos del sistema educativo
    en dicho intervalo.</p>

    <p>La información utilizada proviene de fuentes oficiales, como la Unidad de Estadística Educativa del
    Ministerio de Educación (Minedu), en el marco del Censo Educativo que se desarrolla cada año, y el
    Instituto Nacional de Estadística e Informática (INEI), a partir de indicadores demográficos y
    socioeconómicos publicados en la Encuesta Nacional de Hogares (ENAHO).</p>

    <div class="note">
      <strong>Nota de actualización:</strong> en esta versión se han actualizado las cifras de
      <strong>estudiantes de Educación Básica</strong>, <strong>servicios educativos</strong> y
      <strong>locales escolares</strong> conforme al archivo <strong>DATA.md</strong>.
    </div>

    <p>El contenido de esta publicación es principalmente de carácter cuantitativo y presenta resúmenes y
    estadísticas descriptivas, así como elementos de análisis e interpretación que contribuyen a la toma de
    decisiones informadas por parte de directivos, especialistas, docentes, autoridades y otros actores
    vinculados al sector educación.</p>

    <div class="source">Versión en línea actualizable · Área de Planificación y Presupuesto – UGEL 07</div>
  </section>
`);

