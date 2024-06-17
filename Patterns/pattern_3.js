let x=0
let y=0
let spacing=70

function setup() {
  //creo tavola di grandezza adattabile alla finestra e scelgo colore, in questo caso bianco=255
  createCanvas(windowWidth, windowHeight);
   background(255);
}

function draw() {
  // imposto la probabilità a 0.5 perciò avro il 50% di possibilità di ottenere il primo disegno e il secondo disegno (posso modificare questa impostazione in qualsiasi momento e aumentare o diminuire la probabilità di avere uno o l'altro)
  if(random(1)<0.5){
//disegno prima possibilità
  fill(1)
  triangle(x,y,x,y+spacing,x+spacing/2,y+spacing/2)
triangle(x+spacing,y,x+spacing,y+spacing,x+spacing/2,y+spacing/2)
    
}else {
//disegno seconda possibilità
  fill(1)
  triangle(x,y,x+spacing,y,x+spacing/2,y+spacing/2)
  triangle(x,y+spacing,x+spacing,y+spacing,x+spacing/2,y+spacing/2)}
  
  x=x+spacing
   if (x > width) { // se la x supera la larghezza del canvas
    x = 0; // resetta a 0 la x
    y = y + spacing; // e scendi y + spacing
}}