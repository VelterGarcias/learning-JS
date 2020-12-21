# Aprendendo Javascript

## Seção 01 - Lógica de programação
- Algorítimo: Definir uma série de passos para alcançar um objetivo.
- Pseudocódigo: código que não é código.
- Teste de Mesa: testar cada parte do código, como debugger.
- Tipos de programa: Compilado, Interpretado, PseudoCompilado e JIT (Just In Time - Compilado na hora que - precisa)
- Variáveis: espaço reservado na memória para armazenar uma informação.
- Tipos de Dados: inteiros, decimais, strings, boolean, classe
- Operadores: atribuir, comparar, fazer contas, conversão para binários
- Variável Indexada, Vetor ou Array: começa em 0.
- Vetor de Vetores ou Matriz
- IF: espera sempre uma condição verdadeira para executar o primeiro comando
- Switch: em casos específicos (lembrar de usar uma execução padrão para que o código não quebre)
- while e doWhile: repetição enquanto
- for: para um determinado número de vezes
- for Each: para cada item de um array
- função: reaproveitar uma parte do nosso código. é possivel encadear funções.
    - Orientação a Objetos: cria uma classe onde você vai descrever como vai ser o seu objeto. Cada objeto é - uma instancia da classe.
- .this e .self (alterar só a instancia ou toda a classe e suas instancias)
- Atributos e Métodos = variáveis e funções
- encapsulamento: public, private e protected
- Herança
- Interfaces: regras que a classe deve atender para ser criada
- Acesso: variável.método ou variável.atributo


## Seção 02 - Começando com JS
- caseSensitive = camelCase
- classes = PascalCase


## Seção 03 - Começando com JS
- não podemos criar variáveis com números na primeira posição
- Hoisting = iça a variável em relação a declaração, não em relação a inicialização
- declaração: 
``` js
var nome;
```
inicialização:
``` js
nome = velter;
```
- let: não sofre Hoisting e só funciona no seu escopo
- 'use strict': sempre na primeira linha. Ignora o que foi mantido na linguagem para funcionar os recursos antigos. Fica mais confiável pq todos os recursos novos funcionam muito bem.

## Seção 04 - Tipos dados e operadores
- números: Number(20), new Number(10), 20, +'19', parseFloat e parseInt (padrão de decimal é o ponto. e não a virgula,)
- Precedencia de operação - [Tabela](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
- Incrementos: ++i = incrementa antes e soma // i++ = soma e depois incrementa.
- Strings: como criar e lidar com elas
- Boolean: "", 0, null e undefined, false
- null e undefined: tem o valor como nulo (sem valor) / existe um espaço na memória mas não foi definido um valor pra ele.
- instanceof: pra saber se algo é uma instancia de um Objeto.

## Seção 05 - Fluxo
- if: se encontrar algo que seja verdade ele para a execução e não vai verificar o próximo.
- operador ternário
- switch: quando tem casos
- for
- while

## Seção 05 - Arrays
- for e for (let valor of array)
- Arrays:
- sort: ordena de maneira alfabética, se precisar numérica tem que usar uma function
- reverse: coloca na ordem reversa o array
- split: corta uma string em um determinado local e separa ela em indices de um array
- join: junta o array formando uma string
- pop: remove o último
- push: add no final
- shift: remove o primeiro
- unshift: add no começo
- slice: remove de um array um ou mais itens, entre posições específicas
- splice: remove, add ou "substitui" um ou mais itens a partir de uma posição específica
- map: percorre os itens de um array, sem modificar o array original
- forEach: percorre os itens de um array, mas modifica o array original
- filter: filtra os itens de um array de acordo com uma regra que vc cria, sem modificar o array original (retornar verdadeiro = continua, e falso = removido do array)
- reduce: de todos os valores do array ele vai gerar um resultado final
- spread Operator
- Atribuição por desestruturação

## Seção 05 - Objetos
- json: js object notation
- Criando um objeto com classe e constructor e somente com JSON
- JSON Stringify: transforma um objeto em string, muito útil para enviar para o servidor (percebe-se que os métodos(funçoes) são perdidos)
- JSON Parse: transforma de volta em objeto
- Object assign: serve para unir dois objetos (sempre preserva o objeto da direita caso tenha conflito)
- Object keys: retorna um array com as chaves do objeto
- for (let chave in Object): percorrer as chaves de um objeto (forma mais antiga) 

## Seção 06 - Funções
- funções: não adianta criar, temos que chamar elas
- Declaração de função (hoisting), Expressão de função, Arrow function
- parâmetros ou argumentos: podemos usar argumentos padrões, caso não seja especificado nada.
- retorno: para a execução da função mesmo que tenha outras ações abaixo.
- nem o var sofre hoisting para fora da função. Ele vai apenas para o começo da função.
- global ou window: faz a variável ficar visível para todos (node, navegador)
- função anônima
- arrow functions

## Seção 07 - DOM
- console.dir(): para visualizar os elementos não tags, mas como objetos.
- querySelector: Com o querySelector posso usar uma sequencia deles para pegar um elemento dentro de outro.
- location: hash, search, hostname, port
- formulário: maneira mais manual de pegar os dados e depois com new FormData()
- ReadFile: como ler arquivos (imagens) e mostrar elas no navegador como um preview

parei na 77