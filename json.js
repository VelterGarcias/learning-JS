console.log("=============== Classe =======================");
class Pessoa {
  constructor(nomePessoa, idadePessoa) {
    this.nome = nomePessoa;
    this.idade = idadePessoa;
  }
  get idade() {
    return `A idade da pessoa é ${this.valorIdade}`;
  }
  set idade(valor) {
    this.valorIdade = Number(valor);
  }
}

const joão = new Pessoa("João", 25);

console.log(joão);
console.log(joão.nome);
console.log(joão.idade);

console.log("================ JSON ======================");

const velter = {
  nome: "Velter Garcias",
  idade: 30,
};

console.log(velter);
console.log(velter.nome);
console.log(velter.idade);

console.log("================ JSON Stringify ======================");

const pessoa = {
  primeiroNome: "Velter",
  ultimoNome: "Garcias",
  linguagensfavoritas: ["PHP, JS, Phyton"],
  idade: 30,
  mostrarNomeCompleto: function () {
    return `${this.primeiroNome} ${this.ultimoNome}`;
  },
};

console.log(pessoa);
const stringPessoa = JSON.stringify(pessoa);
console.log(stringPessoa);
console.log("===== percebe-se que os métodos(funçoes) são perdidos =====");
console.log(pessoa.idade);
console.log(pessoa.mostrarNomeCompleto());

console.log("================ JSON Parse ======================");
console.log(stringPessoa);
console.log(JSON.parse(stringPessoa));

console.log("================ Object assign ======================");
const pessoa2 = {
  primeiroNome: "VELTER",
  email: "velter@gmail.com",
  senha: "1235684653",
};

const uniao = Object.assign(pessoa, pessoa2);
console.log(uniao);

console.log(
  "================ Object keys [maneira mais nova] ======================"
);
console.log(Object.keys(uniao));
// Com o keys, podemos fazer um "map" de um objeto
Object.keys(uniao).forEach((chave) => {
  console.log(uniao[chave]); // usamos entre colchetes, pq se não ele procuraria uma chave "chave" kkk
});

console.log(
  "================ for para percorrer objetos [maneira mais antiga] ======================"
);
for (let chave in uniao) {
  console.log(uniao[chave]);
}

console.log(
  "================ Spread Operator em Objetos (igual ao assign) ======================"
);
console.log({ ...pessoa, ...pessoa2 });
