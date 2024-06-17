let x=0
let y=0
let spacing=50


function setup() {
//creo una tavola di grandezza adattabile alla finestra e scelgo colore espresso in RGB
  createCanvas(windowWidth, windowHeight);
background(242,197,29)}

function draw() {
// imposto la probabilità a 0.5 perciò avro il 50% di possibilità di ottenere il primo disegno e il secondo disegno (posso modificare questa impostazione in qualsiasi momento e aumentare o diminuire la probabilità di avere uno o l'altro)
  if(random(1)<0.5)   {   
    
//disegno la prima possibilità
  fill(83,43,97)
    ellipse(x,y,spacing)
    fill(163,124,124)
  ellipse(x,y,spacing/2)}
  
 else {
//disegno la seconda possibilità
     strokeWeight(1)
  fill(153,93,129)
    ellipse(x,y,spacing)
    fill(83,43,97)
    ellipse(x,y,spacing/2);
   fill(242,197,29)
   ellipse(x,y,spacing/4)
      }
  
  
x=x+spacing
if (x > width) { // se la x supera la larghezza del canvas
    x = 0; // resetta a 0 la x
    y = y + spacing; // e scendi y + spacing
  
}}