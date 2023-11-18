function sumar() {
  var numero1 = document.getElementById("num1").value;
  var numero2 = document.getElementById("num2").value;
  var resultado = parseInt(numero1) + parseInt(numero2);
  document.getElementById("resultado").innerHTML = resultado;
}

function resta() {
  var numero1 = document.getElementById("num3").value;
  var numero2 = document.getElementById("num4").value;
  var resultado1 = parseInt(numero1) - parseInt(numero2);
  document.getElementById("resultado1").innerHTML = resultado1;
}