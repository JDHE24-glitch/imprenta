setTimeout(() => {
  const main = document.querySelector('main');
  if (!main) return;

  main.className = 'im-home';
  main.innerHTML = `
    <section class="im-hero">
      <div class="im-hero-copy">
        <p class="im-kicker">Sublimación · diseño · detalles</p>
        <h1>Imprimimos ideas<br>que dejan <em>huella.</em></h1>
        <p>Convertimos tazas, vasos, playeras y accesorios en piezas que hablan de ti o de tu negocio.</p>
        <div class="im-actions"><a class="im-btn im-btn-primary" href="disenador.html">Personaliza ahora <b>→</b></a><a class="im-btn im-btn-secondary" href="productos.html">Ver productos</a></div>
      </div>
      <div class="im-hero-art" aria-label="Mascota de Imprenta diseñando">
        <i class="im-splash im-splash-cyan"></i><i class="im-splash im-splash-pink"></i><i class="im-splash im-splash-yellow"></i>
        <img src="assets/mascot-palette.png" alt="Mascota de Imprenta con paleta de colores">
      </div>
    </section>

    <section class="im-benefits"><p class="im-section-label">¿Por qué elegirnos?</p><div class="im-benefit-grid">
      <article><i>▣</i><h2>Impresión profesional</h2><p>Color intenso y acabados cuidados.</p></article>
      <article><i>◌</i><h2>Diseño creativo</h2><p>Tu idea toma una forma única.</p></article>
      <article><i>ϟ</i><h2>Atención rápida</h2><p>Resolvemos todo por WhatsApp.</p></article>
      <article><i>✦</i><h2>Hecho para ti</h2><p>Detalles que sí se sienten personales.</p></article>
    </div></section>

    <section class="im-process"><p class="im-section-label">Nuestro proceso</p><div class="im-process-grid">
      <article><span>1</span><img src="assets/mascot-palette.png" alt="Mascota diseña"><h2>Diseña</h2><p>Cuéntanos tu idea.</p></article>
      <article><span>2</span><img src="assets/mascot.png" alt="Mascota crea"><h2>Creamos</h2><p>Preparamos tu arte.</p></article>
      <article><span>3</span><img src="assets/mascot-gym.png" alt="Mascota revisa"><h2>Revisamos</h2><p>Cuidamos cada detalle.</p></article>
      <article><span>4</span><img src="assets/mascot-megaphone.png" alt="Mascota anuncia"><h2>Impacta</h2><p>Tu pieza está lista.</p></article>
    </div></section>

    <section class="im-work"><div class="im-work-heading"><p class="im-section-label">Nuestros productos</p><h2>Hechos para<br><em>destacar.</em></h2><a href="productos.html">Ver todo el catálogo →</a></div><div class="im-product-grid">
      <a href="productos.html#tazas"><img src="assets/product-mug.png" alt="Taza personalizada"><span>Tazas personalizadas</span></a>
      <a href="productos.html#tazas"><img src="assets/product-tumbler.png" alt="Vaso térmico personalizado"><span>Vasos térmicos</span></a>
      <a href="productos.html#ropa"><img src="assets/product-shirt.png" alt="Playera personalizada"><span>Playeras sublimadas</span></a>
      <a href="productos.html#ropa"><img src="assets/product-accessories.png" alt="Accesorios personalizados"><span>Accesorios creativos</span></a>
    </div></section>

    <section class="im-stats"><article><b>+100</b><span>proyectos personalizados</span></article><article><b>100%</b><span>diseñado para ti</span></article><article><b>24h</b><span>respuesta por WhatsApp</span></article><article><b>∞</b><span>posibilidades creativas</span></article></section>

    <section class="im-final"><div><p class="im-kicker">¿Listo para hacerlo tuyo?</p><h2>Tu idea merece<br><em>ser única.</em></h2><p>Elige una pieza, personalízala y mándanos tu pedido por WhatsApp.</p><a class="im-btn im-btn-light" href="disenador.html">Abrir editor 3D <b>→</b></a></div><img src="assets/mascot-megaphone.png" alt="Mascota de Imprenta anunciando"></section>
  `;
}, 420);
