const canva_left = document.getElementsByClassName("btn-left");
const canva_right = document.getElementsByClassName("btn-right");

const dif_left = canva_left.getBoundingClientRect();
const dif_right = canva_right.getBoundingClientRect();

const ctx_left = canva_left.getContext("2d");
const ctx_right = canva_right.getContext("2d");

// Flecha hacia la izquierda
ctx_left.beginPath();
ctx_left.moveTo(dif_left.left + dif_left.width, dif_left.top + dif_left.height / 2);
ctx_left.lineTo(dif_left.left, dif_left.top);
ctx_left.lineTo(dif_left.left, dif_left.top + dif_left.height);
ctx_left.strokeStyle = "blue"; // Color de la flecha
ctx_left.lineWidth = 2; // Grosor de la línea
ctx_left.stroke();

// Flecha hacia la derecha
ctx_right.beginPath();
ctx_right.moveTo(dif_right.left, dif_right.top + dif_right.height / 2);
ctx_right.lineTo(dif_right.left + dif_right.width, dif_right.top);
ctx_right.lineTo(dif_right.left + dif_right.width, dif_right.top + dif_right.height);
ctx_right.strokeStyle = "red"; // Color de la flecha
ctx_right.lineWidth = 2; // Grosor de la línea
ctx_right.stroke();
