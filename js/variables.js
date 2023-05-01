const elegir = document.querySelector("#miContenedorDeHTML");

const botonReiniciar = document.getElementById("reiniciar");

function reiniciando () {
  let timerInterval
Swal.fire({
  title: 'Auto close alert!',
  html: 'I will close in <b></b> milliseconds.',
  timer: 5000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
}


const cartas = [
  { id: 1, personaje: "Mafioso" },
  { id: 2, personaje: "Ciudadano" },
  { id: 3, personaje: "Policia" },
  { id: 4, personaje: "Medico" },
];

const contenedor = document.getElementById("miContenedorDeHTML");

cartas.forEach((carta) => {
  const cartaHtml = document.createElement("div");

  cartaHtml.classList.add("carta");

  cartaHtml.innerHTML = `
			<button id="${carta.id}" class="carta-button">❓</button>
	`;
  contenedor.appendChild(cartaHtml);
});

function alertaEncontrar() {
  Swal.fire(
    'Lo Encontraste !',
    'Puedes volver a intentarlo, Presiona el boton, Reiniciar juego',
    'éxito'
  )
}

function alertaPerdiste () {
  Swal.fire(
    'Se Escapó !',
    'Puedes volver a intentarlo, Presiona el boton, Reiniciar juego',
    'error'
  )
}

function cartasMezclar(array) {
  return array.sort(() => Math.random() - 0.5);
}

let numIntentos = 0;
let juegoTerminado = false;
const cartaMafioso = cartas[Math.floor(Math.random() * cartas.length)];

elegir.addEventListener("click", elegirCarta);

function elegirCarta(event) {


  if (juegoTerminado) {
    return;
  }

  const boton = event.target;

  if (boton.tagName.toLowerCase() !== "button") {
    return;
  }

  const cartaHtml = boton.parentElement;
  const cartaId = parseInt(boton.id);

  if (cartaId === cartaMafioso.id) {
    cartaHtml.classList.add("acertado");
    juegoTerminado = true;
    alertaEncontrar ()
    console.log("¡Ganaste!");
  } else {
    cartaHtml.classList.add("fallado");
    numIntentos++;
    if (numIntentos === 2) {
      juegoTerminado = true;
      console.log("¡Perdiste! La carta mafioso era la número " + cartaMafioso.id);
      alertaPerdiste()
    }
  }
}

localStorage.setItem("cartas", JSON.stringify(cartas));

const cartasEnLS = JSON.parse(localStorage.getItem("cartas"));


/*function reiniciarJuego() {
  console.log("reiniciando")
  numIntentos = 0;
  juegoTerminado = true;
  const cartasHtml = document.querySelectorAll(".carta");
  cartasHtml.forEach((cartaHtml) => {
    cartaHtml.classList.remove("acertado");
    cartaHtml.classList.remove("fallado");
  });
}*/

botonReiniciar.addEventListener("click", function() {
  location.reload(reiniciando());
  
});




