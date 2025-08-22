const header = document.getElementById("header");
const foto = document.getElementById("foto_perfil");
const nombre = document.getElementById("nombre");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const maxScroll = 600;
    const progress = Math.min(scrollY / maxScroll, 1);

    const headerHeight = 50 - (progress * 40);
    header.style.height = `${headerHeight}vh`;

    const fotoSize = 180 - (120 * progress);
    foto.style.width = `${fotoSize}px`;
    foto.style.height = `${fotoSize}px`;

    const fontSize = 2 -(0.8 *progress);
    nombre.style.fontSize = `${fontSize}rem`;

    if (progress >= 0.6){
        header.style.flexDirection = "row";
        header.style.justifyContent = "flex-start";
        header.style.alignItems = "center";
        nombre.style.marginTop = "0";
        nombre.style.marginLeft = "15px";
    }
    else{
        header.style.flexDirection = "column";
        header.style.justifyContent = "center";
        header.style.alignItems = "center";
        nombre.style.marginTop = "15px";
        nombre.style.marginLeft = "0";
    }
    

})