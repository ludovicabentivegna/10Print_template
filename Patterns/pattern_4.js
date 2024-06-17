let x=0 // presente in ogni coordinata, permette di considerare il disegno un unico blocco 
let y=0
let a = 15; // distanza dal bordo e tra le linee
let b = a;
let spacing = a*10; // lunghezza della linea più lunga
let nero = 0;
let bianco = 255;
//poichè ho impostato tutta la programmazione sulla variabile a se modifico questa il disegno mantiene le proporzioni

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(bianco);
}

function draw() {
strokeWeight(a/10)
  // imposto la probabilità a 0.5 perciò avro il 50% di possibilità di ottenere il primo disegno e il secondo disegno (posso modificare questa impostazione in qualsiasi momento e aumentare o diminuire la probabilità di avere uno o l'altro)
  
  if(random(1)<0.5){// figura 1 (orizzontale)
    line(x+a,y+b, x+spacing,y+b);//linee orizzontali sopra
    line(x+a*2,y+spacing/5,x+spacing,y+spacing/5);
    line(x+a*3,y+spacing*0.3,x+spacing,y+spacing*0.3);
    line(x+a,y+b, x+a,y+spacing/2);//linee verticali sopra
    line(x+spacing/5,y+b*2, x+spacing/5,y+spacing/2);
    line(x+spacing*0.3,y+b*3, x+spacing*0.3,y+spacing/2);
  
  line (x+a,y+spacing*0.6,x+a*8,y+spacing*0.6)//linee orizzontali sotto
  line (x+a,y+spacing*0.7,x+a*9,y+spacing*0.7)
  line (x+a,y+spacing*0.8,x+spacing,y+spacing*0.8)
    line(x+spacing,y+b*8, x+spacing,y+spacing*0.4);//linee verticali sotto
    line(x+a*9,y+b*7,x+a*9,y+spacing*0.4);
    line(x+a*8,y+b*6, x+a*8,y+spacing*0.4);
 
    rectMode(CENTER)
    fill(18,69,89)
   rect(x+a*5.5,y+b*4.5,a*2);


    
}else {
 
  //figura 2 (verticale)
   line(x+a,y+b, x+a,y+spacing*0.8);//linee verticali sinistra (lunghe)
    line(x+spacing/5,y+b,x+spacing/5,y+spacing*0.7);
    line(x+spacing*0.3,y+b, x+spacing*0.3,y+spacing*0.6);
  
  line (x+spacing*0.3,y+spacing*0.6,x+spacing/2,y+spacing*0.6)//linee orizzontali sotto 
  line (x+spacing*0.2,y+spacing*0.7,x+spacing/2,y+spacing*0.7)
  line (x+a,y+spacing*0.8,x+spacing/2,y+spacing*0.8)
  
    line(x+spacing,y+b, x+spacing,y+spacing*0.8);//linee verticali destra
    line(x+a*9,y+b*2,x+a*9,y+spacing*0.8);
    line(x+a*8,y+b*3, x+a*8,y+spacing*0.8);

  line (x+spacing*0.6,y+b,x+spacing,y+b)//linee orizzontali sopra
  line (x+spacing*0.6,y+b*2,x+spacing*0.9,y+b*2)
  line (x+spacing*0.6,y+b*3,x+spacing*0.8,y+b*3)
  
    rectMode(CENTER)
    fill(18,69,89)
   rect(x+a*5.5,y+b*4.5,a*3.5,a*1.75)
  rect(x+a*4.75,y+b*2,a*2);
rect(x+a*6.25,y+b*7,a*2);

} x=x+spacing
   if (x > width) { // se la x supera la larghezza del canvas
    x = 0; // resetta a 0 la x
    y = y + spacing/1.25; // e scendi y + spacing
}
  
 }

  

