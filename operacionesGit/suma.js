function sumar() {
  var numero1 = document.getElementById("num1").value;
  var numero2 = document.getElementById("num2").value;
  var resultado = parseInt(numero1) + parseInt(numero2);
  document.getElementById("resultado").innerHTML = resultado;
}