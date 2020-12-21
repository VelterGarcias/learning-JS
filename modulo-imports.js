

// Para poder usar assim é necessário colocar "type": "module" no package.json
// import calculos from './export.js';

// const { calcular, mostrar } = calculos;

import { calcular, mostrar } from './export.js';


console.log(calcular(10,25,'*'))
console.log(mostrar)
console.log(mostrar())
console.log(mostrar("Agora coloquei uma msg"))