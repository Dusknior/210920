var operandoa;
var operandob;
var operacion;

function init() {
  var resultado = document.getElementById("resultado");
  var dot = document.getElementById("dot");
  var reset = document.getElementById("reset");
  var suma = document.getElementById("suma");
  var resta = document.getElementById("resta");
  var multiplicacion = document.getElementById("multiplicacion");
  var division = document.getElementById("division");
  var igual = document.getElementById("igual");
  var uno = document.getElementById("uno");
  var dos = document.getElementById("dos");
  var tres = document.getElementById("tres");
  var cuatro = document.getElementById("cuatro");
  var cinco = document.getElementById("cinco");
  var seis = document.getElementById("seis");
  var siete = document.getElementById("siete");
  var ocho = document.getElementById("ocho");
  var nueve = document.getElementById("nueve");
  var cero = document.getElementById("cero");
}

uno.onclick = function (e) {
  resultado.textContent = resultado.textContent + uno.textContent;
  proceso.textContent =
    proceso.textContent + "1" + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
};
dos.onclick = function (e) {
  resultado.textContent = resultado.textContent + dos.textContent;
  proceso.textContent =
    proceso.textContent + "2" + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
};
tres.onclick = function (e) {
  resultado.textContent = resultado.textContent + tres.textContent;
  proceso.textContent =
    proceso.textContent + "3" + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
};
cuatro.onclick = function (e) {
  resultado.textContent = resultado.textContent + cuatro.textContent;
  proceso.textContent =
    proceso.textContent + "4" + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
};
cinco.onclick = function (e) {
  resultado.textContent = resultado.textContent + cinco.textContent;
  proceso.textContent =
    proceso.textContent + "5" + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
};
seis.onclick = function (e) {
  resultado.textContent = resultado.textContent + seis.textContent;
  proceso.textContent =
    proceso.textContent + "6" + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
};
siete.onclick = function (e) {
  resultado.textContent = resultado.textContent + siete.textContent;
  proceso.textContent =
    proceso.textContent + "7" + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
};
ocho.onclick = function (e) {
  resultado.textContent = resultado.textContent + ocho.textContent;
  proceso.textContent =
    proceso.textContent + "8" + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
};
nueve.onclick = function (e) {
  resultado.textContent = resultado.textContent + nueve.textContent;
  proceso.textContent =
    proceso.textContent + "9" + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
};
cero.onclick = function (e) {
  resultado.textContent = resultado.textContent + cero.textContent;
  proceso.textContent =
    proceso.textContent + "0" + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
};
dot.onclick = function (e) {
  resultado.textContent = resultado.textContent + dot.textContent;
  proceso.textContent = proceso.textContent + ".";
};
reset.onclick = function (e) {
  resetear();
};
suma.onclick = function (e) {
  operador.textContent =
    operador.textContent + suma.textContent + "\xa0\xa0\xa0\xa0\xa0\xa0";
  operandoa = resultado.textContent;
  operacion = "+";
  limpiar();
};
resta.onclick = function (e) {
  operador.textContent =
    operador.textContent + resta.textContent + "\xa0\xa0\xa0\xa0\xa0";
  operandoa = resultado.textContent;
  operacion = "-";
  limpiar();
};
multiplicacion.onclick = function (e) {
  operador.textContent =
    operador.textContent + multiplicacion.textContent + "\xa0\xa0\xa0\xa0\xa0";
  operandoa = resultado.textContent;
  operacion = "*";
  limpiar();
};
division.onclick = function (e) {
  operador.textContent =
    operador.textContent + division.textContent + "\xa0\xa0\xa0\xa0\xa0";
  operandoa = resultado.textContent;
  operacion = "/";
  limpiar();
};
igual.onclick = function (e) {
  operandob = resultado.textContent;
  resolver();
};

function limpiar() {
  resultado.textContent = "";
}
function resetear() {
  resultado.textContent = "";
  proceso.textContent = "";
  operador.textContent = "";
  operandoa = 0;
  operandob = 0;
  operacion = "";
}

function resolver() {
  var res = 0;
  switch (operacion) {
    case "+":
      res = parseFloat(operandoa) + parseFloat(operandob);
      break;
    case "-":
      res = parseFloat(operandoa) - parseFloat(operandob);
      break;
    case "*":
      res = parseFloat(operandoa) * parseFloat(operandob);
      break;
    case "/":
      res = parseFloat(operandoa) / parseFloat(operandob);
      break;
  }
  resetear();
  resultado.textContent = res;
}

on.onclick = function on(e) {
  var uno = document.getElementById("uno");
  var dos = document.getElementById("dos");
  var tres = document.getElementById("tres");
  var cuatro = document.getElementById("cuatro");
  var cinco = document.getElementById("cinco");
  var seis = document.getElementById("seis");
  var siete = document.getElementById("siete");
  var ocho = document.getElementById("ocho");
  var nueve = document.getElementById("nueve");
  var cero = document.getElementById("cero");
  var division = document.getElementById("division");
  var multiplicacion = document.getElementById("multiplicacion");
  var suma = document.getElementById("suma");
  var resta = document.getElementById("resta");
  var iguall = document.getElementById("igual");
  var reset = document.getElementById("reset");
  var off = document.getElementById("off");
  var dot = document.getElementById("dot");
  if (cero.textContent == "") {
    cero.textContent = "0";
  } else {
    cero.textContent = "";
  }
  if (uno.textContent == "") {
    uno.textContent = "1";
  } else {
    uno.textContent = "";
  }
  if (dos.textContent == "") {
    dos.textContent = "2";
  } else {
    dos.textContent = "";
  }
  if (tres.textContent == "") {
    tres.textContent = "3";
  } else {
    tres.textContent = "";
  }
  if (cuatro.textContent == "") {
    cuatro.textContent = "4";
  } else {
    cuatro.textContent = "";
  }
  if (cinco.textContent == "") {
    cinco.textContent = "5";
  } else {
    cinco.textContent = "";
  }
  if (seis.textContent == "") {
    seis.textContent = "6";
  } else {
    seis.textContent = "";
  }
  if (siete.textContent == "") {
    siete.textContent = "7";
  } else {
    siete.textContent = "";
  }
  if (ocho.textContent == "") {
    ocho.textContent = "8";
  } else {
    ocho.textContent = "";
  }
  if (nueve.textContent == "") {
    nueve.textContent = "9";
  } else {
    nueve.textContent = "";
  }
  if (division.textContent == "") {
    division.textContent = "÷";
  } else {
    division.textContent = "";
  }
  if (multiplicacion.textContent == "") {
    multiplicacion.textContent = "×";
  } else {
    multiplicacion.textContent = "";
  }
  if (suma.textContent == "") {
    suma.textContent = "+";
  } else {
    suma.textContent = "";
  }
  if (resta.textContent == "") {
    resta.textContent = "-";
  } else {
    resta.textContent = "";
  }
  if (igual.textContent == "") {
    igual.textContent = "=";
  } else {
    igual.textContent = "";
  }
  if (dot.textContent == "") {
    dot.textContent = ".";
  } else {
    dot.textContent = "";
  }
  if (off.textContent == "") {
    off.textContent = "Off";
  } else {
    off.textContent = "";
  }
  if (reset.textContent == "") {
    reset.textContent = "AC";
  } else {
    reset.textContent = "";
  }
  resultado.textContent = "";
  proceso.textContent = "";
  operador.textContent = "";
};

off.onclick = function off() {
  var uno = document.getElementById("uno");
  var dos = document.getElementById("dos");
  var tres = document.getElementById("tres");
  var cuatro = document.getElementById("cuatro");
  var cinco = document.getElementById("cinco");
  var seis = document.getElementById("seis");
  var siete = document.getElementById("siete");
  var ocho = document.getElementById("ocho");
  var nueve = document.getElementById("nueve");
  var cero = document.getElementById("cero");
  var division = document.getElementById("division");
  var multiplicacion = document.getElementById("multiplicacion");
  var suma = document.getElementById("suma");
  var resta = document.getElementById("resta");
  var igual = document.getElementById("igual");
  var reset = document.getElementById("reset");
  var off = document.getElementById("off");
  var dot = document.getElementById("dot");
  if (cero.textContent == "0") {
    cero.textContent = "";
  } else {
    cero.textContent = "0";
  }
  if (uno.textContent == "1") {
    uno.textContent = "";
  } else {
    uno.textContent = "1";
  }
  if (dos.textContent == "2") {
    dos.textContent = "";
  } else {
    dos.textContent = "2";
  }
  if (tres.textContent == "3") {
    tres.textContent = "";
  } else {
    tres.textContent = "3";
  }
  if (cuatro.textContent == "4") {
    cuatro.textContent = "";
  } else {
    cuatro.textContent = "4";
  }
  if (cinco.textContent == "5") {
    cinco.textContent = "";
  } else {
    cinco.textContent = "5";
  }
  if (seis.textContent == "6") {
    seis.textContent = "";
  } else {
    seis.textContent = "6";
  }
  if (siete.textContent == "7") {
    siete.textContent = "";
  } else {
    siete.textContent = "7";
  }
  if (ocho.textContent == "8") {
    ocho.textContent = "";
  } else {
    ocho.textContent = "8";
  }
  if (nueve.textContent == "9") {
    nueve.textContent = "";
  } else {
    nueve.textContent = "9";
  }
  if (division.textContent == "÷") {
    division.textContent = "";
  } else {
    division.textContent = "÷";
  }
  if (multiplicacion.textContent == "×") {
    multiplicacion.textContent = "";
  } else {
    multiplicacion.textContent = "×";
  }
  if (suma.textContent == "+") {
    suma.textContent = "";
  } else {
    suma.textContent = "+";
  }
  if (resta.textContent == "-") {
    resta.textContent = "";
  } else {
    resta.textContent = "-";
  }
  if (igual.textContent == "=") {
    igual.textContent = "";
  } else {
    igual.textContent = "=";
  }
  if (dot.textContent == ".") {
    dot.textContent = "";
  } else {
    dot.textContent = ".";
  }
  if (off.textContent == "Off") {
    off.textContent = "";
  } else {
    off.textContent = "Off";
  }
  if (reset.textContent == "AC") {
    reset.textContent = "";
  } else {
    reset.textContent = "AC";
  }
  resultado.textContent = "";
  proceso.textContent = "";
  operador.textContent = "";
};
