// Functie om een rechthoek te tekenen met opgegeven positie, breedte, hoogte en kleur
function drawRect(ctx, x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

// Functie om een dynamische equalizer te tekenen met kleurovergang
function drawEqualizer(ctx, x, y, width, height, numBars, barSpacing, startColor, endColor) {
    // Bereken de breedte van elke balk
    const barWidth = (width - (numBars - 1) * barSpacing) / numBars;

    // Bereken kleurovergang tussen start- en eindkleur
    const gradient = ctx.createLinearGradient(x, y, x + width, y);
    gradient.addColorStop(0, startColor);
    gradient.addColorStop(1, endColor);

    // Loop door elke balk en teken deze met een willekeurige hoogte
    for (let i = 0; i < numBars; i++) {
        // Bereken de x-positie van de huidige balk
        const xPos = x + i * (barWidth + barSpacing);

        // Genereer een willekeurige hoogte voor de balk binnen het opgegeven bereik
        const barHeight = Math.random() * height;

        // Teken de huidige balk met kleurovergang
        ctx.fillStyle = gradient;
        ctx.fillRect(xPos, y + (height - barHeight), barWidth, barHeight);
    }
}

// Functie om een willekeurige hexadecimale kleur te genereren
function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// Functie om het T-shirt te tekenen
function drawTshirt() {
    // Verkrijg de canvas en context
    const canvas = document.getElementById('tshirtCanvas');
    const ctx = canvas.getContext('2d');

    // Wis de canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Teken de equalizers
    const equalizerX = 50;
    const equalizerY = 100;
    const equalizerWidth = 300;
    const equalizerHeight = 40;
    const numEqualizers = 8; // Aantal equalizers
    const equalizerSpacing = 10;

    // Genereer start- en eindkleuren voor de kleurovergang
    const startColor = randomColor();
    const endColor = randomColor();

    for (let i = 0; i < numEqualizers; i++) {
        drawEqualizer(ctx, equalizerX, equalizerY + i * (equalizerHeight + equalizerSpacing), equalizerWidth, equalizerHeight, 10, 5, startColor, endColor);
    }
}

// Roep de functie aan om het T-shirt te tekenen wanneer de pagina geladen is
window.onload = drawTshirt;
