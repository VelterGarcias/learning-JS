const valores1 = new Array("Javascript", 50, false);
const valores2 = ["PHP", "Treinamentos", new Date()];

console.log("========= FOR =========");

for (let index = 0; index < valores1.length; index++) {
  console.log(valores1[index]);
}

console.log("=========== FOR let =============");

for (let valor of valores1) {
  console.log(valor);
}

// SORT - Alfabética
console.log("=========== SORT - Alfabética =============");
const nomes = ["Velter", "Karol", "Adelina", "Leandro", "Jorge"];

console.log(nomes);
console.log(nomes.sort());
console.log(nomes.sort().reverse());

// SORT - Numérico (Precisa usar uma função)
console.log("============ SORT - Numérico ===============");
const rank = [550, 72, 850, 600, 145, 1000];

console.log(rank);
console.log(rank.sort().reverse());
rank.sort((a, b) => {
  console.log(a, b);
  return b - a;
});
console.log(rank);

// SPlit
console.log("=========== SPLIT =================");
let msg = "Boas vindas ao Hcode Lab";

console.log(msg.split(" "));
console.log(msg.split(""));
console.log(msg.split("").reverse().join(""));

// POP
console.log("============ POP ================");
console.log(nomes);
const removido = nomes.pop();
console.log(nomes);
console.log(removido);

// PUSH
console.log("=============  PUSH  ===============");
console.log(nomes);
let add = nomes.push("Augusto");
console.log(nomes);
console.log(add);
console.log(nomes[add - 1]);

// shift
console.log("============ shift ================");
console.log(nomes);
const removido2 = nomes.shift();
console.log(nomes);
console.log(removido2);

// unshift
console.log("=============  unshift  ===============");
console.log(nomes);
let add2 = nomes.unshift("Laiza");
console.log(nomes);
console.log(add2);
console.log(nomes[0]);

// SLICE
console.log("=============  SLICE  ===============");
console.log(nomes.slice(1, 3));
console.log(nomes);

// SPLICE
console.log("=============  SPLICE  ===============");
console.log(nomes);
console.log(nomes.splice(1, 3), "removendo");
console.log(nomes);
console.log(nomes.splice(1, 0, "Mateus"), "adicionando");
console.log(nomes);
console.log(nomes.splice(1, 0, "Paula", "Hildon"), "adicionando vários");
console.log(nomes);

// filter
console.log("=============  filter  ===============");
console.log(nomes);
const filterNomes = nomes.filter((valor, indice) => {
  console.log(valor, indice);
  return valor.length > 5;
});
console.log(filterNomes);

// map
console.log("=============  map  ===============");
console.log(nomes);
const newNomes = nomes.map((valor, indice) => {
  console.log(valor, indice);
  return `Nome: ${valor}`;
});
console.log(newNomes);

// forEach
console.log("=============  forEach  ===============");
console.log(nomes);
nomes.forEach((valor, indice) => {
  console.log(valor, indice);
  nomes[indice] = `${valor} é um nome`;
});
console.log(nomes);

// reduce
console.log("=============  reduce  ===============");
const notas = [8, 9, 4, 9, 5, 6, 7, 3, 6, 5];
const notasTotal = notas.reduce((total, notaAtual, i) => {
//   console.log(total, notaAtual, i);
  return total + notaAtual;
}, 0);
console.log(notasTotal);
console.log(notasTotal / notas.length);
console.log(Math.ceil(notasTotal / notas.length), "arredondado pra cima");
console.log(Math.round(notasTotal / notas.length), "arredondado normal");
