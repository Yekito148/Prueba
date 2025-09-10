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
        descripcion: "Responsable de la atención, resolución y documentación de incidencias para servicios residenciales y comerciales en Puerto Rico, gestionando redes y configuraciones avanzadas de equipos, IPs, enrutamiento, firmware, VLANs y VPNs. Destacado por una rápida curva de aprendizaje, lo que me permitió asumir soporte y migraciones completas de infraestructura Cambium y Ubiquiti a PPPoE sobre Juniper, realizando configuraciones desde cero. Además, adquirí experiencia en telefonía IP con equipos Grandstream y plataformas 3CX, Mirtapbx y SIP.AI, desarrollando IVRs, sistemas de voicemail personalizados y acceso remoto telefónico mediante JustDial, optimizando la gestión y el control de llamadas. ",
        logros: "LOGROS: Desarrolle en Python un sistema automatizado que redujo significativamente los tiempos de validación, configuración y resolución de solicitudes, analizando en segundos el comportamiento de equipos y redes. Cuando no podía resolver de forma automática, integraba ChatGPT para generar recomendaciones precisas al técnico, optimizando la atención al cliente. ",
        fotos: ["work/img/osnet2.png", "work/img/osnet3.png", "work/img/osnet4.png"]
    },
    exp2:{
        logo: "work/img/ar.png",
        empresa: "Hotel Hilton DoubleTree",
        cargo: "Operario de mantenimiento",
        fechas: "Ene 2022 - Abr 2024",
        descripcion: "Responsable de la ejecución de mantenimiento preventivo y correctivo en redes eléctricas, motores, calderas, sistemas de refrigeración, aire acondicionado, ascensores, equipos de cocina, control de acceso. También brindé soporte al área tecnológica en redes e internet. Gracias a mi adaptabilidad y rápida adquisición de conocimientos, asumí temporalmente la coordinación del área de mantenimiento, liderando la gestión de hojas de vida de equipos, seguimiento de tareas y supervisión de contratistas.",        
        logros: "LOGROS: Implementé soluciones automatizadas con Visual Basic y Python que optimizaron la gestión de tareas pendientes, la asignación automática vía WhatsApp y la trazabilidad de reparaciones. Desarrollé paneles en Power BI para visualizar el desempeño del área y presentarlo a la gerencia, facilitando una toma de decisiones más ágil y basada en datos.",
        fotos: ["work/img/hotelauto.png","work/img/hotel3.png", "work/img/hotel2.png"]
    },
    exp3:{
        logo: "work/img/deploy.jpg",
        empresa: "Deploy Technologies",
        cargo: "Técnico electrónico",
        fechas: "Ene 2019 - Dic 2021",
        descripcion: "Inicié como practicante técnico y, gracias a mi responsabilidad, compromiso y autonomía, ascendí a un cargo fijo. Realicé mantenimiento preventivo y correctivo de sistemas electrónicos en sedes como Centro Comercial Tintal Plaza y Centro Empresarial Northpoint. Instalé y programé sistemas de seguridad, alarmas contra incendio y asalto, control de acceso y radiocomunicación. Ejecuté diagnósticos, reparación de tarjetas de control y configuración de paneles Andover Continuum para redes automatizadas. Implementé herramientas en Excel para optimizar la gestión del control de acceso y la administración de sistemas domóticos, mejorando la trazabilidad y eficiencia operativa. Además, reparé tarjetas y componentes electrónicos de diversos equipos, ampliando mi experiencia en diagnóstico y solución de fallas en hardware.",
        logros: "LOGROS:  Durante la pandemia, propuse y lideré un proyecto que permitió a la empresa adaptarse a las exigencias sanitarias y mantenerse operativa. Diseñé y desarrollé desde cero, tanto en hardware como en software, un dispositivo de medición de temperatura sin contacto que, en caso de fiebre, activaba alertas para protocolos de desinfección y aislamiento; y en caso contrario, habilitaba el acceso a una cabina de aspersión también diseñada por mí. El sistema almacenaba la información en una base de datos en Excel con registro de ingresos, control de casos y generación de gráficos, cumpliendo con los lineamientos del Ministerio de Salud frente al COVID-19.",
        fotos: ["work/img/deploy2.png","work/img/deploy3.png"]
    },
    exp4:{
        logo: "work/img/dandan.jpg",
        empresa: "Fiestas DanDan",
        cargo: "Técnico de Sonido e Iluminación",
        fechas: "Ene 2018 - Jun 2020",
        descripcion: "Durante mi permanencia en la empresa, ocupe diversos cargos que me permitieron crecer profesionalmente, iniciando como Auxiliar de Publicidad hasta llegar a roles de liderazgo y administración. Como Coordinador y posteriormente Auxiliar Administrativo, lideré equipos de trabajo en eventos sociales, infantiles y corporativos, gestionando la asignación de tareas, seguimiento de desempeño y organización de logística dentro de la empresa. Implementé herramientas ofimáticas automatizadas mediante macros para optimizar la gestión de inventarios, control de ingresos y egresos, pagos de nómina y escalafón del personal, mejorando significativamente la eficiencia en la toma de decisiones y la consulta de datos. Además, asumí la capacitación de nuevos integrantes, fortaleciendo mis habilidades en liderazgo, comunicación, manejo de grupos y adaptación a diferentes entornos laborales.",
        logros: "LOGROS: Durante mi etapa como auxiliar administrativo, la implementación de macros y flujos de trabajo permitió un desarrollo más eficiente en el área de despacho, logrando una base de datos más limpia y una gestión de eventos y asignación de personal más dinámica. Por otro lado, después de mi salida continué colaborando, aportando mis conocimientos en el desarrollo de la página web de la organización.",
        fotos: ["work/img/fiestas2.png","work/img/fiestas3.png"]
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
            swiper.autoplay.stop();
        }, 400);
    });
});

document.getElementById("volver-historias").addEventListener("click",() => {
    const historias = document.getElementById("historias-container");
    const detalle = document.getElementById("detalle-experiencia");

    detalle.classList.remove("active");
    setTimeout(() => {

        historias.classList.remove("hidden");

        swiper.autoplay.start();
    }, 400);
});
//Efecto movil formacion academica
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".timeline-item");

  items.forEach(item => {
    const dot = item.querySelector(".timeline-dot");

    dot.addEventListener("click", () => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      } else {
        items.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
      }
    });
  });
});

//Efecto complementaria
var swipercertificaciones = new Swiper(".mySwiper", {
   slidesPerView: 3,
   spaceBetween: 20,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   breakpoints: {
     0: { slidesPerView: 1 },
     768: { slidesPerView: 2 },
     1024: { slidesPerView: 3 }
   }
});
//
const bubbleBtn = document.getElementById("bubble-btn");
const bubbleMenu = document.getElementById("bubble-menu");
const floatingBubble = document.getElementById("floating-bubble");
const contactSection = document.getElementById("contactame");

bubbleBtn.addEventListener("click", () => {
  bubbleMenu.classList.toggle("hidden");
});

window.addEventListener("scroll", () => {
  const sectionTop = contactSection.offsetTop;
  const sectionBottom = sectionTop + contactSection.offsetHeight;
  const scrollY = window.scrollY + window.innerHeight;

  if (window.scrollY + 100 >= sectionTop && window.scrollY <= sectionBottom) {
    floatingBubble.classList.add("hide");
  } else {
    floatingBubble.classList.remove("hide");
  }
});
