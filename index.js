let a = 1;

let b = 2;

function calcular(numero1, numero2, operador) {
  return eval(`${numero1} ${operador} ${numero2}`);
}

console.log(calcular(2, 5, "*"));
console.log(calcular(20, 5, "/"));
console.log(calcular(2, 5, "+"));
console.log(calcular(2, 5, "-"));
