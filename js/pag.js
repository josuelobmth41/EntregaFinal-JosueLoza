/*const elegir = document.querySelector ("#miContenedorDeHTML") 

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
            <h3>
	`
    contenedor.appendChild(cartaHtml);

});

function cartasMezclar(array) {
    return array.sort(() => Math.random() - 0.5)
};

elegir.addEventListener("click", elegirCarta);

function elegirCarta() {
    
    const index = Math.floor(Math.random() * cartas.length);

    
    const cartaSeleccionada = cartas[index];

    
    console.log(cartaSeleccionada.personaje);

    
}
*//











