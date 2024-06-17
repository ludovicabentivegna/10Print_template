let x = 0;
let y = 0;
let nero = 0;
let spacing = 100
;
function setup() {
//creo tavola di grandezza adattabile alla finestra
  createCanvas(windowWidth, windowHeight);
}

function draw() {
// imposto la probabilità a 0.5 perciò avro il 50% di possibilità di ottenere il primo disegno e il secondo disegno (posso modificare questa impostazione in qualsiasi momento e aumentare o diminuire la probabilità di avere uno o l'altro)
  if(random(1)<0.5)
  {
  //composizione colorata
  rectMode(CENTER);
  fill(255, 153, 200);
  rect(x, y, spacing);
  fill(255);
  rect(x, y, spacing*0.9, spacing*0.9);
  fill(252, 246, 189);
  rect(x, y, spacing*0.8, spacing*0.8);
  fill(255, 255, 255);
  rect(x, y, spacing*0.7, spacing*0.7);
  fill(208, 244, 222);
  rect(x, y, spacing*0.6, spacing*0.6);
  fill(255);
  rect(x, y, spacing/2, spacing/2);
  fill(169, 222, 249);
  rect(x, y, spacing*0.4, spacing*0.4);
  fill(255, 255, 255);

  rect(x, y, spacing*0.3,spacing*0.3);
  fill(228, 193, 249);
  rect(x, y, spacing*0.2, spacing*0.2);

  fill(255, 255, 255);
  rect(x, y, spacing/10, spacing/10);
  fill(1);
  rect(x, y, spacing*0.05, spacing*0.05);}
  
  
  else  {// composizione "grigia"
    rectMode(CENTER);
  fill(255);
  rect(x, y, spacing);
  fill(160,95,122);
  rect(x, y, spacing*0.9, spacing*0.9);
  fill(255);
  rect(x, y, spacing*0.8, spacing*0.8);
  fill(153,150,117);
  rect(x, y, spacing*0.7, spacing*0.7);
  fill(255);
  rect(x, y, spacing*0.6, spacing*0.6);
  fill(123,147,136);
  rect(x, y, spacing/2, spacing/2);
  fill(255);
  rect(x, y, spacing*0.4, spacing*0.4);
  fill(98,135,150);

  rect(x, y, spacing*0.3, spacing*0.3);
  fill(255);
  rect(x, y, spacing*0.2, spacing*0.2);

  fill(141,118,149);
  rect(x, y, spacing/10, spacing/10);
  fill(1);
    rect(x, y, spacing*0.05, spacing*0.05);
  }
  

  x = x + spacing;
  if (x > width) {
    // se la x supera la larghezza del canvas
    x = 0; // resetta a 0 la x
    y = y + spacing; // e scendi y + spacing
  }}
