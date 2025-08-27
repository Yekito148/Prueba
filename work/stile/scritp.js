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

// Efecto contracción hamburguesa
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () =>{
        const navbarCollapse = document.querySelector('.navbar-collapse');
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if(bsCollapse){
            bsCollapse.hide();
        }
    });
});

// Efecto contracción details y summary
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

// Carrusel de historias experiencia laboral
var swiper = new Swiper(".historiasSwiper", {
  slidesPerView: 4,
  spaceBetween: 15,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 1 },
    1200: { slidesPerView: 2 }
  }
});

const funciones = {
    exp1:{
        logo: "work/img/osnet.png",
        empresa: "OSNET",
        cargo: "Technical Support",
        fechas: "Mayo 2024 - Actualmente",
        descripcion: "Soporte técnico a clientes residenciales y comerciales.",
        logros: "Implementación de scripts de automatización y optimización de red.",
        fotos: ["work/img/osnet1.jpg","work/img/osnet2.jpg"]
    },
    exp2:{
        logo: "work/img/ar.png",
        empresa: "Hotel Hilton DoubleTree",
        cargo: "Soporte IT",
        fechas: "Ene 2022 - Abr 2024",
        descripcion: "Gestión de infraestructura tecnológica y soporte al personal.",
        logros: "Mejora del sistema de reservas y conectividad en red.",
        fotos: ["work/img/hotel1.jpg","work/img/hotel2.jpg"]
    },
    exp3:{
        logo: "work/img/deploy.jpg",
        empresa: "Deploy Technologies",
        cargo: "Soporte Técnico",
        fechas: "Jul 2020 - Dic 2021",
        descripcion: "Soporte en proyectos de telecomunicaciones y redes.",
        logros: "Implementación de VLANs y configuración de VPNs seguras.",
        fotos: ["work/img/deploy1.jpg","work/img/deploy2.jpg"]
    },
    exp4:{
        logo: "work/img/dandan.jpg",
        empresa: "Fiestas DanDan",
        cargo: "Técnico de Sonido e Iluminación",
        fechas: "Ene 2018 - Jun 2020",
        descripcion: "Montaje y soporte de equipos electrónicos y de sonido.",
        logros: "Automatización de sistemas de luces y control remoto.",
        fotos: ["work/img/dandan1.jpg","work/img/dandan2.jpg"]
    }
};

document.querySelectorAll(".swiper-slide").forEach(slide => {
    slide.addEventListener("click", () => {
        const id = slide.getAttribute("data-info");
        const exp = funciones[id];
        const historias = document.getElementById("historias-container");
        const detalle = document.getElementById("detalle-experiencia");

        historias.classList.add("hidden");
        setTimeout(() => {
            historias.style.display = "none";
            detalle.classList.add("active");

            document.getElementById("detalle-logo").src = exp.logo;
            document.getElementById("detalle-empresa").innerText = exp.empresa;
            document.getElementById("detalle-cargo").innerText = exp.cargo;
            document.getElementById("detalle-fechas").innerText = exp.fechas;
            document.getElementById("detalle-descripcion").innerText = exp.descripcion;
            document.getElementById("detalle-logros").innerText = exp.logros;

            const collage = document.getElementById("detalle-collage");
            collage.innerHTML = "";
            exp.fotos.forEach(f => {
                const img = document.createElement("img");
                img.src = f;
                img.alt = "foto experiencia";
                collage.appendChild(img);
            });
        }, 400);
    });
});

document.getElementById("volver-historias").addEventListener("click",() => {
    const historias = document.getElementById("historias-container");
    const detalle = document.getElementById("detalle-experiencia");

    detalle.classList.remove("active");
    setTimeout(() => {
        detalle.style.display = "none";
        historias.style.display = "block";
        setTimeout(() => {
            historias.classList.remove("hidden");
        }, 50);
    }, 400);
});