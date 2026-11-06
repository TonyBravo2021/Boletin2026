BOLETÍN ESTADÍSTICO UGEL 07 · FLIPBOOK
======================================
Abrir: doble clic en index.html (no necesita servidor ni internet, salvo las tipografías de Google).

ESTRUCTURA
  index.html          Página principal (orden de los capítulos = orden de las líneas <script src="datos/...">)
  datos/              << AQUÍ SE ACTUALIZAN LAS CIFRAS >>
    config.js           título, velocidad de giro, reproducción automática
    00 … 07-*.js        un archivo por capítulo; cada BOLETIN.add(`...`) es una página
  css/                Estilos
    libro.css           colores institucionales (variables :root), hojas y lomo
    contenido.css       tipografía, tablas, KPI, donas, barras, portada
    graficos-y-texto.css   texto en negro, leyendas y barras privada/pública, portada con estadística
    tapas-y-controles.css  tapas duras, guardas, barra de controles, cajón de índice
  descargas/          PDF incluido (A5, 25 páginas). Regenerar: botón PDF → Guardar como PDF
  js/                 Scripts
    flipbook.js         motor (páginas, tapas, controles, índice automático)
    donas.js            dibuja donas, barras privada/pública de cada tabla y el gráfico de portada

CÓMO ACTUALIZAR
  1. Abre el archivo del capítulo en datos/ con cualquier editor de texto (VS Code, Bloc de notas).
  2. Cambia los números en las tablas, KPI y textos.
  3. Donas: modifica data-priv y data-pub (porcentajes) y data-center (texto del centro).
  4. Guarda y recarga index.html (F5).
  El ÍNDICE y los NÚMEROS DE PÁGINA se generan solos (atributo data-toc="num|título" en cada <section>).
  Para agregar una página: copia un BOLETIN.add(`...`) dentro de su capítulo. Si el total de páginas
  queda impar, se agrega automáticamente una página de “Notas”.

CONTROLES
  ‹ ›  páginas · « »  portada/contraportada · ☰ índice · ► reproducción automática · − + zoom · ⛶ pantalla completa · PDF guardar/imprimir
  Teclado: ← → · Inicio/Fin · I índice · + − 0 zoom · F pantalla completa · Espacio reproducir · Esc cerrar índice
  También: clic en los bordes de la hoja, escribir el número de página, clic en la barra de progreso, deslizar en móvil.
  Enlace directo a una página: index.html#pag=12
