//SOMA

const { soma } = require("./script.js");
var assert = require('assert');

assert(soma(9,7)==16,"9+7 é igual a 16");
assert(soma(8,0)==8,"8+0 é igual a 8");
assert(soma(400,600)==1000,"400+600 é igual a 1000");
assert(soma(0,0)==0,"0+0 é igual a 0");
assert(soma(0,(-3))==-3,"0+(-3) é igual a -3");
assert(soma(50,25,(-30))==45,"50+25+(-30) é igual a 45");
assert(soma(100,20,80)==200,"100+20+80 é igual a 200");
assert(soma(1000,2500)==3500,"1000+2500 é igual a 3500");
assert(soma((-30),30)==0,"(-30)+30 é igual a 0");

// SUBTRAÇÃO

const { subtracao } = require("./script.js");
var assert = require('assert');

assert(subtracao(50,5)==45,"50-5 é igual a 45");
assert(subtracao(5,50)==-45,"5-50 é igual a -45");
assert(subtracao(30,20,40)==-30,"30-20-40 é igual a -30");
assert(subtracao((-30),40)==-70,"(-30)-40 é igual a -70");
assert(subtracao(90,90,2)==-2,"90-90-2 é igual a -2");
assert(subtracao(30,10)==20,"30-10 é igual a 20");
assert(subtracao(45,40)==5,"45-40 é igual a 5");
assert(subtracao((-60),20)==-80,"(-60)-20 é igual a -80");
assert(subtracao((-150),30,10)==-190,"(-150)-30-10 é igual a -190");

// MULTIPLICAÇÃO

const { multiplicacao } = require("./script.js");
var assert = require('assert');

assert(multiplicacao(20,40)==800,"20*40 é igual a 800");
assert(multiplicacao(2,2,(-2))==-8,"2*2*(-2) é igual a -8");
assert(multiplicacao(2,150,(-1))==-300,"2*150*(-1) é igual a -300");
assert(multiplicacao(1500,0)==0,"1500*0 é igual a 0");
assert(multiplicacao(600,3)==1800,"600*3 é igual a 1800");
assert(multiplicacao(90,(-3))==-270,"90*(-3) é igual a -270");
assert(multiplicacao(25,1,30)==750,"25*1*30 é igual a 750");
assert(multiplicacao(0,40,(-1))==0,"0*40*(-1) é igual a 0");
assert(multiplicacao(25,(-25))==-625,"25*(-25) é igual a -625");

// DIVISÃO 

const { divisao } = require("./script.js");
var assert = require('assert');

assert(divisao(80,8)==10,"80/8 é igual a 10");
assert(divisao(40,22)==1.8181818181818181,"40/22 é igual a 1.8181818181818181");
assert(divisao(100,5)==20,"100/5 é igual a 20");
assert(divisao(500,100)==5,"500/100 é igual a 5");
assert(divisao(1000,500)==2,"1000/500 é igual a 2");
assert(divisao(0,5)==0,"0/5 é igual a 0");
assert(divisao(60,3)==20,"60/3 é igual a 20");
assert(divisao(90,4)==22.50,"90/4 é igual a 22.50");
assert(divisao(81,3)==27,"81/3 é igual a 27");

// // RAIZ QUADRADA 

// const { raizQuadrada } = require("./script.js");
// var assert = require('assert');

// // EXPONENCIAÇÃO 

// const { exponenciacao } = require("./script.js");
// var assert = require('assert');

// // NÚMERO PAR - IMPAR 

// const { parImpar } = require("./script.js");
// var assert = require('assert');

// // NÚMERO PRIMO

// const { numberPrimo } = require("./script.js");
// var assert = require('assert');

// // FATORIAL

// const { fatorial } = require("./script.js");
// var assert = require('assert');