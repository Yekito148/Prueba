// efecto encabezado movimiento
const header = document.getElementById("header");
const foto = document.getElementById("foto_perfil");
const nombre = document.getElementById("nombre");
const titulo = document.getElementById("titulo");
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const maxScroll = 600;
    const progress = Math.min(scrollY / maxScroll, 1);

    const headerHeight = 30 - (progress * 20);
    header.style.height = `${headerHeight}vh`;

    const fotoSize = 180 - (120 * progress);
    foto.style.width = `${fotoSize}px`;
    foto.style.height = `${fotoSize}px`;

    const fontSize = 2 - (0.8 * progress);
    nombre.style.fontSize = `${fontSize}rem`;
    titulo.style.fontSize = `${fontSize}rem`;

    if (progress >= 0.6) {
        header.style.flexDirection = "row";
        header.style.justifyContent = "space-between";
        header.style.alignItems = "center";

        nombre.style.marginTop = "0";
        nombre.style.marginLeft = "15px";

        titulo.style.marginTop = "0";
        titulo.style.marginLeft = "15px";

        navbar.style.position = "flex-end"; 
        navbar.style.marginLeft = "auto"; 
    } else {
       
        header.style.flexDirection = "column";
        header.style.justifyContent = "center";
        header.style.alignItems = "center";

        nombre.style.marginTop = "15px";
        nombre.style.marginLeft = "0";
            
        titulo.style.marginTop = "15px";
        titulo.style.marginLeft = "0";

        navbar.style.position = "relative";
        navbar.style.top = "auto";
        navbar.style.marginLeft = "0";
    }
});

// Efecto contraccion hamburguesa
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () =>{
        const navbarCollapse = document.querySelector('.navbar-collapse');
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if(bsCollapse){
            bsCollapse.hide();
        }
    });
});

// Efecto contraccion datails y sumary
document.addEventListener("DOMContentLoaded", () => {
    const detalles = document.querySelectorAll("details");
    detalles.forEach((det) => {
        det.addEventListener("toggle", function() {
            if(this.hasAttribute("open")) {
                detalles.forEach((other) => {
                    if (other !== this) {
                        other.removeAttribute("open");
                    }
                });
            }
        });
    });
});