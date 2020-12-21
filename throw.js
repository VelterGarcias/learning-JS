function Excecao(mensagem) {
  this.message = mensagem;
  this.name = "Excecao";
}
function NaoNumeroExecption(valor) {
  this.message = "É necessário informar um número";
  this.name = "NaoNumeroExecption";
}

function dividir(a, b) {
  if (typeof a !== "number") {
    throw new NaoNumeroExecption();
  } else if (typeof b !== "number") {
    throw new NaoNumeroExecption();
  } else if (b === 0) {
    throw new Excecao("O número para divisão não pode ser zero");
  }

  return a / b;
}

try {
  console.log(dividir(10, 2));
} catch (erro) {
  if (erro instanceof NaoNumeroExecption) {
    console.error(erro.message);
  } else if (erro instanceof Excecao) {
    console.error(erro.message);
  }
}
try {
  console.log(dividir(10, 0));
} catch (erro) {
  if (erro instanceof NaoNumeroExecption) {
    console.error(erro.message);
  } else if (erro instanceof Excecao) {
    console.error(erro.message);
  }
} finally {
    console.log("esse é executado sempre, caso dê erro ou não...")
}
try {
  console.log(dividir(10, "sdfsdf"));
} catch (erro) {
  if (erro instanceof NaoNumeroExecption) {
    console.error(erro.message);
  } else if (erro instanceof Excecao) {
    console.error(erro.message);
  }
}
try {
  console.log(dividir("sdfsdf", 5));
} catch (erro) {
  if (erro instanceof NaoNumeroExecption) {
    console.error(erro.message);
  } else if (erro instanceof Excecao) {
    console.error(erro.message);
  }
}
