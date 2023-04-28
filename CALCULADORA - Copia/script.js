// OPERAÇÕES BÁSICAS

function somar(a,b) {
  return a + b
}

function subtracao(a,b) {
  return a - b
}

function multiplicacao(a,b) {
  return a * b
}

function divisao(a,b) {

  if (b == 0) {
      return "Error"
  }
  else {
      return a / b;
  }
}

// EXPONENCIAL 

function exponenciacao(a,b) {
      return Math.pow(a, b);
}

// RAIZ 

function raizQuadrada(a) {
  return Math.sqrt(a);
}

// FATORIAL

function fatorial(a) {
  let resultado = 1;
  for (let i = 1; i <= a; i++) {
      resultado *= i;
  }
  return resultado;
}

// NÚMERO PAR - IMPAR 

function parImpar(a,b) {

  if (a % 2 === 0) {
     return "Par";
  } else {
      return "Ímpar";
  }
}

// NÚMERO PRIMO

function numberPrimo(a,b) {

  let divisores = 0;
  for (let i = 1; i <= a; i++) {
      if (a % i === 0) {
          divisores++;
      }
  }
  if (divisores === 2) {
      return "Primo";
  } else {
      return "Não é primo";
  }
}

// EXPORTS

module.exports = { 
  somar,
  subtracao,
  multiplicacao,
  divisao,
  fatorial,
  numberPrimo,
  parImpar,
  exponenciacao,
  raizQuadrada
};
