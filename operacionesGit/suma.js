let n1=prompt("ingrese el primer número de la suma")
let n2=prompt("ingrese el segundo número de la suma")

let suma = n1+n2

const button = document.querySelector("button");

button.onclick = function () {
  alert("¡Hola , el resultado de la suma es:" + suma);
};