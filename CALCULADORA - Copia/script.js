const calculadora = document.querySelector('.calculadora');
const btnDark = document.querySelector('.btn--dark');


// FUNÇÃO BOTÃO DARK - LIGHT 

btnDark.addEventListener('click', function(){
    if(calculadora.classList.contains('dark')){
        calculadora.classList.remove('dark');
        this.classList.remove('btn--light');
        document.querySelector('body').style.background = '#dde1e7';
        document.querySelector('.info').style.color = '#000';
        document.querySelector('.rodape').style.color = '#000';
    } else {
        calculadora.classList.add('dark');
        this.classList.add('btn--light');
        document.querySelector('body').style.background = '#272727';
        document.querySelector('.info').style.color = '#fff';
        document.querySelector('.rodape').style.color = '#fff';
        }
    
});
  
// RAIZ QUADRADA 

function raizQuadrada() { 

const number = document.querySelector('.number').value;

  let raiz = Math.sqrt(number)

  document.calc.valor.value = raiz;
  }

// EXPONENCIAÇÃO 

function exponenciacao(){

const number = document.querySelector('.number').value;
  
  let valores = number.split(' ');
  let base = parseFloat(valores[0]);
  let expoente = parseFloat(valores[1]);
  let resultado = Math.pow(base, expoente);
  document.calc.valor.value = resultado;
}
  
// NÚMERO PAR - IMPAR 

function parImpar(){

const number = document.querySelector('.number').value;

    if (number % 2 === 0) {
      document.calc.valor.value = "Par";
    } else {
      document.calc.valor.value = "Ímpar";
    }
}

// NÚMERO PRIMO

function numberPrimo(){

const number = document.querySelector('.number').value;

    let divisores = 0;
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        divisores++;
      }
    }
    if (divisores === 2) {
      document.calc.valor.value = "Primo";
    } else {
      document.calc.valor.value = "Não é primo";
    }
  }

// FATORIAL

function fatorial() {

const number = document.querySelector('.number').value;

    let calcular = 1;

    for (let i = 1; i <= number; i++) {
      calcular *= i;
    }
    
    document.calc.valor.value = calcular;
  }

  // FUNÇÃO DE SOMAR

  function soma() {
    document.calc.valor.value +='+'
  }

  // FUNÇÃO SUBTRAIR

  function subtracao() {
    document.calc.valor.value +='-'
  }

  // FUNÇÃO MULTIPLICAÇÃO

  function multiplicacao() {
    document.calc.valor.value +='*'
  }
  
  // FAZ A DIVISÃO DO NÚMERO & VERIFICA SE O NÚMERO DIVISOR É 0
  
  function divisao() {

    const number = document.querySelector('.number').value;
    

    if (number.value == "/0") {
      console.log("Não é possível dividir por zero!");
      return;
    } else {
      document.calc.valor.value +='/'
    }
  }

  // EXPORTS 

  module.exports = { soma };
  module.exports = { subtracao };
  module.exports = { multiplicacao };
  module.exports = { divisao };
  module.exports = { fatorial };
  module.exports = { numberPrimo };
  module.exports = { parImpar };
  module.exports = { exponenciacao };
  module.exports = { raizQuadrada };