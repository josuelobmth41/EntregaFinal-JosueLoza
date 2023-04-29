const elegir = document.querySelector("#miContenedorDeHTML");

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
			<h2>?</h2>
			<button id="${carta.id}">Elegir</button>
	`;
  contenedor.appendChild(cartaHtml);
});

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
    console.log("¡Ganaste!");
  } else {
    cartaHtml.classList.add("fallado");
    numIntentos++;
    if (numIntentos === 2) {
      juegoTerminado = true;
      console.log("¡Perdiste! La carta mafioso era la número " + cartaMafioso.id);
      reiniciarJuego();
    }
  }
}

function reiniciarJuego() {
  numIntentos = 0;
  juegoTerminado = true;
  const cartasHtml = document.querySelectorAll(".carta");
  cartasHtml.forEach((cartaHtml) => {
    cartaHtml.classList.remove("acertado");
    cartaHtml.classList.remove("fallado");
  });
}




