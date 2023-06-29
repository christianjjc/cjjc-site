let sw = true;
let textoescribir = "";
let i = 0;
let contador_mensajes = 0;
let contadorseundos = 0;
const escribirTexto = (texto, idEtiqueta, mls) => {
  const textoElemento = document.getElementById(idEtiqueta);
  const cantCar = texto.length;
  const intervaloCaracter = setInterval(() => {
    const caracter = texto.slice(i, i + 1);
    textoescribir += caracter;
    let nuevomensaje = textoescribir.replace("$", `<span class="dollar">$</span>`);
    textoElemento.innerHTML = nuevomensaje;
    i++;
    if (i == cantCar) {
      clearInterval(intervaloCaracter);
      nuevomensaje = nuevomensaje.replace("/**", `<span class="comented">/**`, "*/", `*/</span>`);
      nuevomensaje = nuevomensaje.replace("-->", `<span class="flecha">--></span>`);
      textoElemento.innerHTML = nuevomensaje;
      i = 0;
      textoescribir = "";
    }
  }, mls);
};

const frasesEscritas = (cadaXsegundos, texto1, idEtiquetaNueva, mls, cursor = false, idEtiquetaAnt = "") => {
  const contenedor = document.getElementById("contenedor-mensajes");
  code = document.createElement("code");
  code.setAttribute("id", idEtiquetaNueva);
  contador_mensajes == 0 && code.classList.add("typed");
  contenedor.appendChild(code);
  setTimeout(() => {
    if (cursor) {
      if (contador_mensajes > 0) {
        const txtsale = document.getElementById(idEtiquetaAnt);
        txtsale.classList.remove("typed");
        const txtentra = document.getElementById(idEtiquetaNueva);
        txtentra.classList.add("typed");
      }
    }
    escribirTexto(texto1, idEtiquetaNueva, mls);
  }, cadaXsegundos * 1000);
  contador_mensajes++;
};

function cargaMensajes() {
  const texto1 = `$ ¡Hola! Bienvenido a mi Web Site. `;
  const texto2 = `$ Mi nombre es Christian Jiménez.`;
  const texto3 = `$ Soy Desarrollador Web Full Stack y también soy Diseñador Gráfico.`;
  const texto4 = `$`;
  const texto5 = `$ /** --------------------- */`;
  const texto6 = `$ A continuación, te invito a conocer más sobre mi y mis proyectos.`;
  let summartiempo = 0;
  frasesEscritas(summartiempo, texto1, "typed-1", 40);
  frasesEscritas((summartiempo += 2.5), texto2, "typed-2", 40, true, "typed-1");
  frasesEscritas((summartiempo += 3), texto3, "typed-3", 40, true, "typed-2");
  frasesEscritas((summartiempo += 4), texto4, "typed-4", 1, true, "typed-3");
  frasesEscritas((summartiempo += 0.3), texto5, "typed-5", 1, true, "typed-4");
  frasesEscritas((summartiempo += 0.8), texto6, "typed-6", 40, true, "typed-5");
  setTimeout(() => {
    const contenedorMenu = document.querySelector(".contenedor-menu");
    contenedorMenu.classList.toggle("oculto");
    menuCircular();
  }, (summartiempo + 4) * 1000);
}

const iniciaPagina = () => {
  const divBotonera = document.querySelector("#botonera");
  const divPizarra = document.getElementById("pizarra-codigo");
  const divPrecarga = document.getElementById("precarga");

  setTimeout(() => {
    divPrecarga.classList.add("oculto");
  }, 5500);

  setTimeout(() => {
    divPizarra.classList.add("pizarra-animate--height");
    divPizarra.classList.add("pizarra-codigo--estilos");
    divBotonera.classList.toggle("oculto");
  }, 6000);

  setTimeout(() => {
    cargaMensajes();
  }, 7000);

  setTimeout(() => {
    divPizarra.classList.remove("pizarra-animate--height");
    divPizarra.classList.add("height-auto");
  }, 8000);
};

iniciaPagina();

const botonElegido = () => {
  const list = document.querySelectorAll("li");
  const textoMostrar = document.querySelector("#titulo-elegido");
  const activeLink = (id) => {
    list.forEach((item) => {
      item.classList.remove("active");
    });
    document.getElementById(id).classList.add("active");
  };
  list.forEach((item) => {
    item.addEventListener("mouseover", () => {
      activeLink(item.id);
      textoMostrar.innerHTML = item.getAttribute("text-value");
    });
  });
};

const menuCircular = () => {
  const divPizarra = document.getElementById("pizarra-codigo");
  const contenedorMenu = document.querySelector(".contenedor-menu");
  const nombreopcion = document.querySelector(".nombre-opcion");
  const menuToggle = document.querySelector(".toggle");
  const menu = document.querySelector(".menu");
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuToggle.classList.toggle("active");
    contenedorMenu.classList.toggle("latido-1");
    nombreopcion.classList.toggle("oculto");
    divPizarra.classList.toggle("blurreado");
    divPizarra.classList.toggle("no-blurreado");
  });
  botonElegido();
};
