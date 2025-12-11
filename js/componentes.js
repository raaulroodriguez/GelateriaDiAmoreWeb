// Función para cargar header
function cargarHeader() {
  document.getElementById("header").innerHTML = `
    <header class="header">
      <div class="logo-titulo">
        <span class="titulo">Gelateria Di Am</span>
        <a href="index.html">
          <img src="assets/img/corazon.png" alt="logo-gda" class="logo" />
        </a>
        <span class="titulo">re</span>
      </div>
      <div class="menu-nav" id="menu-nav">
        <ul class="nav-lista">
          <li class="nav-drop">
            <a href="index.html">Inicio</a>
          </li>
          <li class="nav-drop">
            <span class="nav-link">Sabores</span>
            <ul class="drop-list">
              <li><a href="helados.html" class="drop-link">Helados</a></li>
              <li><a href="paletas.html" class="drop-link">Paletas</a></li>
              <li><a href="bebidas.html" class="drop-link">Bebidas</a></li>
              <li><a href="postres.html" class="drop-link">Postres</a></li>
            </ul>
          </li>
          <li class="nav-drop">
            <span class="nav-link">Nosotros</span>
            <ul class="drop-list">
              <li><a href="ubicacion.html" class="drop-link">Ubicación</a></li>
              <li><a href="horarios.html" class="drop-link">Horario</a></li>
              <li><a href="preg-frec.html" class="drop-link">Preguntas Frecuentes</a></li>
            </ul>
          </li>
          <li class="nav-drop">
            <a href="contacto.html">Contacto</a>
          </li>
        </ul>
      </div>
      <button class="hamburger" id="hamburger" aria-label="Menú">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  `;

  initHamburgerMenu();
}

// Función para controlar el menú hamburguesa
function initHamburgerMenu() {
  const hamburger = document.getElementById("hamburger");
  const menuNav = document.getElementById("menu-nav");

  if (hamburger && menuNav) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      menuNav.classList.toggle("active");
    });

    // Cerrar menú al hacer click en un enlace
    const menuLinks = menuNav.querySelectorAll("a");
    menuLinks.forEach((link) => {
      link.addEventListener("click", function () {
        hamburger.classList.remove("active");
        menuNav.classList.remove("active");
      });
    });

    const navDrops = document.querySelectorAll(".nav-drop");
    navDrops.forEach((drop) => {
      const navLink = drop.querySelector(".nav-link");
      if (navLink) {
        navLink.addEventListener("click", function (e) {
          if (window.innerWidth <= 768) {
            e.preventDefault();
            drop.classList.toggle("active");
          }
        });
      }
    });
  }
}

// Función cargar footer
function cargarFooter() {
  document.getElementById("footer").innerHTML = `
    <footer>
      <div class="footer">
        <nav>
          <ul>
            <li class="titulo-ft">Aviso Legal</li>
            <li><a href="condiciones.html">Condiciones de Uso</a></li>
            <li><a href="politica.html">Política de Privacidad</a></li>
            <li><a href="cookies.html">Preferencias de cookies</a></li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li class="titulo-ft">Sobre Gelateria Di Amore</li>
            <li><a href="helados.html">Nuestos Productos</a></li>
            <li><a href="ubicacion.html">¿Dónde nos encontramos?</a></li>
            <li><a href="https://maps.app.goo.gl/eeNv8rn7wdJ8uWoa8">Vuestra opinión nos importa</a></li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li class="titulo-ft">Ayuda</li>
            <li><a href="preg-frec.html">Preguntas Frecuentes</a></li>
            <li><a href="contacto.html">Atención al cliente</a></li>
            <li><a href="trabaja.html">Trabaja Con Nosotros</a></li>
          </ul>
        </nav>
        <nav>
          <li class="titulo-ft">Redes Sociales</li>
          <ul class="rrss-footer">
            <li>
              <a href="https://www.instagram.com/gelateria_diamore/">
                <img src="assets/img/ig.png" alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@gelateria_diamore">
                <img src="assets/img/tiktok.png" alt="TikTok" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/gelateriadiamore/">
                <img src="assets/img/fb.png" alt="Facebook" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="end-footer">
        <p>© 2025 Gelateria Di Amore, Inc</p>
      </div>
      <button id="scrollTopBtn" class="scroll-top" onclick="scrollToTop()">
        <i class="fa-solid fa-arrow-up"></i>
      </button>
    </footer>
  `;
}

window.onscroll = function () {
  showScrollButton();
};

function showScrollButton() {
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (scrollBtn) {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  }
}

// Función para volver arriba
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Cargar todo cuando la página cargue
window.onload = function () {
  cargarHeader();
  cargarFooter();
};
