console.log("================ Tipos de funções ======================");
// Declaração de função - sofre hoisting
function darBoasVindas(nome, evento = "Hcode Lab") {
  console.log(`Seja bem-vindo(a) ${nome} ao ${evento}`);
}

darBoasVindas("Velter");
darBoasVindas("Karol", "Developer JS");

// Expressão de função
const darAdeus = function () {
  console.log("Até a próxima");
};

darAdeus();

// Arrow function
const retornar = () => {
  console.log("Você voltou...");
};

retornar();

// Auto chamar uma função anônima (apenas uma vez)
(function () {
  console.log("Essa veio sem ser chamada...");
})();

console.log("================ Retorno de funções ======================");

const calcularIdade = function (anoNascimento, callback = ()=>{}) {
  setTimeout(callback, 3000);
  return `Você tem ${new Date().getFullYear() - anoNascimento} anos hoje.`;
};

console.log(calcularIdade(1990));


console.log(
  calcularIdade(1962, function () {
    console.log("Essa função foi chamada depois de um tempo dentro de outra função");
  })
);
