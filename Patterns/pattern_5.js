let x = 0;
let y = 0;
let spacing = 75;
function setup() {
//creo tavola di grandezza adattabile alla finestra e scelgo il colore espresso in RGB
  createCanvas(windowWidth, windowHeight);
  background(255, 187, 20);
}

function draw() {
  noStroke();
// imposto la probabilità a 0.5 perciò avro il 50% di possibilità di ottenere il primo disegno e il secondo disegno (posso modificare questa impostazione in qualsiasi momento e aumentare o diminuire la probabilità di avere uno o l'altro)

  if (random(1) < 0.5) {
//disegno la prima possibilità
    fill(1);
    circle(x + spacing / 2, y + spacing / 2, spacing);
    fill(255);
    quad(x + spacing / 2,
      y,
      x + spacing,
      y + spacing / 2,
      x + spacing / 2,
      y + spacing,
      x,
      y + spacing / 2);
  } else {
//disegno la seconda possibilità
    fill(255);
    circle(x + spacing / 2, y + spacing / 2, spacing);
    fill(1);
    quad(
      x + spacing / 2,
      y,
      x + spacing,
      y + spacing / 2,
      x + spacing / 2,
      y + spacing,
      x,
      y + spacing / 2
    );
  }

  x = x + spacing;
  if (x > width) {
    // se la x supera la larghezza della tavola
    x = 0; // resetta a 0 la x
    y = y + spacing; // e scendi y + spacing
  }
}
