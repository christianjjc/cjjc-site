let GLB_SW_MENSAJES_SERVICIOS = false;
const GLB_ANCHO_VIEWPORT = window.innerWidth;
let sw = true;
let textoescribir = "";
let i = 0;
let contador_mensajes = 0;
let contadorseundos = 0;

function iniciaPagina() {
  const divPrecarga = document.getElementById("precarga");
  setTimeout(() => {
    divPrecarga.classList.add("oculto");
    showProfileCard();
  }, 5500);
}

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

const btnAbout = document.querySelector("#btn-about");
btnAbout.addEventListener("click", () => {
  menuElegido(btnAbout);
  showQuinto(true);
  showCuarto(true);
  showTercero(true);
  showSegundo();
});

const btnServicios = document.querySelector("#btn-servicios");
btnServicios.addEventListener("click", () => {
  menuElegido(btnServicios);
  showQuinto(true);
  showCuarto(true);
  showTercero();
});

const btnPortafolio = document.querySelector("#btn-portafolio");
btnPortafolio.addEventListener("click", () => {
  menuElegido(btnPortafolio);
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
    delay: 0.2,
    duration: 1,
    ease: "back.inOut(4)",
  });
}

function showProfileCard() {
  gsap.timeline().to(`.contenedor-card`, {
    top: "50%",
    duration: 2,
    ease: "back.inOut(2)",
    onComplete: puntosGsap,
    flipProfileCard,
  });
}

function flipProfileCard() {
  let delay_ = 5;
  let tl1 = gsap
    .timeline({
      paused: true,
      duration: 0.1,
      delay: delay_,
    })
    .to(`.card-front`, {
      rotateX: "-180deg",
      ease: "power2.in",
    });
  let tl2 = gsap
    .timeline({
      paused: true,
      duration: 0.1,
      delay: delay_,
    })
    .to(`.card-back`, {
      rotateX: "0deg",
      ease: "power2.in",
    });
  if (GLB_ANCHO_VIEWPORT <= 1024) {
    tl1.play();
    tl2.play();
  }
}

function puntosGsap() {
  gsap.timeline().to(`.puntos-gsap`, {
    opacity: 1,
    ease: "power1.in",
    stagger: {
      amount: 1.5,
    },
    repeat: 4,
  });
}

function showSegundo(reverse = false) {
  if (reverse) {
  } else {
    let tl = gsap
      .timeline()
      .to(`#section-1`, {
        scale: "0.9",
        left: "0",
        duration: 0.75,
        ease: "power1.inOut",
      })
      .to(`#section-1`, {
        top: "-100vh",
        duration: 0.5,
        ease: "back.inOut(2)",
        onComplete: showNav,
        fondoAboutGsap,
      });
  }
}

function showTercero(reverse = false) {
  if (reverse) {
    let tl = gsap
      .timeline()
      .to(`#section-3`, {
        scale: "0.9",
        duration: 0.75,
        ease: "power4.inOut",
      })
      .to(`#section-3`, {
        left: "-100vw",
        duration: 0.5,
        ease: "power4.inOut",
      });
  } else {
    let tl = gsap
      .timeline()
      .to(`#section-3`, {
        top: "0",
        left: "0",
        duration: 0.5,
        ease: "back.inOut(2)",
      })
      .to(`#section-3`, {
        scale: "1",
        duration: 0.75,
        ease: "power1.inOut",
        onComplete: showServiciosText,
      });
  }
}

function showCuarto(reverse = false) {
  if (reverse) {
    let tl = gsap
      .timeline()
      .to(`#section-4`, {
        scale: "0.9",
        duration: 0.75,
        ease: "power4.inOut",
      })
      .to(`#section-4`, {
        left: "100vw",
        duration: 0.5,
        ease: "power4.inOut",
      });
  } else {
    let tl = gsap
      .timeline()
      .to(`#section-4`, {
        top: "0",
        left: "0",
        duration: 0.5,
        ease: "back.inOut(2)",
      })
      .to(`#section-4`, {
        scale: "1",
        duration: 0.75,
        ease: "power1.inOut",
      });
  }
}

function showQuinto(reverse = false) {
  if (reverse) {
    let tl = gsap
      .timeline()
      .to(`#section-5`, {
        scale: "0.9",
        duration: 0.75,
        ease: "power4.inOut",
      })
      .to(`#section-5`, {
        top: "-100vh",
        duration: 0.5,
        ease: "power4.inOut",
      });
  } else {
    let tl = gsap
      .timeline()
      .to(`#section-5`, {
        top: "0",
        left: "0",
        duration: 0.5,
        ease: "back.inOut(2)",
        onComplete: showRRSS,
      })
      .to(`#section-5`, {
        scale: "1",
        duration: 0.75,
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
  let tl = gsap.timeline().to(".item-rrss", {
    opacity: 1,
    top: "0",
    ease: "power1.inOut",
    //repeat: 2,
    //yoyo: true,
    delay: 2,
    stagger: {
      //grid: [7,15],
      from: 0,
      amount: 1,
    },
  });
}

function showServiciosText() {
  if (!GLB_SW_MENSAJES_SERVICIOS) {
    let tl = gsap
      .timeline()
      .to(`.txt-servicios-pregunta`, {
        scale: "1",
        opacity: 1,
        duration: 0.7,
        delay: 0.3,
        ease: "power1.inOut",
      })
      .to(`.txt-servicios-pregunta`, {
        opacity: 0,
        duration: 0.3,
        delay: 2,
        ease: "power1.inOut",
        onComplete: showServiciosTextRandom,
      });
    GLB_SW_MENSAJES_SERVICIOS = true;
  }
}

function showServiciosTextRandom() {
  const divTextos = document.querySelectorAll(".txt-show-random");
  const de = 0.2;
  const ds = 0.5;
  let tl = gsap
    .timeline({
      defaults: {
        //duration: 0.5,
        ease: "power1.inOut",
      },
    })
    .to(`#${divTextos[0].id}`, { duration: de, scale: 1, opacity: 1 })
    .to(`#${divTextos[0].id}`, { duration: ds, opacity: 0 })
    .to(`#${divTextos[1].id}`, { duration: de, scale: 1, opacity: 1 })
    .to(`#${divTextos[1].id}`, { duration: ds, opacity: 0 })
    .to(`#${divTextos[2].id}`, { duration: de, scale: 1, opacity: 1 })
    .to(`#${divTextos[2].id}`, { duration: ds, opacity: 0 })
    .to(`#${divTextos[3].id}`, { duration: de, scale: 1, opacity: 1 })
    .to(`#${divTextos[3].id}`, { duration: ds, opacity: 0 })
    .to(`#${divTextos[4].id}`, { duration: de, scale: 1, opacity: 1 })
    .to(`#${divTextos[4].id}`, { duration: ds, opacity: 0 })
    .to(`#${divTextos[5].id}`, { duration: de, scale: 1, opacity: 1 })
    .to(`#${divTextos[5].id}`, { duration: ds, opacity: 0 })
    .to(`#${divTextos[6].id}`, { duration: de, scale: 1, opacity: 1 })
    .to(`#${divTextos[6].id}`, { duration: ds, opacity: 0 })
    .to(`#${divTextos[7].id}`, { duration: de, scale: 1, opacity: 1 })
    .to(`#${divTextos[7].id}`, { duration: ds, opacity: 0 })
    .to(`#${divTextos[8].id}`, { duration: de, scale: 1, opacity: 1 })
    .to(`#${divTextos[8].id}`, { duration: ds, opacity: 0, onComplete: showServiciosTextRandom2 });
}

function showServiciosTextRandom2() {
  const divTextos = document.querySelectorAll(".txt-show-random");
  let tl = gsap
    .timeline({
      defaults: { duration: 0.4 },
    })
    .to(`#${divTextos[0].id}`, { opacity: 1 })
    .to(`#${divTextos[0].id}`, { opacity: 0 })
    .to(`#${divTextos[1].id}`, { opacity: 1 })
    .to(`#${divTextos[1].id}`, { opacity: 0 })
    .to(`#${divTextos[2].id}`, { opacity: 1 })
    .to(`#${divTextos[2].id}`, { opacity: 0 })
    .to(`#${divTextos[3].id}`, { opacity: 1 })
    .to(`#${divTextos[3].id}`, { opacity: 0 })
    .to(`#${divTextos[4].id}`, { opacity: 1 })
    .to(`#${divTextos[4].id}`, { opacity: 0 })
    .to(`#${divTextos[5].id}`, { opacity: 1 })
    .to(`#${divTextos[5].id}`, { opacity: 0 })
    .to(`#${divTextos[6].id}`, { opacity: 1 })
    .to(`#${divTextos[6].id}`, { opacity: 0 })
    .to(`#${divTextos[7].id}`, { opacity: 1 })
    .to(`#${divTextos[7].id}`, { opacity: 0 })
    .to(`#${divTextos[8].id}`, { opacity: 1 })
    .to(`#${divTextos[8].id}`, { opacity: 0, onComplete: showServiciosTextRandom3 })
    .timeScale(6);
}

function showServiciosTextRandom3() {
  const divTextos = document.querySelectorAll(".txt-show-random");
  let tl = gsap
    .timeline({
      repeat: 4,
      defaults: { duration: 0.1 },
    })
    .to(`#${divTextos[0].id}`, { opacity: 1 })
    .to(`#${divTextos[0].id}`, { opacity: 0 })
    .to(`#${divTextos[1].id}`, { opacity: 1 })
    .to(`#${divTextos[1].id}`, { opacity: 0 })
    .to(`#${divTextos[2].id}`, { opacity: 1 })
    .to(`#${divTextos[2].id}`, { opacity: 0 })
    .to(`#${divTextos[3].id}`, { opacity: 1 })
    .to(`#${divTextos[3].id}`, { opacity: 0 })
    .to(`#${divTextos[4].id}`, { opacity: 1 })
    .to(`#${divTextos[4].id}`, { opacity: 0 })
    .to(`#${divTextos[5].id}`, { opacity: 1 })
    .to(`#${divTextos[5].id}`, { opacity: 0 })
    .to(`#${divTextos[6].id}`, { opacity: 1 })
    .to(`#${divTextos[6].id}`, { opacity: 0 })
    .to(`#${divTextos[7].id}`, { opacity: 1 })
    .to(`#${divTextos[7].id}`, { opacity: 0 })
    .to(`#${divTextos[8].id}`, { opacity: 1 })
    .to(`#${divTextos[8].id}`, { opacity: 0 })
    .timeScale(5);
  achicaDivContenedorMensajes();
}

function achicaDivContenedorMensajes() {
  let tl = gsap
    .timeline()
    .to(".contenedor-txt-mensajes-gsap", {
      borderRadius: "5%",
      border: "5",
      height: "0",
      width: "0",
      delay: 0.5,
      duration: 1,
      ease: "expo.in",
    })
    .to(".contenedor-txt-mensajes-gsap", {
      border: "0",
      ease: "expo.in",
      duration: 0.05,
      onComplete: muestraCarouselServicios,
    });
}

function muestraCarouselServicios() {
  let pos_left = "";
  if (GLB_ANCHO_VIEWPORT <= 767) {
    pos_left = "5%";
  } else if (GLB_ANCHO_VIEWPORT <= 1024) {
    pos_left = "25%";
  } else if (GLB_ANCHO_VIEWPORT <= 1920) {
    pos_left = "50%";
  } else if (GLB_ANCHO_VIEWPORT <= 2560) {
    pos_left = "50%";
  } else if (GLB_ANCHO_VIEWPORT <= 3840) {
    pos_left = "60%";
  }
  let tl = gsap.timeline().to(".swiper-carousel-servicios-gsap", {
    left: `${pos_left}`,
    delay: 0.5,
    duration: 2,
    ease: "back.inOut(4)",
    //onComplete: generaSwiper,
  });
  generaSwiper();
}

function generaSwiper() {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    //init: false,
    direction: "horizontal",
    //slidesPerView: 3,
    loop: true,
    speed: 2000,
    simulateTouch: true,
    initialSlide: 0,
    autoplay: { delay: 3000 },
    //autoplay: true,
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      280: { slidesPerView: 1, spaceBetween: 25 },
      320: { slidesPerView: 1, spaceBetween: 25 },
      480: { slidesPerView: 1, spaceBetween: 25 },
      768: { slidesPerView: 2, spaceBetween: 25 },
      1024: { slidesPerView: 3, spaceBetween: 25 },
      1920: { slidesPerView: 3, spaceBetween: 25 },
      2560: { slidesPerView: 4, spaceBetween: 50 },
    },
    on: { realIndexChange: () => cambioSlide(swiper.realIndex), init: swiperIniciado },
    pagination: { el: ".swiper-pagination", clickable: true },
  });
}

function cambioSlide(i) {
  let tl = gsap
    .timeline({
      //paused: true,
      defaults: { duration: 1 },
    })
    .to(".ecran-slides-servicios-gsap", { opacity: 0, duration: 0.25, ease: "power4.in" })
    .set(".ecran-slides-servicios-gsap", { css: { backgroundImage: `url(./img/slide${i}.jpg)` } })
    .to(".ecran-slides-servicios-gsap", { opacity: 1, duration: 0.25, ease: "power4.out" });
}

function swiperIniciado() {
  cambioSlide(0);
}

function fondoAboutGsap(reverse = false) {
  CustomEase.create("custom", "M0,0,C0.172,0.352,0.04,0.65,0.144,0.804,0.248,0.958,0.42,0.952,1,1");
  if (reverse) {
  } else {
    let tl = gsap.timeline().to(`.fondo-about-gsap`, {
      delay: 1.5,
      top: "0",
      duration: 1,
      ease: "custom",
      onComplete: showProfileAbout,
    });
  }
}

//ease paralax
//CustomEase.create("custom", "M0,0,C0.172,0.352,0.04,0.65,0.144,0.804,0.248,0.958,0.42,0.952,1,1");

function showProfileAbout() {
  let top_ = 0;
  if (GLB_ANCHO_VIEWPORT < 768) {
    top_ = "270";
  } else {
    top_ = "210";
  }
  let tl1 = gsap.timeline().to(".contenedor-profile-card-gsap", {
    opacity: 1,
    duration: 2,
    ease: "power1.inOut",
    //onComplete: none,
  });
  let tl2 = gsap
    .timeline()
    .to(".contenedor-profile-card-gsap", {
      top: "10%",
      duration: 1,
      ease: "back.inOut(1)",
      //onComplete: none,
    })
    .to(".cuadrado-rotado", {
      left: "-100%;",
      duration: 1,
      ease: "back.inOut(2)",
      //onComplete: none,
    });
  let tl3 = gsap.timeline().to(".badgescard-gsap", {
    //bottom: "-120",
    top: top_,
    delay: 0.2,
    duration: 1,
    ease: "back.inOut(4)",
    //onComplete: none,
  });
}
