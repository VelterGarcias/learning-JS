let a = "teste";

let b = 2;

const c = "Não foi declarada nenhuma mensagem"

function calcular(numero1, numero2, operador) {
  return eval(`${numero1} ${operador} ${numero2}`);
}

function somar(numero1, numero2) {
  return eval(`${numero1} + ${numero2}`);
}

function mostrar(valor = c) {
  return `${valor}`;
}

console.log(calcular(2, 5, "*"));
console.log(calcular(20, 5, "/"));
console.log(calcular(2, 5, "+"));
console.log(calcular(2, 5, "-"));

module.exports = {
  calcular,
  somar,
  a,
  b,
  mostrar
};