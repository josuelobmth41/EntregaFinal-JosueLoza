const cartas = ["Mafioso", "Ciudadano", "Policia", "Medico"];

function cartasMezclar(array) {
    return array.sort(() => Math.random() - 0.5)
};

console.log(cartasMezclar(cartas));


