function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
let cursorTrail = []; // Almacenar la estela del cursor
let tarea1Link = "https://wiki.ead.pucv.cl/Javiera_Iturrieta:_Sitio_Web_IE_2023"; // Enlace para la tarea 1
let tarea1Hover = false; // Variable para detectar si el cursor está sobre "Tarea 1"

function setup() {
  createCanvas(800, 600); // Tamaño del lienzo

  // Definir colores para el degradado
  let color1 = color(255, 207, 227); // Rosa pastel
  let color2 = color(200, 162, 200); // Violeta pastel

  // Crear degradado de fondo
  for (let y = 0; y <= height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(color1, color2, inter);
    stroke(c);
    line(0, y, width, y);
  }

  noCursor(); // Ocultar el cursor predeterminado
}

function draw() {
  // Actualizar la estela del cursor
  cursorTrail.push({ x: mouseX, y: mouseY });
  if (cursorTrail.length > 20) {
    cursorTrail.shift();
  }

  // Dibujar el fondo de degradado nuevamente
  for (let y = 0; y <= height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(color(255, 207, 227), color(200, 162, 200), inter);
    stroke(c);
    line(0, y, width, y);
  }

  // Dibujar la estela del cursor
  noFill();
  stroke(255, 0, 150, 100); // Magenta con transparencia
  for (let i = 0; i < cursorTrail.length; i++) {
    ellipse(cursorTrail[i].x, cursorTrail[i].y, 10, 10);
  }

  // Dibujar el cursor
  noStroke();
  fill(255, 0, 150); // Magenta
  ellipse(mouseX, mouseY, 10, 10);

  // Mostrar el texto "Hola, bienvenidos a mi portafolio" en todo momento
  fill(0); // Color del texto (negro)
  textSize(20); // Tamaño del texto
  textStyle(ITALIC); // Estilo del texto (delgado)
  textAlign(CENTER, CENTER); // Alineación del texto
  text("Hola, bienvenidos a mi portafolio\nIE 2023", width / 2, height / 2);

  // Verificar si el cursor está sobre el texto "Tarea 1"
  let tarea1TextX = 20;
  let tarea1TextY = height / 2 + 30; // Ligeramente debajo del texto anterior
  let tarea1TextSize = 14;
  let tarea1TextHover = mouseX > tarea1TextX && mouseX < tarea1TextX + textWidth("Tarea 1") && mouseY > tarea1TextY - tarea1TextSize / 2 && mouseY < tarea1TextY + tarea1TextSize / 2;

  // Cambiar el estilo del texto "Tarea 1" cuando el cursor está sobre él
  if (tarea1TextHover) {
    fill(255); // Blanco
    cursor(HAND); // Cambiar el cursor a una mano
  } else {
    fill(0); // Negro
    cursor(ARROW); // Cambiar el cursor a flecha
  }

  // Mostrar el texto "Tarea 1" y establecer enlace cuando se hace clic
  textSize(tarea1TextSize);
  textStyle(ITALIC);
  textAlign(LEFT, CENTER);
  text("Tarea 1", tarea1TextX, tarea1TextY);
  
  // Si se hace clic en "Tarea 1", abrir el enlace
  if (mouseIsPressed && tarea1TextHover) {
    window.open(tarea1Link, "_blank");
  }
}
