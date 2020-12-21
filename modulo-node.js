// const Objeto = require('./index');

// console.log(Objeto.calcular(10,25,'*'))

// console.log(Objeto.somar(5, 200))
// console.log(Objeto.a)
// console.log(Objeto.b)
// console.log(Objeto.mostrar)
// console.log(Objeto.mostrar())
// console.log(Objeto.mostrar("Agora coloquei uma msg"))


const { calcular, mostrar } = require('./index');

console.log(calcular(10,25,'*'))
console.log(mostrar)
console.log(mostrar())
console.log(mostrar("Agora coloquei uma msg"))