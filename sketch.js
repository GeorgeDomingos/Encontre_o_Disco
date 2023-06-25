
let personagem;
let vitrola;
let piso;
let final;
let modulo = 64;
let andarX = 0;
let andarY = 0;
let restart;



function setup() {
  createCanvas(576, 576);
  personagem = loadImage ('Djavan.png');
  vitrola= loadImage ('Vitrola.png');
  piso= loadImage ('piso.jpg');
  final = loadImage('Djavan_capa.jpg')
  background(220);


}

function draw() {
  if(andarX < 0){
    andarX=0
  }
  if(andarX > 512){
    andarX=modulo*8
  }
  if(andarY < 0){
    andarY=0
   }
  if(andarY > 512){
    andarY=modulo*8}
  
  for (let i=0; i<9; i++){
    for(let j=0; j<9; j++){
      image(piso, modulo*i, modulo*j, 64,64)
    
    }
  }  
  image(vitrola,modulo*8,modulo*8,54,54)
  image(personagem,andarX,andarY,64,64)
  
  if(andarX===modulo*8 && andarY===modulo*8){
    noStroke();
    fill(240, 240, 244);
    rect(modulo*2,modulo*2,modulo*5,modulo*5);
    image(final, modulo*2.75,modulo*3, modulo*3.5,modulo*3.5)
    textSize(25);
    fill(0);
    textSize(18)
    textAlign(CENTER);
    text('Djavan encontrou um disco!', modulo*4.5, modulo*2+35);
    
 
    restart = createButton('Reiniciar');
    restart.mousePressed(reset);
    noLoop();
    
    
  }
  
  
}

function reset(){
  andarX=0;
  andarY=0;
  restart.remove();
  loop();
}

function keyPressed() {
  if (keyIsDown(RIGHT_ARROW)){
    andarX+=modulo
}
   if (keyIsDown(DOWN_ARROW)){
    andarY+=modulo
}
  if (keyIsDown(LEFT_ARROW)){
    andarX-=modulo
}
    if (keyIsDown(UP_ARROW)){
    andarY-=modulo
}
}
