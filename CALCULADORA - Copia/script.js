// OPERAÇÕES BÁSICAS

function somar() {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  document.getElementById("resultado").value = num1 + num2;
}

function subtracao() {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  document.getElementById("resultado").value = num1 - num2;
}

function multiplicacao() {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  document.getElementById("resultado").value = num1 * num2;
}

function divisao() {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);

  if (num2 == 0) {
      document.getElementById("resultado").value = "Error"
  }
  else {
      document.getElementById("resultado").value = num1 / num2;
  }
}

// EXPONENCIAL 

function exponenciacao() {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);

  if (isNaN(num2)) {
      document.getElementById("resultado").value = "preencha o 2° número";
  }
  else {
      document.getElementById("resultado").value = Math.pow(num1, num2);
  }
}

// RAIZ 

function raizQuadrada() {
  const num1 = parseInt(document.getElementById("num1").value);
  document.getElementById("resultado").value = Math.sqrt(num1);
}

// FATORIAL

function fatorial() {
  const num1 = parseInt(document.getElementById("num1").value);
  let resultado = 1;
  for (let i = 1; i <= num1; i++) {
      resultado *= i;
  }
  document.getElementById("resultado").value = resultado;
}

// NÚMERO PAR - IMPAR 

function parImpar() {

  const num1 = parseInt(document.getElementById("num1").value);

  if (num1 % 2 === 0) {
      document.getElementById("resultado").value = "Par";
  } else {
      document.getElementById("resultado").value = "Ímpar";
  }
}

// NÚMERO PRIMO

function numberPrimo() {

  const num1 = parseInt(document.getElementById("num1").value);

  let divisores = 0;
  for (let i = 1; i <= num1; i++) {
      if (num1 % i === 0) {
          divisores++;
      }
  }
  if (divisores === 2) {
      document.getElementById("resultado").value = "Primo";
  } else {
      document.getElementById("resultado").value = "Não é primo";
  }
}

EXPORTS

module.exports = { somar };
module.exports = { subtracao };
module.exports = { multiplicacao };
module.exports = { divisao };
module.exports = { fatorial };
module.exports = { numberPrimo };
module.exports = { parImpar };
module.exports = { exponenciacao };
module.exports = { raizQuadrada };
