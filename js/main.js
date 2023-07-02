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
      nuevomensaje = nuevomensaje.replace("Christian Jiménez C.", `<span class="dollar">Christian Jiménez C.</span>`);
      nuevomensaje = nuevomensaje.replace("/**", `<span class="comented">/**`, "*/", `*/</span>`);
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
  const texto2 = `$ Mi nombre es Christian Jiménez C.`;
  const texto3 = `$ /** --------------------- */`;
  const texto4 = `$ Me desempeño como Full Stack Javascript Developer.`;
  const texto5 = `$ A continuación, te invito a conocer más sobre mi y mis proyectos.`;
  let summartiempo = 0;
  frasesEscritas(summartiempo, texto1, "typed-1", 40);
  frasesEscritas((summartiempo += 2.5), texto2, "typed-2", 40, true, "typed-1");
  frasesEscritas((summartiempo += 2.5), texto3, "typed-3", 40, true, "typed-2");
  frasesEscritas((summartiempo += 2.5), texto4, "typed-4", 40, true, "typed-3");
  frasesEscritas((summartiempo += 3), texto5, "typed-5", 40, true, "typed-4");
  setTimeout(() => {
    agrandaPizarra();
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

const menuElegido = (botonElegido) => {
  const botonesMenuNav = document.querySelectorAll(".btn-menu-nav");
  botonesMenuNav.forEach((el) => {
    el.classList.remove("current");
  });
  botonElegido.classList.add("current");
};

const btnAcceder = document.querySelector("#btn-acceder");
btnAcceder.addEventListener("click", () => {
  showSegundo();
});

const btnServicios = document.querySelector("#btn-servicios");
btnServicios.addEventListener("click", () => {
  menuElegido(btnServicios);
  showQuinto(true);
  showCuarto(true);
  showTercero(true);
  showSegundo();
});

const btnPortafolio = document.querySelector("#btn-portafolio");
btnPortafolio.addEventListener("click", () => {
  menuElegido(btnPortafolio);
  showQuinto(true);
  showCuarto(true);
  showTercero();
});

const btnAbout = document.querySelector("#btn-about");
btnAbout.addEventListener("click", () => {
  menuElegido(btnAbout);
  showQuinto(true);
  showCuarto();
});

const btnContacto = document.querySelector("#btn-contacto");
btnContacto.addEventListener("click", () => {
  menuElegido(btnContacto);
  showQuinto();
});

function showNav() {
  gsap.timeline().to(`#section-nav`, {
    top: "0",
    duration: 1,
    ease: "back.inOut(1.7)",
    //onComplete: botonToggle(),
  });
}

function showSegundo(reverse = false) {
  if (reverse) {
  } else {
    let tl = gsap
      .timeline()
      .to(`#section-1`, {
        scale: "0.8",
        left: "0",
        duration: 1,
        ease: "power1.inOut",
      })
      .to(`#section-1`, {
        top: "-100vh",
        left: "0",
        duration: 1,
        ease: "back.inOut(4)",
        onComplete: showNav,
      });
  }
}

function showTercero(reverse = false) {
  if (reverse) {
    let tl = gsap
      .timeline()
      .to(`#section-3`, {
        scale: "0.8",
        duration: 0.5,
        ease: "power4.inOut",
        //onComplete: botonToggle(),
      })
      .to(`#section-3`, {
        left: "-100vw",
        duration: 0.5,
        ease: "power4.inOut",
        //onComplete: botonToggle(),
      });
  } else {
    let tl = gsap
      .timeline()
      .to(`#section-3`, {
        top: "0",
        left: "0",
        duration: 1,
        ease: "back.inOut(4)",
        //onComplete: botonToggle(),
      })
      .to(`#section-3`, {
        scale: "1",
        duration: 1,
        ease: "power1.inOut",
      });
  }
}

function showCuarto(reverse = false) {
  if (reverse) {
    let tl = gsap
      .timeline()
      .to(`#section-4`, {
        scale: "0.8",
        duration: 0.5,
        ease: "power4.inOut",
        //onComplete: botonToggle(),
      })
      .to(`#section-4`, {
        left: "100vw",
        duration: 0.5,
        ease: "power4.inOut",
        //onComplete: botonToggle(),
      });
  } else {
    let tl = gsap
      .timeline()
      .to(`#section-4`, {
        top: "0",
        left: "0",
        duration: 1,
        ease: "back.inOut(4)",
        //onComplete: botonToggle(),
      })
      .to(`#section-4`, {
        scale: "1",
        duration: 1,
        ease: "power1.inOut",
      });
  }
}

function showQuinto(reverse = false) {
  if (reverse) {
    let tl = gsap
      .timeline()
      .to(`#section-5`, {
        scale: "0.8",
        duration: 0.5,
        ease: "power4.inOut",
        //onComplete: botonToggle(),
      })
      .to(`#section-5`, {
        top: "-100vh",
        duration: 0.5,
        ease: "power4.inOut",
        //onComplete: botonToggle(),
      });
  } else {
    let tl = gsap
      .timeline()
      .to(`#section-5`, {
        top: "0",
        left: "0",
        duration: 1,
        ease: "back.inOut(4)",
        onComplete: showRRSS,
      })
      .to(`#section-5`, {
        scale: "1",
        duration: 1,
        ease: "power1.inOut",
      });
  }
}

function agrandaPizarra() {
  let tl = gsap
    .timeline()
    .to(`#pizarra-codigo`, {
      height: gsap.getProperty("#pizarra-codigo", "height") + 70,
      duration: 0.5,
      ease: "power1.inOut",
    })
    .to(`#menu-botones-1`, {
      display: "flex",
      opacity: 1,
      duration: 0.5,
      ease: "power1.inOut",
    });
}

function showRRSS() {
  let tl = gsap.to(".item-rrss", {
    opacity: 1,
    top: "0",
    ease: "power1.inOut",
    //repeat: 2,
    //yoyo: true,
    delay: 1,
    stagger: {
      //grid: [7,15],
      from: 0,
      amount: 1,
    },
  });
}
