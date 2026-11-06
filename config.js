/* ===== CONFIGURACIÓN GENERAL DEL BOLETÍN (cargar primero) ===== */
window.BOLETIN = {
  html: [],
  add: function (h) { this.html.push(h); },
  config: {
    titulo: "Boletín Estadístico UGEL 07 · 2026",
    velocidadMs: 950,     // duración del giro de página
    autoplay: false,      // true = se reproduce solo al abrir
    pdfArchivo: "descargas/boletin-ugel07.pdf",  // PDF incluido ("" para ocultar el enlace)
    autoplaySeg: 7        // segundos entre páginas en reproducción automática
  }
};
