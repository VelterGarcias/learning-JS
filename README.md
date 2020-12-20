# Aprendendo Javascript

## Seção 01 - Lógica de programação
Algorítimo: Definir uma série de passos para alcançar um objetivo.
Pseudocódigo: código que não é código.
Teste de Mesa: testar cada parte do código, como debugger.
Tipos de programa: Compilado, Interpretado, PseudoCompilado e JIT (Just In Time - Compilado na hora que precisa)
Variáveis: espaço reservado na memória para armazenar uma informação.
Tipos de Dados: inteiros, decimais, strings, boolean, classe
Operadores: atribuir, comparar, fazer contas, conversão para binários
Variável Indexada, Vetor ou Array: começa em 0.
Vetor de Vetores ou Matriz
IF: espera sempre uma condição verdadeira para executar o primeiro comando
Switch: em casos específicos (lembrar de usar uma execução padrão para que o código não quebre)
while e doWhile: repetição enquanto
for: para um determinado número de vezes
for Each: para cada item de um array
função: reaproveitar uma parte do nosso código. é possivel encadear funções.
- Orientação a Objetos: cria uma classe onde você vai descrever como vai ser o seu objeto. Cada objeto é uma instancia da classe.
.this e .self (alterar só a instancia ou toda a classe e suas instancias)
Atributos e Métodos = variáveis e funções
encapsulamento: public, private e protected
Herança
Interfaces: regras que a classe deve atender para ser criada
Acesso: variável.método ou variável.atributo


## Seção 02 - Começando com JS
caseSensitive = camelCase
classes = PascalCase


## Seção 03 - Começando com JS
não podemos criar variáveis com números na primeira posição
Hoisting = iça a variável em relação a declaração, não em relação a inicialização
declaração: 
``` js
var nome;
```
inicialização:
``` js
nome = velter;
```
let: não sofre Hoisting e só funciona no seu escopo
'use strict': sempre na primeira linha. Ignora o que foi mantido na linguagem para funcionar os recursos antigos. Fica mais confiável pq todos os recursos novos funcionam muito bem.

## Seção 03 - Começando com JS
números: Number(20), new Number(10), 20, +'19', parseFloat e parseInt
Precedencia de operação - [Tabela](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
Incrementos: ++i = incrementa antes e soma // i++ = soma e depois incrementa.


parei na 39