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
      //nuevomensaje = nuevomensaje.replace("-->", `<span class="dollar">--></span>`);
      nuevomensaje = nuevomensaje.replace("Full Stack Javascript Developer", `<span class="dollar">Full Stack Javascript Developer</span>`);
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
  const texto3 = `$ /** --------------------- */`;
  //const texto4 = `$`;
  const texto4 = `$ Me desempeño como Full Stack Javascript Developer.`;
  const texto5 = `$ A continuación, te invito a conocer más sobre mi y mis proyectos.`;
  let summartiempo = 0;
  frasesEscritas(summartiempo, texto1, "typed-1", 40);
  frasesEscritas((summartiempo += 2.5), texto2, "typed-2", 40, true, "typed-1");
  frasesEscritas((summartiempo += 2.5), texto3, "typed-3", 40, true, "typed-2");
  frasesEscritas((summartiempo += 2.5), texto4, "typed-4", 40, true, "typed-3");
  frasesEscritas((summartiempo += 3), texto5, "typed-5", 40, true, "typed-4");
  //  frasesEscritas((summartiempo += 3), texto6, "typed-6", 40, true, "typed-5");
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
    item.addEventListener("click", () => {
      const idSeccion = item.getAttribute("seccion");
      switch (idSeccion) {
        case "section-1":
          break;
        case "section-2":
          showSegundo();
          break;
        case "section-3":
          showTercero();
          break;
        case "section-4":
          showCuarto();
          break;
        case "section-5":
          showQuinto();
          break;
      }
    });
  });
};

const botonToggle = () => {
  const menuToggle = document.querySelector(".toggle");
  const contenedorMenu = document.querySelector(".contenedor-menu");
  const nombreopcion = document.querySelector(".nombre-opcion");
  const menu = document.querySelector(".menu");
  menu.classList.toggle("active");
  contenedorMenu.classList.toggle("latido-1");
  nombreopcion.classList.toggle("oculto");
  menuToggle.classList.toggle("active");
};

const menuCircular = () => {
  const menuToggle = document.querySelector(".toggle");
  const divPizarra = document.getElementById("pizarra-codigo");
  const contenedorMenu = document.querySelector(".contenedor-menu");
  const nombreopcion = document.querySelector(".nombre-opcion");
  const menu = document.querySelector(".menu");
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    contenedorMenu.classList.toggle("latido-1");
    nombreopcion.classList.toggle("oculto");
    divPizarra.classList.toggle("blurreado");
    divPizarra.classList.toggle("no-blurreado");
    menuToggle.classList.toggle("active");
  });
  botonElegido();
};

/*
// Create a timeline
const tl1 = gsap
  .timeline({
    delay: 5,
    defaults: {
      duration: 2,
      ease: "power2.inOut",
    },
    smoothChildTiming: true,
    //autoRemoveChildren: true,
  })
  .to(".setcion-1", {
    top: "-100vh", // any properties (not limited to CSS)
  })
  .addLabel("toSection-2")
  .to(".setcion-2", {
    top: "-100vh", // any properties (not limited to CSS)
  })
  .addLabel("toSection-3")
  .to(".setcion-3", {
    top: "-100vh", // any properties (not limited to CSS)
  })
  .addLabel("toSection-4")
  .to(".setcion-4", {
    top: "-100vh", // any properties (not limited to CSS)
  })
  .addLabel("toSection-5");
  */

function showSegundo() {
  gsap
    .timeline()
    .to(`#section-5`, {
      top: "-100vh",
      left: "0",
      duration: 0.1,
      ease: "power1.inOut",
    })
    .to(`#section-4`, {
      top: "0",
      left: "100vw",
      duration: 0.1,
      ease: "power1.inOut",
    })
    .to(`#section-3`, {
      top: "0",
      left: "-100vw",
      duration: 0.1,
      ease: "power1.inOut",
    })
    .to(`#section-2`, {
      top: "0",
      left: "0",
      duration: 2,
      ease: "back.inOut(1)",
      onComplete: botonToggle(),
    });
}

function showTercero() {
  gsap
    .timeline()
    .to(`#section-5`, {
      top: "-100vh",
      left: "0",
      duration: 0.1,
      ease: "power1.inOut",
    })
    .to(`#section-4`, {
      top: "0",
      left: "100vw",
      duration: 0.1,
      ease: "power1.inOut",
    })
    .to(`#section-3`, {
      top: "0",
      left: "0",
      duration: 2,
      ease: "back.inOut(1)",
      onComplete: botonToggle(),
    });
}

function showCuarto() {
  gsap
    .timeline()
    .to(`#section-5`, {
      top: "-100vh",
      left: "0",
      duration: 0.1,
      ease: "power1.inOut",
    })
    .to(`#section-4`, {
      top: "0",
      left: "0",
      duration: 2,
      ease: "back.inOut(1)",
      onComplete: botonToggle(),
    });
}

function showQuinto() {
  gsap.timeline().to(`#section-5`, {
    top: "0",
    left: "0",
    duration: 2,
    ease: "back.inOut(1)",
    onComplete: botonToggle(),
  });
  const menuToggle = document.querySelector(".toggle");
  menuToggle.click;
}
