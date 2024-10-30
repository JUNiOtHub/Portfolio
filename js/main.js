// Elementos DOM
const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const navBtnImg = document.querySelector("#nav-btn-img");
const preloader = document.getElementById("preloader");
const header = document.querySelector("#header");
const hero = document.querySelector("#home");
const goToTop = document.getElementById("goToTop");

// Ocultar Preloader com transição suave
function hidePreloader() {
  preloader.style.opacity = "0";
  setTimeout(() => {
    preloader.style.display = "none";
  }, 500); // Tempo da transição
}

window.addEventListener("load", () => {
  setTimeout(hidePreloader, 1700);
});

// Menu Hamburger
navBtn.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navBtnImg.src = isOpen ? "img/icons/close.svg" : "img/icons/open.svg";
});

// Cabeçalho fixo e botão "voltar ao topo"
window.addEventListener("scroll", () => {
  const triggerHeight = hero.offsetHeight - 170;
  const isScrolled = window.scrollY > triggerHeight;

  header.classList.toggle("header-sticky", isScrolled);
  goToTop.classList.toggle("reveal", isScrolled);
});

// Configurações de animação AOS
AOS.init({
  once: true,
  duration: 1000, // Duração da animação (em ms)
  offset: 120, // Offset do gatilho para animação
  easing: 'ease-in-out', // Tipo de animação
});