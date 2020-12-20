const valor = 100;

if (valor === "100") {
  console.log("entrou no If");
} else if (valor == "100") {
  console.log("entrou no ELSE If");
} else if (valor < 200) {
  console.log("entrou no valor menor que 200");
} else {
  console.log("entrou no ELSE");
}

// operador ternário
const resultado = valor < 200 ? "menor" : "maior";

console.log("resultado", resultado);
